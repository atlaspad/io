"use client";

import { useEffect } from "react";

export default function Header() {
	useEffect(() => {
		// Background

		const header = body.querySelector("header");

		const headerOffset = header.clientHeight;

		const handleHeaderStyles = () => {
			if (window.scrollY < headerOffset) {
				header.classList.remove("header--fixed");
			}
			if (window.scrollY >= headerOffset) {
				header.classList.add("header--fixed");
			}
		};

		document.addEventListener("scroll", handleHeaderStyles);

		// Menu

		const headerBurgerButton = header.querySelector(".header__burger");

		const handleHeaderBurgerButtonClick = (event) => {
			let eventTarget = event.target;
			if (eventTarget == headerBurgerButton) {
				body.classList.toggle("body--menu-open");
			}
			if (
				eventTarget.classList.contains("header__logo") ||
				eventTarget.classList.contains("header__link") ||
				eventTarget.classList.contains("header__social-link") ||
				eventTarget.classList.contains("header__docs")
			) {
				body.classList.remove("body--menu-open");
			}
		};

		header.addEventListener("click", handleHeaderBurgerButtonClick);

		// Active Link

		const sections = body.querySelectorAll("section.section");
		const navigationLinks = document.querySelectorAll(".navigation__link");

		const pageObserverOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.2,
		};

		function pageScrollEvents(entries, observer) {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					if (entry.isIntersecting) {
						navigationLinks.forEach((navigationLink) => {
							if (
								!navigationLink.classList.contains("navigation__link--external")
							) {
								navigationLink.classList.remove("navigation__link--active");
								if (
									navigationLink.href.substring(
										navigationLink.href.indexOf("#") + 1
									) == entry.target.id
								) {
									navigationLink.classList.add("navigation__link--active");
								}
							}
						});
					}
				}
			});
		}

		const pageScrollObserver = new IntersectionObserver(
			pageScrollEvents,
			pageObserverOptions
		);
		sections.forEach((section) => pageScrollObserver.observe(section));

		return () => {
			document.removeEventListener("scroll", handleHeaderStyles);
			header.removeEventListener("click", handleHeaderBurgerButtonClick);
		};
	}, []);

	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<div className="header__logo">
						<svg
							width="30"
							height="30"
							viewBox="0 0 564 562"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M285.173 394.287C311.831 394.287 333.441 372.753 333.441 346.189C333.441 319.626 311.831 298.092 285.173 298.092C258.515 298.092 236.905 319.626 236.905 346.189C236.905 372.753 258.515 394.287 285.173 394.287Z"
								fill="black"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M282 562C244.96 562.027 208.277 554.778 174.051 540.666C139.825 526.554 108.726 505.857 82.5348 479.758C56.3432 453.659 35.5723 422.671 21.4102 388.566C7.24806 354.462 -0.0273607 317.909 7.73195e-05 281C7.73195e-05 205.94 29.3354 135.375 82.5932 82.3003C135.851 29.2252 206.673 0 282 0C357.327 0 428.143 29.2313 481.407 82.3003C534.671 135.369 564 205.94 564 281C564 356.06 534.665 426.625 481.407 479.7C428.149 532.775 357.327 562 282 562ZM282 30.381C143.301 30.381 30.4892 142.805 30.4892 281C30.4876 313.912 36.992 346.502 49.6311 376.91C55.8058 391.765 63.3858 405.957 72.2475 419.302C72.2428 419.294 72.2382 419.286 72.2335 419.278C72.9776 417.442 73.7438 415.698 74.4982 414.088L194.381 157.011C210.994 121.261 246.853 97.6926 286.664 97.6926C326.034 97.6926 362.353 121.2 378.555 156.938L495.684 413.071C519.655 374.699 533.511 329.432 533.511 281C533.511 142.805 420.686 30.381 282 30.381ZM458.474 459.412C413.04 504.04 350.695 531.619 282 531.619C248.971 531.621 216.265 525.139 185.749 512.545C156.615 500.521 130.022 483.149 107.349 461.348L245.14 179.669C252.566 163.536 268.75 153.495 286.689 153.495C304.185 153.495 320.817 163.494 328.261 179.626L458.474 459.412ZM86.8286 439.083C86.8324 439.082 86.8362 439.082 86.84 439.082C86.8177 439.059 86.7953 439.037 86.7727 439.014C86.7914 439.037 86.81 439.06 86.8286 439.083Z"
								fill="black"
							/>
						</svg>
						<span className="header__logo-text">Atlaspad</span>
					</div>

					<div className="header__menu">
						<nav className="navigation header__navigation">
							<ul className="navigation__list header__list">
								<li className="navigation__item header__item">
									<a
										href="#integration"
										className="navigation__link header__link"
									>
										Solutions
									</a>
								</li>
								<li className="navigation__item header__item">
									<a
										href="#dependents"
										className="navigation__link header__link"
									>
										Partners
									</a>
								</li>
								<li className="navigation__item header__item">
									<a
										href="#testimonials_roadmap"
										className="navigation__link header__link"
									>
										Roadmap
									</a>
								</li>
								<li className="navigation__item header__item">
									<a href="#features" className="navigation__link header__link">
										Technologies
									</a>
								</li>
								<li className="navigation__item header__item">
									<a
										href="#resources"
										className="navigation__link header__link"
									>
										Communication
									</a>
								</li>
							</ul>
						</nav>
						<div className="header__externals">
							<ul className="socials header__socials">
								<li className="social header__social">
									<a
										href="https://discord.gg/atlaspad"
										target="_blank"
										rel="noopener noreferrer"
										className="social__link header__social-link"
									>
										<span className="social__text">
											Atlaspad discord channel
										</span>
									</a>
								</li>
								<li className="social header__social">
									<a
										href="https://twitter.com/Atlaspad"
										target="_blank"
										rel="noopener noreferrer"
										className="social__link header__social-link"
									>
										<span className="social__text">Atlaspad on Twitter</span>
									</a>
								</li>
								<li className="social header__social">
									<a
										href="https://medium.com/atlaspad"
										target="_blank"
										rel="noopener noreferrer"
										className="social__link header__social-link"
									>
										<span className="social__text">Atlaspad on Medium</span>
									</a>
								</li>
								<li className="social header__social">
									<a
										href="https://github.com/atlaspad"
										target="_blank"
										rel="noopener noreferrer"
										className="social__link header__social-link"
									>
										<span className="social__text">
											Atlaspad Developer Team on GitHub
										</span>
									</a>
								</li>
							</ul>
							<a
								href="https://docs.atlaspad.io/"
								target="_blank"
								rel="noopener noreferrer"
								className="button button--large header__docs"
								data-button-text="Documentation"
							>
								Documentation
							</a>
						</div>
					</div>
					<button className="header__burger">
						<div className="header__burger-lines"></div>
					</button>
				</div>
			</div>
		</header>
	);
}
