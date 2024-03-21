import { Component } from '@angular/core';
import { CargarscripsService } from 'src/app/Services/cargarscrips/cargarscrips.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _CargarScripts: CargarscripsService) { 
    _CargarScripts.scriplogin(["scriplogin"]);
  }
}
