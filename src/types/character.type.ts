import { Advisor } from '../models/advisor';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';

export type CharacterType = {
    name: string;
    family: string;
    age: number;
    imageSource: string;
    isAlive: boolean;
    isSpeak: boolean;
    message: string;
    serie: string;
    emoji: string;
    id: string;
    advises?: Fighter | King | Advisor | Squire;
    weapon?: string;
    dexterity?: number;
    yearsOfReign?: number;
    degreeOfPelotism?: number;
    advisor?: Fighter;
};

export type CharactersType = Array<CharacterType>;
