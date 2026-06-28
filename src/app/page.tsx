import Dither from "@/components/Dither";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import styles from "@/components/portfolio.module.css";

export default function Page() {
	return (
		<div className={`${styles.page} min-h-screen`}>
			<div className="absolute inset-0 -z-10">
				<Dither
					waveColor={[
						0.2901960784313726, 0.4980392156862745,
						0.7843137254901961,
					]}
					disableAnimation={false}
					enableMouseInteraction
					mouseRadius={0.3}
					colorNum={7.1}
					waveAmplitude={0.1}
					waveFrequency={2.7}
					waveSpeed={0.05}
				/>
				<div
					className="pointer-events-none absolute inset-0"
					style={{
						background:
							"linear-gradient(180deg, rgba(5,6,10,0.2) 0%, rgba(5,6,10,0.65) 100%)",
					}}
				/>
			</div>

			<Header />

			<div className="relative h-[95vh] flex flex-col justify-center pt-[80px]">
				<div className="pointer-events-none inset-0 flex items-center">
					<div className="mx-auto w-full max-w-5xl px-6">
						<div className="pointer-events-auto">
							<Hero />
						</div>
					</div>
				</div>
			</div>

			<main className="relative mx-auto max-w-7xl px-6">
				<div className="grid grid-cols-1 gap-12  lg:grid-cols-[1fr_300px] lg:gap-16 xl:grid-cols-[1fr_340px]">
					<Projects />
					<About />
				</div>
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
