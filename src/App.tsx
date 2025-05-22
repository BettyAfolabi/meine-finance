import React, { useState, useEffect } from "react";
import type { Transaction } from "./types";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    <div className="h-full px-4 py-10 flex flex-col items-center text-white">
      <h1 className="text-3xl lg:text-5xl font-bold text-blue-500 my-8 text-center max-w-2xl">
        Personal Finance Tracker
      </h1>
      <div className="w-full max-w-2xl mt-8 lg:mt-4 px-4 sm:px-0">
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
