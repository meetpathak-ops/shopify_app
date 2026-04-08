import { Page, InlineStack } from "@shopify/polaris";
import { PricingCard } from "../components/PricingCard";

export default function Billing() {
  return (
    <Page title="Billing">
      <InlineStack gap="400" align="start">
        
        <PricingCard
          title="Standard"
          description="This is a great plan for stores that are just starting out"
          features={[
            "Process up to 1,000 orders/mo",
            "Amazing feature",
            "Another really cool feature",
            "24/7 Customer Support",
          ]}
          price="$19"
          frequency="month"
          button={{
            content: "Select Plan",
            props: {
              variant: "primary",
              onClick: () => console.log("Standard plan"),
            },
          }}
        />

        <PricingCard
          title="Advanced"
          featuredText="Most Popular"
          description="For stores that are growing and need a reliable solution to scale with them"
          features={[
            "Process up to 10,000 orders/mo",
            "Amazing feature",
            "Another really cool feature",
            "24/7 Customer Support",
          ]}
          price="$49"
          frequency="month"
          button={{
            content: "Select Plan",
            props: {
              variant: "primary",
              onClick: () => console.log("Advanced plan"),
            },
          }}
        />

        <PricingCard
          title="Premium"
          description="The best of the best, for stores that have the highest order processing needs"
          features={[
            "Process up to 100,000 orders/mo",
            "Amazing feature",
            "Another really cool feature",
            "24/7 Customer Support",
          ]}
          price="$99"
          frequency="month"
          button={{
            content: "Select Plan",
            props: {
              variant: "primary",
              onClick: () => console.log("Premium plan"),
            },
          }}
        />

      </InlineStack>
    </Page>
  );
}