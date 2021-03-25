
import { Component, OnInit, Input, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Epic } from '../epic';
import { Base } from '../base';
import { DataService } from '../data.service';
import { Observable, from, combineLatest } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { EpicsService } from '../epics.service';
import { callWithSnackBar } from '../util';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Color } from '../color';

@Component({
  selector: 'app-epic-detail',
  templateUrl: './epic-detail.component.html',
  styleUrls: ['./epic-detail.component.css']
})
export class EpicDetailComponent extends Base implements OnInit {
  @ViewChild('issueInput') issueInput:ElementRef;

  issueControl:FormControl = new FormControl();

  filteredIssues:Observable<any>;

  epicIssues:Observable<any>;

  showInput:boolean = false;

  constructor(private cdRef:ChangeDetectorRef, private dataService:DataService, private issuesService:IssuesService, 
              private snackBar:MatSnackBar, private epicsService:EpicsService, private router:Router) {
  	super();
  }

  ngOnInit(): void {
    // load issues for drop down
    this.dataService.load(`projects/${this.epic.project.id}/issues`, 
                         [`projects/${this.epic.project.id}/issues`, `projects/${this.epic.project.id}/issues/*`]);
    let mappedDataValues:Observable<any> = this.dataService.values[`projects/${this.epic.project.id}/issues`].pipe(
      map(obj => (obj ? obj.issues.list : []))
    );
    let combined:Observable<any> = combineLatest(
      mappedDataValues,
      this.issueControl.valueChanges.pipe(startWith(''))
    );
    this.filteredIssues = combined.pipe(map(values => {
      let epicIssuesIds = (this.epic.issues?.map(v => v.id) || []);
      const filterValue = values[1].hasOwnProperty('title') ? values[1].title.toLowerCase() : values[1].toString().toLowerCase();
      return values[0].filter(option => {
        console.log("filter");
        return option.title.toLowerCase().includes(filterValue) && !epicIssuesIds.includes(option.id);
      });
    }));
  }

  @Input() set epic(value:Epic) {
    if (this._epic) {
      this.dataService.unload(`epics/${this._epic.id}/issues`, [`epics/${this._epic.id}/issues`, `epics/${this._epic.id}/issues/*`]);
    }
    this._epic = value;
    this.dataService.load(`epics/${this._epic.id}/issues`, [`epics/${this._epic.id}/issues`, `epics/${this._epic.id}/issues/*`]);
    this.epicIssues = this.dataService.values[`epics/${this._epic.id}/issues`];
  }
  get epic():Epic {
    return this._epic;
  }
  private _epic:Epic;


  ngOnDestroy() {
    this.dataService.unload(`projects/${this.epic.project.id}/issues`, 
                         [`projects/${this.epic.project.id}/issues`, `projects/${this.epic.project.id}/issues/*`]);
  }

  onOptionSelected(event) {
    let value = event.option.value;
    this.epic.issues.push(value);
    value.epic = this.epic;
    let toSave = { id: value.id, epic_id: this.epic.id};
    callWithSnackBar(this.snackBar, this.epicsService.addIssue(this.epic, value), ['Adding Issue...', 'Issue Added', 'Error Adding Issue']);
    this.issueInput.nativeElement.value = "";
  }


  issueLabel(option:any):string {
    return option ? option.title : '';
  }

  onIssueSelected(issue) {
    this.router.navigate(['/projects', issue.project.id, 'backlog', issue.id]);
  }

  textColor(color) {
    return Color.fontColor(color);
  }
}
