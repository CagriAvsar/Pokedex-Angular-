import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent implements OnInit {

  about:boolean = true;
  baseStat:boolean = false;
  evolution:boolean = false;
  moves:boolean = false;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  showStats(stat:any) {
    if (stat === 'about') {
      this.baseStat= false;
      this.about = true;
      this.evolution = false;
      this.moves = false;
    }else if (stat === 'base') {
      this.baseStat= true;
      this.about = false;
      this.evolution = false;
      this.moves = false;
    }else if (stat === 'evolution') {
      this.baseStat= false;
      this.about = false;
      this.evolution = true;
      this.moves = false;
    }else if (stat === 'moves') {
      this.baseStat= false;
      this.about = false;
      this.evolution = false;
      this.moves = true;
    }
    
  }

}
