import { render, fireEvent } from '@testing-library/react';
import TransactionForm from '../components/TransactionForm';


describe('TransactionForm', () => {
  it('calls onAdd with the correct data', () => {
    const mockAdd = jest.fn();
    const { getByPlaceholderText, getByText } = render(<TransactionForm onAdd={mockAdd} />);

    fireEvent.change(getByPlaceholderText(/amount/i), { target: { value: '100' } });
    fireEvent.change(getByPlaceholderText(/category/i), { target: { value: 'Food' } });
    fireEvent.change(getByPlaceholderText(/notes/i), { target: { value: 'Lunch' } });
    fireEvent.change(getByPlaceholderText(/date/i), { target: { value: '2025-05-22' } });

    fireEvent.click(getByText(/add transaction/i));

    expect(mockAdd).toHaveBeenCalledWith(expect.objectContaining({
      amount: 100,
      category: 'Food',
      notes: 'Lunch',
      date: '2025-05-22',
    }));
  });
});
