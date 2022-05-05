import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

countStart:number = 1;
countEnd:number = 17;
 

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
      // console.log('Pokemon is:', this.dataService.loadedPokemons);
    })
    }
  }

  loadMore() {
    this.countStart += 17;
    this.countEnd += 17;
    this.dataPokemons();
  }


// !!!!!!!!!!!!!!!!!!!

  // pokemonId(pokemonId:number) {
  //   if (pokemonId <= 9 ) {
  //     this.pokemonID = '00';
  //   }else if (pokemonId <= 99) {
  //     this.pokemonID = '0';
  //   }else if( pokemonId > 100) {
  //    pokemonId;
  //   }
  // }


}
