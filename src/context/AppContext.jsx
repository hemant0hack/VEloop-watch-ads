import { createContext, useEffect, useMemo, useReducer } from "react";

import { adsData } from "../data/adsData";
import { initialHistory } from "../data/earningsData";

const AppContext = createContext(null);
const todayKey = () => new Date().toISOString().slice(0, 10);

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (error) {
    console.error(`Storage read error for ${key}:`, error);
    return fallback;
  }
}

function restoreAds() {
  const saved = readStorage("vl_ads", adsData);
  if (!Array.isArray(saved)) return adsData;

  return saved.map((ad) => ({
    ...ad,
    icon: adsData.find((source) => source.id === ad.id)?.icon,
  })).filter((ad) => ad.icon);
}

function createInitialState() {
  const savedToday = readStorage("vl_today", {
    date: todayKey(),
    earned: 96,
    watched: 5,
  });

  return {
    ads: restoreAds(),
    balance: readStorage("vl_balance", 2450),
    lifetime: readStorage("vl_lifetime", 12450),
    today:
      savedToday.date === todayKey()
        ? savedToday
        : { date: todayKey(), earned: 0, watched: 0 },
    history: readStorage("vl_history", initialHistory),
    lastRewardId: readStorage("vl_last_reward", null),
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "COMPLETE_AD": {
      const ad = action.ad;
      if (state.lastRewardId === ad.id) return state;
      if (state.ads.some((item) => item.id === ad.id && item.status === "completed")) {
        return state;
      }

      return {
        ...state,
        ads: state.ads.map((item) =>
          item.id === ad.id ? { ...item, status: "completed" } : item,
        ),
        balance: state.balance + ad.reward,
        lifetime: state.lifetime + ad.reward,
        today: {
          ...state.today,
          earned: state.today.earned + ad.reward,
          watched: state.today.watched + 1,
        },
        lastRewardId: ad.id,
        history: [
          {
            id: Date.now(),
            name: ad.name,
            category: ad.category,
            reward: ad.reward,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
          ...state.history,
        ].slice(0, 20),
      };
    }
    case "RESET":
      return {
        ...createInitialState(),
        ads: adsData,
        balance: 2450,
        lifetime: 12450,
        today: { date: todayKey(), earned: 96, watched: 5 },
        history: initialHistory,
        lastRewardId: null,
      };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, createInitialState);

  useEffect(() => {
    const values = {
      vl_ads: state.ads,
      vl_balance: state.balance,
      vl_lifetime: state.lifetime,
      vl_today: state.today,
      vl_history: state.history,
      vl_last_reward: state.lastRewardId,
    };

    Object.entries(values).forEach(([key, value]) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Storage save error for ${key}:`, error);
      }
    });
  }, [state]);

  const value = useMemo(() => ({ ...state, dispatch }), [state]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
export { AppContext };
