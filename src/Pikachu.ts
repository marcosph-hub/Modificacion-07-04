import { Pokemon } from './Pokemon';
import { InterfacePokemon } from './pokemonInterface'

export class Pikachu implements InterfacePokemon {
    constructor (public readonly Name: string = 'Pikachu', public readonly Weight: number = 20, public readonly Height: number = 20,
        public readonly Type: string = 'Water', public Attack: number = 20, public Defense: number = 20, public Speed: number = 20,
        public HitPoints: number = 20) {};

      /**
       * 
       * @returns a string with the property name
       */
      getName(): string {
        return this.Name;
      }
  
      /**
       * 
       * @returns a number with the property weight
       */
      getWeight() {
        return this.Weight;
      }
  
      /**
       * 
       * @returns a number with the property height
       */
      getHeight() {
        return this.Height;
      }
  
      /**
       * 
       * @returns a string with the property type
       */
      getType() {
        return this.Type;
      }
  
      /**
       * 
       * @returns a number with the property attack
       */
      getAttack() {
        return this.Attack;
      }
  
      /**
       * 
       * @returns a number with the defense weight
       */
      getDefense() {
        return this.Defense;
      }
  
      /**
       * 
       * @returns a number with the speed weight
       */
      getSpeed() {
        return this.Speed;
      }
  
      /**
       * 
       * @returns a number with the hitPoints weight
       */
      getHP() {
        return this.HitPoints;
      }
  
      /**
       * 
       * @param newValue Consists in the new value of the porperty hitPoints
       */
      setHP(newValue: number) {
        this.HitPoints = newValue;
      }
}