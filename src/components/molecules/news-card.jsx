import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { ExternalLink } from "lucide-react";

export function NewsCard({ title, summary, timestamp, sentiment = 'neutral', link }) {
  const sentimentMap = {
    positive: { label: 'Positive', variant: 'positive' },
    negative: { label: 'Negative', variant: 'negative' },
    neutral: { label: 'Neutral', variant: 'neutral' },
  };

  const s = sentimentMap[sentiment] || sentimentMap.neutral;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="group h-full border-border/60 bg-background/60 backdrop-blur-sm transition-all hover:shadow-lg hover:border-primary/40">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <Badge variant={s.variant}>{s.label}</Badge>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </CardHeader>
        <CardContent className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-4">{summary}</p>
          <div className="flex items-center gap-2 pt-2 text-primary">
            <span className="text-sm font-medium">Read more</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
