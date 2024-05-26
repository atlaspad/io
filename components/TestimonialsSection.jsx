"use client";

export default function TestimonialsSection() {
	return (
		<section
			id="testimonials"
			className="section section--testimonials section-with-squares"
		>
			<div className="container">
				<div className="testimonials">
					<div className="testimonials__head">
						<div className="badge badge--uppercase" data-aos="zoom-in-right">
							<span className="badge__text">Featured</span>
						</div>
						<h2 className="title testimonials__title">
							<span
								className="text--gradient"
								data-text="Talk About"
								data-aos="zoom-in-up"
								data-aos-delay="150"
							>
								Talk About
							</span>
							<br />
						</h2>
					</div>
					<ul className="testimonials__list">
						<li className="testimonials__item" data-aos="zoom-in-up"></li>
						<li className="testimonials__item" data-aos="zoom-in-up">
							<picture>
								<source srcSet="/img/testimonials/2.png 1x, /img/testimonials/2@2x.png 2x" />
								<img
									src="/img/testimonials/2.png"
									alt=""
									className="testimonials__image"
								/>
							</picture>
						</li>
						<li className="testimonials__item" data-aos="zoom-in-up">
							<picture>
								<source srcSet="/img/testimonials/3.png 1x, /img/testimonials/3@2x.png 2x" />
								<img
									src="/img/testimonials/3.png"
									alt=""
									className="testimonials__image"
								/>
							</picture>
						</li>
						<li className="testimonials__item" data-aos="zoom-in-up">
							<picture>
								<source srcSet="/img/testimonials/3.png 1x, /img/testimonials/5@2x.png 2x" />
								<img
									src="/img/testimonials/5.png"
									alt=""
									className="testimonials__image"
								/>
							</picture>
						</li>
						<li className="testimonials__item" data-aos="zoom-in-up">
							<picture>
								<source srcSet="/img/testimonials/4.png 1x, /img/testimonials/4@2x.png 2x" />
								<img
									src="/img/testimonials/4.png"
									alt=""
									className="testimonials__image"
								/>
							</picture>
						</li>

						<li className="testimonials__item" data-aos="zoom-in-up">
							<picture>
								<source srcSet="/img/testimonials/6.png 1x, /img/testimonials/6@2x.png 2x" />
								<img
									src="/img/testimonials/6.png"
									alt=""
									className="testimonials__image"
								/>
							</picture>
						</li>
					</ul>
					<div className="testimonials__paginations"></div>
				</div>
			</div>
		</section>
	);
}
