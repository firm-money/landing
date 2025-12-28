import { Logotype, BrandStar } from "@/components/brand-assets";

const SOCIAL_ASSETS = {
	DISCORD: "https://www.figma.com/api/mcp/asset/3b513d49-6277-488d-9091-813581b0834c",
	GITHUB: "https://www.figma.com/api/mcp/asset/21603fc3-7f12-4426-ac9e-d9413b28fa52",
	TWITTER: "https://www.figma.com/api/mcp/asset/aa62c3a3-522e-4d22-801a-ac4f17c2a20c",
};

const socials = [
	{ id: "discord", src: SOCIAL_ASSETS.DISCORD, alt: "Discord", href: "#" },
	{ id: "github", src: SOCIAL_ASSETS.GITHUB, alt: "GitHub", href: "#" },
	{ id: "twitter", src: SOCIAL_ASSETS.TWITTER, alt: "Twitter", href: "#" },
];

export function Footer() {
	return (
		<footer className="bg-[#111319] border-t border-white/5 pt-24 pb-12">
			<div className="container mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
					<div className="flex flex-col gap-6">
						<Logotype fill="#2156FC" className="h-8 w-auto" />
						<p className="text-white/40 text-sm leading-relaxed max-w-xs">
							Native stablecoin where yield comes from real borrowing, not printed points.
						</p>
					</div>

					<div className="flex flex-col gap-6">
						<h4 className="text-white font-semibold uppercase tracking-wider text-xs">Product</h4>
						<ul className="flex flex-col gap-4">
							<li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">App</a></li>
							<li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Stake</a></li>
							<li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Borrow</a></li>
						</ul>
					</div>

					<div className="flex flex-col gap-6">
						<h4 className="text-white font-semibold uppercase tracking-wider text-xs">Resources</h4>
						<ul className="flex flex-col gap-4">
							<li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Documentation</a></li>
							<li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Governance</a></li>
							<li><a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Brand Assets</a></li>
						</ul>
					</div>

					<div className="flex flex-col gap-6">
						<h4 className="text-white font-semibold uppercase tracking-wider text-xs">Social</h4>
						<div className="flex items-center gap-4">
							{socials.map((social) => (
								<a
									key={social.id}
									href={social.href}
									className="group/social p-2 -m-2 transition-colors"
									aria-label={social.alt}
								>
									<img 
										src={social.src} 
										alt={social.alt} 
										className="size-6 opacity-40 group-hover/social:opacity-100 transition-opacity" 
									/>
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-white/20 text-xs">
						© 2025 FIRM. All rights reserved.
					</p>
					<div className="flex items-center gap-2 text-white/20 text-xs">
						<span>Stay FIRM</span>
						<BrandStar className="size-3" />
					</div>
				</div>
			</div>
		</footer>
	);
}

