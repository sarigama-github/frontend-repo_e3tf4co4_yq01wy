import React from "react";
import Spline from "@splinetool/react-spline";
import { DotPattern } from "./components/atoms/dot-pattern";
import { Header } from "./components/organisms/header";
import { Ticker } from "./components/organisms/ticker";
import { SearchBar } from "./components/molecules/search-bar";
import { NewsFeed } from "./components/organisms/news-feed";

function App() {
  const [query, setQuery] = React.useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative h-[50vh] w-full">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background pointer-events-none" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-4">
        <DotPattern className="opacity-30" />
        <Header />
        <div className="space-y-6 pb-16">
          <Ticker />
          <SearchBar value={query} onChange={setQuery} />
          <NewsFeed />
        </div>
      </main>
    </div>
  );
}

export default App;