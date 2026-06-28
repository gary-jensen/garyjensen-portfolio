export const site = {
	name: "Gary Jensen",
	title: "Software Engineer",
	tagline: "Building products from idea to production.",
	email: "gary-jensen@outlook.com",
	location: "Vancouver, BC",
	social: {
		github: "https://github.com/garyjensen",
	},
};

export const about = {
	bio: "I've been programming since 2013, building just for the love of it. I started building full-time in 2024, looking to build experience and gain as much knowledge as possible.",
	highlights: [
		{ label: "Years coding", value: "13+" },
		{ label: "Projects Shipped this Year", value: "4" },
		{ label: "Stack", value: "Full-Stack" },
	],
};

export const skills = [
	"TypeScript",
	"React / Next.js",
	"React Native",
	"Node.js",
	"Python",
	"PostgreSQL",
	"Supabase",
	"Prisma",
	"AI Integration",
	"Stripe",
	"iOS / Expo",
	"C / C++",
];

export const projects = [
	{
		title: "BitSchool",
		image: "/bitschool.png",
		blurb: "Duolingo for coding",
		summary:
			"Gamified coding lessons with a sandboxed in-browser code runner that runs and validates the user's code",
		tags: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
		href: "https://thebitschool.com",
	},
	{
		title: "SlideFire",
		image: "/slidefire.png",
		blurb: "TikTok Automation",
		summary:
			"AI generates the script, images, and slideshows, then posts straight to TikTok. Stripe billing and analytics built in.",
		tags: ["Next.js", "TypeScript", "TikTok API", "Stripe", "AI"],
		href: "https://slidefire.app",
	},
	{
		title: "LeetGPT",
		image: "/leetgpt.png",
		blurb: "AI tutor for LeetCode",
		summary:
			"Extends BitSchool's sandboxed code execution engine to support LeetCode algorithm problems, and integrates an AI chat for support and tutoring",
		tags: ["Next.js", "TypeScript", "AI"],
		href: "https://leetgpt.app",
	},
	{
		title: "CalPad",
		image: "/calpad2.jpg",
		blurb: "AI calorie tracking, on iOS",
		summary:
			"Log meals by text or photo with AI analysis, barcode scanning, and Apple Health sync. Uses a custom backend, APIs, database, and mobile architecture.",
		tags: ["React Native", "Expo", "TypeScript", "AI"],
		href: "https://apps.apple.com/us/app/calpad-calorie-tracker/id6757875122",
	},
];

export const navLinks = [
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];
