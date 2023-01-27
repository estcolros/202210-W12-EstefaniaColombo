import { render, screen } from '@testing-library/react';

import {
    CharacterContext,
    CharacterContextStructure,
} from '../../../context/character.context';
import { jaime, tyrion } from '../../../mocks/models.mock';
import List from './list';

describe('Given List component', () => {
    const mockContext = {
        characters: [tyrion, jaime],
    } as unknown as CharacterContextStructure;
    test('renders List component', () => {
        render(
            <CharacterContext.Provider value={mockContext}>
                <List />
            </CharacterContext.Provider>
        );

        const mockAdvisorElement = screen.getByText(/Jaime/i);
        expect(mockAdvisorElement).toBeInTheDocument();
    });
});
