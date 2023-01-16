import { Character } from './character.js';

export class King extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        isAlive: boolean,
        message: string,
        imageSource: string,
        public yearsOfReign: number
    ) {
        //Character(name: string, family: string, age: number, isAlive: boolean, message: string, imageSource: string, serie?: string, emoji?: string): Character

        super(name, family, age, isAlive, message, imageSource);
        this.message = 'You are all going to die.';
        this.emoji = '👑';
    }
}
