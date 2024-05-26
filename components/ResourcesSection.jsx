"use client";

export default function ResourcesSection() {
	return (
		<section
			id="resources"
			className="section section--resources section-with-squares"
		>
			<div className="container">
				<div className="resources">
					<h2
						className="title text--gradient resources__title"
						data-text="Communication"
						data-aos="zoom-in-down"
					>
						Communication
					</h2>
					<div className="resources__grid">
						<picture className="resources__picture">
							<source srcset="/img/resources/resources.png 1x, /img/resources/resources@2x.png 2x" />
							<img
								src="/img/resources/resources.png"
								alt=""
								className="resources__image"
								data-aos="zoom-in-up"
								data-aos-delay="25"
							/>
						</picture>
						<div data-aos="zoom-in-right" data-aos-delay="50">
							<a
								href="https://docs.atlaspad.io/"
								target="_blank"
								rel="noopener noreferrer"
								className="resources__item"
							>
								<svg
									className="resources__icon"
									viewBox="0 0 32 32"
									fill="none"
									color="currentColor"
								>
									<path
										d="M18.668 0V9.33238H28.0004L18.668 0Z"
										fill="currentColor"
									/>
									<path
										d="M18.6655 11.9989C17.1928 11.9989 15.9989 10.8034 15.9989 9.33238V0H6.66656C5.19388 0 4 1.19232 4 2.665V29.3306C4 30.8049 5.19388 31.9968 6.66656 31.9968L25.3313 32C26.8028 32 27.9979 30.8049 27.9979 29.333V11.9989H18.6655Z"
										fill="currentColor"
									/>
								</svg>
								<span
									className="title text--gradient resources__name"
									data-text="Documentation"
								>
									Documentation
								</span>
								<span className="subtitle resources__description">
									Take your first steps
								</span>
							</a>
						</div>
						<div data-aos="zoom-in-right" data-aos-delay="55">
							<a
								href="mailto:info@atlaspad.io"
								target="_blank"
								rel="noopener noreferrer"
								className="resources__item"
							>
								<svg
									className="resources__icon"
									fill="currentColor"
									height="800px"
									width="800px"
									id="Capa_1"
									viewBox="0 0 400 400"
									space="preserve"
								>
									<g id="XMLID_1_">
										<polygon
											id="XMLID_869_"
											points="0,127.5 0,274.219 104.8,206.1 	"
										/>
										<polygon
											id="XMLID_870_"
											points="400,274.219 400,127.5 295.2,206.1 	"
										/>
										<polygon
											id="XMLID_871_"
											points="200,277.5 130.357,225.268 0,310 0,340 400,340 400,310 269.643,225.268 	"
										/>
										<polygon
											id="XMLID_872_"
											points="0,90 200,240 400,90 400,60 0,60 	"
										/>
									</g>
								</svg>
								<span
									className="title text--gradient resources__name"
									data-text="Contact Us"
								>
									Contact Us
								</span>
								<span className="subtitle resources__description">
									I have questions
								</span>
							</a>
						</div>
						<div data-aos="zoom-in-left" data-aos-delay="60">
							<a
								href="https://discord.gg/atlaspad"
								target="_blank"
								rel="noopener noreferrer"
								className="resources__item"
							>
								<svg
									className="resources__icon"
									viewBox="0 0 24 24"
									fill="none"
									color="currentColor"
								>
									<path
										d="M9.14437 11.2547V11.2469C8.24733 11.2469 7.52344 11.9885 7.52344 12.8999C7.52344 13.8114 8.24733 14.553 9.14437 14.553C10.0414 14.553 10.7654 13.8114 10.7654 12.9077C10.7654 11.9962 10.0335 11.2547 9.14437 11.2547Z"
										fill="currentColor"
									/>
									<path
										d="M12 0.28125C5.52792 0.28125 0.28125 5.52792 0.28125 12C0.28125 18.4721 5.52792 23.7188 12 23.7188C18.4721 23.7188 23.7188 18.4721 23.7188 12C23.7188 5.52792 18.4721 0.28125 12 0.28125ZM16.3357 18.1833C16.3357 18.1833 15.7453 17.5266 15.3206 16.9474C17.3664 16.3681 18.1378 15.2095 18.1378 15.2095C16.0106 16.5247 14.024 17.0307 12 16.9649C9.97598 17.0305 7.98938 16.5247 5.86247 15.2095C5.86247 15.2095 6.63356 16.3681 8.67966 16.9474C8.25478 17.5268 7.66462 18.1833 7.66462 18.1833C4.15495 18.1061 2.79375 15.9587 2.715 16.0514C2.715 11.2702 5.03625 7.377 5.03625 7.377C7.11356 5.88638 9.04927 5.82441 9.41906 5.81667L9.65517 6.04069C7.00341 6.7822 5.72081 7.94086 5.72081 7.94086C7.99673 6.84159 10.1418 6.45492 12 6.43177C13.8582 6.4552 16.0031 6.84159 18.2792 7.94086C18.2792 7.94086 16.9966 6.7822 14.3449 6.04069L14.5809 5.81667C14.9508 5.82441 16.8864 5.88619 18.9637 7.377C18.9637 7.377 21.285 11.2701 21.285 16.0514C21.2063 15.9587 19.845 18.1061 16.3357 18.1833Z"
										fill="currentColor"
									/>
									<path
										d="M14.8554 11.2468V11.2546C13.9662 11.2546 13.2344 11.9961 13.2344 12.9076C13.2344 13.8113 13.9584 14.5529 14.8554 14.5529C15.7524 14.5529 16.4763 13.8113 16.4763 12.8998C16.4763 11.9883 15.7524 11.2468 14.8554 11.2468Z"
										fill="currentColor"
									/>
								</svg>
								<span
									className="title text--gradient resources__name"
									data-text="Discord"
								>
									Discord
								</span>
								<span className="subtitle resources__description">
									Connect with the community
								</span>
							</a>
						</div>
						<div data-aos="zoom-in-left" data-aos-delay="70">
							<a
								href="https://github.com/atlaspad"
								target="_blank"
								rel="noopener noreferrer"
								className="resources__item"
							>
								<svg
									className="resources__icon"
									viewBox="0 0 24 24"
									fill="none"
									color="currentColor"
								>
									<path
										d="M11.9985 0.249817C5.373 0.249817 0 5.64381 0 12.2978C0 17.6198 3.438 22.1348 8.208 23.7293C8.808 23.8403 9.027 23.4683 9.027 23.1488C9.027 22.8623 9.0165 22.1048 9.0105 21.0998C5.673 21.8273 4.968 19.4843 4.968 19.4843C4.4235 18.0923 3.636 17.7218 3.636 17.7218C2.5455 16.9748 3.717 16.9898 3.717 16.9898C4.9215 17.0753 5.5545 18.2318 5.5545 18.2318C6.6255 20.0723 8.364 19.5413 9.048 19.2323C9.156 18.4538 9.4665 17.9228 9.81 17.6213C7.146 17.3168 4.344 16.2833 4.344 11.6678C4.344 10.3523 4.812 9.27681 5.58 8.43381C5.4555 8.12931 5.0445 6.90381 5.697 5.24631C5.697 5.24631 6.705 4.92232 8.997 6.48081C9.954 6.21381 10.98 6.08031 12.0015 6.07581C13.02 6.08181 14.0475 6.21381 15.006 6.48231C17.2965 4.92382 18.303 5.24782 18.303 5.24782C18.957 6.90681 18.546 8.13081 18.423 8.43531C19.1925 9.27831 19.656 10.3538 19.656 11.6693C19.656 16.2968 16.851 17.3153 14.178 17.6138C14.6085 17.9858 14.9925 18.7208 14.9925 19.8443C14.9925 21.4553 14.9775 22.7543 14.9775 23.1488C14.9775 23.4713 15.1935 23.8463 15.8025 23.7278C20.565 22.1318 24 17.6183 24 12.2978C24 5.64381 18.627 0.249817 11.9985 0.249817Z"
										fill="currentColor"
									/>
								</svg>
								<span
									className="title text--gradient resources__name"
									data-text="Github"
								>
									Github
								</span>
								<span className="subtitle resources__description">
									Examine the architecture
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
