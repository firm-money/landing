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
				text="yUSF is live on Status"
				link={{ text: "Get FIRM", href: "#" }}
			/>
			<Navbar />
			<main className="flex-1">
				{children}
			</main>
			<Footer />
		</div>
	);
}

