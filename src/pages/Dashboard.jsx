import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Coins, Wallet, PlayCircle, MonitorPlay } from "lucide-react";

import useApp from "../hooks/useApp";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsCard from "../components/StatsCard";
import AvailableAds from "../components/AvailableAds";
import AdPlayerModal from "../components/AdPlayerModal";
import EmptyState from "../components/EmptyState";
import DailyProgress from "../components/DailyProgress";
import AdsSkeleton from "../components/AdsSkeleton";
import Toast from "../components/Toast";
import Confetti from "../components/Confetti";
import AnimatedNumber from "../components/AnimatedNumber";

const EarningsChart = lazy(() => import("../components/EarningsChart"));
const EarningsHistory = lazy(() => import("../components/EarningsHistory"));
const DailyStreak = lazy(() => import("../components/DailyStreak"));
const BonusAd = lazy(() => import("../components/BonusAd"));

function Dashboard() {
  const { ads, balance, today, lifetime, history, dispatch } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState({ message: "", visible: false });
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const completedCount = ads.filter((ad) => ad.status === "completed").length;
  const remainingAds = ads.length - completedCount;

  const handleReward = useCallback(
    (ad) => {
      dispatch({ type: "COMPLETE_AD", ad });
      setToast({ message: `+${ad.reward} VEs earned!`, visible: true });
      setConfetti(true);
    },
    [dispatch],
  );

  useEffect(() => {
    if (!toast.visible) return undefined;

    const timer = setTimeout(
      () => setToast({ message: "", visible: false }),
      3200,
    );
    return () => clearTimeout(timer);
  }, [toast.visible]);

  useEffect(() => {
    if (!confetti) return undefined;

    const timer = setTimeout(() => setConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, [confetti]);

  const stats = [
    {
      title: "Today's Earnings",
      value: <AnimatedNumber value={today.earned} suffix=" VEs" />,
      subtitle: "Your daily earnings",
      icon: Wallet,
      color: "#22c55e",
    },
    {
      title: "Lifetime Earnings",
      value: <AnimatedNumber value={lifetime} />,
      subtitle: "All time earnings",
      icon: Coins,
      color: "#fbbf24",
    },
    {
      title: "Ads Watched Today",
      value: <AnimatedNumber value={today.watched} />,
      subtitle: "Completed today",
      icon: PlayCircle,
      color: "#a78bfa",
    },
    {
      title: "Remaining Ads",
      value: <AnimatedNumber value={remainingAds} />,
      subtitle: "Available to watch",
      icon: MonitorPlay,
      color: "#38bdf8",
    },
  ];

  return (
    <div className="app">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="main-content">
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
          balance={balance}
        />
        <section className="dashboard-content">
          <HeroSection />
          <div className="stats-grid">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>
          <DailyProgress completed={completedCount} target={10} />

          {isLoading ? (
            <AdsSkeleton />
          ) : remainingAds > 0 ? (
            <AvailableAds ads={ads} onWatch={setSelectedAd} />
          ) : (
            <EmptyState
              allCompleted={ads.length > 0}
              onReset={() => dispatch({ type: "RESET" })}
            />
          )}

          <Suspense fallback={<div className="skeleton-block" />}>
            <BonusAd />
            <div className="analytics-grid">
              <EarningsChart />
              <EarningsHistory history={history} />
            </div>
            <DailyStreak />
          </Suspense>
        </section>
      </main>

      {selectedAd && (
        <AdPlayerModal
          ad={selectedAd}
          onClose={() => setSelectedAd(null)}
          onComplete={handleReward}
        />
      )}
      <Toast message={toast.message} visible={toast.visible} />
      <Confetti active={confetti} />
    </div>
  );
}

export default Dashboard;
