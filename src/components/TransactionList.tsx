import React from "react";
import type { Transaction } from "../types";

interface Props {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <div className="mt-7 lg:mt-10 w-full max-w-4xl mx-auto space-y-4 border border-indigo-400 rounded-3xl p-5">
      <h2 className="text-lg font-semibold text-blueSecondary">Transactions</h2>
      {transactions.length === 0 ? (
        <p className="text-grayText">No transactions recorded yet.</p>
      ) : (
        <ul className="space-y-3 shadow-2xl border border-gray-400 rounded-3xl p-5">
          {transactions.map(tx => (
            <li
              key={tx.id}
              className="bg-grayDark p-4 rounded-md shadow-md text-white text-sm"
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
