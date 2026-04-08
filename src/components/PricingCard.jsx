import {
    Card,
    Text,
    BlockStack,
    InlineStack,
    Button,
    Badge,
  } from "@shopify/polaris";
  
  export const PricingCard = ({
    title,
    description,
    price,
    features,
    featuredText,
    button,
    frequency,
  }) => {
    return (
      <div
        style={{
          width: "18rem",
          position: "relative",
        }}
      >
        {featuredText && (
          <div
            style={{
              position: "absolute",
              top: "-10px",
              right: "10px",
              zIndex: 1,
            }}
          >
            <Badge tone="success">{featuredText}</Badge>
          </div>
        )}
  
        <Card>
          <BlockStack gap="500">
            
            {/* Title */}
            <BlockStack gap="200">
              <Text variant="headingMd" fontWeight="bold">
                {title}
              </Text>
  
              {description && (
                <Text tone="subdued">
                  {description}
                </Text>
              )}
            </BlockStack>
  
            {/* Price */}
            <InlineStack align="start" gap="200">
              <Text variant="heading2xl" fontWeight="bold">
                {price}
              </Text>
  
              <Text tone="subdued">
                / {frequency}
              </Text>
            </InlineStack>
  
            {/* Features */}
            <BlockStack gap="200">
              {features?.map((feature, index) => (
                <Text key={index} tone="subdued">
                  {feature}
                </Text>
              ))}
            </BlockStack>
  
            {/* Button */}
            <Button {...button?.props}>
              {button?.content}
            </Button>
  
          </BlockStack>
        </Card>
      </div>
    );
  };