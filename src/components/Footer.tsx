import { site } from "@/data/portfolio";
import styles from "./portfolio.module.css";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer
			className={`${styles.mono} flex flex-col items-start justify-between gap-3 border-t border-white/15 py-10 text-base text-neutral-400 sm:flex-row sm:items-center`}
		>
			<p className="text-neutral-300">© {year} Gary Jensen</p>
			<p className="flex items-center gap-2">
				<span className="h-2 w-2 rounded-full bg-[var(--signal-bright)]" />
				{site.location}
			</p>
		</footer>
	);
}
