import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  themes = new Array<Theme>();

  constructor(private themeService: ThemeService) {
    this.getThemes();
   }

  ngOnInit(): void {
    this.getThemes();
  }

   getThemes() {
    this.themeService.getThemes().pipe().subscribe(
      response => this.handleSuccessfulResponse(response),);
      
  }
  
  handleSuccessfulResponse(response: Array<Theme>) {
    this.themes = response  as Theme[];
    console.log("type of themes " + typeof (this.themes));
    
  }


}
