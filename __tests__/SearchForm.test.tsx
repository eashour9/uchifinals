import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  const mockOnInputChange = jest.fn();
  const mockOnSearch = jest.fn();
  const searchParams = { details: '', date: '' };

  it('renders the input field correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchForm searchParams={searchParams} onInputChange={mockOnInputChange} onSearch={mockOnSearch} />
    );
    const inputElement = getByPlaceholderText('Search by course name, course number, instructor name, or room...');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onInputChange when input value changes', () => {
    const { getByPlaceholderText } = render(
      <SearchForm searchParams={searchParams} onInputChange={mockOnInputChange} onSearch={mockOnSearch} />
    );
    const inputElement = getByPlaceholderText('Search by course name, course number, instructor name, or room...');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(mockOnInputChange).toHaveBeenCalled();
  });

  it('calls onSearch when the search button is clicked', () => {
    const { getByText } = render(
      <SearchForm searchParams={searchParams} onInputChange={mockOnInputChange} onSearch={mockOnSearch} />
    );
    const buttonElement = getByText('Search');
    fireEvent.click(buttonElement);
    expect(mockOnSearch).toHaveBeenCalled();
  });

  it('calls onSearch when the form is submitted', () => {
    const { getByPlaceholderText } = render(
      <SearchForm searchParams={searchParams} onInputChange={mockOnInputChange} onSearch={mockOnSearch} />
    );
    const inputElement = getByPlaceholderText('Search by course name, course number, instructor name, or room...');
    fireEvent.submit(inputElement);
    expect(mockOnSearch).toHaveBeenCalled();
  });
});