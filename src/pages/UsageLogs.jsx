import {
  Page,
  IndexTable,
  LegacyCard,
  IndexFilters,
  useSetIndexFiltersMode,
  useIndexResourceState,
  Text,
  ChoiceList,
  Badge,
  useBreakpoints,
} from "@shopify/polaris";

import { useState, useCallback, useMemo } from "react";

export default function UsageLogsAdvanced() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // ---------------- DATA ----------------
  const allOrders = [
    {
      id: "TRY-001",
      customer: "sarah@email.com",
      product: "Floral Summer Dress",
      quality: "High",
      status: "Completed",
      date: "2026-03-27T10:42:00",
    },
    {
      id: "TRY-002",
      customer: "james@email.com",
      product: "Denim Jacket",
      quality: "Ultra",
      status: "Completed",
      date: "2026-03-27T10:38:00",
    },
    {
      id: "TRY-003",
      customer: "emily@email.com",
      product: "Silk Blouse",
      quality: "High",
      status: "Processing",
      date: "2026-03-27T10:35:00",
    },
    {
      id: "TRY-004",
      customer: "michael@email.com",
      product: "Linen Shirt",
      quality: "Standard",
      status: "Completed",
      date: "2026-03-27T10:22:00",
    },
    {
      id: "TRY-005",
      customer: "lisa@email.com",
      product: "Wool Coat",
      quality: "High",
      status: "Failed",
      date: "2026-03-27T10:15:00",
    },
  ];

  // ---------------- TABS ----------------
  const [tabsList, setTabsList] = useState([
    "All",
    "Completed",
    "Processing",
    "Failed",
  ]);

  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = tabsList.map((item, index) => ({
    content: item,
    index,
    id: `${item}-${index}`,
    isLocked: index === 0,
  }));

  const onCreateNewView = async (value) => {
    await sleep(300);
    setTabsList([...tabsList, value]);
    setSelectedTab(tabsList.length);
    return true;
  };

  // ---------------- FILTER STATE ----------------
  const [queryValue, setQueryValue] = useState("");
  const [status, setStatus] = useState([]);

  const handleQueryChange = useCallback(
    (value) => setQueryValue(value),
    []
  );

  const handleStatusChange = useCallback(
    (value) => setStatus(value),
    []
  );

  const handleClearAll = useCallback(() => {
    setQueryValue("");
    setStatus([]);
    setSelectedTab(0);
  }, []);

  // ---------------- FILTER LOGIC ----------------
  const filteredOrders = useMemo(() => {
    let data = [...allOrders];

    if (queryValue) {
      data = data.filter(
        (item) =>
          item.customer
            .toLowerCase()
            .includes(queryValue.toLowerCase()) ||
          item.product
            .toLowerCase()
            .includes(queryValue.toLowerCase()) ||
          item.id
            .toLowerCase()
            .includes(queryValue.toLowerCase())
      );
    }

    if (status.length > 0) {
      data = data.filter((item) =>
        status.includes(item.status)
      );
    }

    if (selectedTab !== 0) {
      data = data.filter(
        (item) => item.status === tabsList[selectedTab]
      );
    }

    return data;
  }, [queryValue, status, selectedTab, tabsList]);

  // ---------------- SORT ----------------
  const sortOptions = [
    { label: "Date (Newest)", value: "date desc" },
    { label: "Date (Oldest)", value: "date asc" },
  ];

  const [sortSelected, setSortSelected] = useState([
    "date desc",
  ]);

  const sortedOrders = useMemo(() => {
    let sorted = [...filteredOrders];

    if (sortSelected[0] === "date asc") {
      sorted.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    } else {
      sorted.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }

    return sorted;
  }, [filteredOrders, sortSelected]);

  // ---------------- FILTER UI ----------------
  const filters = [
    {
      key: "status",
      label: "Status",
      filter: (
        <ChoiceList
          title="Status"
          titleHidden
          choices={[
            { label: "Completed", value: "Completed" },
            { label: "Processing", value: "Processing" },
            { label: "Failed", value: "Failed" },
          ]}
          selected={status}
          onChange={handleStatusChange}
          allowMultiple
        />
      ),
      shortcut: true,
    },
  ];

  const appliedFilters = [];

  if (status.length > 0) {
    appliedFilters.push({
      key: "status",
      label: `Status: ${status.join(", ")}`,
      onRemove: () => setStatus([]),
    });
  }

  // ---------------- TABLE ----------------
  const resourceName = {
    singular: "usage log",
    plural: "usage logs",
  };

  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
  } = useIndexResourceState(sortedOrders);

  const rowMarkup = sortedOrders.map(
    ({ id, customer, product, quality, status, date }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <Text as="span" fontWeight="semibold">
            {id}
          </Text>
        </IndexTable.Cell>

        <IndexTable.Cell>{customer}</IndexTable.Cell>
        <IndexTable.Cell>{product}</IndexTable.Cell>
        <IndexTable.Cell>{quality}</IndexTable.Cell>

        <IndexTable.Cell>
          <Badge
            tone={
              status === "Completed"
                ? "success"
                : status === "Processing"
                ? "info"
                : "critical"
            }
          >
            {status}
          </Badge>
        </IndexTable.Cell>

        <IndexTable.Cell>
          {new Date(date).toLocaleString()}
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  const { mode, setMode } = useSetIndexFiltersMode();

  return (
    <Page
      title="Usage Logs"
      subtitle="Detailed log of all virtual try-on requests"
    >
      <LegacyCard>
        <IndexFilters
          queryValue={queryValue}
          queryPlaceholder="Search logs..."
          onQueryChange={handleQueryChange}
          onQueryClear={() => setQueryValue("")}
          sortOptions={sortOptions}
          sortSelected={sortSelected}
          onSort={setSortSelected}
          tabs={tabs}
          selected={selectedTab}
          onSelect={setSelectedTab}
          canCreateNewView
          onCreateNewView={onCreateNewView}
          filters={filters}
          appliedFilters={appliedFilters}
          onClearAll={handleClearAll}
          primaryAction={{
            type: "save-as",
            onAction: onCreateNewView,
            disabled: false,
            loading: false,
          }}
          cancelAction={{
            onAction: handleClearAll,
            disabled: false,
            loading: false,
          }}
          mode={mode}
          setMode={setMode}
        />

        <IndexTable
          condensed={useBreakpoints().smDown}
          resourceName={resourceName}
          itemCount={sortedOrders.length}
          selectedItemsCount={
            allResourcesSelected
              ? "All"
              : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "ID" },
            { title: "Customer" },
            { title: "Product" },
            { title: "Quality" },
            { title: "Status" },
            { title: "Date" },
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </LegacyCard>
    </Page>
  );
}