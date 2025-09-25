import { createFileRoute } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="bg-[url('/landing-bg.svg')] bg-top bg-cover min-h-screen pt-10 sm:pt-30">
      <div className="max-w-[80%] sm:max-w-5xl mx-auto p-10 border-1 border-black bg-white rounded-2xl animate-fade-in-up">
        <h1 className="text-4xl text-center">
          Var <span className="underline">smart</span> - sälj dina skins till{" "}
          <span className="underline">SkinSmart</span>!
        </h1>
        <p className="text-2xl max-w-2xl mx-auto text-center pt-10">
          Med över <span className="text-green-500">10</span> års erfarenhet och
          över <span className="text-green-500">10.000</span> utförda affärer
          hjälper vi dig sälja dina skins snabbt, tryggt och utan krångel.{" "}
          <br />
          <br /> Kontakta oss nedan för att få{" "}
          <span className="underline">Sveriges bästa service</span>!
        </p>
      </div>

      <div className="mx-auto py-10 sm:py-20 align-middle justify-center sm:justify-between flex flex-row space-x-10 max-w-[80%] sm:max-w-xl">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-white">Messenger</h1>
          <a
            href="https://m.me/61580631302030"
            className=" border-1 cursor-pointer border-[#0B2E42] bg-white rounded-4xl"
          >
            <img
              src="messenger-logo.svg"
              alt="Messenger Logo"
              className="w-20 h-20 sm:w-50 sm:h-50 p-5 animate-fade-in"
            />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-white">Email</h1>
          <a
            href="mailto:Dnmtrading@gmail.com"
            className=" border-1 cursor-pointer border-[#0B2E42] bg-white rounded-4xl"
          >
            <img
              src="email-logo.svg"
              alt="Email Logo"
              className="w-20 h-20 sm:w-50 sm:h-50 p-5 animate-fade-in"
            />
          </a>
        </div>
      </div>


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
