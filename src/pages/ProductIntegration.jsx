import {
  Page,
  Card,
  TextField,
  ResourceList,
  ResourceItem,
  Text,
  Avatar,
  InlineStack,
  BlockStack,
} from "@shopify/polaris";

import { useState, useCallback } from "react";
import Knob from "../components/Knob"; // make sure the path is correct

const productsData = [
  { id: "1", name: "Floral Summer Dress", category: "Dresses", tryOns: 234, enabled: true },
  { id: "2", name: "Classic Denim Jacket", category: "Jackets", tryOns: 189, enabled: true },
  { id: "3", name: "Silk Blouse", category: "Tops", tryOns: 0, enabled: false },
  { id: "4", name: "Linen Shirt", category: "Tops", tryOns: 156, enabled: true },
  { id: "5", name: "Wool Overcoat", category: "Jackets", tryOns: 0, enabled: false },
  { id: "6", name: "Cotton T-Shirt", category: "Tops", tryOns: 98, enabled: true },
];

export default function ProductIntegration() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(productsData);

  const handleSearchChange = useCallback((value) => {
    setSearch(value);
  }, []);

  const toggleProduct = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page
      title="Product Integration"
      subtitle="Manage which products have virtual try-on enabled"
    >
      <Card>
        <BlockStack gap="400">
          <TextField
            label="Search products"
            labelHidden
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
            autoComplete="off"
          />

          <ResourceList
            items={filteredProducts}
            renderItem={(item) => {
              const { id, name, category, tryOns, enabled } = item;

              return (
                <ResourceItem
                  id={id}
                  media={<Avatar customer size="md" name={name} />}
                  onClick={() => {}}
                >
                  <InlineStack align="space-between">
                    <BlockStack gap="100">
                      <Text variant="bodyMd" fontWeight="bold" as="h3">
                        {name}
                      </Text>
                      <Text variant="bodySm" tone="subdued" as="p">
                        {category}
                      </Text>
                    </BlockStack>

                    <InlineStack gap="400" align="center">
                      {enabled && (
                        <Text tone="subdued" as="span">
                          {tryOns} try-ons
                        </Text>
                      )}

                      <Knob
                        selected={enabled}
                        ariaLabel={`Enable virtual try-on for ${name}`}
                        onClick={() => toggleProduct(id)}
                      />
                    </InlineStack>
                  </InlineStack>
                </ResourceItem>
              );
            }}
          />
        </BlockStack>
      </Card>
    </Page>
  );
}