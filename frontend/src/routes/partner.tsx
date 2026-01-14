import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/partner")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Bli partner / Jobba hos oss</h1>

        <p>
          Vill du bli en del av vårt växande team eller samarbeta som partner?
          Vi letar ständigt efter drivna och engagerade personer och företag som
          vill vara med och utveckla marknaden för CS2 skins trading.
        </p>

        <div>
          <h2 className="text-xl font-semibold">
            Vad erbjuder vi som partner?
          </h2>
          <p>
            Som partner får du ta del av exklusiva kampanjer, tävlingar och
            möjligheter att växa tillsammans med oss. Vi värdesätter långsiktiga
            samarbeten baserade på förtroende och gemensam framgång.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Jobba hos oss</h2>
          <p>
            Är du sugen på att jobba hos oss? Oavsett om du är expert på
            kundsupport, marknadsföring, utveckling eller annat, vill vi gärna
            höra från dig. Vi erbjuder en dynamisk arbetsplats där du får vara
            med och forma framtidens skinshandel.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Intresserad?</h2>
          <p>
            Tveka inte att kontakta oss för både partnerskap och lediga jobb.
            Skicka ett meddelande via{" "}
            <a
              className="text-blue-400 underline"
              href="https://m.me/61580631302030"
              target="_blank"
              rel="noreferrer"
            >
              Messenger
            </a>{" "}
            eller maila{" "}
            <a
              className="text-blue-400 underline"
              href="mailto:dnmtrading@gmail.com"
            >
              dnmtrading@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
