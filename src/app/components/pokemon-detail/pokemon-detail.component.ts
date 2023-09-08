import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonDetail } from '../../models/pokemon-detail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: PokemonDetail;
  classicMode: boolean;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { 
    this.pokemon = data.pokemon;
    this.classicMode = data.classicMode;
  }

  ngOnInit(): void {
  }

  getAbilities(): string {
    return this.pokemon.abilities.map(x => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]): string {
    const principalType = list.find(x => x.slot === 1);
    return principalType ? principalType.type.name : '';
  }
}
