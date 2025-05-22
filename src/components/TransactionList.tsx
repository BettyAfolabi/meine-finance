/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import type { Transaction } from "../types";
import { exportToCsv } from "../utils/exportToCsv";
import { toast } from "react-toastify";
import { Trash2 } from "lucide-react";

interface Props {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  onDelete: (id: string) => void;
}


const TransactionList: React.FC<Props> = ({ transactions, onDelete }) => {

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
          disabled={filteredTransactions.length === 0}
          className={`text-sm px-3 py-1 rounded transition-colors
          ${
            filteredTransactions.length === 0
              ? "bg-gray-600 cursor-not-allowed text-gray-400"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
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
              <div className="flex justify-end">
                <button
                  onClick={() => onDelete(tx.id)}
                  className="text-xs px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  <Trash2 className="w-4 h-4 text-white hover:text-red-300" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
};

export default TransactionList;
