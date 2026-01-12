import { useEffect, useState } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { FirmSystem } from "@/components/sections/firm-system";
import { StatusFirmSection } from "@/components/sections/status-firm";
import { BrandAssetsPage } from "@/components/sections/brand-assets-page";

export function App() {
	const [currentPage, setCurrentPage] = useState<string>("home");

	useEffect(() => {
		const handleHashChange = () => {
			setCurrentPage(window.location.hash === "#brand-assets" ? "brand-assets" : "home");
		};

		handleHashChange();
		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	if (currentPage === "brand-assets") {
		return (
			<MainLayout>
				<BrandAssetsPage />
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