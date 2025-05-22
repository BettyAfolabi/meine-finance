/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import type { Transaction } from "../types";
import { exportToCsv } from "../utils/exportToCsv";
import { toast } from "react-toastify";

interface Props {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}


const TransactionList: React.FC<Props> = ({ transactions }) => {

  const [filterType, setFilterType] = useState<'All' | 'Income' | 'Expense'>('All');

  const filteredTransactions = filterType === 'All'
    ? transactions
    : transactions.filter(tx => tx.type === filterType);

  return (
    <div className="mt-7 lg:mt-10 w-full max-w-4xl mx-auto space-y-4 border border-indigo-400 rounded-3xl p-5">
      <h2 className="text-lg font-semibold text-blueSecondary">Transactions</h2>
       <div className="flex gap-2 items-center">
        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value as any)}
          className="text-sm px-2 py-1 rounded-lg bg-blue-500 text-white border border-gray-500 outline-none"
        >
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <button
          onClick={() =>
            exportToCsv(filteredTransactions, 'transactions.csv', () => {
              toast.success('CSV downloaded!');
            })
          }
          className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 outline-none"
        >
          Export CSV
        </button>
      </div>
      {filteredTransactions.length === 0 ? (
        <p className="text-grayText">No transactions recorded yet.</p>
      ) : (
        <ul className="space-y-3">
          {filteredTransactions.map(tx => (
            <li
              key={tx.id}
              className="bg-grayDark text-white text-sm shadow-2xl border border-gray-400 rounded-3xl p-5"
            >
              <div>
                <strong className="text-blueSecondary">{tx.type}</strong> - ${tx.amount.toFixed(2)} - {tx.category}
              </div>
              <div className="text-xs text-grayText">{tx.date}</div>
              {tx.notes && <div className="text-xs italic text-grayText">Note: {tx.notes}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>

  );
};

export default TransactionList;
