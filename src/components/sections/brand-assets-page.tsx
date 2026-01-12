import { useState } from "react";
import { motion } from "motion/react";
import { Logo, Logotype, TokenLogo } from "@/components/brand-assets";

// Brand colors extracted from CSS
const brandColors = [
	{
		name: "Primary Blue",
		hex: "#2156FC",
		cssVar: "--primary",
		usage: "Primary brand color, logo, links",
	},
	{
		name: "Primary Blue Dark",
		hex: "#1447e6",
		cssVar: "--",
		usage: "Buttons, hover states",
	},
	{
		name: "Brand Yellow",
		hex: "#FFB800",
		cssVar: "--brand-yellow",
		usage: "Accents, highlights, CTAs (also see #F2B341 for star icons)",
	},
	{
		name: "Brand Yellow Star",
		hex: "#F2B341",
		cssVar: "--",
		usage: "Star icon fills, decorative elements",
	},
	{
		name: "Background",
		hex: "#151821",
		cssVar: "--background",
		usage: "Main background",
	},
	{
		name: "Card Background",
		hex: "#1d2029",
		cssVar: "--card",
		usage: "Card backgrounds",
	},
	{
		name: "Foreground",
		hex: "#E1E2E5",
		cssVar: "--foreground",
		usage: "Primary text color",
	},
	{
		name: "Muted Text",
		hex: "#A9B1C8",
		cssVar: "--muted-foreground",
		usage: "Secondary text, labels",
	},
];

const fonts = [
	{
		name: "Archivo",
		usage: "Headings (h1, h2, h3, etc.)",
		weights: "300, 600, 700, 800",
		import: "@import url(https://fonts.bunny.net/css?family=archivo:300,600,700,800);",
		cssVar: "--font-heading",
	},
	{
		name: "Work Sans",
		usage: "Body text, paragraphs",
		weights: "400, 600",
		import: "@import url(https://fonts.bunny.net/css?family=work-sans:400,600);",
		cssVar: "--font-body, --font-sans",
	},
];

// SVG logo code for Logotype
const logotypeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 76.69 24" fill="none">
  <g fill="#2156FC">
    <path d="M76.694 24H69.2409V7.45389H67.4931V18.4841H59.9305V7.45389H58.2103V24H50.7572V0.000768443H76.694V24Z" />
    <path d="M16.3966 18.4837H7.45313V23.9988H0V12.8937H16.3966V18.4837Z" />
    <path d="M26.0863 23.9988H18.6332V0H26.0863V23.9988Z" />
    <path d="M46.5088 11.1044H35.9216V12.9106H40.3417L50.0871 23.9988H39.8288L35.9216 19.6368V23.9988H28.4773V11.1044H28.4723V0.0737705H46.5088V11.1044Z" />
    <path d="M16.3966 7.45313H7.45313V11.1051H0V0H16.3966V7.45313Z" />
  </g>
</svg>`;

// SVG logo code for Logo (icon)
const logoIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
  <g fill="currentColor">
    <path d="M20.4476 18.3054H11.2263V23.9997H3.55664V12.5472H20.4476V18.3054Z" />
    <path d="M15.282 4.79371L16.2289 7.68064H11.2373V10.918H3.55664V6.09363H11.2257V4.34313L15.282 4.79371Z" />
    <path d="M16.2315 7.68816L16.2289 7.68064H16.2341L16.2315 7.68816Z" />
    <path d="M20.4297 7.68064H16.2341L17.181 4.79371L20.4279 3.84422L17.181 2.89474L16.2315 0L15.282 2.89474L11.2257 3.34503V0H20.4297V7.68064Z" />
    <path d="M11.2257 4.34313L6.73007 3.84422L11.2257 3.34503V4.34313Z" />
  </g>
</svg>`;

