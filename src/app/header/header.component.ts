import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search:string = '';
  

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }


  

  searchPokemon(val: any) {
    console.log("Search value: ", val);
    let filter = val;
    filter = filter.toLowerCase();
    if (filter.length > 0) {
      console.log("FILTER LENGTH > 0");
      this.dataService.activeFilter = false;
      this.dataService.activeFilter1 = true;
      console.log(filter);
      let filteredPokemon = this.dataService.loadedPokemons.filter((pokemon: { name: string; }) => pokemon.name.startsWith(filter));
      console.log('filter', filteredPokemon);
      this.dataService.pokemonFilter = filteredPokemon;
      console.log('pokemonFILTER', this.dataService.pokemonFilter);
    } else {
      this.dataService.activeFilter = true;
      this.dataService.activeFilter1 = false;
    }
  }
}
