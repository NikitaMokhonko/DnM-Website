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
            DnM Trading - Din pålitliga partner för CS2 skins i Sverige
          </h2>
        </div>

        <div>
          <p>
            DnM Trading, också känt under varumärket Skinsmart, är ett svenskt
            bolag med huvudkontor i natursköna Åre. Vi är stolta över att ha ett
            dedikerat team som jobbar aktivt över hela landet med att köpa in
            och sälja CS2 skins. Vår styrka ligger i våra ständigt växande
            samarbeten med både privatpersoner och företag som delar vår passion
            för gaming och e-handel.
          </p>
        </div>

        <div>
          <p>
            Vi arbetar hårt för att erbjuda våra kunder en trygg, snabb och
            smidig tjänst för skinshandel, där transparens och personlig service
            är i fokus. Tack vare vårt nätverk och vår lokala närvaro kan vi
            hantera affärer effektivt och ge konkurrenskraftiga villkor.
          </p>
        </div>

        <div>
          <p>
            Vår vision är att bli den ledande aktören på den svenska marknaden
            för CS2 skins, och vi fortsätter att växa genom nya samarbeten och
            att hela tiden förbättra våra tjänster.
          </p>
        </div>

        <div>
          <p>
            Välkommen att bli en del av DnM Trading och upptäck hur enkelt och
            säkert det kan vara att sälja dina skins!
          </p>
        </div>
      </div>
    </div>
  );
}
