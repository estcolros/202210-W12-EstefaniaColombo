import { Character } from './character';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export class Advisor extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        isAlive: boolean,
        message: string,
        imageSource: string,
        public advises: Fighter | King | Advisor | Squire
    ) {
        super(name, family, age, isAlive, message, imageSource);
        this.message = "I don't know why, but I think I'm going to die soon.";
        this.emoji = '🎓';
    }
}
