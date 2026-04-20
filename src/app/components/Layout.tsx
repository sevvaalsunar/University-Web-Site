import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0A1628]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />
      <main className="pt-0 lg:pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
