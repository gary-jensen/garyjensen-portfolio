import Image from "next/image";
import { site, skills } from "@/data/portfolio";
import styles from "./portfolio.module.css";

export function Hero() {
	return (
		<section className="select-none my-auto">
			<div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16 xl:gap-24">
				<div
					className={`${styles.drift} order-first shrink-0 md:order-last w-[42%] sm:w-[36%] md:w-[250px] lg:w-[270px] xl:w-[360px]`}
					style={{
						animationDelay: "100ms",
						aspectRatio: "1617 / 2346",
					}}
				>
					<div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
						<Image
							src="/gary.jpeg"
							alt="Gary Jensen"
							fill
							className="object-cover object-top"
							style={{
								filter: "grayscale(15%) contrast(1.05) brightness(0.94)",
							}}
							priority
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(to top, rgba(5,6,10,0.6), transparent 50%)",
							}}
						/>
					</div>
				</div>

				<div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left">
					<p
						className={`${styles.drift} ${styles.label} mb-6 md:mb-8 xl:mb-10`}
						style={{ animationDelay: "0ms" }}
					>
						<span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--signal-bright)]" />
						Software Engineer · {site.location}
					</p>

					<h1
						className={`${styles.drift} ${styles.display} leading-[0.88] text-white font-rubik!`}
						style={{
							animationDelay: "60ms",
							fontSize: "clamp(3rem, 10vw, 9rem)",
						}}
					>
						Gary
						<br />
						Jensen
					</h1>

					<p
						className={`${styles.drift} ${styles.sans} mt-6 max-w-[28rem] text-lg leading-relaxed text-neutral-200 md:mt-8 md:text-xl xl:mt-10 xl:max-w-[38rem] xl:text-2xl`}
						style={{ animationDelay: "120ms" }}
					>
						I love building useful software that make a difference
						in this world!
					</p>

					<div
						className={`${styles.drift} mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 md:justify-start xl:mt-12`}
						style={{ animationDelay: "180ms" }}
					>
						<a
							href="#projects"
							className={`${styles.mono} inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base text-black transition-transform hover:scale-[1.03] active:scale-[0.98] md:px-8 md:py-4 md:text-lg`}
						>
							See the work
							<span aria-hidden="true">↓</span>
						</a>
						<a
							href={`mailto:${site.email}`}
							className={`${styles.mono} inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base text-white transition-colors hover:border-white/60 hover:bg-white/5 md:px-8 md:py-4 md:text-lg`}
						>
							Get in touch
						</a>
					</div>
				</div>
			</div>

			<div
				className={`${styles.drift} mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] md:mt-16 xl:mt-24`}
				style={{ animationDelay: "240ms" }}
			>
				<div
					className={`marquee-track gap-8 ${styles.mono} text-sm uppercase tracking-[0.15em] text-neutral-400 md:text-base`}
				>
					{[...skills, ...skills].map((s, i) => (
						<span key={i} className="flex items-center gap-8">
							{s}
							<span className="text-[var(--signal-bright)]">
								+
							</span>
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
