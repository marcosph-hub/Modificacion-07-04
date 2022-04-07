import { InterfacePokemon } from './pokemonInterface'
export class Pokemon implements InterfacePokemon {

    /**
      * @constructor Initialize the main properties for the class Pokemon,
      * @param name. String containing the name that identify the Pokemon
      * @param weight. Number containing the weigth of the Pokemon
      * @param height. Number containing the heigth of the Pokemon
      * @param type. String that specifies the naturalness of the Pokemon
      * @param attack. Number containing the attack power of the Pokemon
      * @param defense. Number containing the defense cpacity of the Pokemon
      * @param speed. Number containing the speed of the Pokemon
      * @param hitPoints. Number containing the health points of the Pokemon
      * 
     */
    
    constructor (public readonly Name: string, public readonly Weight: number, public readonly Height: number,
      public readonly Type: string, public Attack: number, public Defense: number, public Speed: number,
      public HitPoints: number) {}
      
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