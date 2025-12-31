import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { FirmSystem } from "@/components/sections/firm-system";
import { StatusFirmSection } from "@/components/sections/status-firm";

export function App() {
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