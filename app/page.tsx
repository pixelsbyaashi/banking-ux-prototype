"use client";

import { useEffect, useState } from "react";

type Screen =
  | "login"
  | "home"
  | "accounts"
  | "cards"
  | "transfer"
  | "beneficiaries"
  | "amount"
  | "review"
  | "otp"
  | "success"
  | "addMoney"
  | "bills"
  | "transactions"
  | "rewards"
  | "notifications"
  | "profile"
  | "security"
  | "help";

type IconName =
  | "home"
  | "wallet"
  | "card"
  | "send"
  | "plus"
  | "bill"
  | "activity"
  | "gift"
  | "bell"
  | "user"
  | "shield"
  | "help"
  | "arrow"
  | "back"
  | "check"
  | "lock"
  | "eye"
  | "star"
  | "more";

function Icon({
  name,
  size = 22,
  stroke = 1.8,
}: {
  name: IconName;
  size?: number;
  stroke?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "home") {
    return (
      <svg {...common}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg {...common}>
        <path d="M4 7h15a2 2 0 0 1 2 2v10H5a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h13" />
        <path d="M17 13h4" />
        <circle cx="17" cy="13" r="1" />
      </svg>
    );
  }

  if (name === "card") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18" />
        <path d="M7 15h3" />
      </svg>
    );
  }

  if (name === "send") {
    return (
      <svg {...common}>
        <path d="m21 3-7.5 18-3.5-7-7-3.5L21 3Z" />
        <path d="M10 14 21 3" />
      </svg>
    );
  }

  if (name === "plus") {
    return (
      <svg {...common}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }

  if (name === "bill") {
    return (
      <svg {...common}>
        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    );
  }

  if (name === "activity") {
    return (
      <svg {...common}>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 3-4 3 2 4-6" />
      </svg>
    );
  }

  if (name === "gift") {
    return (
      <svg {...common}>
        <path d="M4 10h16v11H4z" />
        <path d="M3 7h18v3H3z" />
        <path d="M12 7v14" />
        <path d="M12 7H8.5A2.5 2.5 0 1 1 12 4.5V7Z" />
        <path d="M12 7h3.5A2.5 2.5 0 1 0 12 4.5V7Z" />
      </svg>
    );
  }

  if (name === "bell") {
    return (
      <svg {...common}>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (name === "help") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-1.2 1-1.7 1.3-1.7 2.7" />
        <path d="M12 17h.01" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "back") {
    return (
      <svg {...common}>
        <path d="M19 12H5" />
        <path d="m11 6-6 6 6 6" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg {...common}>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    );
  }

  if (name === "eye") {
    return (
      <svg {...common}>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg {...common}>
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </svg>
  );
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("login");

  const [mobile, setMobile] = useState("");
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");
  const [otp, setOtp] = useState("");

  const [balance, setBalance] = useState(45280);
  const [displayBalance, setDisplayBalance] = useState(0);
  const [showBalance, setShowBalance] = useState(true);

  const [loginError, setLoginError] = useState("");
  const [otpError, setOtpError] = useState("");

  const [toast, setToast] = useState("");

  const [selectedBill, setSelectedBill] = useState("");

  const [transactions] = useState([
    {
      name: "Rahul Sharma",
      detail: "HDFC Bank",
      amount: "-Rs. 525",
      type: "sent",
      date: "Today",
      letter: "R",
    },
    {
      name: "Myntra",
      detail: "Shopping",
      amount: "-Rs. 1,240",
      type: "sent",
      date: "Yesterday",
      letter: "M",
    },
    {
      name: "Salary",
      detail: "Credit",
      amount: "+Rs. 48,000",
      type: "received",
      date: "Sep 30",
      letter: "S",
    },
    {
      name: "Swiggy",
      detail: "Food",
      amount: "-Rs. 640",
      type: "sent",
      date: "Sep 29",
      letter: "S",
    },
    {
      name: "Amazon",
      detail: "Shopping",
      amount: "-Rs. 2,350",
      type: "sent",
      date: "Sep 27",
      letter: "A",
    },
  ]);

  useEffect(() => {
    if (screen !== "home") {
      return;
    }

    const start = 0;
    const end = balance;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayBalance(
        Math.floor(start + (end - start) * eased)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [screen, balance]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = setTimeout(() => {
      setToast("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [toast]);

  const navigate = (next: Screen) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = () => {
    if (mobile === "9876543210" && pin === "1234") {
      setLoginError("");
      navigate("home");
      return;
    }

    setLoginError(
      "Demo login: use mobile 9876543210 and PIN 1234."
    );
  };

  const handleAmount = () => {
    if (!amount || Number(amount) <= 0) {
      return;
    }

    if (Number(amount) > balance) {
      setToast("Insufficient balance");
      return;
    }

    navigate("review");
  };

  const handleOTP = () => {
    if (otp !== "123456") {
      setOtpError("For this prototype, enter OTP 123456.");
      return;
    }

    const newBalance = balance - Number(amount);

    setBalance(newBalance);
    setOtpError("");
    navigate("success");
  };

  const resetTransfer = () => {
    setAmount("");
    setOtp("");
    setOtpError("");
    navigate("home");
  };

  const logout = () => {
    setMobile("");
    setPin("");
    setAmount("");
    setOtp("");
    navigate("login");
  };

  const comingSoon = (message: string) => {
    setToast(message);
  };

  const quickAmount = (value: string) => {
    setAmount(value);
  };

  const pageTitle = () => {
    const titles: Record<string, string> = {
      accounts: "Accounts",
      cards: "My cards",
      beneficiaries: "People",
      addMoney: "Add money",
      bills: "Pay bills",
      transactions: "Activity",
      rewards: "Rewards",
      notifications: "Notifications",
      profile: "Profile",
      security: "Security",
      help: "Help centre",
    };

    return titles[screen] || "";
  };

  const innerBack = () => {
    navigate("home");
  };

  const menuItems = [
    {
      label: "Home",
      icon: "home" as IconName,
      screen: "home" as Screen,
    },
    {
      label: "Accounts",
      icon: "wallet" as IconName,
      screen: "accounts" as Screen,
    },
    {
      label: "Cards",
      icon: "card" as IconName,
      screen: "cards" as Screen,
    },
    {
      label: "Activity",
      icon: "activity" as IconName,
      screen: "transactions" as Screen,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F1E7EE] px-3 py-3 sm:px-6 sm:py-6">

      <div className="pointer-events-none fixed left-[4%] top-[8%] h-24 w-24 rounded-full bg-[#F7D7E3] opacity-70 animate-[float_6s_ease-in-out_infinite]" />

      <div className="pointer-events-none fixed right-[5%] top-[15%] h-28 w-28 rounded-full bg-[#D9D1F2] opacity-70 animate-[float_7s_ease-in-out_infinite]" />

      <div className="pointer-events-none fixed bottom-[10%] left-[7%] h-20 w-20 rounded-full bg-[#CDE8F3] opacity-75 animate-[float_8s_ease-in-out_infinite]" />

      <div className="pointer-events-none fixed bottom-[14%] right-[8%] h-16 w-16 rounded-full bg-[#FFF0C7] opacity-80 animate-[float_5s_ease-in-out_infinite]" />

      {toast && (
        <div className="fixed left-1/2 top-5 z-[100] -translate-x-1/2 animate-[toastIn_0.35s_ease-out]">
          <div className="rounded-full bg-[#30282D] px-5 py-3 text-xs font-semibold text-white shadow-2xl">
            {toast}
          </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-[440px] overflow-hidden rounded-[40px] bg-[#FFFDF9] shadow-[0_35px_90px_rgba(90,60,85,0.18)]">

        {/* LOGIN */}

        {screen === "login" && (
          <section className="min-h-[850px] bg-[#FFFDF9] animate-[pageIn_0.45s_ease-out]">

            <div className="relative overflow-hidden rounded-b-[46px] bg-[#F7D7E3] px-7 pb-14 pt-10">

              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#D9D1F2] opacity-80" />

              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#FFF0C7] opacity-90" />

              <div className="relative">

                <div className="flex items-center justify-between">

                  <div className="font-display text-[29px] font-semibold tracking-[-0.05em] text-[#30282D]">
                    my<span className="text-[#B86B8D]">bank</span>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-[#B86B8D] shadow-sm">
                    <Icon name="shield" size={18} />
                  </div>

                </div>

                <div className="mt-20">

                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8E687A]">
                    Your money, your rhythm
                  </p>

                  <h1 className="mt-3 font-display text-[53px] leading-[0.92] tracking-[-0.055em] text-[#30282D]">
                    Banking
                    <br />
                    made{" "}
                    <span className="italic text-[#B86B8D]">
                      pretty.
                    </span>
                  </h1>

                  <p className="mt-5 max-w-[290px] text-sm leading-6 text-[#6C5C64]">
                    Simple, secure and beautifully designed banking
                    for everyday life.
                  </p>

                </div>

              </div>

            </div>

            <div className="px-7 pb-8 pt-8">

              <div className="mb-5">

                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.17em] text-[#806E76]">
                  Mobile number
                </label>

                <input
                  value={mobile}
                  onChange={(event) => {
                    setMobile(
                      event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10)
                    );
                    setLoginError("");
                  }}
                  placeholder="Enter 10-digit mobile"
                  inputMode="numeric"
                  className="w-full rounded-2xl border border-[#EADDE4] bg-[#FFFDF9] px-4 py-4 text-sm text-[#30282D] outline-none transition-all placeholder:text-[#B8AAB1] focus:border-[#B86B8D] focus:ring-4 focus:ring-[#F7D7E3]"
                />

              </div>

              <div className="mb-4">

                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.17em] text-[#806E76]">
                  4-digit PIN
                </label>

                <input
                  value={pin}
                  onChange={(event) => {
                    setPin(
                      event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 4)
                    );
                    setLoginError("");
                  }}
                  type="password"
                  inputMode="numeric"
                  placeholder="Enter PIN"
                  className="w-full rounded-2xl border border-[#EADDE4] bg-[#FFFDF9] px-4 py-4 text-sm tracking-[0.4em] text-[#30282D] outline-none transition-all placeholder:text-[#B8AAB1] focus:border-[#B86B8D] focus:ring-4 focus:ring-[#F7D7E3]"
                />

              </div>

              {loginError && (
                <p className="mb-4 rounded-2xl bg-[#FFF0C7] px-4 py-3 text-[11px] font-medium leading-5 text-[#765F42]">
                  {loginError}
                </p>
              )}

              <button
                onClick={handleLogin}
                className="group flex w-full items-center justify-between rounded-2xl bg-[#B86B8D] px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(184,107,141,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A65C7D] active:scale-[0.98]"
              >
                <span>Enter my bank</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <Icon name="arrow" size={18} />
                </span>
              </button>

              <div className="mt-6 rounded-2xl bg-[#F7F1F4] p-4">

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8D7D85]">
                  <Icon name="shield" size={14} />
                  Demo access
                </div>

                <p className="mt-2 text-xs text-[#776970]">
                  Mobile: 9876543210
                </p>

                <p className="mt-1 text-xs text-[#776970]">
                  PIN: 1234
                </p>

              </div>

            </div>

          </section>
        )}

        {/* MAIN APP SCREENS */}

        {screen !== "login" &&
          screen !== "transfer" &&
          screen !== "amount" &&
          screen !== "review" &&
          screen !== "otp" &&
          screen !== "success" && (
            <section className="min-h-[850px] bg-[#FFFDF9] animate-[pageIn_0.4s_ease-out]">

              {/* HOME */}

              {screen === "home" && (
                <>
                  <header className="relative overflow-hidden rounded-b-[42px] bg-[#D9D1F2] px-6 pb-7 pt-7">

                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#F7D7E3] opacity-80" />

                    <div className="absolute -bottom-20 left-16 h-32 w-32 rounded-full bg-[#CDE8F3] opacity-75" />

                    <div className="relative">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#766B85]">
                            Monday, October 5
                          </p>

                          <h1 className="mt-1 font-display text-3xl font-semibold tracking-[-0.04em] text-[#30282D]">
                            Hi, Aayushi
                          </h1>

                        </div>

                        <button
                          onClick={() => navigate("notifications")}
                          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-[#B86B8D] shadow-sm transition-all hover:scale-105"
                        >
                          <Icon name="bell" size={19} />

                          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#B86B8D] ring-2 ring-white" />
                        </button>

                      </div>

                      <div className="mt-6 rounded-[28px] bg-[#FFFDF9] p-5 shadow-[0_16px_38px_rgba(90,70,110,0.13)]">

                        <div className="flex items-start justify-between">

                          <div>

                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#92858D]">
                              Available balance
                            </p>

                            <div className="mt-2 flex items-center gap-3">

                              <p className="font-display text-[38px] font-semibold tracking-[-0.045em] text-[#30282D]">

                                {showBalance
                                  ? `Rs. ${displayBalance.toLocaleString(
                                      "en-IN"
                                    )}`
                                  : "Rs. •••••"}

                              </p>

                              <button
                                onClick={() =>
                                  setShowBalance(!showBalance)
                                }
                                className="text-[#A3949C]"
                              >
                                <Icon name="eye" size={18} />
                              </button>

                            </div>

                          </div>

                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7D7E3] text-[#B86B8D]">
                            <Icon name="wallet" size={19} />
                          </div>

                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-[#EEE4E8] pt-4">

                          <div>

                            <p className="text-[9px] uppercase tracking-[0.14em] text-[#A1939A]">
                              Savings account
                            </p>

                            <p className="mt-1 text-xs font-semibold text-[#5D5258]">
                              **** 4821
                            </p>

                          </div>

                          <div className="rounded-full bg-[#DDEBDD] px-3 py-1.5 text-[9px] font-bold text-[#5E856B]">
                            Active
                          </div>

                        </div>

                      </div>

                    </div>

                  </header>

                  <div className="px-6 pb-8 pt-7">

                    <div className="mb-5">

                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A08F97]">
                        Quick actions
                      </p>

                      <h2 className="mt-1 font-display text-2xl font-semibold text-[#30282D]">
                        What do you need?
                      </h2>

                    </div>

                    <div className="grid grid-cols-2 gap-3">

                      <button
                        onClick={() => navigate("transfer")}
                        className="group relative overflow-hidden rounded-[25px] bg-[#B86B8D] p-5 text-left text-white shadow-[0_14px_28px_rgba(184,107,141,0.2)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
                      >

                        <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-white/10" />

                        <div className="relative">

                          <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                            <Icon name="send" size={19} />
                          </div>

                          <p className="text-sm font-semibold">
                            Send money
                          </p>

                          <p className="mt-1 text-[10px] text-white/70">
                            Transfer instantly
                          </p>

                        </div>

                      </button>

                      <button
                        onClick={() => navigate("addMoney")}
                        className="group rounded-[25px] bg-[#FFF0C7] p-5 text-left text-[#51463D] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
                      >

                        <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/60">
                          <Icon name="plus" size={20} />
                        </div>

                        <p className="text-sm font-semibold">
                          Add money
                        </p>

                        <p className="mt-1 text-[10px] text-[#8D7C66]">
                          Top up your account
                        </p>

                      </button>

                      <button
                        onClick={() => navigate("bills")}
                        className="rounded-[25px] bg-[#CDE8F3] p-5 text-left text-[#42535B] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
                      >

                        <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/60">
                          <Icon name="bill" size={20} />
                        </div>

                        <p className="text-sm font-semibold">
                          Pay bills
                        </p>

                        <p className="mt-1 text-[10px] text-[#71838C]">
                          Utilities and more
                        </p>

                      </button>

                      <button
                        onClick={() => navigate("rewards")}
                        className="rounded-[25px] bg-[#DDEBDD] p-5 text-left text-[#45584A] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
                      >

                        <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/60">
                          <Icon name="gift" size={20} />
                        </div>

                        <p className="text-sm font-semibold">
                          Rewards
                        </p>

                        <p className="mt-1 text-[10px] text-[#78887C]">
                          1,240 points
                        </p>

                      </button>

                    </div>

                    <div className="mt-8">

                      <div className="mb-4 flex items-center justify-between">

                        <h3 className="font-display text-xl font-semibold text-[#30282D]">
                          Recent activity
                        </h3>

                        <button
                          onClick={() => navigate("transactions")}
                          className="text-[10px] font-bold text-[#B86B8D]"
                        >
                          View all
                        </button>

                      </div>

                      <button
                        onClick={() => navigate("transactions")}
                        className="w-full rounded-[25px] border border-[#EEE4E8] bg-white p-4 text-left shadow-[0_8px_22px_rgba(80,60,75,0.05)] transition-all hover:-translate-y-0.5"
                      >

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7D7E3] font-display font-semibold text-[#B86B8D]">
                              R
                            </div>

                            <div>

                              <p className="text-sm font-semibold text-[#40363B]">
                                Rahul Sharma
                              </p>

                              <p className="mt-0.5 text-[10px] text-[#A2959C]">
                                HDFC Bank - Today
                              </p>

                            </div>

                          </div>

                          <div className="text-right">

                            <p className="text-sm font-semibold text-[#B86B8D]">
                              -Rs. 525
                            </p>

                            <p className="mt-1 text-[9px] text-[#A2959C]">
                              Completed
                            </p>

                          </div>

                        </div>

                      </button>

                    </div>

                    <div className="mt-8">

                      <div className="mb-4 flex items-center justify-between">

                        <h3 className="font-display text-xl font-semibold text-[#30282D]">
                          Explore
                        </h3>

                        <span className="text-[10px] text-[#A3979D]">
                          More for you
                        </span>

                      </div>

                      <div className="flex gap-3 overflow-x-auto pb-2">

                        <button
                          onClick={() => navigate("cards")}
                          className="min-w-[155px] rounded-[24px] bg-[#30282D] p-5 text-left text-white transition-all hover:-translate-y-1"
                        >
                          <Icon name="card" size={21} />
                          <p className="mt-7 text-sm font-semibold">
                            Your cards
                          </p>
                          <p className="mt-1 text-[10px] text-white/60">
                            Manage your cards
                          </p>
                        </button>

                        <button
                          onClick={() => navigate("security")}
                          className="min-w-[155px] rounded-[24px] bg-[#F7D7E3] p-5 text-left text-[#5B414D] transition-all hover:-translate-y-1"
                        >
                          <Icon name="shield" size={21} />
                          <p className="mt-7 text-sm font-semibold">
                            Stay secure
                          </p>
                          <p className="mt-1 text-[10px] text-[#8B6E7B]">
                            Check your security
                          </p>
                        </button>

                      </div>

                    </div>

                    <div className="mt-8 rounded-[26px] bg-[#F7F1F4] p-2">

                      <div className="flex items-center justify-around">

                        {menuItems.map((item) => (

                          <button
                            key={item.label}
                            onClick={() => navigate(item.screen)}
                            className={`flex min-w-[70px] flex-col items-center gap-1.5 rounded-[19px] px-3 py-2.5 transition-all ${
                              screen === item.screen
                                ? "bg-white text-[#B86B8D] shadow-sm"
                                : "text-[#A79AA1] hover:text-[#B86B8D]"
                            }`}
                          >

                            <Icon name={item.icon} size={18} />

                            <span className="text-[9px] font-semibold">
                              {item.label}
                            </span>

                          </button>

                        ))}

                      </div>

                    </div>

                  </div>
                </>
              )}

              {/* GENERIC INNER SCREENS */}

              {screen !== "home" && (
                <div className="px-6 pb-8 pt-7">

                  <div className="flex items-center gap-3">

                    <button
                      onClick={innerBack}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F1F4] text-[#655960] transition-all hover:-translate-x-1"
                    >
                      <Icon name="back" size={18} />
                    </button>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A18F98]">
                        MyBank
                      </p>

                      <h1 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#30282D]">
                        {pageTitle()}
                      </h1>
                    </div>

                  </div>

                  {/* ACCOUNTS */}

                  {screen === "accounts" && (
                    <div className="mt-8 space-y-4">

                      <div className="rounded-[30px] bg-[#D9D1F2] p-6">

                        <div className="flex items-center justify-between">

                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#6F6091]">
                            <Icon name="wallet" size={21} />
                          </div>

                          <span className="rounded-full bg-white/65 px-3 py-1.5 text-[9px] font-bold text-[#6E6381]">
                            PRIMARY
                          </span>

                        </div>

                        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.16em] text-[#776B85]">
                          Savings account
                        </p>

                        <p className="mt-2 font-display text-4xl font-semibold text-[#30282D]">
                          Rs. {balance.toLocaleString("en-IN")}
                        </p>

                        <p className="mt-2 text-xs text-[#756989]">
                          **** 4821
                        </p>

                      </div>

                      <div className="rounded-[28px] bg-[#FFF0C7] p-5">

                        <p className="text-sm font-semibold text-[#55473B]">
                          Smart savings
                        </p>

                        <p className="mt-2 text-xs leading-5 text-[#89775F]">
                          You are doing well. Keep a little aside
                          every month for your goals.
                        </p>

                        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/70">
                          <div className="h-full w-[72%] rounded-full bg-[#B86B8D] animate-[progress_1.2s_ease-out]" />
                        </div>

                        <div className="mt-2 flex justify-between text-[9px] text-[#8C7961]">
                          <span>Monthly goal</span>
                          <span>72%</span>
                        </div>

                      </div>

                      <button
                        onClick={() => navigate("transactions")}
                        className="flex w-full items-center justify-between rounded-[25px] border border-[#EEE4E8] bg-white p-5 transition-all hover:-translate-y-1"
                      >

                        <div className="flex items-center gap-3">

                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#CDE8F3] text-[#527584]">
                            <Icon name="activity" size={19} />
                          </div>

                          <div className="text-left">
                            <p className="text-sm font-semibold text-[#40363B]">
                              Account activity
                            </p>
                            <p className="mt-1 text-[10px] text-[#A2959C]">
                              View all transactions
                            </p>
                          </div>

                        </div>

                        <Icon name="arrow" size={17} />

                      </button>

                    </div>
                  )}

                  {/* CARDS */}

                  {screen === "cards" && (
                    <div className="mt-8">

                      <div className="relative h-[230px] overflow-hidden rounded-[30px] bg-[#30282D] p-6 text-white shadow-2xl">

                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#B86B8D] opacity-50" />

                        <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-[#D9D1F2] opacity-20" />

                        <div className="relative flex h-full flex-col justify-between">

                          <div className="flex items-start justify-between">

                            <div>
                              <p className="font-display text-xl">
                                mybank
                              </p>
                              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/50">
                                platinum debit
                              </p>
                            </div>

                            <Icon name="more" size={20} />

                          </div>

                          <div>

                            <div className="mb-5 h-8 w-11 rounded-lg bg-[#FFF0C7] opacity-80" />

                            <p className="text-sm tracking-[0.3em]">
                              4821&nbsp;&nbsp; 7284&nbsp;&nbsp; 1902
                            </p>

                            <div className="mt-4 flex justify-between">

                              <div>
                                <p className="text-[8px] uppercase text-white/45">
                                  Card holder
                                </p>
                                <p className="mt-1 text-[10px]">
                                  AAYUSHI
                                </p>
                              </div>

                              <div>
                                <p className="text-[8px] uppercase text-white/45">
                                  Expires
                                </p>
                                <p className="mt-1 text-[10px]">
                                  09/29
                                </p>
                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">

                        <button
                          onClick={() => navigate("security")}
                          className="rounded-[24px] bg-[#F7D7E3] p-5 text-left transition-all hover:-translate-y-1"
                        >
                          <Icon name="lock" size={20} />
                          <p className="mt-6 text-sm font-semibold">
                            Freeze card
                          </p>
                          <p className="mt-1 text-[10px] text-[#8B6E7B]">
                            Temporarily lock
                          </p>
                        </button>

                        <button
                          onClick={() =>
                            comingSoon("Card settings opened")
                          }
                          className="rounded-[24px] bg-[#CDE8F3] p-5 text-left transition-all hover:-translate-y-1"
                        >
                          <Icon name="more" size={20} />
                          <p className="mt-6 text-sm font-semibold">
                            Card settings
                          </p>
                          <p className="mt-1 text-[10px] text-[#71838C]">
                            Manage preferences
                          </p>
                        </button>

                      </div>

                    </div>
                  )}

                  {/* BENEFICIARIES */}

                  {screen === "beneficiaries" && (
                    <div className="mt-8">

                      <button
                        onClick={() => navigate("transfer")}
                        className="mb-5 flex w-full items-center justify-between rounded-[24px] bg-[#B86B8D] p-5 text-white shadow-lg transition-all hover:-translate-y-1"
                      >

                        <div>
                          <p className="text-sm font-semibold">
                            Send to someone new
                          </p>
                          <p className="mt-1 text-[10px] text-white/70">
                            Add a new beneficiary
                          </p>
                        </div>

                        <Icon name="plus" size={20} />

                      </button>

                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A1939A]">
                        Saved people
                      </p>

                      <div className="space-y-3">

                        {[
                          ["Rahul Sharma", "HDFC Bank", "R"],
                          ["Meera Kapoor", "ICICI Bank", "M"],
                          ["Ananya Singh", "SBI", "A"],
                        ].map(([name, bank, letter]) => (

                          <button
                            key={name}
                            onClick={() => navigate("amount")}
                            className="flex w-full items-center justify-between rounded-[24px] border border-[#EEE4E8] bg-white p-4 text-left transition-all hover:-translate-y-0.5"
                          >

                            <div className="flex items-center gap-3">

                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7D7E3] font-display text-lg font-semibold text-[#B86B8D]">
                                {letter}
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-[#40363B]">
                                  {name}
                                </p>
                                <p className="mt-1 text-[10px] text-[#A2959C]">
                                  {bank}
                                </p>
                              </div>

                            </div>

                            <Icon name="arrow" size={17} />

                          </button>

                        ))}

                      </div>

                    </div>
                  )}

                  {/* ADD MONEY */}

                  {screen === "addMoney" && (
                    <div className="mt-8">

                      <div className="rounded-[30px] bg-[#FFF0C7] p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#7D694E]">
                          <Icon name="plus" size={21} />
                        </div>

                        <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#806D55]">
                          Add money
                        </p>

                        <h2 className="mt-2 font-display text-3xl font-semibold text-[#40372F]">
                          Choose how to top up.
                        </h2>

                      </div>

                      <div className="mt-5 space-y-3">

                        {[
                          ["UPI", "Instant bank transfer"],
                          ["Debit card", "Add using your card"],
                          ["Net banking", "Transfer from another bank"],
                        ].map(([name, detail]) => (

                          <button
                            key={name}
                            onClick={() =>
                              comingSoon(
                                name + " top up selected"
                              )
                            }
                            className="flex w-full items-center justify-between rounded-[24px] border border-[#EEE4E8] bg-white p-5 text-left transition-all hover:-translate-y-1"
                          >

                            <div>
                              <p className="text-sm font-semibold text-[#40363B]">
                                {name}
                              </p>
                              <p className="mt-1 text-[10px] text-[#A2959C]">
                                {detail}
                              </p>
                            </div>

                            <Icon name="arrow" size={17} />

                          </button>

                        ))}

                      </div>

                    </div>
                  )}

                  {/* BILLS */}

                  {screen === "bills" && (
                    <div className="mt-8">

                      <div className="grid grid-cols-2 gap-3">

                        {[
                          ["Electricity", "E"],
                          ["Mobile", "M"],
                          ["Internet", "I"],
                          ["Water", "W"],
                          ["DTH", "D"],
                          ["Insurance", "S"],
                        ].map(([name, letter]) => (

                          <button
                            key={name}
                            onClick={() => {
                              setSelectedBill(name);
                              comingSoon(
                                name + " bill selected"
                              );
                            }}
                            className={`rounded-[24px] p-5 text-left transition-all hover:-translate-y-1 ${
                              selectedBill === name
                                ? "bg-[#B86B8D] text-white"
                                : "bg-[#F7F1F4] text-[#40363B]"
                            }`}
                          >

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-sm font-bold">
                              {letter}
                            </div>

                            <p className="mt-6 text-sm font-semibold">
                              {name}
                            </p>

                            <p className="mt-1 text-[10px] opacity-60">
                              Pay now
                            </p>

                          </button>

                        ))}

                      </div>

                      <div className="mt-6 rounded-[25px] bg-[#CDE8F3] p-5">

                        <p className="text-sm font-semibold text-[#42535B]">
                          Upcoming payment
                        </p>

                        <div className="mt-4 flex items-center justify-between">

                          <div>
                            <p className="text-xs font-semibold">
                              Home internet
                            </p>
                            <p className="mt-1 text-[10px] text-[#71838C]">
                              Due Oct 8
                            </p>
                          </div>

                          <p className="font-display text-xl font-semibold">
                            Rs. 899
                          </p>

                        </div>

                      </div>

                    </div>
                  )}

                  {/* TRANSACTIONS */}

                  {screen === "transactions" && (
                    <div className="mt-8">

                      <div className="mb-5 rounded-[25px] bg-[#F7F1F4] p-4">

                        <div className="flex items-center justify-between">

                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#A1939A]">
                              September spending
                            </p>
                            <p className="mt-1 font-display text-2xl font-semibold">
                              Rs. 18,420
                            </p>
                          </div>

                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9D1F2] text-[#6E5E91]">
                            <Icon name="activity" size={20} />
                          </div>

                        </div>

                      </div>

                      <div className="space-y-2">

                        {transactions.map((item, index) => (

                          <div
                            key={index}
                            className="flex items-center justify-between rounded-[22px] bg-white p-4 transition-all hover:bg-[#FDF8FA]"
                          >

                            <div className="flex items-center gap-3">

                              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl font-display font-semibold ${
                                item.type === "received"
                                  ? "bg-[#DDEBDD] text-[#5E856B]"
                                  : "bg-[#F7D7E3] text-[#B86B8D]"
                              }`}>
                                {item.letter}
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-[#40363B]">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-[9px] text-[#A2959C]">
                                  {item.detail} - {item.date}
                                </p>
                              </div>

                            </div>

                            <p className={`text-sm font-semibold ${
                              item.type === "received"
                                ? "text-[#5E856B]"
                                : "text-[#B86B8D]"
                            }`}>
                              {item.amount}
                            </p>

                          </div>

                        ))}

                      </div>

                    </div>
                  )}

                  {/* REWARDS */}

                  {screen === "rewards" && (
                    <div className="mt-8">

                      <div className="relative overflow-hidden rounded-[30px] bg-[#DDEBDD] p-6">

                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/40" />

                        <div className="relative">

                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#5E856B]">
                            <Icon name="gift" size={21} />
                          </div>

                          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B8472]">
                            Your points
                          </p>

                          <p className="mt-1 font-display text-5xl font-semibold text-[#304238]">
                            1,240
                          </p>

                          <p className="mt-2 text-xs text-[#6C7F72]">
                            Keep banking to unlock more.
                          </p>

                        </div>

                      </div>

                      <div className="mt-5">

                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A1939A]">
                          Available rewards
                        </p>

                        <div className="space-y-3">

                          {[
                            ["Rs. 100", "Cashback voucher", "800 pts"],
                            ["Rs. 250", "Shopping voucher", "1,500 pts"],
                            ["Rs. 500", "Travel voucher", "3,000 pts"],
                          ].map(([price, name, points]) => (

                            <button
                              key={name}
                              onClick={() =>
                                comingSoon(
                                  "Reward redemption selected"
                                )
                              }
                              className="flex w-full items-center justify-between rounded-[23px] border border-[#EEE4E8] bg-white p-4 text-left transition-all hover:-translate-y-1"
                            >

                              <div>
                                <p className="font-display text-xl font-semibold text-[#30282D]">
                                  {price}
                                </p>
                                <p className="mt-1 text-xs font-semibold">
                                  {name}
                                </p>
                              </div>

                              <span className="rounded-full bg-[#F7D7E3] px-3 py-2 text-[9px] font-bold text-[#B86B8D]">
                                {points}
                              </span>

                            </button>

                          ))}

                        </div>

                      </div>

                    </div>
                  )}

                  {/* NOTIFICATIONS */}

                  {screen === "notifications" && (
                    <div className="mt-8 space-y-3">

                      {[
                        ["Transfer successful", "Rs. 525 sent to Rahul Sharma.", "Today"],
                        ["Card payment", "Rs. 1,240 spent at Myntra.", "Yesterday"],
                        ["Salary credited", "Rs. 48,000 added to your account.", "Sep 30"],
                        ["Security reminder", "Your account is protected.", "Sep 28"],
                      ].map(([title, detail, date], index) => (

                        <button
                          key={index}
                          onClick={() =>
                            comingSoon("Notification opened")
                          }
                          className="flex w-full gap-3 rounded-[24px] border border-[#EEE4E8] bg-white p-4 text-left transition-all hover:-translate-y-0.5"
                        >

                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                            index === 0
                              ? "bg-[#DDEBDD] text-[#5E856B]"
                              : "bg-[#F7D7E3] text-[#B86B8D]"
                          }`}>
                            {index === 0 ? (
                              <Icon name="check" size={19} />
                            ) : (
                              <Icon name="bell" size={18} />
                            )}
                          </div>

                          <div>
                            <div className="flex items-center justify-between gap-5">
                              <p className="text-sm font-semibold text-[#40363B]">
                                {title}
                              </p>
                              <span className="text-[9px] text-[#A2959C]">
                                {date}
                              </span>
                            </div>

                            <p className="mt-1 text-[10px] leading-5 text-[#8E8087]">
                              {detail}
                            </p>
                          </div>

                        </button>

                      ))}

                    </div>
                  )}

                  {/* PROFILE */}

                  {screen === "profile" && (
                    <div className="mt-8">

                      <div className="rounded-[28px] bg-[#F7D7E3] p-6">

                        <div className="flex items-center gap-4">

                          <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-white font-display text-2xl font-semibold text-[#B86B8D]">
                            A
                          </div>

                          <div>
                            <p className="font-display text-2xl font-semibold text-[#40363B]">
                              Aayushi
                            </p>
                            <p className="mt-1 text-[10px] text-[#8B6E7B]">
                              +91 98765 43210
                            </p>
                          </div>

                        </div>

                      </div>

                      <div className="mt-5 space-y-2">

                        {[
                          ["Personal details", "user"],
                          ["Security", "shield"],
                          ["Notifications", "bell"],
                          ["Help centre", "help"],
                        ].map(([label, icon]) => (

                          <button
                            key={label}
                            onClick={() => {
                              if (label === "Security") {
                                navigate("security");
                              } else if (label === "Notifications") {
                                navigate("notifications");
                              } else if (label === "Help centre") {
                                navigate("help");
                              } else {
                                comingSoon(
                                  label + " opened"
                                );
                              }
                            }}
                            className="flex w-full items-center justify-between rounded-[22px] bg-white p-4 transition-all hover:-translate-y-0.5"
                          >

                            <div className="flex items-center gap-3">

                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F1F4] text-[#B86B8D]">
                                <Icon
                                  name={icon as IconName}
                                  size={18}
                                />
                              </div>

                              <span className="text-sm font-semibold text-[#40363B]">
                                {label}
                              </span>

                            </div>

                            <Icon name="arrow" size={16} />

                          </button>

                        ))}

                      </div>

                      <button
                        onClick={logout}
                        className="mt-6 w-full rounded-2xl border border-[#EADDE4] py-4 text-sm font-semibold text-[#B86B8D] transition-all hover:bg-[#F7D7E3]"
                      >
                        Log out
                      </button>

                    </div>
                  )}

                  {/* SECURITY */}

                  {screen === "security" && (
                    <div className="mt-8">

                      <div className="rounded-[28px] bg-[#DDEBDD] p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#5E856B]">
                          <Icon name="shield" size={22} />
                        </div>

                        <p className="mt-6 text-sm font-semibold text-[#405047]">
                          Your account is protected
                        </p>

                        <p className="mt-2 text-xs leading-5 text-[#6C7F72]">
                          Your demo account uses secure login,
                          OTP verification and transaction review.
                        </p>

                      </div>

                      <div className="mt-5 space-y-3">

                        {[
                          ["Login PIN", "Last changed recently"],
                          ["Transaction OTP", "Enabled"],
                          ["Biometric login", "Available"],
                          ["Device security", "Protected"],
                        ].map(([title, detail], index) => (

                          <button
                            key={title}
                            onClick={() =>
                              comingSoon(
                                title + " settings opened"
                              )
                            }
                            className="flex w-full items-center justify-between rounded-[23px] border border-[#EEE4E8] bg-white p-5 text-left"
                          >

                            <div className="flex items-center gap-3">

                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F1F4] text-[#B86B8D]">
                                {index === 0 ? (
                                  <Icon name="lock" size={18} />
                                ) : (
                                  <Icon name="shield" size={18} />
                                )}
                              </div>

                              <div>
                                <p className="text-sm font-semibold">
                                  {title}
                                </p>
                                <p className="mt-1 text-[10px] text-[#A2959C]">
                                  {detail}
                                </p>
                              </div>

                            </div>

                            <Icon name="arrow" size={16} />

                          </button>

                        ))}

                      </div>

                    </div>
                  )}

                  {/* HELP */}

                  {screen === "help" && (
                    <div className="mt-8">

                      <div className="rounded-[28px] bg-[#CDE8F3] p-6">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#527584]">
                          <Icon name="help" size={21} />
                        </div>

                        <p className="mt-6 font-display text-3xl font-semibold text-[#40515A]">
                          How can we help?
                        </p>

                        <p className="mt-2 text-xs leading-5 text-[#71838C]">
                          Find answers or get support for your
                          banking needs.
                        </p>

                      </div>

                      <div className="mt-5 space-y-3">

                        {[
                          "I cannot make a transfer",
                          "I lost my card",
                          "I need to change my PIN",
                          "I want to report a transaction",
                          "Talk to support",
                        ].map((item) => (

                          <button
                            key={item}
                            onClick={() =>
                              comingSoon("Support option selected")
                            }
                            className="flex w-full items-center justify-between rounded-[22px] bg-white p-5 text-left shadow-[0_5px_18px_rgba(70,60,70,0.04)]"
                          >

                            <span className="text-sm font-semibold text-[#40363B]">
                              {item}
                            </span>

                            <Icon name="arrow" size={17} />

                          </button>

                        ))}

                      </div>

                    </div>
                  )}

                </div>
              )}
            </section>
          )}

        {/* TRANSFER */}

        {screen === "transfer" && (
          <section className="min-h-[850px] bg-[#F5EFF3] px-6 pb-8 pt-7 animate-[pageIn_0.4s_ease-out]">

            <button
              onClick={() => navigate("home")}
              className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6D6067] shadow-sm transition-transform hover:-translate-x-1"
            >
              <Icon name="back" size={18} />
            </button>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A18F98]">
              Step 01
            </p>

            <h1 className="mt-2 font-display text-[39px] leading-[0.98] tracking-[-0.045em] text-[#30282D]">
              Who are we
              <br />
              sending to?
            </h1>

            <button
              onClick={() => navigate("amount")}
              className="group mt-8 flex w-full items-center justify-between rounded-[28px] bg-white p-5 text-left shadow-[0_12px_30px_rgba(70,50,65,0.07)] transition-all duration-300 hover:-translate-y-1"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7D7E3] font-display text-xl font-semibold text-[#B86B8D]">
                  R
                </div>

                <div>
                  <p className="font-semibold text-[#40363B]">
                    Rahul Sharma
                  </p>

                  <p className="mt-1 text-xs text-[#A0949B]">
                    HDFC Bank
                  </p>

                  <p className="mt-1 text-[9px] text-[#B0A3A9]">
                    Account ending 7291
                  </p>
                </div>

              </div>

              <Icon
                name="arrow"
                size={18}
                stroke={1.7}
              />

            </button>

            <button
              onClick={() => navigate("beneficiaries")}
              className="mt-3 flex w-full items-center justify-between rounded-[24px] bg-white p-5 text-left transition-all hover:-translate-y-1"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#CDE8F3] text-[#527584]">
                  <Icon name="user" size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Choose another person
                  </p>
                  <p className="mt-1 text-[10px] text-[#A2959C]">
                    View saved beneficiaries
                  </p>
                </div>

              </div>

              <Icon name="arrow" size={17} />

            </button>

            <div className="mt-7 rounded-[25px] bg-[#FFF0C7] p-5">

              <div className="flex items-center gap-2 text-xs font-semibold text-[#6B5C49]">
                <Icon name="shield" size={16} />
                Secure transfer
              </div>

              <p className="mt-2 text-[11px] leading-5 text-[#8C7B63]">
                You will review the transaction before we ask
                for your OTP.
              </p>

            </div>

          </section>
        )}

        {/* AMOUNT */}

        {screen === "amount" && (
          <section className="min-h-[850px] bg-[#F5EFF3] px-6 pb-8 pt-7 animate-[pageIn_0.4s_ease-out]">

            <button
              onClick={() => navigate("transfer")}
              className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6D6067] shadow-sm"
            >
              <Icon name="back" size={18} />
            </button>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A18F98]">
              Step 02
            </p>

            <h1 className="mt-2 font-display text-[39px] leading-[0.98] tracking-[-0.045em] text-[#30282D]">
              How much
              <br />
              are we sending?
            </h1>

            <div className="mt-9 rounded-[30px] bg-white p-6 shadow-[0_15px_35px_rgba(70,50,65,0.07)]">

              <div className="text-center">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A09299]">
                  Amount
                </p>

                <div className="mt-3 flex items-center justify-center">

                  <span className="mr-2 font-display text-3xl text-[#B86B8D]">
                    Rs.
                  </span>

                  <input
                    autoFocus
                    value={amount}
                    onChange={(event) =>
                      setAmount(
                        event.target.value
                          .replace(/\D/g, "")
                          .slice(0, 7)
                      )
                    }
                    placeholder="0"
                    inputMode="numeric"
                    className="w-[220px] bg-transparent text-center font-display text-6xl font-semibold tracking-[-0.06em] text-[#30282D] outline-none placeholder:text-[#D8CDD2]"
                  />

                </div>

              </div>

              <div className="mt-8 grid grid-cols-3 gap-2">

                {["500", "1000", "2000"].map((value) => (

                  <button
                    key={value}
                    onClick={() => quickAmount(value)}
                    className={`rounded-xl py-3 text-[10px] font-bold transition-all ${
                      amount === value
                        ? "bg-[#B86B8D] text-white"
                        : "bg-[#F7F1F4] text-[#6C5C64] hover:bg-[#F7D7E3] hover:text-[#B86B8D]"
                    }`}
                  >
                    Rs. {value}
                  </button>

                ))}

              </div>

            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-[10px]">
              <span className="text-[#9B8E95]">
                Available
              </span>

              <span className="font-semibold text-[#40363B]">
                Rs. {balance.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              onClick={handleAmount}
              disabled={!amount || Number(amount) <= 0}
              className="mt-5 flex w-full items-center justify-between rounded-2xl bg-[#B86B8D] px-5 py-4 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(184,107,141,0.22)] transition-all hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span>Continue</span>
              <Icon name="arrow" size={18} />
            </button>

          </section>
        )}

        {/* REVIEW */}

        {screen === "review" && (
          <section className="min-h-[850px] bg-[#F5EFF3] px-6 pb-8 pt-7 animate-[pageIn_0.4s_ease-out]">

            <button
              onClick={() => navigate("amount")}
              className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6D6067] shadow-sm"
            >
              <Icon name="back" size={18} />
            </button>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A18F98]">
              Step 03
            </p>

            <h1 className="mt-2 font-display text-[39px] leading-[0.98] tracking-[-0.045em] text-[#30282D]">
              Check everything
              <br />
              looks right.
            </h1>

            <div className="mt-8 overflow-hidden rounded-[30px] bg-white shadow-[0_15px_35px_rgba(70,50,65,0.07)]">

              <div className="bg-[#D9D1F2] px-6 py-8 text-center">

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#756989]">
                  You are sending
                </p>

                <p className="mt-2 font-display text-5xl font-semibold tracking-[-0.05em] text-[#30282D]">
                  Rs. {Number(amount).toLocaleString("en-IN")}
                </p>

              </div>

              <div className="space-y-5 p-6">

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#9B8E95]">
                    From
                  </span>

                  <span className="text-sm font-semibold">
                    **** 4821
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#9B8E95]">
                    To
                  </span>

                  <span className="text-sm font-semibold">
                    Rahul Sharma
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#9B8E95]">
                    Bank
                  </span>

                  <span className="text-sm font-semibold">
                    HDFC Bank
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#9B8E95]">
                    Account
                  </span>

                  <span className="text-sm font-semibold">
                    **** 7291
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-[#EEE4E8] pt-5">
                  <span className="text-[10px] text-[#9B8E95]">
                    Transfer fee
                  </span>

                  <span className="text-sm font-semibold text-[#5E856B]">
                    Free
                  </span>
                </div>

              </div>

            </div>

            <button
              onClick={() => navigate("otp")}
              className="mt-5 flex w-full items-center justify-between rounded-2xl bg-[#B86B8D] px-5 py-4 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(184,107,141,0.22)] transition-all hover:-translate-y-1"
            >
              <span>Confirm transfer</span>
              <Icon name="arrow" size={18} />
            </button>

          </section>
        )}

        {/* OTP */}

        {screen === "otp" && (
          <section className="min-h-[850px] bg-[#F5EFF3] px-6 pb-8 pt-7 animate-[pageIn_0.4s_ease-out]">

            <button
              onClick={() => navigate("review")}
              className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6D6067] shadow-sm"
            >
              <Icon name="back" size={18} />
            </button>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A18F98]">
              Step 04
            </p>

            <h1 className="mt-2 font-display text-[39px] leading-[0.98] tracking-[-0.045em] text-[#30282D]">
              One little
              <br />
              security check.
            </h1>

            <div className="mt-8 rounded-[30px] bg-[#FFF0C7] p-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#8A7353]">
                <Icon name="lock" size={21} />
              </div>

              <p className="mt-5 text-sm font-semibold text-[#5D4F42]">
                Enter your 6-digit OTP
              </p>

              <p className="mt-2 text-[11px] leading-5 text-[#8B7965]">
                For this prototype, use OTP 123456.
              </p>

            </div>

            <input
              autoFocus
              value={otp}
              onChange={(event) => {
                setOtp(
                  event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 6)
                );
                setOtpError("");
              }}
              placeholder="000000"
              inputMode="numeric"
              className="mt-6 w-full rounded-2xl border border-[#EADDE4] bg-white px-4 py-5 text-center text-2xl font-semibold tracking-[0.35em] text-[#30282D] outline-none transition-all placeholder:text-[#D0C3C9] focus:border-[#B86B8D] focus:ring-4 focus:ring-[#F7D7E3]"
            />

            {otpError && (
              <p className="mt-3 rounded-2xl bg-[#F7D7E3] px-4 py-3 text-[11px] text-[#8B536D]">
                {otpError}
              </p>
            )}

            <button
              onClick={handleOTP}
              disabled={otp.length !== 6}
              className="mt-5 flex w-full items-center justify-between rounded-2xl bg-[#B86B8D] px-5 py-4 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(184,107,141,0.22)] transition-all hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span>Verify and send</span>
              <Icon name="check" size={18} />
            </button>

          </section>
        )}

        {/* SUCCESS */}

        {screen === "success" && (
          <section className="flex min-h-[850px] flex-col items-center justify-center bg-[#DDEBDD] px-7 text-center animate-[pageIn_0.45s_ease-out]">

            <div className="relative">

              <div className="absolute -inset-5 rounded-full bg-white/40 animate-ping" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_18px_40px_rgba(70,100,75,0.15)] animate-[successPop_0.7s_ease-out]">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDEBDD] text-[#5E856B]">
                  <Icon name="check" size={34} stroke={2.3} />
                </div>

              </div>

            </div>

            <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6A8771]">
              Transfer complete
            </p>

            <h1 className="mt-3 font-display text-[48px] font-semibold tracking-[-0.05em] text-[#304238]">
              Money sent.
            </h1>

            <p className="mt-4 max-w-[280px] text-sm leading-6 text-[#63766A]">
              Rs. {Number(amount).toLocaleString("en-IN")} has
              been sent successfully to Rahul Sharma.
            </p>

            <div className="mt-8 w-full rounded-[25px] bg-white/80 p-5 text-left">

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#8A9A8F]">
                  Recipient
                </span>

                <span className="text-sm font-semibold text-[#405047]">
                  Rahul Sharma
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] text-[#8A9A8F]">
                  Amount
                </span>

                <span className="font-display text-xl font-semibold text-[#405047]">
                  Rs. {Number(amount).toLocaleString("en-IN")}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] text-[#8A9A8F]">
                  Status
                </span>

                <span className="rounded-full bg-[#DDEBDD] px-3 py-1 text-[9px] font-bold text-[#5E856B]">
                  Successful
                </span>
              </div>

            </div>

            <button
              onClick={resetTransfer}
              className="mt-6 flex w-full items-center justify-between rounded-2xl bg-[#6C9B7C] px-5 py-4 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(108,155,124,0.22)] transition-all hover:-translate-y-1"
            >
              <span>Back to home</span>
              <Icon name="arrow" size={18} />
            </button>

          </section>
        )}

      </div>
    </main>
  );
}