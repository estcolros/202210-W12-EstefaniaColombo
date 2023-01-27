import { createContext } from 'react';
import { CharactersType, CharacterType } from '../types/character.type';

export type CharacterContextStructure = {
    characters: CharactersType;
    handleSpeak: (characterPayload: CharacterType['id']) => void;
    handleUpdate: (characterPayload: CharacterType['id']) => void;
};

export const initialContext: CharacterContextStructure = {
    characters: [],
    handleUpdate: (characterPayload: CharacterType['id']) => {
        //
    },

    handleSpeak: (characterPayload: CharacterType['id']) => {
        //
    },
};

export const CharacterContext = createContext(initialContext);
