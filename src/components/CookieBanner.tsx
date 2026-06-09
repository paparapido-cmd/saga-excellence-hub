import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground p-4 md:p-6 shadow-lg">
      <div className="container-wide flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/90 max-w-2xl">
          We use cookies to analyze website traffic and optimize your experience.
          By accepting, you consent to our use of Google Analytics cookies.
          See our{" "}
          <a href="/privacy" className="underline hover:text-accent transition-colors">
            Privacy Policy
          </a>{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm border border-primary-foreground/40 rounded hover:border-primary-foreground transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors font-medium"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
