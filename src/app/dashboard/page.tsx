import { DashboardViewer } from "@/components/features/dashboard/DashboardViewer";
import { TransactionsProvider } from "@/contexts/TransactionsContext";


export default function Dashboard() {
  

  return (
    <TransactionsProvider>
      <DashboardViewer />
    </TransactionsProvider>
  )
}