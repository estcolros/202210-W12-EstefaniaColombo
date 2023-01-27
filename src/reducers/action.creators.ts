import { Character } from '../models/character';
import { CharacterType } from '../types/character.type';
import { characterActionTypes } from './action.types';

export type CharacterAction = {
    type: string;
    payload: CharacterType['id'];
};

export const characterUpdateCreator = (
    payload: CharacterType['id']
): CharacterAction => ({
    type: characterActionTypes.update,
    payload,
});

export const characterSpeakCreator = (
    payload: Character['id']
): CharacterAction => ({
    type: characterActionTypes.speak,
    payload,
});
