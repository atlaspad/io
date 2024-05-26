"use client";

import { useEffect } from "react";

export default function AboutSection() {
	useEffect(() => {
		window.Marquee3k.init();
	}, []);

	return (
		<section id="testimonials_about" className="section section--testimonials">
			<div className="container">
				<div className="testimonials">
					<div data-aos="zoom-in" data-aos-delay="50">
						<div className="marquee3k" data-speed="1">
							<h4
								className="title text--gradient about__loop-text"
								data-text="Join the Revolution of Mythology.&nbsp;"
							>
								Join the Revolution of Mythology.&nbsp;
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<p
					className="title about__description"
					data-aos="zoom-in-up"
					data-aos-delay="65"
				>
					We are the <br />
					Atlaspad Developer Team
					<br />
					working with the{" "}
					<a
						href="https://minaprotocol.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="about__description-link"
					>
						Mina Protocol
					</a>
					.
				</p>
				<ul className="socials about__socials">
					<li className="social about__social">
						<a
							href="https://discord.gg/atlaspad"
							target="_blank"
							rel="noopener noreferrer"
							className="social__link"
							data-aos="zoom-in-up"
							data-aos-delay="20"
						>
							<span className="social__text">Atlaspad discord channel</span>
						</a>
					</li>
					<li className="social about__social">
						<a
							href="https://twitter.com/Atlaspad"
							target="_blank"
							rel="noopener noreferrer"
							className="social__link"
							data-aos="zoom-in-up"
							data-aos-delay="40"
						>
							<span className="social__text">Atlaspad on Twitter</span>
						</a>
					</li>
					<li className="social about__social">
						<a
							href="https://medium.com/AtlasPad"
							target="_blank"
							rel="noopener noreferrer"
							className="social__link"
							data-aos="zoom-in-up"
							data-aos-delay="60"
						>
							<span className="social__text">Atlaspad on Medium</span>
						</a>
					</li>
					<li className="social about__social">
						<a
							href="https://github.com/AtlasPad"
							target="_blank"
							rel="noopener noreferrer"
							className="social__link"
							data-aos="zoom-in-up"
							data-aos-delay="80"
						>
							<span className="social__text">Atlaspad on GitHub</span>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
