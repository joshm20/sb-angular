import { Theme } from './symbols';

let darkpurple = '#450084';
let purple = '#B599CE';
let lightpurple = '#DACCE6';

let darkgold ='#AD9C65';
let gold = '#CBB677';
let lightgold = '#F4EFE1';

let white = '#fff';
let slate = '#333333';
let darkgray = '#595959';
let gray = '#B2B2B2';
let lightgray = '#D6D6D6';
let black = '#000000';

let darkNavy = '#27374D';
let lightNavy = '#526D82';
let gray2 = '#798082';
let babyBlue = '#b5dde8';
let offwhiteBlue = '#DDE6ED';

let darkgreen = '#5F791C';
let green = '#ADCC23';
let lightgreen = '#DEEBA7';

let darkblue = '#3C738B';
let blue = '#5498B6';
let lightblue = '#D2EBF5';

let red = '#A4232B';
let brightred = '#FF0000';
let rubyred = '#E0115F';
let orange = '#FFBD00';
let yellow = '#e8eb34';
let pink = '#FF00FF';

export const testTheme: Theme = {
  name: 'test',
  fonts: "https://fonts.googleapis.com/css2?family=Lato&family=Yellowtail&display=swap",
  /*properties: {
    '--background': slate,
    '--on-background': orange,

    '--primary-dark': darkgreen,
    '--on-primary-dark': orange,
    '--primary': green,
    '--on-primary': red,
    '--primary-light': lightgreen,
    '--on-primary-light': red,

    '--secondary-dark': darkblue,
    '--on-secondary-dark': orange,
    '--secondary': blue,
    '--on-secondary': red,
    '--secondary-light': lightblue,
    '--on-secondary-light': red,

    '--accent-1-dark': darkgreen,
    '--on-accent-1-dark': orange,
    '--accent-1': green,
    '--on-accent-1': red,
    '--accent-1-light': lightgreen,
    '--on-accent-1-light': red,

    '--accent-2-dark': darkblue,
    '--on-accent-2-dark': white,
    '--accent-2': blue,
    '--on-accent-2': slate,
    '--accent-2-light': lightblue,
    '--on-accent-2-light': slate,

    '--surface': white,
    '--on-surface': slate,

    '--dark-gray': darkpurple,
    '--gray': purple,
    '--light-gray': lightpurple,

    '--error': red,
    '--on-error': white,
    '--okay': darkgreen,
    '--on-okay': slate,

    '--warning': orange,
    '--on-warning': white,

    '--banner-font': 'Yellowtail, monospace',
    '--text-font': 'Lato, sans-serif',
    '--menu-font': 'Lato, sans-serif',
    '--user-font': '"Roboto Mono", monospace'
  } */

  properties: {
    '--background': white,
    '--on-background': black,

    '--header-background': gray,
    '--on-header-background': white,

    '--footer-background': gray,
    '--on-footer-background': white,

    '--default-icon-color': orange,

    '--icon-button-background': pink,
    '--on-icon-button-background': brightred,

    '--card-shadow': lightblue,
    '--button-shadow': darkblue,

    '--card-border': red,
    '--card-border-hover': white,
    '--button-border': yellow,

    '--link': blue,
    '--link-active': blue,
    '--link-hover': blue,
    '--link-visited': blue,

    '--background-hover': white,

    '--go-button-background': lightgreen,
    '--on-go-button-background': green,
    '--cancel-button-background': darkgreen,
    '--on-cancel-button-background': lightgreen,
    '--danger-button-background': red,
    '--on-danger-button-background': green,
    '--disabled-button-background': darkgreen,
    '--on-disabled-button-background': lightgreen,

    '--nav-item-selected-background': red,
    '--on-nav-item-selected-background': brightred,
    '--nav-item-hover-background': rubyred,
    '--on-nav-item-hover-background': brightred,

    '--spinner': darkNavy,
    '--progress-bar-element': gray,
    '--progress-bar-fill': darkNavy,

    '--scrollbar-track': white,
    '--scrollbar': darkNavy,
    '--scrollbar-thumb': darkNavy,

    '--drag-placeholder-background': lightgray, // Transparent box that appears when reorganizing epics/issues
    '--drag-placeholder-border': white,

    '--arrow-background': red, //white,
    '--on-arrow-background':red, //darkNavy,

    '--selected-state-button-background': red, //darkNavy,
    '--on-selected-state-button-background': red,//white,
    '--unselected-state-button-icon': red,//darkNavy,
    '--issue-state-card-background': red,//lightNavy,

    '--list-selected': darkNavy,

    '--form-field-underline': white,
    '--form-field-caret': white,
    '--form-field-fill': orange,
    '--form-select-color': white,

    '--mat-select-value-text-color': darkNavy,

    '--error': red,
    '--on-error': white,
    '--okay': darkgreen,
    '--on-okay': white,

    '--warning': orange,
    '--on-warning': darkNavy,

    '--logo-font': 'Helvetica, sans-serif',
    '--banner-font': 'Helvetica, sans-serif',
    '--text-font': 'Consolas, Courier, monospace',
    '--menu-font': 'Helvetica, sans-serif',
    '--user-font': 'Consolas, Courier, monospace'
  }
};