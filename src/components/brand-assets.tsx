import { motion } from "motion/react";

export function Logo({
	className,
	fill = "currentColor",
}: {
	className?: string;
	fill?: string;
}) {
	return (
		<div className={`aspect-square w-fit text-white ${className}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				fill="none"
			>
				<g fill={fill}>
					<path d="M20.4476 18.3054H11.2263V23.9997H3.55664V12.5472H20.4476V18.3054Z" />
					<path d="M15.282 4.79371L16.2289 7.68064H11.2373V10.918H3.55664V6.09363H11.2257V4.34313L15.282 4.79371Z" />
					<path d="M16.2315 7.68816L16.2289 7.68064H16.2341L16.2315 7.68816Z" />
					<path d="M20.4297 7.68064H16.2341L17.181 4.79371L20.4279 3.84422L17.181 2.89474L16.2315 0L15.282 2.89474L11.2257 3.34503V0H20.4297V7.68064Z" />
					<path d="M11.2257 4.34313L6.73007 3.84422L11.2257 3.34503V4.34313Z" />
				</g>
			</svg>
		</div>
	);
}

export function TokenLogo({ className }: { className?: string }) {
	return (
		<div className={`aspect-square w-fit ${className}`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				fill="none"
			>
				<g clipPath="url(#clip0_token)">
					<path
						d="M24.0004 12.0002C24.0004 18.6277 18.6277 24.0004 12.0002 24.0004C5.37267 24.0004 0 18.6277 0 12.0002C0 5.37267 5.37267 0 12.0002 0C18.6277 0 24.0004 5.37267 24.0004 12.0002Z"
						fill="#2156FC"
					/>
					<path
						d="M17.218 15.9356H11.5188V19.4547H6.77832V12.3766H17.218V15.9356Z"
						fill="#E9ECF3"
					/>
					<path
						d="M14.0244 7.58399L14.6099 9.36874H11.5255V11.3691H6.77832V8.38745H11.5176V7.30557L14.0244 7.58399Z"
						fill="#E9ECF3"
					/>
					<path
						d="M14.6112 9.37285L14.6099 9.36874H14.6125L14.6112 9.37285Z"
						fill="#E9ECF3"
					/>
					<path
						d="M17.2063 9.36874H14.6125L15.1981 7.58399L17.2047 6.99717L15.1981 6.41044L14.6112 4.62158L14.0244 6.41044L11.5176 6.68866V4.62158H17.2063V9.36874Z"
						fill="#E9ECF3"
					/>
					<path
						d="M11.5176 7.30557L8.73959 6.99717L11.5176 6.68866V7.30557Z"
						fill="#E9ECF3"
					/>
				</g>
				<defs>
					<clipPath id="clip0_token">
						<rect width="24" height="24" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}

export function Logotype({
	className,
	fill = "#2156FC",
}: {
	className?: string;
	fill?: string;
}) {
	return (
		<div className={`w-fit ${className} aspect-[76.69/24]`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 76.69 24"
				fill="none"
			>
				<g fill={fill}>
					<path d="M76.694 24H69.2409V7.45389H67.4931V18.4841H59.9305V7.45389H58.2103V24H50.7572V0.000768443H76.694V24Z" />
					<path d="M16.3966 18.4837H7.45313V23.9988H0V12.8937H16.3966V18.4837Z" />
					<path d="M26.0863 23.9988H18.6332V0H26.0863V23.9988Z" />
					<path d="M46.5088 11.1044H35.9216V12.9106H40.3417L50.0871 23.9988H39.8288L35.9216 19.6368V23.9988H28.4773V11.1044H28.4723V0.0737705H46.5088V11.1044Z" />
					<path d="M16.3966 7.45313H7.45313V11.1051H0V0H16.3966V7.45313Z" />
				</g>
			</svg>
		</div>
	);
}

export function StarBorrow({ className }: { className?: string }) {
	return (
		<motion.svg
			width="87"
			height="51"
			viewBox="0 0 87 51"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			initial="initial"
			whileInView="animate"
			whileHover="hover"
			viewport={{ once: true }}
		>
			<motion.path
				d="M58.2713 0.688292C58.5724 -0.22943 59.8706 -0.229431 60.1717 0.688291L65.7816 17.7889C65.8843 18.1021 66.1347 18.3445 66.451 18.437L85.6566 24.0536C86.6157 24.3341 86.6157 25.6927 85.6566 25.9732L66.451 31.5898C66.1347 31.6823 65.8843 31.9248 65.7816 32.2379L60.1717 49.3385C59.8706 50.2563 58.5724 50.2563 58.2713 49.3385L52.6978 32.3488C52.5756 31.9765 52.2474 31.7099 51.858 31.6666L0.889639 26.0073C-0.29655 25.8756 -0.296545 24.1512 0.889645 24.0195L51.858 18.3602C52.2474 18.317 52.5756 18.0503 52.6978 17.678L58.2713 0.688292Z"
				fill="#F2B341"
				variants={{
					initial: {
						opacity: 0,
						scale: 1.2,
						pathLength: 0
					},
					animate: {
						opacity: 1,
						scale: 1,
						pathLength: 1,
						transition: {
							scale: {
								type: "spring",
								stiffness: 300,
								damping: 15
							},
							pathLength: {
								duration: 0.8,
								ease: "easeInOut"
							},
							opacity: {
								duration: 0.4
							}
						}
					},
					hover: {
						scale: [1, 1.1, 1],
						transition: {
							duration: 0.3,
							ease: "easeInOut"
						}
					}
				}}
				style={{ transformOrigin: "center" }}
			/>
		</motion.svg>
	);
}

export function StarEarn({ className }: { className?: string }) {
	return (
		<motion.svg
			width="87"
			height="53"
			viewBox="0 0 87 53"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			initial="initial"
			whileInView="animate"
			whileHover="hover"
			viewport={{ once: true }}
			variants={{
				animate: {
					transition: {
						staggerChildren: 0.2
					}
				}
			}}
		>
			<motion.path
				d="M37.6294 22.117C37.9304 23.0347 39.2287 23.0347 39.5297 22.117L41.7775 15.265C41.8803 14.9519 42.1307 14.7095 42.447 14.617L50.1562 12.3624C51.1152 12.082 51.1152 10.7233 50.1562 10.4428L42.447 8.18833C42.1307 8.09582 41.8803 7.85339 41.7775 7.54024L39.5297 0.688292C39.2287 -0.22943 37.9304 -0.229431 37.6294 0.688291L35.418 7.42934C35.2958 7.80162 34.9675 8.06829 34.5781 8.11153L13.8892 10.4088C12.703 10.5405 12.703 12.2648 13.8892 12.3965L34.5781 14.6938C34.9675 14.737 35.2958 15.0037 35.418 15.3759L37.6294 22.117Z"
				fill="#7189D4"
				variants={{
					initial: { opacity: 0, scale: 0, x: -10 },
					animate: {
						opacity: 1,
						scale: 1,
						x: 0,
						transition: {
							type: "spring",
							stiffness: 260,
							damping: 20
						}
					},
					hover: {
						scale: [1, 1.2, 1],
						transition: { duration: 0.4 }
					}
				}}
				style={{ transformOrigin: "31.5px 11px" }}
			/>
			<motion.path
				d="M58.2713 2.79465C58.5724 1.87693 59.8706 1.87693 60.1717 2.79465L65.7816 19.8953C65.8843 20.2084 66.1347 20.4508 66.451 20.5434L85.6566 26.16C86.6157 26.4405 86.6157 27.7991 85.6566 28.0796L66.451 33.6962C66.1347 33.7887 65.8843 34.0311 65.7816 34.3443L60.1717 51.4449C59.8706 52.3626 58.5724 52.3626 58.2713 51.4449L52.6978 34.4552C52.5756 34.0829 52.2474 33.8162 51.858 33.773L0.889638 28.1137C-0.296551 27.982 -0.296544 26.2576 0.889646 26.1259L51.8579 20.4666C52.2474 20.4233 52.5756 20.1567 52.6978 19.7844L58.2713 2.79465Z"
				fill="#F2B341"
				variants={{
					initial: { opacity: 0, scale: 0 },
					animate: {
						opacity: 1,
						scale: 1,
						transition: {
							type: "spring",
							stiffness: 260,
							damping: 20
						}
					}
				}}
				style={{ transformOrigin: "center" }}
			/>
		</motion.svg>
	);
}

export function StarAlignStatus({ className }: { className?: string }) {
	const starVariants = {
		initial: { opacity: 0, scale: 0.5, x: -10 },
		animate: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				type: "spring" as const,
				stiffness: 260,
				damping: 20
			}
		},
		hover: {
			scale: [1, 1.1, 1],
			transition: { duration: 0.3 }
		}
	};

	return (
		<motion.svg
			width="110"
			height="51"
			viewBox="0 0 110 51"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			variants={{
				animate: {
					transition: {
						staggerChildren: 0.15,
						delayChildren: 0.2
					}
				}
			}}
		>
			<defs>
				<mask id="star-mask">
					<motion.path
						variants={starVariants}
						d="M58.2713 0.688293C58.5724 -0.229429 59.8706 -0.229432 60.1717 0.68829L65.7816 17.7889C65.8843 18.1021 66.1347 18.3445 66.451 18.437L85.6566 24.0536C86.6157 24.3341 86.6157 25.6927 85.6566 25.9732L66.451 31.5898C66.1347 31.6823 65.8843 31.9248 65.7816 32.2379L60.1717 49.3385C59.8706 50.2563 58.5724 50.2563 58.2713 49.3385L52.6978 32.3488C52.5756 31.9765 52.2474 31.7099 51.858 31.6666L0.889638 26.0073C-0.296551 25.8756 -0.296544 24.1512 0.889646 24.0195L51.8579 18.3602C52.2474 18.317 52.5756 18.0503 52.6978 17.678L58.2713 0.688293Z"
						fill="white"
					/>
					<motion.path
						variants={starVariants}
						d="M69.2713 0.688293C69.5724 -0.229429 70.8706 -0.229432 71.1717 0.68829L76.7816 17.7889C76.8843 18.1021 77.1347 18.3445 77.451 18.437L96.6566 24.0536C97.6157 24.3341 97.6157 25.6927 96.6566 25.9732L77.451 31.5898C77.1347 31.6823 76.8843 31.9248 76.7816 32.2379L71.1717 49.3385C70.8706 50.2563 69.5724 50.2563 69.2713 49.3385L63.6978 32.3488C63.5756 31.9765 63.2474 31.7099 62.858 31.6666L11.8896 26.0073C10.7034 25.8756 10.7035 24.1512 11.8896 24.0195L62.8579 18.3602C63.2474 18.317 63.5756 18.0503 63.6978 17.678L69.2713 0.688293Z"
						fill="white"
					/>
					<motion.path
						variants={starVariants}
						d="M81.2713 0.688293C81.5724 -0.229429 82.8706 -0.229432 83.1717 0.68829L88.7816 17.7889C88.8843 18.1021 89.1347 18.3445 89.451 18.437L108.657 24.0536C109.616 24.3341 109.616 25.6927 108.657 25.9732L89.451 31.5898C89.1347 31.6823 88.8843 31.9248 88.7816 32.2379L83.1717 49.3385C82.8706 50.2563 81.5724 50.2563 81.2713 49.3385L75.6978 32.3488C75.5756 31.9765 75.2474 31.7099 74.858 31.6666L23.8896 26.0073C22.7034 25.8756 22.7035 24.1512 23.8896 24.0195L74.8579 18.3602C75.2474 18.317 75.5756 18.0503 75.6978 17.678L81.2713 0.688293Z"
						fill="white"
					/>
				</mask>
				<linearGradient id="glow-gradient" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="white" stopOpacity="0" />
					<stop offset="50%" stopColor="white" stopOpacity="0.4" />
					<stop offset="100%" stopColor="white" stopOpacity="0" />
				</linearGradient>
			</defs>
			<motion.path
				variants={starVariants}
				d="M58.2713 0.688293C58.5724 -0.229429 59.8706 -0.229432 60.1717 0.68829L65.7816 17.7889C65.8843 18.1021 66.1347 18.3445 66.451 18.437L85.6566 24.0536C86.6157 24.3341 86.6157 25.6927 85.6566 25.9732L66.451 31.5898C66.1347 31.6823 65.8843 31.9248 65.7816 32.2379L60.1717 49.3385C59.8706 50.2563 58.5724 50.2563 58.2713 49.3385L52.6978 32.3488C52.5756 31.9765 52.2474 31.7099 51.858 31.6666L0.889638 26.0073C-0.296551 25.8756 -0.296544 24.1512 0.889646 24.0195L51.8579 18.3602C52.2474 18.317 52.5756 18.0503 52.6978 17.678L58.2713 0.688293Z"
				fill="#667BBD"
			/>
			<motion.path
				variants={starVariants}
				d="M69.2713 0.688293C69.5724 -0.229429 70.8706 -0.229432 71.1717 0.68829L76.7816 17.7889C76.8843 18.1021 77.1347 18.3445 77.451 18.437L96.6566 24.0536C97.6157 24.3341 97.6157 25.6927 96.6566 25.9732L77.451 31.5898C77.1347 31.6823 76.8843 31.9248 76.7816 32.2379L71.1717 49.3385C70.8706 50.2563 69.5724 50.2563 69.2713 49.3385L63.6978 32.3488C63.5756 31.9765 63.2474 31.7099 62.858 31.6666L11.8896 26.0073C10.7034 25.8756 10.7035 24.1512 11.8896 24.0195L62.8579 18.3602C63.2474 18.317 63.5756 18.0503 63.6978 17.678L69.2713 0.688293Z"
				fill="white"
			/>
			<motion.path
				variants={starVariants}
				d="M81.2713 0.688293C81.5724 -0.229429 82.8706 -0.229432 83.1717 0.68829L88.7816 17.7889C88.8843 18.1021 89.1347 18.3445 89.451 18.437L108.657 24.0536C109.616 24.3341 109.616 25.6927 108.657 25.9732L89.451 31.5898C89.1347 31.6823 88.8843 31.9248 88.7816 32.2379L83.1717 49.3385C82.8706 50.2563 81.5724 50.2563 81.2713 49.3385L75.6978 32.3488C75.5756 31.9765 75.2474 31.7099 74.858 31.6666L23.8896 26.0073C22.7034 25.8756 22.7035 24.1512 23.8896 24.0195L74.8579 18.3602C75.2474 18.317 75.5756 18.0503 75.6978 17.678L81.2713 0.688293Z"
				fill="#F2B341"
			/>
			<motion.rect
				x="0"
				y="-51"
				width="110"
				height="51"
				fill="url(#glow-gradient)"
				mask="url(#star-mask)"
				variants={{
					hover: {
						y: [-51, 51],
						transition: {
							duration: 1.5,
							ease: "easeInOut",
						}
					},
					animate: {
						y: 51,
						transition: {
							delay: 0.8, // Start after all stars are staggered in
							duration: 1.5,
							ease: "easeInOut",
						}
					}
				}}
			/>
		</motion.svg>
	);
}

export function BrandStar({ className, fill = "#EEECE7" }: { className?: string; fill?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox="0 0 33 18"
			fill="none"
		>
			<path
				d="M22.2445 0L24.4676 6.77665L32.0693 8.99975L24.4676 11.2229L22.2445 17.9995L20.0214 11.2229L0 8.99975L20.0214 6.77665L22.2445 0Z"
				fill={fill}
			/>
		</svg>
	);
}

