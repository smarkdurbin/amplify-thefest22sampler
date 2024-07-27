import type { Metadata } from "next";
import { Providers } from "./providers";
import App from "./_components/App";

export const metadata: Metadata = {
  metadataBase: new URL("https://thefest22.unofficialsampler.app/"),
  title: "The Fest 22 // Unofficial Sampler",
  description: "This site is not affiliated with The Fest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <App>{children}</App>
        </Providers>
      </body>
    </html>
  );
}
