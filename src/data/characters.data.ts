import { King } from '../models/king.js';
import { Fighter } from '../models/fighter.js';
import { Squire } from '../models/squire.js';
import { Advisor } from '../models/advisor.js';

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
    'Daenerys'
);

const bronn = new Squire(
    'Bronn',
    'AguasNegras',
    56,
    true,
    "I'm a loser",
    'assets/images/bronn.jpg',
    0,
    'Jaime'
);

export const characters = [joffrey, jaime, daenerys, tyrion, bronn];
console.log(characters);
