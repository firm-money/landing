import { motion } from "motion/react";
import { BrandStar } from "@/components/brand-assets";

const features = [
	{
		title: "Real Yield",
		description: "Earn yield from actual borrowing demand, not from inflationary token printing.",
		icon: BrandStar,
	},
	{
		title: "Native Stability",
		description: "Built from the ground up to maintain peg with deep liquidity and robust collateral.",
		icon: BrandStar,
	},
	{
		title: "Community Owned",
		description: "Governance driven by the users who believe in a firm financial future.",
		icon: BrandStar,
	},
];

export function Features() {
	return (
		<section className="py-24 md:py-48 bg-[#151821]">
			<div className="container mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
				<div className="flex flex-col gap-12">
					<div className="max-w-2xl">
						<h2 className="text-3xl md:text-5xl font-heading font-semibold text-white mb-6">
							Built for the <span className="text-brand-yellow">long term</span>.
						</h2>
						<p className="text-lg text-white/60">
							FIRM is designed to provide a stable, reliable foundation for your digital assets.
							No gimmicks, just sound money principles applied to the blockchain.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{features.map((feature, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								viewport={{ once: true }}
								className="p-8 bg-white/5 border border-white/10 rounded-sm hover:border-white/20 transition-colors group"
							>
								<feature.icon className="size-8 text-brand-yellow mb-6 group-hover:rotate-12 transition-transform" />
								<h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
								<p className="text-white/40 leading-relaxed">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

