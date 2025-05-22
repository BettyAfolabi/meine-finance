import React from "react";
import type { Transaction } from "../types";

interface Props {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <div className="mt-4 space-y-2">
      <h2 className="text-lg font-semibold">Transactions</h2>
      {transactions.length === 0 && <p>No transactions recorded yet.</p>}
      <ul>
        {transactions.map(tx => (
          <li key={tx.id} className="bg-white p-2 rounded shadow text-sm">
            <div>
              <strong>{tx.type}</strong> - ${tx.amount} - {tx.category}
            </div>
            <div className="text-xs text-gray-600">{tx.date}</div>
            {tx.notes && <div className="text-xs italic">Note: {tx.notes}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
