import { useContext } from 'react';
import { CharacterContext } from '../../../context/character.context';
import { CharacterType } from '../../../types/character.type';

export default function Item({ item }: { item: CharacterType }) {
    const { handleUpdate, handleSpeak } = useContext(CharacterContext);
    const handleDieClick = () => {
        handleUpdate(item.id);
    };

    const handleSpeakClick = () => {
        handleSpeak(item.id);
    };
    return (
        <div className="card character__card">
            <img
                src={item.imageSource}
                alt={item.name}
                className={
                    item.isAlive
                        ? 'character__picture card-img-top'
                        : 'character__picture card-img-top character__picture--die'
                }
            />
            <div className="card-body">
                <h2 className="character__name card-title h4">
                    {item.name} {item.family}
                </h2>
                <div className="character__info">
                    <ul className="list-unstyled">
                        <li>Age: {item.age} years</li>
                        <li>
                            State:
                            {item.isAlive ? (
                                <i className="fas fa-thumbs-up"></i>
                            ) : (
                                <i className="fas fa-thumbs-down"></i>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="character__overlay">
                    <ul className="list-unstyled">
                        {item.yearsOfReign && (
                            <li>Years of reign: {item.yearsOfReign}</li>
                        )}
                        {item.weapon && item.dexterity && (
                            <>
                                <li>Weapon: {item.weapon} </li>
                                <li>Dexterity: {item.dexterity}</li>
                            </>
                        )}
                        {item.advises && <li>Advises {item.advises.name}</li>}

                        {item.advisor && (
                            <>
                                <li>Rally: {item.degreeOfPelotism}</li>
                                <li>Serves: {item.advisor?.name}</li>
                            </>
                        )}
                        {item.message && <li>Message: {item.message}</li>}
                    </ul>
                    <div className="character__actions">
                        {item.isAlive && (
                            <button
                                onClick={handleDieClick}
                                className="character__action character__action--death btn"
                            >
                                Dies
                            </button>
                        )}

                        {item.isAlive && (
                            <button
                                onClick={handleSpeakClick}
                                className="character__action character__action--speak btn"
                            >
                                Speak
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <i className="emoji">{item.emoji}</i>
        </div>
    );
}
