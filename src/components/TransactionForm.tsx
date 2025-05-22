import React, { useState } from 'react';
import type { CategoryType, Transaction } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onAdd: (tx: Transaction) => void;
}

const TransactionForm: React.FC<Props> = ({ onAdd }) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'Income' | 'Expense'>('Expense');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !date) return;

    const newTx: Transaction = {
      id: uuidv4(),
      amount: parseFloat(amount),
      type,
      category,
      date,
      notes,
    };

    onAdd(newTx);
    setAmount('');
    setCategory('');
    setDate('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
      <select value={type} onChange={e => setType(e.target.value as CategoryType)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="text" placeholder="Notes (optional)" value={notes} onChange={e => setNotes(e.target.value)} />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
