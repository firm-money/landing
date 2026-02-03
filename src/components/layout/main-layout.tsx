import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Banner } from "@/components/banner";

interface MainLayoutProps {
	children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="flex flex-col min-h-screen bg-[#151821]">
			<Banner
				text="Pre-deposit ETH and SNT ahead of Status Network mainnet launch for extra rewards!"
				link={{ text: "Learn More.", href: "https://hub.status.network/pre-deposits?firm" }}
			/>
			<Navbar />
			<main className="flex-1">
				{children}
			</main>
			<Footer />
		</div>
	);
}

