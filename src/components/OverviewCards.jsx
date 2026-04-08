import {
  Card,
  Text,
  BlockStack,
  InlineStack,
  Grid,
  Icon,
} from "@shopify/polaris";

import {
  CameraIcon,
  ChartVerticalIcon,
  ProductIcon,
  CartIcon,
} from "@shopify/polaris-icons";

export default function OverviewCards() {
  const cards = [
    {
      title: "Total Try-Ons",
      value: "1,245",
      subtitle: "+12% from last week",
      icon: CameraIcon,
    },
    {
      title: "Success Rate",
      value: "96%",
      subtitle: "+2.1% from last week",
      icon: ChartVerticalIcon,
    },
    {
      title: "API Credits Used",
      value: "785",
      subtitle: "215 remaining",
      icon: ProductIcon,
    },
    {
      title: "Conversion Rate",
      value: "18%",
      subtitle: "+4.3% from last week",
      icon: CartIcon,
    },
  ];

  return (
    <Grid gap="400">
      {cards.map((card, index) => (
        <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3 }}>
          <Card>
            <BlockStack gap="300">

              {/* Title + Icon Right */}
              <InlineStack align="space-between">
                <Text tone="subdued">
                  {card.title}
                </Text>

                <Icon source={card.icon} />
              </InlineStack>

              <Text variant="headingLg">
                {card.value}
              </Text>

              <Text tone="success">
                {card.subtitle}
              </Text>

            </BlockStack>
          </Card>
        </Grid.Cell>
      ))}
    </Grid>
  );
}