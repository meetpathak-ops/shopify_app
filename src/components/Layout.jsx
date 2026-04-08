import { Frame, Page } from "@shopify/polaris";
import Navigation from "./Navigation";


export default function Layout({ children }) {
  return (
    <Frame navigation={<Navigation />}>
      <div className="hero-gradient-bg">
        <Page>{children}</Page>
      </div>
    </Frame>

    
  );
}