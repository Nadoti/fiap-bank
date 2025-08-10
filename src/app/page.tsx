import { DashboardViewer } from "@/components/features/dashboard/DashboardViewer";
import { TransactionsProvider } from "@/contexts/TransactionsContext";

export default function Home() {
  return (
    <TransactionsProvider>
      <DashboardViewer />
    </TransactionsProvider>
  );
}
