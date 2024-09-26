// frontend/src/ConflictResolver.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConflictResolver from './ConflictResolver'; // Adjust based on your actual component path
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

describe('ConflictResolver Component', () => {
    test('renders conflict resolver header', () => {
        render(<ConflictResolver />);
        const headerElement = screen.getByText(/Conflict Resolver/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('handles user input correctly', () => {
        render(<ConflictResolver />);
        const input1 = screen.getByPlaceholderText(/Your Argument/i); // Adjust placeholder
        const input2 = screen.getByPlaceholderText(/Other Party's Argument/i); // Adjust placeholder
        const submitButton = screen.getByRole('button', { name: /Submit/i });

        fireEvent.change(input1, { target: { value: 'I feel ignored.' } });
        fireEvent.change(input2, { target: { value: 'I disagree with you.' } });
        fireEvent.click(submitButton);

        // Expect some output after submission, this will depend on your implementation
        const outputElement = screen.getByText(/some expected output text/i); // Adjust based on expected behavior
        expect(outputElement).toBeInTheDocument();
    });

    test('displays an error message for empty input', () => {
        render(<ConflictResolver />);
        const submitButton = screen.getByRole('button', { name: /Submit/i });
        fireEvent.click(submitButton);

        // Expect an error message to be displayed
        const errorMessage = screen.getByText(/Please enter both arguments/i); // Adjust based on your implementation
        expect(errorMessage).toBeInTheDocument();
    });
});
