import { Theme } from './symbols';


let black = '#000';
let white = '#fff';

let darkNavy = '#27374D';
let gray = '#B2B2B2';
let lightNavy = '#526D82';
let lightGray = '#9DB2BF';
let gray2 = '#798082';
let babyBlue = '#b5dde8';
let offwhiteBlue = '#DDE6ED';

let red = '#A4232B';
let orange = '#FFBD00';
let darkgreen = '#33A532';

export const nightModeTheme: Theme = {
  name: 'NightMode',
  properties: {
    '--background': lightNavy,
    '--on-background': white,

    '--header-background': darkNavy,
    '--on-header-background': white,

    '--footer-background': darkNavy,
    '--on-footer-background': white,

    '--default-icon-color': white,

    '--icon-button-background': white,
    '--on-icon-button-background': darkNavy,

    '--card-shadow': darkNavy,
    '--button-shadow': darkNavy,

    '--card-border': darkNavy,
    '--card-border-hover': white,
    '--button-border': darkNavy,

    '--link': babyBlue,
    '--link-active': white,
    '--link-hover': babyBlue,
    '--link-visited': babyBlue,

    '--background-hover': white,

    '--go-button-background': darkNavy,
    '--on-go-button-background': white,
    '--cancel-button-background': white,
    '--on-cancel-button-background': darkNavy,
    '--danger-button-background': red,
    '--on-danger-button-background': darkNavy,
    '--disabled-button-background': white,
    '--on-disabled-button-background': white,

    '--nav-item-selected-background': darkNavy,
    '--on-nav-item-selected-background': white,
    '--nav-item-hover-background': darkNavy,
    '--on-nav-item-hover-background': white,

    '--spinner': darkNavy,
    '--progress-bar-element': gray,
    '--progress-bar-fill': darkNavy,

    '--scrollbar-track': white,
    '--scrollbar': darkNavy,
    '--scrollbar-thumb': darkNavy,

    '--drag-placeholder-background': lightGray, // Transparent box that appears when reorganizing epics/issues
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