// SVG logo code for Token Logo
const tokenLogoSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
  <g clipPath="url(#clip0_token)">
    <path d="M24.0004 12.0002C24.0004 18.6277 18.6277 24.0004 12.0002 24.0004C5.37267 24.0004 0 18.6277 0 12.0002C0 5.37267 5.37267 0 12.0002 0C18.6277 0 24.0004 5.37267 24.0004 12.0002Z" fill="#2156FC" />
    <path d="M17.218 15.9356H11.5188V19.4547H6.77832V12.3766H17.218V15.9356Z" fill="#E9ECF3" />
    <path d="M14.0244 7.58399L14.6099 9.36874H11.5255V11.3691H6.77832V8.38745H11.5176V7.30557L14.0244 7.58399Z" fill="#E9ECF3" />
    <path d="M14.6112 9.37285L14.6099 9.36874H14.6125L14.6112 9.37285Z" fill="#E9ECF3" />
    <path d="M17.2063 9.36874H14.6125L15.1981 7.58399L17.2047 6.99717L15.1981 6.41044L14.6112 4.62158L14.0244 6.41044L11.5176 6.68866V4.62158H17.2063V9.36874Z" fill="#E9ECF3" />
    <path d="M11.5176 7.30557L8.73959 6.99717L11.5176 6.68866V7.30557Z" fill="#E9ECF3" />
  </g>
  <defs>
    <clipPath id="clip0_token">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>`;

function CopyButton({ text, label }: { text: string; label: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<button
			onClick={handleCopy}
			className="px-3 py-1.5 bg-[#1d2029] border border-white/10 hover:border-white/20 text-white/60 hover:text-white text-xs font-medium transition-colors"
		>
			{copied ? "Copied!" : `Copy ${label}`}
		</button>
	);
}

function DownloadSVGButton({ svg, filename }: { svg: string; filename: string }) {
	const handleDownload = () => {
		try {
			// Parse and fix SVG dimensions
			const parser = new DOMParser();
			const svgDoc = parser.parseFromString(svg, "image/svg+xml");
			const svgElement = svgDoc.documentElement;
			const viewBox = svgElement.getAttribute("viewBox");
			
			// Extract dimensions from viewBox if width/height are percentages
			if (viewBox) {
				const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
				if (vbWidth && vbHeight) {
					// Set explicit pixel dimensions
					svgElement.setAttribute("width", vbWidth.toString());
					svgElement.setAttribute("height", vbHeight.toString());
				}
			}
			
			// Replace currentColor with actual color for better compatibility
			const allElements = svgElement.querySelectorAll("*");
			allElements.forEach((el) => {
				if (el.getAttribute("fill") === "currentColor") {
					el.setAttribute("fill", "#2156FC");
				}
			});
			
			let fixedSvg = new XMLSerializer().serializeToString(svgElement);
			// Add XML declaration if not present
			if (!fixedSvg.startsWith("<?xml")) {
				fixedSvg = '<?xml version="1.0" encoding="UTF-8"?>' + fixedSvg;
			}
			const blob = new Blob([fixedSvg], { type: "image/svg+xml;charset=utf-8" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		} catch (err) {
			console.error("Failed to download SVG:", err);
			alert("Failed to download SVG. Please try again.");
		}
	};

	return (
		<button
			onClick={handleDownload}
			className="px-3 py-1.5 bg-[#1447e6] hover:bg-[#2156FC] text-white text-xs font-medium transition-colors"
		>
			Download SVG
		</button>
	);
}

function DownloadPNGButton({ svg, filename, width = 512, height }: { svg: string; filename: string; width?: number; height?: number }) {
	const [isGenerating, setIsGenerating] = useState(false);

	const handleDownload = async () => {
		setIsGenerating(true);
		try {
			// Parse SVG to get dimensions
			const parser = new DOMParser();
			const svgDoc = parser.parseFromString(svg, "image/svg+xml");
			const svgElement = svgDoc.documentElement;
			const viewBox = svgElement.getAttribute("viewBox");
			
			let finalWidth = width;
			let finalHeight = height || width;
			
			// Calculate dimensions from viewBox if not provided
			if (viewBox) {
				const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
				if (vbWidth && vbHeight && !height) {
					const aspectRatio = vbWidth / vbHeight;
					finalHeight = Math.round(finalWidth / aspectRatio);
				}
			}
			
			// Replace currentColor with actual color
			const allElements = svgElement.querySelectorAll("*");
			allElements.forEach((el) => {
				if (el.getAttribute("fill") === "currentColor") {
					el.setAttribute("fill", "#2156FC");
				}
			});
			
			// Set explicit width and height on SVG for canvas rendering
			svgElement.setAttribute("width", finalWidth.toString());
			svgElement.setAttribute("height", finalHeight.toString());
			svgElement.removeAttribute("style"); // Remove any inline styles that might interfere
			
			const modifiedSvg = new XMLSerializer().serializeToString(svgElement);
			
			// Create data URL from SVG
			const svgBlob = new Blob([modifiedSvg], { type: "image/svg+xml;charset=utf-8" });
			const svgUrl = URL.createObjectURL(svgBlob);
			const img = new Image();
			
			// Set crossOrigin to avoid CORS issues
			img.crossOrigin = "anonymous";
			
			img.onload = () => {
				try {
					// Create canvas with high DPI for better quality
					const scale = 2; // 2x for retina displays
					const canvas = document.createElement("canvas");
					canvas.width = finalWidth * scale;
					canvas.height = finalHeight * scale;
					const ctx = canvas.getContext("2d");
					
					if (!ctx) {
						throw new Error("Could not get canvas context");
					}
					
					// Scale context for high DPI
					ctx.scale(scale, scale);
					
					// Draw image on canvas (transparent background)
					ctx.drawImage(img, 0, 0, finalWidth, finalHeight);
					
					// Convert to PNG and download
					canvas.toBlob(
						(blob) => {
							if (blob) {
								const url = URL.createObjectURL(blob);
								const a = document.createElement("a");
								a.href = url;
								a.download = filename.replace(".svg", ".png");
								document.body.appendChild(a);
								a.click();
								document.body.removeChild(a);
								URL.revokeObjectURL(url);
							} else {
								throw new Error("Failed to create PNG blob");
							}
							URL.revokeObjectURL(svgUrl);
							setIsGenerating(false);
						},
						"image/png",
						1.0 // Maximum quality
					);
				} catch (err) {
					console.error("Error creating PNG:", err);
					alert("Failed to generate PNG. Please try again.");
					URL.revokeObjectURL(svgUrl);
					setIsGenerating(false);
				}
			};
			
			img.onerror = (err) => {
				console.error("Error loading SVG image:", err);
				alert("Failed to load SVG. Please try again.");
				URL.revokeObjectURL(svgUrl);
				setIsGenerating(false);
			};
			
			img.src = svgUrl;
		} catch (err) {
			console.error("Failed to generate PNG:", err);
			alert("Failed to generate PNG. Please try again.");
			setIsGenerating(false);
		}
	};

	return (
		<button
			onClick={handleDownload}
			disabled={isGenerating}
			className="px-3 py-1.5 bg-[#1447e6] hover:bg-[#2156FC] text-white text-xs font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
		>
			{isGenerating ? "Generating..." : "Download PNG"}
		</button>
	);
}

export function BrandAssetsPage() {
	return (
		<div className="min-h-screen bg-[#151821] text-white py-12 md:py-24">
			<div className="container mx-auto max-w-[1280px] px-6 md:px-12 lg:px-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-16"
				>
					<h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4 text-[#e1e2e5]">
						Brand Assets
					</h1>
					<p className="text-white/60 text-lg max-w-2xl mb-2">
						Download logos, copy brand colors, and get font information for FIRM.
					</p>
					<p className="text-white/40 text-sm max-w-2xl">
						All logos are available in both SVG and PNG formats. Click the download buttons to get your preferred format.
					</p>
				</motion.div>

				{/* Logos Section */}
				<section className="mb-20">
					<h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8 text-[#e1e2e5]">
						Logos
					</h2>

					<div className="space-y-12">
						{/* Logotype */}
						<div className="bg-[#1d2029]/60 border border-white/5 p-6 md:p-8">
							<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
								<div className="flex-1">
									<h3 className="font-heading text-xl font-semibold mb-2 text-white">Logotype</h3>
									<p className="text-white/60 text-sm mb-4">
										The FIRM wordmark. Use this for headers, navigation, and brand recognition.
									</p>
									<div className="flex flex-wrap gap-2">
										<CopyButton text={logotypeSVG} label="SVG" />
										<DownloadSVGButton svg={logotypeSVG} filename="firm-logotype.svg" />
										<DownloadPNGButton svg={logotypeSVG} filename="firm-logotype.svg" width={1024} height={320} />
									</div>
								</div>
								<div className="bg-[#151821] p-6 border border-white/5 flex items-center justify-center min-h-[120px]">
									<Logotype fill="#2156FC" className="h-12 w-auto" />
								</div>
							</div>
							<div className="bg-[#151821] p-4 border border-white/5">
								<pre className="text-xs text-white/40 overflow-x-auto">
									<code>{logotypeSVG}</code>
								</pre>
							</div>
						</div>

						{/* Logo Icon */}
						<div className="bg-[#1d2029]/60 border border-white/5 p-6 md:p-8">
							<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
								<div className="flex-1">
									<h3 className="font-heading text-xl font-semibold mb-2 text-white">Logo Icon</h3>
									<p className="text-white/60 text-sm mb-4">
										The FIRM icon. Use this for favicons, app icons, and compact branding.
									</p>
									<div className="flex flex-wrap gap-2">
										<CopyButton text={logoIconSVG} label="SVG" />
										<DownloadSVGButton svg={logoIconSVG} filename="firm-logo-icon.svg" />
										<DownloadPNGButton svg={logoIconSVG} filename="firm-logo-icon.svg" width={512} />
									</div>
								</div>
								<div className="bg-[#151821] p-6 border border-white/5 flex items-center justify-center min-h-[120px]">
									<Logo fill="#2156FC" className="h-24 w-24" />
								</div>
							</div>
							<div className="bg-[#151821] p-4 border border-white/5">
								<pre className="text-xs text-white/40 overflow-x-auto">
									<code>{logoIconSVG}</code>
								</pre>
							</div>
						</div>

						{/* Token Logo */}
						<div className="bg-[#1d2029]/60 border border-white/5 p-6 md:p-8">
							<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
								<div className="flex-1">
									<h3 className="font-heading text-xl font-semibold mb-2 text-white">Token Logo</h3>
									<p className="text-white/60 text-sm mb-4">
										The USF token logo with circular background. Use this for token displays and wallet integrations.
									</p>
									<div className="flex flex-wrap gap-2">
										<CopyButton text={tokenLogoSVG} label="SVG" />
										<DownloadSVGButton svg={tokenLogoSVG} filename="firm-token-logo.svg" />
										<DownloadPNGButton svg={tokenLogoSVG} filename="firm-token-logo.svg" width={512} />
									</div>
								</div>
								<div className="bg-[#151821] p-6 border border-white/5 flex items-center justify-center min-h-[120px]">
									<TokenLogo className="h-24 w-24" />
								</div>
							</div>
							<div className="bg-[#151821] p-4 border border-white/5">
								<pre className="text-xs text-white/40 overflow-x-auto">
									<code>{tokenLogoSVG}</code>
								</pre>
							</div>
						</div>
					</div>
				</section>

				{/* Brand Colors Section */}
				<section className="mb-20">
					<h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8 text-[#e1e2e5]">
						Brand Colors
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{brandColors.map((color) => (
							<div
								key={color.name}
								className="bg-[#1d2029]/60 border border-white/5 p-6"
							>
								<div
									className="w-full h-24 mb-4 border border-white/10"
									style={{ backgroundColor: color.hex }}
								/>
								<h3 className="font-heading text-lg font-semibold mb-2 text-white">
									{color.name}
								</h3>
								<div className="flex items-center gap-2 mb-2">
									<code className="text-sm text-white/80 font-mono bg-[#151821] px-2 py-1 border border-white/5">
										{color.hex}
									</code>
									<CopyButton text={color.hex} label="Hex" />
								</div>
								{color.cssVar && (
									<p className="text-xs text-white/40 mb-1">
										CSS: <code className="text-white/60">{color.cssVar}</code>
									</p>
								)}
								<p className="text-xs text-white/50">{color.usage}</p>
							</div>
						))}
					</div>
				</section>

				{/* Fonts Section */}
				<section className="mb-20">
					<h2 className="font-heading text-2xl md:text-3xl font-semibold mb-8 text-[#e1e2e5]">
						Typography
					</h2>
					<div className="space-y-6">
						{fonts.map((font) => (
							<div
								key={font.name}
								className="bg-[#1d2029]/60 border border-white/5 p-6 md:p-8"
							>
								<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
									<div className="flex-1">
										<h3
											className="font-heading text-2xl font-semibold mb-2 text-white"
											style={{ fontFamily: font.name === "Archivo" ? "Archivo" : "Work Sans" }}
										>
											{font.name}
										</h3>
										<p className="text-white/60 text-sm mb-4">{font.usage}</p>
										<div className="space-y-2 mb-4">
											<p className="text-xs text-white/40">
												Weights: <span className="text-white/60">{font.weights}</span>
											</p>
											<p className="text-xs text-white/40">
												CSS Variable: <code className="text-white/60">{font.cssVar}</code>
											</p>
										</div>
										<CopyButton text={font.import} label="Import" />
									</div>
									<div className="bg-[#151821] p-6 border border-white/5 flex-1">
										<div
											className="space-y-4"
											style={{ fontFamily: font.name }}
										>
											<div>
												<p className="text-xs text-white/40 mb-1">Regular (400)</p>
												<p className="text-lg text-white">
													The quick brown fox jumps over the lazy dog
												</p>
											</div>
											{font.name === "Archivo" && (
												<>
													<div>
														<p className="text-xs text-white/40 mb-1">Light (300)</p>
														<p className="text-lg text-white font-light">
															The quick brown fox jumps over the lazy dog
														</p>
													</div>
													<div>
														<p className="text-xs text-white/40 mb-1">Semibold (600)</p>
														<p className="text-lg text-white font-semibold">
															The quick brown fox jumps over the lazy dog
														</p>
													</div>
													<div>
														<p className="text-xs text-white/40 mb-1">Bold (700)</p>
														<p className="text-lg text-white font-bold">
															The quick brown fox jumps over the lazy dog
														</p>
													</div>
													<div>
														<p className="text-xs text-white/40 mb-1">Extra Bold (800)</p>
														<p className="text-lg text-white font-extrabold">
															The quick brown fox jumps over the lazy dog
														</p>
													</div>
												</>
											)}
											{font.name === "Work Sans" && (
												<div>
													<p className="text-xs text-white/40 mb-1">Semibold (600)</p>
													<p className="text-lg text-white font-semibold">
														The quick brown fox jumps over the lazy dog
													</p>
												</div>
											)}
										</div>
									</div>
								</div>
								<div className="mt-4 bg-[#151821] p-4 border border-white/5">
									<pre className="text-xs text-white/40 overflow-x-auto">
										<code>{font.import}</code>
									</pre>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
