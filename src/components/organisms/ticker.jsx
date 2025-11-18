import React from "react";
import { Card, CardContent } from "../ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

const symbols = [
  { key: 'reliance', label: '💹 Reliance' },
  { key: 'tcs', label: '💻 TCS' },
  { key: 'hdfc', label: '🏦 HDFC Bank' },
  { key: 'icici', label: '🏦 ICICI Bank' },
  { key: 'infy', label: '🧠 Infosys' },
  { key: 'hul', label: '🧼 HUL' },
  { key: 'sbi', label: '🏛️ SBI' },
  { key: 'airtel', label: '📡 Airtel' },
  { key: 'bajaj', label: '💳 Bajaj Finance' },
  { key: 'lt', label: '🏗️ L&T' },
];

export function Ticker() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/market-data`);
      if (!res.ok) throw new Error('Failed to fetch market data');
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [fetchData]);

  const Row = ({ reverse = false }) => (
    <div className={`flex items-center gap-8 whitespace-nowrap animate-[marquee_60s_linear_infinite] ${reverse ? 'direction-rtl' : ''}`}>
      {symbols.map((s) => {
        const item = data[s.key] || {};
        const isUp = item.trend === 'up';
        return (
          <div key={s.key} className="flex items-center gap-2 px-4 py-1 rounded-full bg-muted/60">
            <span className="font-medium">{item.symbol || s.label}</span>
            <span className="text-sm text-muted-foreground">{item.value || '--'}</span>
            <span className={`flex items-center text-sm ${isUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {isUp ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
              {item.change || '--'}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <Card className="relative overflow-hidden bg-muted">
      <CardContent className="p-4">
        {loading ? (
          <div className="text-sm text-muted-foreground">Loading market data…</div>
        ) : (
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-muted to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted to-transparent" />
            <div className="flex flex-col gap-3">
              <Row />
              <Row reverse />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
