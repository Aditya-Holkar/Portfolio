import { memo, useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";
import { useThemeStore } from "../Zu-Store/Store";
import { FiSun, FiMoon } from "react-icons/fi";

const Clock = memo(() => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const update = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-fit rounded-full border px-3 py-1.5 font-mono text-xs tracking-wider"
      style={{
        borderColor: "var(--border-subtle)",
        color: "var(--text-muted)",
      }}
    >
      Pune: {currentTime}
    </div>
  );
});

export const Navbar = () => {
  const [but, setBut] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const linksRef = useRef([]);
  const sidebarRef = useRef(null);
  const brandRef = useRef(null);

  useEffect(() => {
    if (but) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [but]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(brandRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 });
      gsap.fromTo(
        linksRef.current.filter(Boolean),
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.4,
        },
      );
    }, sidebarRef);
    return () => ctx.revert();
  }, []);

  const navLinks = [{ to: "/", label: "Home" }];

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 left-0 z-50 flex h-screen w-56 flex-col justify-between border-r p-6 backdrop-blur-xl max-md:hidden"
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
          backgroundImage: "url('/100-90-5-monochrome.png')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "multiply",
          borderColor: "var(--border-subtle)",
        }}
      >
        <div>
          <h1 ref={brandRef} className="mb-10 text-xl font-bold tracking-tight">
            Aditya Holkar
          </h1>
          <nav className="flex flex-col gap-5">
            {navLinks.map((link, i) => (
              <Link key={link.to} to={link.to} ref={(el) => (linksRef.current[i] = el)} className="group relative text-sm font-medium tracking-widest uppercase transition-colors" style={{ color: "var(--text-muted)" }}>
                <span className="absolute top-1/2 -left-5 h-px w-4 -translate-y-1/2 bg-[var(--text)] opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-100" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <button onClick={toggleTheme} className="flex cursor-pointer items-center gap-2 text-sm transition-opacity hover:opacity-70" style={{ color: "var(--text-muted)" }}>
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
          </button>
          <Clock />
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div
        className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-4 backdrop-blur-xl min-md:hidden"
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
          backgroundImage: "url('/100-90-5-monochrome.png')",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "multiply",
        }}
      >
        <span className="font-bold tracking-tight">Aditya Holkar</span>
        <div className="max-md:block hidden"><Clock /></div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-colors hover:opacity-70">
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-colors hover:opacity-70" onClick={() => setBut(!but)}>
            <div className="flex flex-col gap-[5px]">
              <span className={`block h-[2px] w-5 bg-current transition-all duration-300 ${but ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-[2px] w-5 bg-current transition-all duration-300 ${but ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] w-5 bg-current transition-all duration-300 ${but ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {but && (
        <div
          className="fixed inset-0 z-40 flex h-screen w-full flex-col p-6 pt-24 min-md:hidden"
          style={{
            backgroundColor: "var(--bg)",
            backgroundImage: "url('/100-90-5-monochrome.png')",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundBlendMode: "multiply",
          }}
        >
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setBut(false)} className="border-b py-5 text-lg font-bold tracking-wide" style={{ borderColor: "var(--border-subtle)" }}>
              {link.label}
            </Link>
          ))}
          <div className="mt-auto">
            <Clock />
          </div>
        </div>
      )}
    </>
  );
};
