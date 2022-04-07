import { expect } from 'chai';
import { ClientCode } from '../src/ClientCode'
import { PikachuCreator } from '../src/PikachuCreator'
 
describe('Client Code',() => {
    it('Client code', () => {
        expect(ClientCode(new PikachuCreator('Pikachu', 20,50,'Eléctrico',80,50,120,45))).to.be.equal('Pokemon')
    });
});