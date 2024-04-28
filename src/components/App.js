// Parent component
import React, { useState } from "react";
import TransactionsTable from "./TransactionsTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.includes(searchTerm)
  );

  return (
    <div>
      <h1>Transaction Management</h1>
      <SearchBar onSearchTermChange={handleSearchTermChange} />
      <TransactionsTable transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
}

export default App;

