"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, site } from "@/data/portfolio";
import styles from "./portfolio.module.css";

export function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
				scrolled
					? "border-white/10 bg-[var(--ink)]/80 backdrop-blur-md"
					: "border-transparent bg-transparent"
			}`}
		>
			<div className="mx-auto flex h-16 max-w-360 items-center justify-between px-6">
				<a
					href="#"
					className={`${styles.display} group leading-[0.88] tracking-normal text-xl text-white transition-opacity hover:opacity-80 sm:text-2xl font-semibold flex items-center gap-3 font-rubik!`}
				>
					<Image
						src="/icon.png"
						alt="Gary Jensen"
						width={40}
						height={40}
						quality={100}
						priority
						sizes="40px"
						className="h-10 w-10 rounded-xl object-cover  transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
					/>
					Gary Jensen
				</a>
				<nav
					className={`${styles.sans} flex items-center gap-8 text-base`}
				>
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="hidden text-neutral-300 transition-colors hover:text-white sm:block"
						>
							{link.label}
						</a>
					))}
					<a
						href={`mailto:${site.email}`}
						className={`${styles.sans} group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_6px_20px_-10px_rgba(74,127,200,0.75)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_14px_34px_-10px_rgba(110,160,230,0.85)] active:translate-y-0 sm:text-[0.9rem]`}
						style={{
							background:
								"linear-gradient(180deg,#7aa8ea 0%,#4a7fc8 100%)",
						}}
					>
						<span>Say hello</span>
						<span
							aria-hidden="true"
							className="relative block h-[1em] w-[1em] overflow-hidden"
						>
							<span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full group-hover:-translate-y-full">
								↗
							</span>
							<span className="absolute inset-0 flex -translate-x-full translate-y-full items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0">
								↗
							</span>
						</span>
					</a>
				</nav>
			</div>
		</header>
	);
}
