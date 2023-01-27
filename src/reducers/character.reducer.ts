import { CharactersType } from '../types/character.type';
import { CharacterAction } from './action.creators';
import { characterActionTypes } from './action.types';

export function characterReducer(
    state: CharactersType,
    action: CharacterAction
): CharactersType {
    switch (action.type) {
        case characterActionTypes.update:
            const updateCharacter = action.payload;
            const newCharacters = state.map((item) => {
                if (item.id === updateCharacter) {
                    return {
                        ...item,
                        isAlive: false,
                    };
                }
                return item;
            });
            return newCharacters;

        case characterActionTypes.speak:
            const speakCharacter = action.payload;
            const speakChar = state.map((item) => {
                if (item.id === speakCharacter) {
                    return {
                        ...item,
                        isSpeak: !item.isSpeak,
                    };
                }
                return item;
            });
            return speakChar;
        default:
            return [...state];
    }
}
