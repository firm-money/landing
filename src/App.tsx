import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";

export function App() {
	return (
		<MainLayout>
			<Hero />
			<Features />
		</MainLayout>
	);
}

export default App;