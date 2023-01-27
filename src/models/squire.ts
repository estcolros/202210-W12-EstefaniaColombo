import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        isAlive: boolean,
        message: string,
        imageSource: string,
        public degreeOfPelotism: number,
        public advisor: Fighter
    ) {
        super(name, family, age, isAlive, message, imageSource);
        this.message = "I'm a loser.";
        this.emoji = '🛡';
    }
}
