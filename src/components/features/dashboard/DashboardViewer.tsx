"use client"

import React from 'react';
import Header from '@/components/features/header/Header';
import { Extract } from '@/components/Extract';
import { Menu } from '@/components/Menu';

import { TransactionsView } from '@/components/TransactionsView';


export function DashboardViewer() {
  

  return (
    <>
      <Header/>
      <main className="w-full flex items-center justify-center h-full mt-8 pb-9 md:pb-[70px] px-6 md:px-15 lg:px-auto">
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1fr_4fr_2fr] h-full gap-4 ">

          <Menu />

          <div className="flex flex-col w-full h-full gap-4">
            <TransactionsView />
          </div>

          <Extract />
        </div>
      </main>
    </>
);
}