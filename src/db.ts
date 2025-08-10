// src/db.ts
import { openDB, DBSchema } from 'idb';

const DB_NAME = 'financeDB';
const DB_VERSION = 1;
const STORE_NAME = 'transactions';

export interface FinanceDBSchema extends DBSchema {
  [STORE_NAME]: {
    key: string;
    value: {
      id: string;
      type: string;
      value: number;
      date: Date;
    };
    indexes: { 'id': string };
  };
}

async function getDb() {
  const db = await openDB<FinanceDBSchema>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      console.log('Criando/Atualizando o banco de dados...');
      
      const store = db.createObjectStore(STORE_NAME, {
        keyPath: 'id',
      });

      store.createIndex('id', 'id');
    },
  });
  return db;
}

export async function addTransaction(transacao: FinanceDBSchema[typeof STORE_NAME]['value']) {
  const db = await getDb();
  await db.put(STORE_NAME, transacao);
}

export async function listTransaction() {
  const db = await getDb();
  return db.getAllFromIndex(STORE_NAME, 'id');
}