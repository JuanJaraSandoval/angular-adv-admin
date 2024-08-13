import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent implements OnInit {

  constructor( private setttingService: SettingsService){

  }

  ngOnInit(): void {

    this.setttingService.checkCurrentTheme()
  }


  changeTheme(theme: string){
    this.setttingService.changeTheme(theme)
  }



}
