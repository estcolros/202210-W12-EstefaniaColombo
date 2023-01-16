import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given App component', () => {
    describe('When it has been render', () => {
        test('Then its child components should be render also with its title', () => {
            render(<App />);
            const elementHeader = screen.getByRole('heading', {
                name: 'Game of Thrones',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
