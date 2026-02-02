import { createFileRoute } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="bg-black pt-5 pb-15 sm:pb-0 min-h-screen max-w-[1920px] mx-auto">
      <div className="max-w-[95%] sm:max-w-5xl mx-auto text-white p-10 rounded-2xl animate-fade-in-up shadow-xl">
        <h1 className="text-4xl text-center">
          Var <span className="underline">smart</span> - sälj dina skins till{" "}
          <span className="underline">SkinSmart</span>!
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-center pt-12">
          Med över <span className="text-green-500">10</span> års erfarenhet och
          över <span className="text-green-500">8.000</span> utförda affärer
          hjälper vi dig sälja dina skins snabbt, tryggt och utan krångel.{" "}
          <br />
          <br /> Kontakta oss nedan för att få{" "}
          <span className="underline">Sveriges bästa service</span>!
        </p>
      </div>

      <div className="flex flex-row items-center justify-between pt-10 sm:pt-0 max-w-full">
        <div className="hidden 2xl:block">
          <div className="w-[34rem] h-[34rem] flex flex-row items-center justify-center">
            <img
              className="relative w-24 h-24 xl:w-40 xl:h-40 rounded-xl animate-float1 bg-radial p-4 from-yellow-500 from-20% via-black to-black backdrop-blur-xl"
              style={{ left: "20%", top: "-40%", zIndex: 4 }}
              alt="CS2 AWP Dragon Lore"
              src="awp-dragon-lore.png"
            />
            <img
              className="relative w-24 h-24 xl:w-40 xl:h-40 rounded-xl animate-float2 bg-radial p-7 from-red-700 from-20% via-black to-black backdrop-blur-xl"
              style={{ left: "25%", top: "-70%", zIndex: 3 }}
              alt="CS2 Desert Eagle Printstream"
              src="m9-autotronic.png"
            />
            <img
              className="relative w-24 h-24 xl:w-40 xl:h-40 rounded-xl animate-float3 bg-radial p-7 from-pink-500 from-20% via-black to-black backdrop-blur-xl"
              style={{ left: "30%", top: "-40%", zIndex: 2 }}
              alt="CS2 Vice Gloves"
              src="gloves-vice.png"
            />
            <img
              className="relative w-24 h-24 xl:w-40 xl:h-40 rounded-xl animate-float4 bg-radial p-4 from-green-800 from-20% via-black to-black backdrop-blur-xl"
              style={{ left: "-35%", top: "-5%", zIndex: 1 }}
              alt="CS2 AK-47 Wild Lotus "
              src="ak47-wild-lotus.png"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-5 sm:space-x-10 pb-25 mx-auto">
          <div className="flex flex-col items-center space-y-5">
            <h1 className="text-white text-xl">Messenger</h1>
            <a
              href="https://m.me/61580631302030"
              className="border-1 cursor-pointer border-white bg-white rounded-4xl transition-transform duration-500 hover:scale-105"
            >
              <img
                src="messenger-logo.svg"
                alt="Messenger Logo"
                className="w-25 h-25 sm:w-50 sm:h-50 p-5 animate-fade-in"
              />
            </a>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h1 className="text-white text-xl">Email</h1>
            <a
              href="mailto:Dnmtrading@gmail.com"
              className="border-1 cursor-pointer border-white bg-white rounded-4xl transition-transform duration-500 hover:scale-105"
            >
              <img
                src="email-logo.svg"
                alt="Email Logo"
                className="w-25 h-25 sm:w-50 sm:h-50 p-5 animate-fade-in"
              />
            </a>
          </div>
        </div>

        <div className="hidden 2xl:block">
          <div className="w-[34rem] h-[34rem] flex flex-row items-center justify-center">
            <img
              className="relative w-24 h-24 xl:w-40 xl:h-40 rounded-xl animate-float1 bg-radial p-5 from-yellow-700 from-20% via-black to-black backdrop-blur-xl"
              style={{ left: "0%", top: "-40%", zIndex: 4 }}
              alt="CS2 Butterfly Knife Tiger Tooth"
              src="butterfly-tiger-tooth.png"
            />
            <img
              className="relative w-24 h-24 xl:w-40 xl:h-40 rounded-xl animate-float2 bg-radial p-5 from-white from-10% via-black to-black backdrop-blur-xl"
              style={{ left: "5%", top: "-70%", zIndex: 3 }}
              
              alt="CS2 M4A1-S Printstream"
              src="m4a1s-printstream.png"
            />
            <img
              className="relative w-24 h-24 xl:w-40 xl:h-40 rounded-xl animate-float3 bg-radial p-6 from-red-600 from-20% via-black to-black backdrop-blur-xl"
              style={{ left: "10%", top: "-40%", zIndex: 2 }}
              alt="CS2 Crimson Kimono Gloves"
              src="gloves-crimson-kimono.png"
            />
            <img
              className="relative w-24 h-24 xl:w-40 xl:h-40 rounded-xl animate-float4 bg-radial p-5 from-blue-400 from-20% via-black to-black backdrop-blur-xl"
              style={{ left: "-55%", top: "-5%", zIndex: 1 }}
              alt="CS2 M4A4 Emperor"
              src="m4a4-emperor.png"
            />
          </div>
        </div>
      </div>

      <style>
        {`
    @keyframes float1 {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-10px) scale(1.05); }
    }
    @keyframes float2 {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-15px) scale(1.08); }
    }
    @keyframes float3 {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-8px) scale(1.03); }
    }
    @keyframes float4 {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-12px) scale(1.06); }
    }
    .animate-float1 { animation: float1 4.3s ease-in-out infinite; }
    .animate-float2 { animation: float2 3.9s ease-in-out infinite; }
    .animate-float3 { animation: float3 3.8s ease-in-out infinite; }
    .animate-float4 { animation: float4 4.4s ease-in-out infinite; }
  `}
      </style>

      <style>
        {`
          @keyframes floatFade {
            0%, 100% {
              transform: translateY(0) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-10px) scale(1.02);
              opacity: 1;
            }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both; }

          @keyframes slide-in-left {
            0% { opacity: 0; transform: translateX(-40px);}
            100% { opacity: 1; transform: translateX(0);}
          }
          .animate-slide-in-left { animation: slide-in-left 1s 0.2s cubic-bezier(.4,0,.2,1) both; }

          @keyframes fade-in {
            0% { opacity: 0;}
            100% { opacity: 1;}
          }
          .animate-fade-in { animation: fade-in 1.5s 0.5s both; }
        `}
      </style>
    </div>
  );
}
