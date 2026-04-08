import { Routes, Route } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";


import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import ProductIntegration from "./pages/ProductIntegration";
import PreviewPage from "./pages/PreviewPage.jsx";
import UsageLogs from "./pages/UsageLogs";
import Billing from "./pages/Billing";


export default function App() {
  return (
    <AppProvider i18n={{}}>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/product-integration" element={<ProductIntegration />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/usage-logs" element={<UsageLogs />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/preview-tool" element={<PreviewPage />} />
         
        </Routes>
      </Layout>
    </AppProvider>
  );
}