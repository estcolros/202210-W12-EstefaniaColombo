import { useReducer } from 'react';
import { getCharactersData } from '../data/characters.data';
import {
    characterSpeakCreator,
    characterUpdateCreator,
} from '../reducers/action.creators';
import { characterReducer } from '../reducers/character.reducer';
import { CharactersType, CharacterType } from '../types/character.type';

export type UseCharacters = {
    getCharacters: () => CharactersType;
    handleUpdate: (characterPayload: CharacterType['id']) => void;
    handleSpeak: (characterPayload: CharacterType['id']) => void;
};

export function useCharacters(): UseCharacters {
    const initialState: CharactersType = getCharactersData();
    const [characters, dispatch] = useReducer(characterReducer, initialState);

    const getCharacters = () => characters;
    console.log('LOAD HOOK');

    const handleUpdate = (characterPayload: CharacterType['id']) => {
        dispatch(characterUpdateCreator(characterPayload));
    };

    const handleSpeak = (characterPayload: CharacterType['id']) => {
        console.log('SPEAK HOOK');
        dispatch(characterSpeakCreator(characterPayload));
        setTimeout(() => {
            dispatch(characterSpeakCreator(characterPayload));
        }, 4000);
    };
    return {
        getCharacters,
        handleUpdate,
        handleSpeak,
    };
}
