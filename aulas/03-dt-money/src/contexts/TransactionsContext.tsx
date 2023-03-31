import { createContext, ReactNode, useEffect, useState } from "react";

interface Transactions {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transactions[];
}

interface TransactionsProviderProps {
  children: ReactNode; //qualquer elemento válido no react (componente,html, text, numero)
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}:TransactionsProviderProps ){
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function loadTransactions(){
    const response = await fetch('http://localhost:3000/transactions');
    const data = await response.json();
    setTransactions(data);
  }
  useEffect(() => {
    loadTransactions();
  },[]);
  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}