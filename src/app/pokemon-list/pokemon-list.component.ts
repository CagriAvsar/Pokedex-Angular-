import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

countStart:number = 1;
countEnd:number = 15;
showfull:boolean = false;

  constructor(public dataService: DataService) { 

    
  }

  ngOnInit(): void {
    this.dataPokemons();  
  }

  dataPokemons() {
    for (let i = this.countStart; i < this.countEnd; i++) {
      this.dataService.getPokemons(i)
    .then(async (response: any) => {
      let pokemon = await response.json();
      this.dataService.loadedPokemons.push(pokemon);
      console.log('Pokemon is:', this.dataService.loadedPokemons);
    })
    }
  }

  loadMore() {
    this.countStart += 15;
    this.countEnd += 15;
    this.dataPokemons();
  }

  showFullImg() {
    this.showfull = true;
  }

}
