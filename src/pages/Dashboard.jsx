import { Page, Layout, Card, Text, BlockStack } from "@shopify/polaris";
import OverviewCards from "../components/OverviewCards";
import AnalyticsChart from "../components/AnalyticsChart";


export default function Dashboard() {
  return (
    <Page 
      title="Dashboard"
      subtitle="Monitor your virtual try-on performance"
    >
      <Layout>

        <Layout.Section>
          <OverviewCards />
        </Layout.Section>

        <Layout.Section>
          <Card padding="400">
            <BlockStack gap="200">
              <Text variant="headingMd">Try-On Activity</Text>
              <Text tone="subdued" variant="bodySm">
                Last 7 days
              </Text>

              <AnalyticsChart />
            </BlockStack>
          </Card>
        </Layout.Section>

       

      </Layout>
    </Page>
  );
}