import type { Metadata } from "next";
import { DM_Sans, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500"],
});

const rubik = Rubik({
	subsets: ["latin"],
	variable: "--font-display",
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: "Gary Jensen | Software Engineer",
	description:
		"Software engineer building production-grade web apps, mobile apps, and AI tools.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full scroll-smooth antialiased dark",
				dmSans.variable,
				rubik.variable,
			)}
		>
			<body className="min-h-full bg-background text-foreground">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
