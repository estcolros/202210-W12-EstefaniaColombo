import { Character } from './character.js';

export class Squire extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        isAlive: boolean,
        message: string,
        imageSource: string,
        public degreeOfPelotism: number,
        public advises: string
    ) {
        super(name, family, age, isAlive, message, imageSource);
        this.message = "I'm a loser.";
        this.emoji = '🛡';
    }
}
