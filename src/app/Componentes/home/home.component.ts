import { Component, OnInit } from '@angular/core';
import { CargarscripsService } from 'src/app/Services/cargarscrips/cargarscrips.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _CargarScripts: CargarscripsService) { 
    _CargarScripts.scripjQuery(["scripjQuery"]);
    _CargarScripts.scripBootstrap(["scripBootstrap"]);
    _CargarScripts.scripBootstrap1(["scripBootstrap1"]);
    _CargarScripts.scripPlugins(["scripPlugins"]);
    _CargarScripts.scripPlugins1(["scripPlugins1"]);
    _CargarScripts.scripPlugins2(["scripPlugins2"]);
    _CargarScripts.scripPlugins3(["scripPlugins3"]);
    _CargarScripts.scripPlugins4(["scripPlugins4"]);
    _CargarScripts.scripPlugins5(["scripPlugins5"]);
    _CargarScripts.scripPlugins6(["scripPlugins6"]);
    _CargarScripts.scripPlugins7(["scripPlugins7"]);
    _CargarScripts.scripPlugins8(["scripPlugins8"]);
    _CargarScripts.scripPlugins9(["scripPlugins9"]);
    _CargarScripts.scripGlobalInit(["scripPlugins10"]);
    _CargarScripts.scripGlobalInit(["scripGlobalInit"]);
  }

  ngOnInit() {
  }
}