import React from "react";
import { NewsCard } from "../molecules/news-card";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";

const mockNews = [
  {
    id: 1,
    title: "Reliance announces new green energy initiative",
    summary:
      "Reliance Industries unveiled a multi-billion dollar investment in renewable energy, aiming to expand solar and battery storage capabilities across India.",
    timestamp: "5 mins ago",
    sentiment: "positive",
    link: "https://www.bseindia.com/"
  },
  {
    id: 2,
    title: "TCS secures major European banking contract",
    summary:
      "Tata Consultancy Services has signed a long-term digital transformation deal with a leading European bank, boosting its BFSI portfolio.",
    timestamp: "12 mins ago",
    sentiment: "positive",
    link: "https://www.bseindia.com/"
  },
  {
    id: 3,
    title: "HDFC Bank faces temporary outage in net banking services",
    summary:
      "Customers reported intermittent issues accessing net banking; the bank stated services are being restored with enhanced resilience.",
    timestamp: "20 mins ago",
    sentiment: "neutral",
    link: "https://www.bseindia.com/"
  },
];

export function NewsFeed() {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState(mockNews);
  const [lastUpdated, setLastUpdated] = React.useState(new Date());

  // Placeholder for future fetch
  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Latest Corporate News</h2>
        <Badge variant="secondary">Last updated {lastUpdated.toLocaleTimeString()}</Badge>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl border p-6 text-center text-muted-foreground">No news found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((n) => (
            <NewsCard key={n.id} {...n} />
          ))}
        </div>
      )}
    </section>
  );
}
