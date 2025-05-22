import React, { useState, useEffect } from "react";
import type { Transaction } from "./types";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load transactions from localStorage on mount
  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Save transactions to localStorage whenever they update
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Add a new transaction
  const addTransaction = (transaction: Transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center">Personal Finance Tracker</h1>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
};

export default App;
