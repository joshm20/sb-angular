import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';

@Component({
  selector: 'sb-create-project',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  constructor(private projectService:ProjectService) { }


}
