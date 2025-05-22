
import { render, screen, fireEvent } from '@testing-library/react';
import TransactionForm from '../components/TransactionForm';

describe('TransactionForm', () => {
  const onAddMock = jest.fn();

  beforeEach(() => {
    onAddMock.mockClear();
    render(<TransactionForm onAdd={onAddMock} />);
  });

  test('calls onAdd with correct data when form is submitted', () => {
    fireEvent.change(screen.getByLabelText(/amount/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/type/i), { target: { value: 'Income' } });
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Groceries' } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2025-05-22' } });
    fireEvent.change(screen.getByLabelText(/notes/i), { target: { value: 'Weekly shopping' } });

    fireEvent.click(screen.getByRole('button', { name: /add transaction/i }));

    expect(onAddMock).toHaveBeenCalledTimes(1);

    const calledWith = onAddMock.mock.calls[0][0];
    expect(calledWith).toMatchObject({
      amount: 100,
      type: 'Income',
      category: 'Groceries',
      date: '2025-05-22',
      notes: 'Weekly shopping',
    });
    expect(typeof calledWith.id).toBe('string'); 
  });

  test('does not submit the form with missing required fields', () => {
    fireEvent.click(screen.getByRole('button', { name: /add transaction/i }));
    expect(onAddMock).not.toHaveBeenCalled();
  });
});
