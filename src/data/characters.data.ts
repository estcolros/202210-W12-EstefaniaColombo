import { Advisor } from '../models/advisor';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';
import { CharactersType } from '../types/character.type';

const joffrey = new King(
    'Joffrey',
    'Baratheon',
    16,
    true,
    'You are all going to die.',
    'assets/images/joffrey.jpg',
    2
);

const jaime = new Fighter(
    'Jaime',
    'Lannister',
    35,
    true,
    'First I hit and then I ask',
    'assets/images/jaime.jpg',
    8,
    'Sword'
);
const daenerys = new Fighter(
    'Daenerys',
    'Targaryen',
    24,
    true,
    'First I hit and then I ask',
    'assets/images/daenerys.jpg',
    10,
    'Dragons'
);

const tyrion = new Advisor(
    'Tyrion',
    'Lannister',
    39,
    true,
    "I don't know why, but I think I'm going to die soon",
    'assets/images/tyrion.jpg',
    daenerys
);

const bronn = new Squire(
    'Bronn',
    'AguasNegras',
    56,
    true,

    "I'm a loser",
    'assets/images/bronn.jpg',
    5,
    jaime
);

export const charactersData: CharactersType = [
    joffrey,
    jaime,
    daenerys,
    tyrion,
    bronn,
];
console.log(charactersData);

export const getCharactersData = () => charactersData;
