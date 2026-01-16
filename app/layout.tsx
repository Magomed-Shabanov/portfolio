import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "XPro-Servis | Full-Stack Developer",
    description: "Code • Create • Innovate - Full-Stack разработчик из XPro-Servis",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className="bg-slate-900">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
