import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { FirmSystem } from "@/components/sections/firm-system";
import { StatusFirmSection } from "@/components/sections/status-firm";
import { BrandAssetsPage } from "@/components/sections/brand-assets-page";
import { NotFoundPage } from "@/components/sections/not-found-page";

export function App() {
	const [currentPage, setCurrentPage] = useState<string>("home");

	useEffect(() => {
		const handleLocationChange = () => {
			const path = window.location.pathname;
			if (path === "/brand-assets") {
				setCurrentPage("brand-assets");
			} else if (path === "/") {
				setCurrentPage("home");
			} else {
				setCurrentPage("404");
			}
		};

		// Handle initial load
		handleLocationChange();

		// Handle browser back/forward buttons
		window.addEventListener("popstate", handleLocationChange);

		// Handle internal link clicks
		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const link = target.closest("a");
			if (link && link.href) {
				// Don't intercept download links or blob/data URLs
				if (link.hasAttribute("download") || link.href.startsWith("blob:") || link.href.startsWith("data:")) {
					return;
				}
				try {
					const url = new URL(link.href);
					// Only handle same-origin links (not external or special protocols)
					if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
						e.preventDefault();
						window.history.pushState({}, "", url.pathname);
						handleLocationChange();
					}
				} catch {
					// Invalid URL, let browser handle it
				}
			}
		};

		document.addEventListener("click", handleClick);

		return () => {
			window.removeEventListener("popstate", handleLocationChange);
			document.removeEventListener("click", handleClick);
		};
	}, []);

	if (currentPage === "brand-assets") {
		return (
			<MainLayout>
				<BrandAssetsPage />
			</MainLayout>
		);
	}

	if (currentPage === "404") {
		return (
			<MainLayout>
				<NotFoundPage />
			</MainLayout>
		);
	}

	return (
		<MainLayout>
			<Hero />
			<Features />
			<FirmSystem />
			<StatusFirmSection />
		</MainLayout>
	);
}

export default App;