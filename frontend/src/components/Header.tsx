import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <header>
      <div className="border-b-1 border-[#0B2E42] bg-[#0B2E42]">
        <div className="flex flex-row px-2 py-2 justify-center sm:justify-start space-x-2 sm:space-x-5 items-center">
          <img
            alt="SkinSmart Logo"
            className="w-16 h-16 cursor-pointer"
            src="skinsmart-logo.png"
          />
          <h1 className="text-4xl text-white cursor-pointer">SkinSmart</h1>
        </div>
      </div>

      <div className="border-b-1 border-[#0B2E42]">
        <Marquee
          speed={25}
          autoFill={true}
          className="py-1 bg-white text-black"
        >
          Sälj Dina Skins Idag 💸 Trygg Och Smidig Service ✅ Snabba Betalningar
          Via Swish 💸&nbsp;
        </Marquee>
      </div>
    </header>
  );
}
