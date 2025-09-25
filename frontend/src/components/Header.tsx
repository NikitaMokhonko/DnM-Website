import { useNavigate } from "@tanstack/react-router";
import Marquee from "react-fast-marquee";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="border-b-1 border-[#0B2E42] bg-[#0B2E42]">
        <div className="flex flex-row px-2 py-2 space-x-5 items-center cursor-pointer">
          <img alt="SkinSmart Logo" className="w-16 h-16" src="skinsmart-logo.png" />
          <h1 className="text-4xl text-white">SkinSmart</h1>
        </div>
      </div>

      <div className="border-b-1 border-[#0B2E42]">
        <Marquee
          speed={25}
          autoFill={true}
          className="py-1 bg-white text-black"
        >
          Sälj Dina Skins Idag 💸 Snabb Och Smidig Service ✅ Smarta Betalningar
          Via Swish 💸&nbsp;
        </Marquee>
      </div>
    </header>
  );
}
