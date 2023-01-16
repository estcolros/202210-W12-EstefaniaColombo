import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { Layout } from './layout';
describe('Given Layout component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Router>
                    <Layout></Layout>
                </Router>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Game of Thrones',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
