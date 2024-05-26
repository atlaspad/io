"use client";

export default function HeroSection() {
	return (
		<section id="main" className="section section--hero">
			<div className="container section-with-squares">
				<div className="hero">
					<img
						src="/img/hero.svg"
						className="hero__ethereum"
						style={{ position: "absolute" }}
					/>

					<h1 className="title hero__title">
						<span data-aos="zoom-in-down">Atlaspad</span>{" "}
						<span
							className="text--gradient"
							data-text="Multichain"
							data-aos="zoom-in-left"
							data-aos-delay="50"
						>
							Multichain
						</span>
						<br />
						<span
							className="text--gradient"
							data-text="Launchpad"
							data-aos="zoom-in-up"
							data-aos-delay="150"
						>
							Launchpad
						</span>
						<div className="hero__react-wrapper">
							<svg
								className="hero__react"
								viewBox="0 0 256 256"
								fill="none"
								color="currentColor"
								data-aos="zoom-in-left"
							>
								<svg
									width="230"
									height="230"
									viewBox="0 0 564 562"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M285.173 394.287C311.831 394.287 333.441 372.753 333.441 346.189C333.441 319.626 311.831 298.092 285.173 298.092C258.515 298.092 236.905 319.626 236.905 346.189C236.905 372.753 258.515 394.287 285.173 394.287Z"
										fill="url(#paint0_radial_93_2)"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M282 562C244.96 562.027 208.277 554.778 174.051 540.666C139.825 526.554 108.726 505.857 82.5348 479.758C56.3432 453.659 35.5723 422.671 21.4102 388.566C7.24806 354.462 -0.0273607 317.909 7.73195e-05 281C7.73195e-05 205.94 29.3354 135.375 82.5932 82.3003C135.851 29.2252 206.673 0 282 0C357.327 0 428.143 29.2313 481.407 82.3003C534.671 135.369 564 205.94 564 281C564 356.06 534.665 426.625 481.407 479.7C428.149 532.775 357.327 562 282 562ZM282 30.381C143.301 30.381 30.4892 142.805 30.4892 281C30.4876 313.912 36.992 346.502 49.6311 376.91C55.8058 391.765 63.3858 405.957 72.2475 419.302C72.2428 419.294 72.2382 419.286 72.2335 419.278C72.9776 417.442 73.7438 415.698 74.4982 414.088L194.381 157.011C210.994 121.261 246.853 97.6926 286.664 97.6926C326.034 97.6926 362.353 121.2 378.555 156.938L495.684 413.071C519.655 374.699 533.511 329.432 533.511 281C533.511 142.805 420.686 30.381 282 30.381ZM458.474 459.412C413.04 504.04 350.695 531.619 282 531.619C248.971 531.62 216.265 525.139 185.749 512.545C156.615 500.521 130.022 483.149 107.349 461.348L245.14 179.669C252.566 163.536 268.75 153.495 286.689 153.495C304.185 153.495 320.817 163.494 328.261 179.626L458.474 459.412ZM86.8286 439.083C86.8324 439.082 86.8362 439.082 86.84 439.082C86.8177 439.059 86.7953 439.037 86.7727 439.014C86.7914 439.037 86.81 439.06 86.8286 439.083Z"
										fill="url(#paint1_radial_93_2)"
									/>
									<defs>
										<radialGradient
											id="paint0_radial_93_2"
											cx="0"
											cy="0"
											r="1"
											gradientUnits="userSpaceOnUse"
											gradientTransform="translate(282.307 16.5114) rotate(90) scale(899.567 902.768)"
										>
											<stop stopColor="#88F2E7" stopOpacity="0.7" />
											<stop
												offset="0.343785"
												stopColor="#35ADA1"
												stopOpacity="0.7"
											/>
											<stop
												offset="0.599641"
												stopColor="#3F60C6"
												stopOpacity="0.7"
											/>
											<stop
												offset="0.902228"
												stopColor="#4B04F1"
												stopOpacity="0.7"
											/>
										</radialGradient>
										<radialGradient
											id="paint1_radial_93_2"
											cx="0"
											cy="0"
											r="1"
											gradientUnits="userSpaceOnUse"
											gradientTransform="translate(282.307 16.5114) rotate(90) scale(899.567 902.768)"
										>
											<stop stopColor="#88F2E7" stopOpacity="0.7" />
											<stop
												offset="0.343785"
												stopColor="#35ADA1"
												stopOpacity="0.7"
											/>
											<stop
												offset="0.599641"
												stopColor="#3F60C6"
												stopOpacity="0.7"
											/>
											<stop
												offset="0.902228"
												stopColor="#4B04F1"
												stopOpacity="0.7"
											/>
										</radialGradient>
									</defs>
								</svg>
							</svg>
						</div>
					</h1>
					<p
						className="title hero__description"
						style={{ fontWeight: "500 !important" }}
						data-aos="zoom-in-up"
						data-aos-delay="200"
					>
						Atlaspad, introduces a the first and only trustless Cross-Chain ZK
						Launchpad that utilizes zero-knowledge proofs to enable secure and
						private transactions across multiple blockchains.
					</p>
				</div>
			</div>
		</section>
	);
}
