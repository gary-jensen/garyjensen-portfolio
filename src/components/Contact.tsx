import { site } from "@/data/portfolio";
import styles from "./portfolio.module.css";

const links = [
	{ label: "Email", href: `mailto:${site.email}`, value: site.email },
	{ label: "GitHub", href: site.social.github, value: "@gary-jensen" },
];

export function Contact() {
	return (
		<section
			id="contact"
			className="my-12 rounded-2xl border border-white/15 bg-[var(--ink)]/70 px-8 py-16 backdrop-blur-sm sm:px-14 sm:py-24"
		>
			<p className={styles.label}>/ Contact</p>

			<h2
				className={`${styles.display} mt-6 max-w-3xl text-5xl leading-[1.02] text-white sm:text-7xl`}
			>
				Let&apos;s build something.
			</h2>

			<p
				className={`${styles.sans} mt-6 max-w-lg text-lg leading-relaxed text-neutral-200 md:text-xl`}
			>
				Open to full-time roles and interesting projects. Always happy
				to talk shop.
			</p>

			<ul className="mt-14 space-y-0 divide-y divide-white/15 border-y border-white/15">
				{links.map((link) => (
					<li key={link.label}>
						<a
							href={link.href}
							target={
								link.label !== "Email" ? "_blank" : undefined
							}
							rel={
								link.label !== "Email"
									? "noopener noreferrer"
									: undefined
							}
							className="group flex items-center justify-between gap-6 py-7"
						>
							<span>
								<span className={styles.label}>
									{link.label}
								</span>
								<span
									className={`${styles.sans} mt-2 block text-xl text-white transition-colors group-hover:text-[var(--signal-bright)] md:text-2xl`}
								>
									{link.value}
								</span>
							</span>
							<span className="text-2xl text-[var(--signal-bright)] transition-transform group-hover:translate-x-1">
								↗
							</span>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
