import { motion } from "motion/react";
import { BrandStar, Logotype } from "@/components/brand-assets";

export function Navbar() {
	return (
		<nav className="sticky top-0 z-50 bg-[#151821]/80 backdrop-blur-md border-b border-white/5">
			<div className="container mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 h-16 md:h-20 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Logotype fill="#2156FC" className="h-6 md:h-8 w-auto" />
				</div>

				<div className="hidden md:flex items-center gap-8">
					<a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">App</a>
					<a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Docs</a>
					<a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Community</a>
				</div>

				<motion.button
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					className="cursor-pointer bg-[#1447e6] text-white px-5 py-2 rounded-sm text-sm font-semibold flex items-center gap-2"
				>
					Launch App
					<BrandStar className="size-4" />
				</motion.button>
			</div>
		</nav>
	);
}

