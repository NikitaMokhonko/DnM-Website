import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="border-b-1 border-white bg-black">
        <div className="flex justify-between items-center">
          <div
            onClick={() => navigate({ to: "/" })}
            className="flex flex-row px-2 py-2 justify-center sm:justify-start space-x-2 sm:space-x-5 items-center"
          >
            <img
              alt="SkinSmart Logo"
              className="w-16 h-16 cursor-pointer"
              src="skinsmart-logo-round.png"
            />
            <h1 className="text-4xl text-white cursor-pointer nav-link">SkinSmart</h1>
          </div>
          <div className="hidden sm:block">
            <button
              className="text-white cursor-pointer text-2xl m-4 nav-link"
              onClick={() => navigate({ to: "/contact" })}
            >
              Kontakt
            </button>
            <button
              className="text-white cursor-pointer text-2xl m-4 nav-link"
              onClick={() => navigate({ to: "/faq" })}
            >
              FAQ
            </button>
            <button
              className="text-white cursor-pointer text-2xl m-4 nav-link"
              onClick={() => navigate({ to: "/about" })}
            >
              Om Oss
            </button>
            <button
              className="text-white cursor-pointer text-2xl m-4 nav-link"
              onClick={() => navigate({ to: "/partner" })}
            >
              Bli Partner
            </button>
            <button
              className="text-white cursor-pointer text-2xl m-4 nav-link"
              onClick={() => navigate({ to: "/tos" })}
            >
              Användarvillkor
            </button>
          </div>
          <div className="mr-3 md:hidden">
            <button
              className="md:hidden flex flex-col space-y-1 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden text-xl flex flex-col bg-black text-white border-t border-white p-4 space-y-5">
            <button
              onClick={() => {
                navigate({ to: "/contact" });
                setMenuOpen(false);
              }}
            >
              Kontakt
            </button>
            <button
              onClick={() => {
                navigate({ to: "/faq" });
                setMenuOpen(false);
              }}
            >
              FAQ
            </button>
            <button
              onClick={() => {
                navigate({ to: "/about" });
                setMenuOpen(false);
              }}
            >
              Om Oss
            </button>
            <button
              onClick={() => {
                navigate({ to: "/partner" });
                setMenuOpen(false);
              }}
            >
              Bli Partner
            </button>
            <button
              onClick={() => {
                navigate({ to: "/tos" });
                setMenuOpen(false);
              }}
            >
              Användarvillkor
            </button>
          </div>
        )}
      </div>

      <div className="border-b-1 border-white hidden sm:block">
        <Marquee
          speed={25}
          autoFill={true}
          className="py-1 bg-[#0B2E42] text-white"
        >
          Sälj Dina Skins Idag ✅ Trygg Och Smidig Service ✅ Snabba Betalningar
          Via Swish ✅&nbsp;
        </Marquee>
      </div>
    </header>
  );
}
