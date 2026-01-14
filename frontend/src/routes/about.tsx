import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto text-white space-y-6">
        <h1 className="text-3xl font-bold">Om Oss</h1>

        <div>
          <h2 className="text-xl font-semibold">
            Hur säljer jag mina CS2 skins till er?
          </h2>
          <p>
            Skicka ett meddelande via vår Facebook-länk så hjälper vi dig steg
            för steg att slutföra försäljningen snabbt och tryggt.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Hur snabbt får jag betalt?</h2>
          <p>
            Betalningen sker direkt via Swish så snart affären är slutförd.
            Vanligtvis får du pengarna inom några minuter efter
            överenskommelsen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Vilket pris får jag för mina skins?
          </h2>
          <p>
            Vi betalar mellan 90–94% av uu-priser beroende på marknad och
            skinnens skick.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Är det säkert att sälja skins till er?
          </h2>
          <p>
            Ja, vi har många nöjda kunder och lägger stor vikt vid säkerhet,
            transparens och snabb hantering.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Åldersgräns</h2>
          <p>
            Du behöver vara minst 18 år för att sälja, eller ha målsmans
            tillstånd om du är yngre.
          </p>
        </div>
      </div>
    </div>
  );
}
