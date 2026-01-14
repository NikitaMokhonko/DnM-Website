import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto text-white space-y-6">
        <h1 className="text-3xl font-bold">Kontakta oss</h1>
        <p>
          Har du frågor, funderingar eller behöver hjälp? Vi finns här för dig
          och svarar snabbt.
        </p>
        <p>
          Det snabbaste sättet att få svar är via vår Messenger:{" "}
          <a
            className="text-blue-600 underline"
            href="https://m.me/61580631302030"
            target="_blank"
            rel="noreferrer"
          >
            Skicka meddelande på Messenger
          </a>
          .
        </p>
        <p>
          Vill du hellre kontakta oss via e-post går det bra på:{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:dnmtrading@gmail.com"
          >
            dnmtrading@gmail.com
          </a>
          .
        </p>
        <p>Vi svarar så fort vi kan och ser fram emot att hjälpa dig!</p>
      </div>
    </div>
  );
}
