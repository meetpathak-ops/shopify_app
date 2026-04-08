import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  TextField,
  Select,
  InlineStack,
  RangeSlider,
  Checkbox,
  RadioButton,
} from "@shopify/polaris";

import { useState } from "react";
import Knob from "../components/Knob";

export default function Settings() {
  // General
  const [enabled, setEnabled] = useState(true);
  const [buttonText, setButtonText] = useState("👕 Try This On");
  const [position, setPosition] = useState("below");

  // Appearance
  const [color, setColor] = useState("#008060");
  const [radius, setRadius] = useState(12);
  const [icon, setIcon] = useState("shirt");

  // AI
  const [category, setCategory] = useState("tops");
  const [quality, setQuality] = useState("high");

  // Upload
  const [maxSize, setMaxSize] = useState("5");
  const [autoResize, setAutoResize] = useState(true);
  const [formats, setFormats] = useState({
    jpg: true,
    png: true,
  });

  // Product Integration
  const [enableProductPage, setEnableProductPage] = useState(true);
  const [enableCollectionPage, setEnableCollectionPage] = useState(false);
  const [showOn, setShowOn] = useState({
    image: true,
    cart: true,
    floating: false,
  });

  // Options
  const positionOptions = [
    { label: "Above Product Image", value: "above" },
    { label: "Below Product Image", value: "below" },
    { label: "Above Add To Cart", value: "cart" },
    { label: "Floating Button", value: "floating" },
  ];

  const iconOptions = [
    { label: "👕 Shirt", value: "shirt" },
    { label: "👗 Dress", value: "dress" },
    { label: "📷 Camera", value: "camera" },
  ];

  const sizeOptions = [
    { label: "2 MB", value: "2" },
    { label: "5 MB", value: "5" },
    { label: "10 MB", value: "10" },
    { label: "20 MB", value: "20" },
  ];

  const categoryOptions = [
    { label: "Tops", value: "tops" },
    { label: "Bottoms", value: "bottoms" },
    { label: "Dresses", value: "dresses" },
    { label: "Outerwear", value: "outerwear" },
  ];

  const qualityOptions = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];

  return (
    <Page
      title="Settings"
      subtitle="Configure your virtual try-on experience"
      primaryAction={{
        content: "Save Changes",
        onAction: () => console.log("Saved"),
      }}
    >
      <Layout>

        {/* 1. GENERAL SETTINGS */}
        <Layout.Section>
          <Card padding="400">
            <BlockStack gap="400">
              <Text variant="headingMd">General Settings</Text>

              <InlineStack align="space-between">
                <BlockStack gap="100">
                  <Text fontWeight="medium">Enable Try-On</Text>
                  <Text tone="subdued">
                    Show try-on button on your store
                  </Text>
                </BlockStack>

                <Knob
                  selected={enabled}
                  onClick={() => setEnabled(!enabled)}
                />
              </InlineStack>

              <TextField
                label="Button Text"
                value={buttonText}
                onChange={setButtonText}
              />

              <Select
                label="Button Position"
                options={positionOptions}
                value={position}
                onChange={setPosition}
              />
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* 2. APPEARANCE */}
        <Layout.Section>
          <Card padding="400">
            <BlockStack gap="400">
              <Text variant="headingMd">Appearance</Text>

              <BlockStack gap="200">
                <Text>Button Color</Text>
                <InlineStack gap="300">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    style={{ width: 48, height: 48, border: "none" }}
                  />
                  <div style={{ width: 150 }}>
                    <TextField value={color} onChange={setColor} />
                  </div>
                </InlineStack>
              </BlockStack>

              <BlockStack gap="200">
                <Text>Border Radius: {radius}px</Text>
                <RangeSlider
                  value={radius}
                  onChange={setRadius}
                  min={0}
                  max={30}
                />
              </BlockStack>

              <Select
                label="Button Icon"
                options={iconOptions}
                value={icon}
                onChange={setIcon}
              />
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* 3. AI CONFIGURATION */}
        <Layout.Section>
          <Card padding="400">
            <BlockStack gap="400">
              <Text variant="headingMd">AI Configuration</Text>

              <Select
                label="Garment Category"
                options={categoryOptions}
                value={category}
                onChange={setCategory}
              />

              <Select
                label="Image Quality"
                options={qualityOptions}
                value={quality}
                onChange={setQuality}
              />
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* 4. UPLOAD SETTINGS */}
        <Layout.Section>
          <Card padding="400">
            <BlockStack gap="400">
              <Text variant="headingMd">Upload Settings</Text>

              <Select
                label="Max Upload Size (MB)"
                options={sizeOptions}
                value={maxSize}
                onChange={setMaxSize}
              />

              <BlockStack gap="200">
                <Text fontWeight="medium">Allowed Formats</Text>
                <InlineStack gap="400">
                  <Checkbox
                    label="JPG"
                    checked={formats.jpg}
                    onChange={(val) =>
                      setFormats({ ...formats, jpg: val })
                    }
                  />
                  <Checkbox
                    label="PNG"
                    checked={formats.png}
                    onChange={(val) =>
                      setFormats({ ...formats, png: val })
                    }
                  />
                </InlineStack>
              </BlockStack>

              <InlineStack align="space-between">
                <BlockStack gap="100">
                  <Text fontWeight="medium">Auto Resize</Text>
                  <Text tone="subdued">
                    Automatically resize uploaded images
                  </Text>
                </BlockStack>

                <Knob
                  selected={autoResize}
                  onClick={() => setAutoResize(!autoResize)}
                />
              </InlineStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* 5. PRODUCT INTEGRATION */}
        <Layout.Section>
          <Card padding="400">
            <BlockStack gap="400">
              <Text variant="headingMd">Product Integration</Text>

              <InlineStack align="space-between">
                <BlockStack gap="100">
                  <Text fontWeight="medium">
                    Enable on Product Page
                  </Text>
                  <Text tone="subdued">
                    Show try-on button on product pages
                  </Text>
                </BlockStack>

                <Knob
                  selected={enableProductPage}
                  onClick={() =>
                    setEnableProductPage(!enableProductPage)
                  }
                />
              </InlineStack>

              <BlockStack gap="200">
                <Text fontWeight="medium">Show On</Text>

                <Checkbox
                  label="Product Image"
                  checked={showOn.image}
                  onChange={(val) =>
                    setShowOn({ ...showOn, image: val })
                  }
                />

                <Checkbox
                  label="Add To Cart Section"
                  checked={showOn.cart}
                  onChange={(val) =>
                    setShowOn({ ...showOn, cart: val })
                  }
                />

                <RadioButton
                  label="Floating Button"
                  checked={showOn.floating}
                  onChange={() =>
                    setShowOn({
                      image: false,
                      cart: false,
                      floating: true,
                    })
                  }
                />
              </BlockStack>

              <InlineStack align="space-between">
                <BlockStack gap="100">
                  <Text fontWeight="medium">
                    Enable on Collection Pages
                  </Text>
                  <Text tone="subdued">
                    Show try-on on product listing pages
                  </Text>
                </BlockStack>

                <Knob
                  selected={enableCollectionPage}
                  onClick={() =>
                    setEnableCollectionPage(!enableCollectionPage)
                  }
                />
              </InlineStack>

            </BlockStack>
          </Card>
        </Layout.Section>

      </Layout>
    </Page>
  );
}