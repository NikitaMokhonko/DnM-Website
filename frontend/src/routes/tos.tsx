import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tos")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-4">Användarvillkor</h1>
        <p className="mb-4">
          Välkommen till SkinSmart! Genom att använda vår tjänst och webbplats
          godkänner du följande villkor som reglerar din användning.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Tjänstens användning
        </h2>
        <p className="mb-4">
          SkinSmart erbjuder handel med CS2 skins. Användare måste vara minst 18
          år och följa alla lagar som gäller för digital handel. All användning
          av tjänsten sker på egen risk.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Konto och säkerhet</h2>
        <p className="mb-4">
          Du ansvarar för att dina kontouppgifter är korrekta och för att hålla
          ditt konto säkert. Delning av konton eller inloggningsuppgifter är
          inte tillåtet.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Betalningar och avgifter
        </h2>
        <p className="mb-4">
          Betalningar sker enligt angivna villkor. SkinSmart tar inga avgifter
          för transaktioner via vår plattform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Ångerrätt och återbetalning
        </h2>
        <p className="mb-4">
          Observera att skins som köpts eller sålts via vår plattform inte
          omfattas av ångerrätt enligt lag. Eventuella frågor om transaktioner
          hanteras via vår support.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Ansvarsbegränsning</h2>
        <p className="mb-4">
          SkinSmart ansvarar inte för indirekta skador eller förluster som kan
          uppstå genom användning av tjänsten. Vi garanterar inte att tjänsten
          är fri från avbrott eller fel.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Integritet och dataskydd
        </h2>
        <p className="mb-4">
          Vi hanterar personuppgifter i enlighet med vår integritetspolicy.
          Genom att använda tjänsten samtycker du till vår behandling av
          personuppgifter.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Ändringar i villkoren
        </h2>
        <p className="mb-4">
          Vi förbehåller oss rätten att ändra dessa villkor. Ändringar
          kommuniceras via webbplatsen och träder i kraft omedelbart.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
        <p className="mb-4">
          För frågor om dessa villkor, kontakta oss via{" "}
          <a
            className="text-blue-600 underline"
            href="https://m.me/61580631302030"
            target="_blank"
            rel="noreferrer"
          >
            Messenger
          </a>
          .
        </p>
      </div>
    </div>
  );
}
