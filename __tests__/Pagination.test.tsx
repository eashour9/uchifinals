import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../components/Pagination';

describe('Pagination Component', () => {
  const onPageChange = jest.fn();

  it('renders pagination buttons correctly', () => {
    const { getByText } = render(
      <Pagination totalItems={100} itemsPerPage={10} currentPage={1} onPageChange={onPageChange} />
    );

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
  });

  it('calls onPageChange with correct page number when a page button is clicked', () => {
    const { getByText } = render(
      <Pagination totalItems={100} itemsPerPage={10} currentPage={1} onPageChange={onPageChange} />
    );

    fireEvent.click(getByText('2'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('displays previous page group button when there are previous pages', () => {
    const { getByText } = render(
      <Pagination totalItems={100} itemsPerPage={10} currentPage={11} onPageChange={onPageChange} />
    );

    expect(getByText('...')).toBeInTheDocument();
  });
});