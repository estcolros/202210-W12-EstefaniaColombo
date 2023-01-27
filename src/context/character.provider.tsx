import { useMemo } from 'react';
import { useCharacters } from '../hooks/use.characters';
import { CharacterContext } from './character.context';

export function CharacterContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { getCharacters, handleUpdate, handleSpeak } = useCharacters();

    const context = useMemo(
        () => ({
            characters: getCharacters(),
            handleUpdate,
            handleSpeak,
        }),
        [getCharacters, handleUpdate, handleSpeak]
    );

    return (
        <>
            <CharacterContext.Provider value={context}>
                {children}
            </CharacterContext.Provider>
        </>
    );
}
