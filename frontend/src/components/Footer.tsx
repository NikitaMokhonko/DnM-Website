export default function Footer() {
  return (
    <footer className="border-t-1 bg-black text-white text-center pt-4 pb-2">
      <p className="text-sm">
        © 2025 DnM Trading AB. All rights reserved.
        <br />
        DnM Trading and SkinSmart are not affiliated with Valve Corp.
      </p>
      <p className="text-lg pt-2">
        Site created by{" "}
        <a
          className="underline underline-offset-4 text-blue-200"
          href="https://github.com/NikitaMokhonko"
        >
          Nikita Mokhonko
        </a>
      </p>
    </footer>
  );
}
