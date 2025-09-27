import { createFileRoute } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="bg-[url('/landing-bg.svg')] bg-top bg-cover pt-10 sm:pt-30 min-h-[80vh]">
      <div className="max-w-[80%] sm:max-w-5xl mx-auto p-10 bg-white rounded-2xl animate-fade-in-up shadow-xl border-1 border-white">
        <h1 className="text-4xl text-center">
          Var <span className="underline">smart</span> - sälj dina skins till{" "}
          <span className="underline">SkinSmart</span>!
        </h1>
        <p className="text-2xl max-w-2xl mx-auto text-center pt-12">
          Med över <span className="text-green-500">10</span> års erfarenhet och
          över <span className="text-green-500">8.000</span> utförda affärer
          hjälper vi dig sälja dina skins snabbt, tryggt och utan krångel.{" "}
          <br />
          <br /> Kontakta oss nedan för att få{" "}
          <span className="underline">Sveriges bästa service</span>!
        </p>
      </div>

      <div className="flex flex-row items-center justify-evely gap-8 md:px-10 xl:px-20 pt-10 sm:pt-20 mx-auto max-w-full sm:max-w-[90%]">
        <div className="hidden 2xl:block flex-1 justify-center">
          <img
            className=" w-110 h-170"
            alt="SkinSmart Character"
            src="character.png"
          />
        </div>

        <div className="flex flex-1 justify-center space-x-5 sm:space-x-10 pb-10">
          <div className="flex flex-col items-center space-y-5">
            <h1 className="text-white text-xl">Messenger</h1>
            <a
              href="https://m.me/61580631302030"
              className="border-1 cursor-pointer border-white bg-gradient-to-t to-white from-[#57f9fc] rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105"
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
              className="border-1 cursor-pointer border-white bg-gradient-to-t to-white from-[#57f9fc] rounded-4xl shadow-lg transition-transform duration-500 hover:scale-105"
            >
              <img
                src="email-logo.svg"
                alt="Email Logo"
                className="w-25 h-25 sm:w-50 sm:h-50 p-5 animate-fade-in"
              />
            </a>
          </div>
        </div>

        <div className="hidden 2xl:block flex-1 justify-center">
          <div className="relative w-[34rem] h-[34rem]">
            <img
              className="absolute w-24 h-24 xl:w-40 xl:h-40 rounded-xl shadow-xl animate-float1"
              style={{ left: "30%", top: "20%", zIndex: 4 }}
              alt="CS2 Butterfly Knife Lore"
              src="butterfly-lore.webp"
            />
            <img
              className="absolute w-24 h-24 xl:w-40 xl:h-40 rounded-xl shadow-xl animate-float2"
              style={{ left: "65%", top: "0%", zIndex: 3 }}
              alt="CS2 Desert Eagle Printstream"
              src="desert-eagle-printstream.webp"
            />
            <img
              className="absolute w-24 h-24 xl:w-40 xl:h-40 rounded-xl shadow-xl animate-float3"
              style={{ left: "85%", top: "35%", zIndex: 2 }}
              alt="CS2 AK-47 Asiimov"
              src="ak47-asiimov.webp"
            />
            <img
              className="absolute w-24 h-24 xl:w-40 xl:h-40 rounded-xl shadow-xl animate-float4"
              style={{ left: "50%", top: "55%", zIndex: 1 }}
              alt="CS2 King Snake Gloves"
              src="gloves-king-snake.webp"
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
