import { motion } from "motion/react";
import { BrandStar, Logotype } from "@/components/brand-assets";

export function NotFoundPage() {
	return (
		<div className="min-h-screen bg-[#151821] text-white flex items-center justify-center relative overflow-hidden isolate">
			{/* Background logo decoration */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.1 }}
					transition={{ duration: 1 }}
					className="flex justify-center items-center h-full"
				>
					<Logotype
						fill="#2156FC"
						className="h-[400px] md:h-[600px] w-auto opacity-20"
					/>
				</motion.div>
			</div>

			<div className="relative z-10 container mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24 py-24">
				<div className="flex flex-col items-center justify-center text-center">
					{/* Big 404 Number */}
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						className="mb-8"
					>
						<h1 className="font-heading text-[120px] md:text-[200px] lg:text-[280px] font-bold leading-none text-[#2156FC] tracking-tight">
							404
						</h1>
					</motion.div>

					{/* Message */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="mb-12 max-w-2xl"
					>
						<p className="font-sans text-xl md:text-2xl lg:text-3xl font-normal text-[#e1e3e7] leading-tight mb-4">
							Sorry, this page just wasn't{" "}
							<span className="font-semibold text-brand-yellow uppercase">firm</span> enough.
						</p>
						<p className="font-sans text-base md:text-lg text-white/60 leading-relaxed">
							The page you're looking for doesn't exist or has been moved.
						</p>
					</motion.div>

					{/* CTA Button */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
					>
						<a
							href="/"
							className="group inline-flex items-center gap-3 bg-[#1447e6] hover:bg-[#2156FC] border-2 border-white/20 hover:border-white/40 text-lg font-semibold px-6 py-4 h-auto shadow-[0_0_20px_rgba(20,71,230,0.3)] hover:shadow-[0_0_25px_rgba(20,71,230,0.5)] transition-all"
						>
							<BrandStar className="size-5 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
							<span>Go Home</span>
						</a>
					</motion.div>

					{/* Additional Links */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
						className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm"
					>
						<a href="/brand-assets" className="text-white/60 hover:text-white transition-colors">
							Brand Assets
						</a>
						<span className="text-white/20">•</span>
						<a href="https://app.usf.money" className="text-white/60 hover:text-white transition-colors">
							App
						</a>
						<span className="text-white/20">•</span>
						<a href="https://docs.usf.money" className="text-white/60 hover:text-white transition-colors">
							Docs
						</a>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
