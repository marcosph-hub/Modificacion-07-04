import { PokemonCreator } from './fabricPokemon'
import { Pokemon } from './Pokemon';
import { Pikachu } from './Pikachu'

export class PikachuCreator extends PokemonCreator {
    constructor (public readonly Name: string, public readonly Weight: number, public readonly Height: number,
        public readonly Type: string, public Attack: number, public Defense: number, public Speed: number,
        public HitPoints: number) {
        super();
    };
     public FactoryMethod(): Pokemon {
         return new Pikachu(this.Name, this.Weight, this.Height, this.Type, this.Attack, this.Defense, this.Speed, this.HitPoints);
     }
}