import {
  Card,
  Text,
  BlockStack,
} from "@shopify/polaris";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { date: "2020-04-01", sales: 100 },
  { date: "2020-04-02", sales: 120 },
  { date: "2020-04-03", sales: 1000 },
  { date: "2020-04-04", sales: 0 },
  { date: "2020-04-05", sales: 30 },
  { date: "2020-04-06", sales: 10 },
];

export default function AnalyticsChart() {
  return (
   
      <BlockStack gap="300">
        
       

        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer>
            <AreaChart data={data}>
              
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Area
                type="monotone"
                dataKey="sales"
                stroke="#008060"
                fill="#008060"
                fillOpacity={0.15}
                strokeWidth={3}
              />

            </AreaChart>
          </ResponsiveContainer>
        </div>

      </BlockStack>

  );
}