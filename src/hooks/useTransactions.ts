// src/useTransacoes.ts
import { useState, useEffect, useCallback } from 'react';
import { addTransaction, listTransaction } from '../db';
import type { FinanceDBSchema } from '../db'; // Importando o tipo

type Transaction = FinanceDBSchema['transacoes']['value'];

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getTransactions = useCallback(async () => {
    const dados = await listTransaction();
    setTransactions(dados);
  }, []);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  const addTransactions = useCallback(async (newTransation: Omit<Transaction, 'id' | 'data'>) => {

    const objectTransaction = {
      id: crypto.randomUUID(),
      date: new Date(),
      type: newTransation.type,
      value: newTransation.value
    };
    await addTransaction(objectTransaction);
    await getTransactions();
  }, [getTransactions]);

  return { transactions, addTransactions, getTransactions };
}