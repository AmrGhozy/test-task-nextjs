import type { Metadata } from "next";
import "@/styles/globals.css";
import StoreProvider from "@/components/providers/StoreProvider";
import { Suspense } from "react";
import RouteLoader from "@/components/loaders/RoutesLoader";

export const metadata: Metadata = {
  title: "Test Task Next.js",
  description: "This is a test task for Next.js",
  creator: "Amr Ghozy Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
      </head>
      <body className={`light disable`}>
        <Suspense fallback={<RouteLoader />}>
          <StoreProvider>{children}</StoreProvider>
        </Suspense>
      </body>
    </html>
  );
}
