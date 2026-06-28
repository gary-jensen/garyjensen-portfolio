import Image from "next/image";
import { projects } from "@/data/portfolio";
import styles from "./portfolio.module.css";
import { cn } from "@/lib/utils";

const PROJECT_IMAGE_SIZES =
	"(max-width: 640px) calc(100vw - 3rem), (max-width: 1280px) calc(50vw - 3rem), 440px";

export function Projects() {
	return (
		<section id="projects">
			<div className="mb-14">
				<p className={styles.label}>/ Projects</p>
				<h2
					className={`${styles.display} mt-4 text-5xl text-white sm:text-6xl`}
				>
					Things I&apos;ve built
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
				{projects.map((project) => (
					<a
						key={project.title}
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col"
					>
						<div className="relative aspect-[3852/2253] w-full overflow-hidden rounded-2xl ring-1 ring-white/15 transition-shadow duration-300 group-hover:ring-[var(--signal)]/60">
							<Image
								src={project.image}
								alt={project.title}
								fill
								quality={90}
								sizes={PROJECT_IMAGE_SIZES}
								style={{
									objectFit: "cover",
									objectPosition: "top",
								}}
								className="transition-transform duration-500 group-hover:scale-[1.04]"
							/>
							<div
								className="absolute inset-0"
								style={{
									background:
										"linear-gradient(to top, rgba(5,6,10,0.92) 0%, rgba(5,6,10,0.25) 55%, transparent 100%)",
								}}
							/>
							<div className="absolute inset-x-0 bottom-0 p-6">
								<h3
									className={`${styles.display} mt-2 text-3xl font-medium text-white sm:text-[2.5rem]`}
								>
									{project.title}
								</h3>
							</div>
							<span
								className={`${styles.mono} absolute right-4 top-4 rounded-full bg-[var(--ink)]/90 px-3 py-1.5 text-xs uppercase tracking-wider text-[var(--signal-bright)] opacity-0 transition-opacity group-hover:opacity-100`}
							>
								Visit ↗
							</span>
						</div>

						<div className="mt-5 px-1">
							<p
								className={cn(
									styles.label,
									"pb-3 text-[15px]! font-semibold!",
								)}
							>
								{project.blurb}
							</p>
							<p
								className={`${styles.sans} text-base leading-relaxed text-neutral-200 md:text-lg`}
							>
								{project.summary}
							</p>
							<div className="mt-5 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className={`${styles.mono} rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-neutral-300 md:text-sm`}
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
