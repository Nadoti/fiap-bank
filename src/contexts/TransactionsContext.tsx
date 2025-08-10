'use client';

import { useTransactions } from "@/hooks/useTransactions";
import { Transaction } from "@/types/transactions.interface";
import { createContext, ReactNode } from "react";

interface TransactionsContextData {
  transactions: Transaction[];
  addTransactions: (value: {type: string, value: number}) => void;
}


export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);


export function TransactionsProvider({ children }: { children: ReactNode }) {
  const { addTransactions, transactions } = useTransactions();


  return (
    <TransactionsContext.Provider value={{ addTransactions, transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
