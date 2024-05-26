"use client";

export default function DependentsSection() {
	return (
		<section
			id="dependents"
			className="section section--dependents section-with-squares"
		>
			<div className="container">
				{/* <div className="testimonials">  join the Revolution of Mythology.animasyonunu bozuyor */}
				<div className="testimonials__head partner-heading">
					<div className="badge badge--uppercase" data-aos="zoom-in-right">
						<span className="badge__text">Featured</span>
					</div>
					<h2 className="title testimonials__title">
						<span
							className="text--gradient"
							data-text="Strong Partner"
							data-aos="zoom-in-up"
							data-aos-delay="150"
						>
							Strong Partner
						</span>
						<br />
					</h2>
				</div>
			</div>
			<div className="dependents">
				<div className="container container--full">
					<div className="slider dependents__slider">
						<ul className="slider__list">
							<li
								className="dependents__slide slider__item"
								data-aos="zoom-in-up"
							>
								<a
									href="https://minaprotocol.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="slider__column slider__link"
								>
									<picture>
										<source srcSet="/img/projects/mina.png 1x, /img/projects/mina@2x.png 2x" />
										<img
											src="/img/projects/Treasure_Marketplace.png"
											alt="mina logo"
											className="slider__image"
										/>
									</picture>
									<span className="subtitle slider__text">Mina Foundation</span>
								</a>
							</li>
							<li
								className="dependents__slide slider__item"
								data-aos="zoom-in-up"
							>
								<a
									href="https://www.whalelabs.net/"
									target="_blank"
									rel="noopener noreferrer"
									className="slider__column slider__link"
								>
									<picture>
										<source srcSet="/img/projects/whalelabs.png 1x, /img/projects/whalelabs@2x.png 2x" />
										<img
											src="/img/projects/o1labs.png"
											alt="whalelabs logo"
											className="slider__image"
										/>
									</picture>
									<span className="subtitle slider__text">Whale Labs</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
