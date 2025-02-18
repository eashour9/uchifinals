import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExamTable from '@/components/ExamTable';
import Exam from '@/lib/types';

const mockExams: Exam[] = [
  { id: '1', course: 'Math 101', section: "1", sectionTitle: "Intro to Math", instructor: 'John Doe', startTime: '10:00 AM', endTime: '12:00 PM', date: '2023-12-01', room: 'Room 101' },
  { id: '2', course: 'Physics 201', section: "1", sectionTitle: "Mechanics", instructor: 'Jane Smith', startTime: '01:00 PM', endTime: '03:00 PM', date: '2023-12-02', room: 'Room 102' },
  { id: '3', course: 'Chemistry 301', section: "1", sectionTitle: "Organic Chemistry", instructor: 'Alice Johnson', startTime: '09:00 AM', endTime: '11:00 AM', date: '2023-12-03', room: 'Room 103' },
  { id: '4', course: 'Biology 101', section: "1", sectionTitle: "General Biology", instructor: 'Bob Brown', startTime: '02:00 PM', endTime: '04:00 PM', date: '2023-12-04', room: 'Room 104' },
];

describe('ExamTable', () => {
  it('renders the table headers correctly', () => {
    render(<ExamTable exams={mockExams} searched={false} resetPageTrigger={false} />);
    expect(screen.getByText('Course')).toBeInTheDocument();
    expect(screen.getByText('Instructor')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
  });

  it('renders the correct number of exam rows', () => {
    render(<ExamTable exams={mockExams} searched={false} resetPageTrigger={false} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(mockExams.length + 1); // +1 for the header row
  });

  it('displays a message when no exams are found', () => {
    render(<ExamTable exams={[]} searched={true} resetPageTrigger={false} />);
    expect(screen.getByText('No exams found matching your search criteria.')).toBeInTheDocument();
  });

  it('displays a message when no search has been made', () => {
    render(<ExamTable exams={[]} searched={false} resetPageTrigger={false} />);
    expect(screen.getByText('Start searching to view results.')).toBeInTheDocument();
  });

/* it('resets to the first page when resetPageTrigger changes', () => {
    const { rerender } = render(<ExamTable exams={mockExams} searched={false} resetPageTrigger={false} />);
    fireEvent.click(screen.getByText('2')); // Assuming there's a button to go to page 2
    rerender(<ExamTable exams={mockExams} searched={false} resetPageTrigger={true} />);
    expect(screen.getByText('1')).toHaveClass('active'); // Assuming the active page button has a class 'active'
  });
*/
});
