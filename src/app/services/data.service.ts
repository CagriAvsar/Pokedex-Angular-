import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  loadedPokemons: any = [];
  bgColors: any;
  showfull: boolean = false;
  pokemon:any = '';
  activeFilter:boolean = false;
  activeFilter1:boolean = false;
  classicMode:boolean = true;
  pokemonFilter:any = [];



  constructor() { }


  getPokemons(i: number) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
  }

  showDetails(pokemon: any) {
    this.pokemon = pokemon;
    document.body.style.overflow = "hidden";
    this.showfull = true;
  }

  closeDetails() {
    this.showfull = false;
    document.body.style.overflow = "inherit";
  }


  getBgColors(pokemon: any) {
    let type = pokemon.types[0].type.name;
    if (type == 'grass') {
      this.bgColors = '#94C9AD';
    } else if (type == 'fire') {
      this.bgColors = ' #F7786B';
    } else if (type == 'water') {
      this.bgColors = '#58ABF6';
    } else if (type == 'normal') {
      this.bgColors = '#A8A878';
    } else if (type == 'fighting') {
      this.bgColors = '#C03028';
    } else if (type == 'flying') {
      this.bgColors = '#A890F0';
    } else if (type == 'poison') {
      this.bgColors = '#A040A0';
    } else if (type == 'ground') {
      this.bgColors = '#E0C068';
    } else if (type == 'rock') {
      this.bgColors = '#B8A038';
    } else if (type == 'bug') {
      this.bgColors = '#A8B820';
    } else if (type == 'ghost') {
      this.bgColors = '#705898';
    } else if (type == 'steel') {
      this.bgColors = '#B8B8D0';
    } else if (type == 'fire') {
      this.bgColors = '#F08030';
    } else if (type == 'electric') {
      this.bgColors = '#F8D030';
    } else if (type == 'psychic') {
      this.bgColors = '#F85888';
    } else if (type == 'ice') {
      this.bgColors = '#98D8D8';
    } else if (type == 'dragon') {
      this.bgColors = '#7038F8';
    } else if (type == 'dark') {
      this.bgColors = '#705848';
    } else if (type == 'fairy') {
      this.bgColors = '#EE99AC';
    }
    return this.bgColors;
    console.log(this.bgColors)
  }

  animation() {
    this.classicMode = !this.classicMode;
  }

}
