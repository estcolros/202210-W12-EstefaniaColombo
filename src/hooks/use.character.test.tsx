import { fireEvent, render, screen } from '@testing-library/react';
import { jaime } from '../mocks/models.mock';
import { CharacterType } from '../types/character.type';
import { useCharacters } from './use.characters';

describe(`Given useCharacter (custom hook)
            render with a virtual component`, () => {
    const mockPayload: CharacterType['id'] = jaime.id;

    const TestComponent = () => {
        const { getCharacters, handleUpdate, handleSpeak } = useCharacters();
        return (
            <>
                <button onClick={() => handleUpdate(mockPayload)}>
                    Update
                </button>
                <button onClick={() => handleSpeak(mockPayload)}>Speak</button>
                <div>
                    <ul>
                        {getCharacters().map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };

    describe(`When component is loaded`, () => {
        render(<TestComponent />);
        const buttons = screen.getAllByRole('button');
        test('Then its should call handleUpdate and handleSpeak', async () => {
            expect(await screen.findByText(jaime.name)).toBeInTheDocument();
            fireEvent.click(buttons[0]);
            fireEvent.click(buttons[1]);
        });
    });
});
