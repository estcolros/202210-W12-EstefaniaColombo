import { Character } from './character';

export class Fighter extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        isAlive: boolean,
        message: string,
        imageSource: string,
        public dexterity: number,
        public weapon: string
    ) {
        super(name, family, age, isAlive, message, imageSource);
        this.message = 'First I hit and then I ask.';
        this.emoji = '🗡';
    }
}
