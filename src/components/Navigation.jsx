import { Navigation } from "@shopify/polaris";
import { useNavigate, useLocation } from "react-router-dom";

import {
  HomeIcon,
  SettingsIcon,
  ProductIcon,
  ViewIcon,
  NoteIcon,
  CreditCardIcon
} from "@shopify/polaris-icons";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            label: "Dashboard",
            icon: HomeIcon,
            onClick: () => navigate("/")
          },
          {
            label: "Product Integration",
            icon: ProductIcon,
            onClick: () => navigate("/product-integration")
          },
          {
            label: "Preview Tool",
            icon: ViewIcon,
            onClick: () => navigate("/preview-tool")
          },
          {
            label: "Usage Logs",
            icon: NoteIcon,
            onClick: () => navigate("/usage-logs")
          },
          {
            label: "Billing",
            icon: CreditCardIcon,
            onClick: () => navigate("/billing")
          },
          {
            label: "Settings",
            icon: SettingsIcon,
            onClick: () => navigate("/settings")
          }
        ]}
      />
    </Navigation>
  );
}

export default Sidebar;