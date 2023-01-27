import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { daenerys } from '../mocks/models.mock';

// Se importa directamente el initialContext
// para que el test utilice las funciones definidas en él
import { initialContext, CharacterContext } from './character.context';

initialContext.characters = [daenerys];

describe('Given the context CharacterContext', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test Component is wrapper with this context', () => {
        beforeEach(() => {
            TestComponent = () => {
                const { characters } = useContext(CharacterContext);
                return <>{characters[0].name}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <CharacterContext.Provider value={initialContext}>
                    <TestComponent></TestComponent>
                </CharacterContext.Provider>
            );
            const element = screen.getByText(initialContext.characters[0].name);
            expect(element).toBeInTheDocument();
        });
    });
});
