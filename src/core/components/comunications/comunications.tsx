import { useContext } from 'react';
import { CharacterContext } from '../../../context/character.context';

export default function Comunications() {
    const { characters } = useContext(CharacterContext);

    const talkativeCharacter = characters.find(
        (character) => character.isSpeak
    );

    return (
        <div
            className={
                talkativeCharacter
                    ? 'comunications  comunications__on'
                    : 'comunications'
            }
        >
            <p className="comunications__text">{talkativeCharacter?.message}</p>
            <img
                className="comunications__picture"
                src={talkativeCharacter?.imageSource}
                alt={talkativeCharacter?.name}
            />
        </div>
    );
}
