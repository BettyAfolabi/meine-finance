import React, { useState, useEffect } from "react";
import type { Transaction } from "./types";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="min-h-screen bg-black p-4 flex flex-col items-center text-white">
      <h1 className="text-3xl lg:text-5xl font-bold text-blue-500 mb-8 text-center max-w-2xl">
        Personal Finance Tracker
      </h1>
      <div className="w-full max-w-2xl px-4 sm:px-0">
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
      </div>
    </div>
  );
};

export default App;
