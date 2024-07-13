import Layout from "@/components/Layout";
import Dashboard from "@/components/Dashboard";
import { ModalsProvider } from "@/context/ModalsContext";

export default function Home() {
  return (
    <ModalsProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </ModalsProvider>
  );
}
