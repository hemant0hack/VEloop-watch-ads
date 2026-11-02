import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { weeklyEarnings } from "../data/earningsData";
import styles from "./EarningsChart.module.css";

function EarningsChart() {
  return (
    <section className={styles.chartCard}>
      <div className={styles.heading}>
        <div>
          <h3>Weekly Earnings</h3>
          <p>Your earning activity this week</p>
        </div>
        <span>Last 7 Days</span>
      </div>

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weeklyEarnings}>
            <defs>
              <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9871f5" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#9871f5" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid
              stroke="#302c45"
              strokeDasharray="4 4"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              stroke="#88839e"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#88839e"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <Tooltip
              contentStyle={{
                background: "#211d35",
                border: "1px solid #594584",
                borderRadius: "10px",
                color: "#ffffff",
              }}
              formatter={(value) => [`${value} VEs`, "Earnings"]}
            />
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#a78bfa"
              strokeWidth={3}
              fill="url(#earningsGradient)"
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default EarningsChart;
