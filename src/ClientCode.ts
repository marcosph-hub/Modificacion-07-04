import { PokemonCreator } from './fabricPokemon'
import { PikachuCreator } from './PikachuCreator'
import { Pikachu } from  './Pikachu'

export function ClientCode(MasterCreator: PokemonCreator): string{
    return MasterCreator.DataPrinter();
}