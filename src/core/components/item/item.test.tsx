import { fireEvent, render, screen } from '@testing-library/react';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../../context/character.context';
import { daenerys } from '../../../mocks/models.mock';

import Item from './item';

describe('Given Item component', () => {
    const handleUpdate = jest.fn();
    const handleSpeak = jest.fn();

    const mockContext = {
        handleUpdate,
        handleSpeak,
    } as unknown as CharacterContextStructure;
    describe('When it has been render', () => {
        test('Then Advisor info should have been render', () => {
            render(<Item item={daenerys} />);
            const textElement = screen.getByText(/Daenerys/i);
            expect(textElement).toBeInTheDocument();
        });
        test('Then user could interact with them if we render with context', async () => {
            render(
                <CharacterContext.Provider value={mockContext}>
                    <Item item={daenerys}></Item>
                </CharacterContext.Provider>
            );

            const buttonDeath = screen.getAllByRole('button')[0];
            expect(buttonDeath).toBeInTheDocument();
            fireEvent.click(buttonDeath);
            expect(handleUpdate).toHaveBeenCalled();

            const buttonSpeak = screen.getAllByRole('button')[1];
            expect(buttonSpeak).toBeInTheDocument();
            fireEvent.click(buttonSpeak);
            expect(handleSpeak).toHaveBeenCalled();
        });
    });
});
