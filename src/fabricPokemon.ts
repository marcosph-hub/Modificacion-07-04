import { Pokemon } from './Pokemon'

export abstract class PokemonCreator {
    public abstract FactoryMethod(): Pokemon
    
    public DataPrinter(): string {
        const Pokemon = this.FactoryMethod();
        return `Pokemon: ${Pokemon.getName()} Type: ${Pokemon.getType}`
    }
  }