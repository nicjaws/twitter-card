import "./App.css";
import "./index.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <>
      <TwitterFollowCard format={format} userName="nicjaws" isFollowing>
        Nicolas corbalan
      </TwitterFollowCard>
      <TwitterFollowCard format={format} isFollowing={false} userName="pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
    </>
  );
}
