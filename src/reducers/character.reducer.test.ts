import { bronn } from '../mocks/models.mock';
import { CharactersType, CharacterType } from '../types/character.type';
import { CharacterAction, characterUpdateCreator } from './action.creators';

import { characterReducer } from './character.reducer';

describe('Given the reducer', () => {
    let state: CharactersType | boolean | CharacterType;
    let action: CharacterAction;

    describe('When the action type is "places@update"', () => {
        test('Then it should return the state with the data updated', () => {
            const updateCharacter: CharacterType['id'] = bronn.id;
            state = [bronn];
            action = characterUpdateCreator(updateCharacter);
            const result = characterReducer(state, action) as CharactersType;
            expect(result[0].isAlive).toBe(false);
        });
        test('If de ID doesnt exists it should return the same state', () => {
            const updateCharacter: CharacterType['id'] = '567';
            state = [bronn];
            action = characterUpdateCreator(updateCharacter);
            const result = characterReducer(state, action);
            expect(result).toEqual([bronn]);
        });
    });
    describe('When the action type is not valid', () => {
        test('Then it should return the state', () => {
            state = [];
            action = { type: 'Bad', payload: 'Test' };
            const result = characterReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
