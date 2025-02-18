import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';

describe('NavBar', () => {
  it('renders the header', () => {
    render(<NavBar />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<NavBar />);
    const titleElement = screen.getByText(/uchifinals/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<NavBar />);
    const subtitleElement = screen.getByText(/find your uchicago final exam schedule fast/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders the current quarter', () => {
    render(<NavBar />);
    const quarterElement = screen.getByText((content, element) => {
      return element?.textContent === 'current quarter: autumn 2024';
    });
    expect(quarterElement).toBeInTheDocument();
  });

  it('renders the author information', () => {
    render(<NavBar />);
    const authorElement = screen.getByText(/Made by Esslam Ashour, class of 2027/i);
    expect(authorElement).toBeInTheDocument();
  });

  it('renders the contact link', () => {
    render(<NavBar />);
    const contactLink = screen.getByRole('link', { name: /Contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', 'mailto:esslamashour@uchicago.edu');
  });
});