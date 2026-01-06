"use client";

import Sidebar from "./components/sidebar";
import StatsModal from "./components/statsModal";
import WelcomeModal from "./components/welcomeModal";
import Container from "./components/Container";
import { useInitializeApp } from "./hooks/useInitializeApp";

export default function Home() {
  useInitializeApp();

  return (
    <>
      <WelcomeModal />
      <StatsModal />
      <main className="flex flex-1">
        <Sidebar />
        <Container />
      </main>
    </>
  );
}