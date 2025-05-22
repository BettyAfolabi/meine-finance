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
    <form
      onSubmit={handleSubmit}
      className="space-y-4 gap-6 w-full max-w-4xl mx-auto shadow-md border border-gray-500 rounded-2xl p-5"> 
      <div className="flex flex-col lg:flex-row justify-between">
        <div className='mt-3 lg:mt-0.5'>
          <label htmlFor="amount" className="block text-sm font-medium text-white">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 
              px-3 py-2 placeholder-gray-400 focus:border-indigo-500
              focus:ring-indigo-500 focus:outline-none sm:text-sm"
          />
        </div>

        <div className='mt-3 lg:mt-0.5'>
          <label htmlFor="type" className="block text-sm font-medium text-white">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={e => setType(e.target.value as CategoryType)}
            className="mt-1 block rounded-md border border-gray-300
              bg-black text-white px-3 py-2 focus:border-indigo-500
              focus:ring-indigo-500 focus:outline-none sm:text-sm w-full lg:w-[200px]"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className='mt-3 lg:mt-0.5'>
          <label htmlFor="category" className="block text-sm font-medium text-white">
            Category
          </label>
          <input
            id="category"
            type="text"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300
              px-3 py-2 placeholder-gray-400 focus:border-indigo-500
              focus:ring-indigo-500 focus:outline-none sm:text-sm"
          />
        </div>

        <div className='mt-3 lg:mt-0.5'>
          <label htmlFor="date" className="block text-sm font-medium text-white">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            className="mt-1 block w-full lg:w-[200px] rounded-md border border-gray-300
              px-3 py-2 placeholder-gray-400 focus:border-indigo-500
              focus:ring-indigo-500 focus:outline-none sm:text-sm"
          />
        </div>
      </div>

      <div className='mt-3 lg:mt-0.5'>
        <label htmlFor="notes" className="block text-sm font-medium text-white">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          placeholder="Notes (optional)"
          value={notes}
          onChange={e => setNotes(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-700 bg-black/20
            px-3 py-2 placeholder-gray-400 text-white
            focus:border-bluePrimary focus:ring-bluePrimary focus:outline-none sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white lg:text-lg font-semibold p-4 rounded-xl transition-colors w-full"
      >
        Add Transaction
      </button>

    </form>
  );
};

export default TransactionForm;
