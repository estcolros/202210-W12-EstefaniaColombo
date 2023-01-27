import { render } from '@testing-library/react';
import * as characterData from '../data/characters.data';
import { CharacterContextProvider } from './character.provider';

describe('Given CharacterContextProvider', () => {
    describe('When we use it', () => {
        test('Then it should call the  getCharactersData()', () => {
            const getCharactersDataSpy = jest.spyOn(
                characterData,
                'getCharactersData'
            );
            render(
                <CharacterContextProvider>
                    <></>
                </CharacterContextProvider>
            );
            expect(getCharactersDataSpy).toHaveBeenCalled();
        });
    });
});
