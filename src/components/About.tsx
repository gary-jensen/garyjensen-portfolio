import { about, skills } from "@/data/portfolio";
import styles from "./portfolio.module.css";

export function About() {
	return (
		<aside
			id="about"
			className="lg:sticky lg:top-28 self-start border-l-2 border-[var(--signal)] pl-6"
		>
			<p className={styles.label}>/ About</p>
			<h2 className={`${styles.display} mt-4 text-3xl text-white`}>
				Gary Jensen
			</h2>

			<p
				className={`${styles.sans} mt-5 text-base leading-relaxed text-neutral-200 md:text-lg`}
			>
				{about.bio}
			</p>

			<dl className="mt-10 space-y-6">
				{about.highlights.map((item) => (
					<div key={item.label}>
						<dt className={`${styles.label} text-neutral-400`}>
							{item.label}
						</dt>
						<dd
							className={`${styles.display} mt-2 text-4xl text-white`}
						>
							{item.value}
						</dd>
					</div>
				))}
			</dl>

			<div className="mt-10 border-t border-white/15 pt-8">
				<p className={styles.label}>Education</p>
				<p
					className={`${styles.sans} mt-3 text-base text-white md:text-lg`}
				>
					Electrical &amp; Computer Engineering
				</p>
				<p
					className={`${styles.sans} text-base text-neutral-400 md:text-lg`}
				>
					BCIT · 2019–2021
				</p>
			</div>

			<div className="mt-10 border-t border-white/15 pt-8">
				<p className={`${styles.label} mb-4`}>Stack</p>
				<div className="flex flex-wrap gap-2">
					{skills.map((s) => (
						<span
							key={s}
							className={`${styles.mono} rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-neutral-300 md:text-sm`}
						>
							{s}
						</span>
					))}
				</div>
			</div>
		</aside>
	);
}
