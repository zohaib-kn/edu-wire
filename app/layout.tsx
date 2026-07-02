import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/context/ModalContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationModal from "@/components/ui/ConsultationModal";
import FloatingHelpdesk from "@/components/ui/FloatingHelpdesk";
import AutoOpenConsultationModal from "@/components/ui/AutoOpenConsultationModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edu-Wire: Overseas Consultant Pvt Ltd | Study Abroad Consultancy",
  description: "Looking to study abroad? We offer expert study abroad consultancy services for students wanting to study in USA, UK, Canada, Australia, MBBS in Europe and more.",
  keywords: ["study abroad consultants", "study MBBS abroad", "MBBS in Russia", "MBBS in Italy", "MBBS in Europe", "overseas education", "study in USA", "study in UK", "student visa consultants", "best abroad education consultants", "IMAT coaching", "NEET alternative"],
  openGraph: {
    type: "website",
    siteName: "Edu-Wire",
    title: "Edu-Wire: Overseas Consultant Pvt Ltd | Study Abroad Consultancy",
    description: "Looking to study abroad? We offer expert study abroad consultancy services for students wanting to study in USA, UK, Canada, Australia, MBBS in Europe and more.",
    images: [
      {
        url: "https://edu-wire.com/assets/images/Edu-wire-log.png",
        width: 1200,
        height: 630,
        alt: "Edu-Wire Overseas Consultant Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col bg-slate-50 text-slate-800`}>
        <ModalProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <ConsultationModal />
          <FloatingHelpdesk />
          <AutoOpenConsultationModal />
        </ModalProvider>
      </body>
    </html>
  );
}
