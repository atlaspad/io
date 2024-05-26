"use client";

export default function FeaturesSection() {
	return (
		<section id="features" className="section section-with-squares">
			<div className="container">
				{/* <div className="testimonials">  join the Revolution of Mythology.animasyonunu bozuyor */}
				<div className="testimonials__head">
					<div className="tech-heading">
						<div className="badge badge--uppercase" data-aos="zoom-in-right">
							<span className="badge__text">Featured</span>
						</div>
						<h2 className="title testimonials__title">
							<span
								className="text--gradient"
								data-text="Technologies"
								data-aos="zoom-in-up"
								data-aos-delay="150"
							>
								Technologies
							</span>
							<br />
						</h2>
					</div>
				</div>
				<div className="container">
					<div className="features">
						<div className="features__row">
							<div className="features__column">
								<div className="badge badge--uppercase" data-aos="zoom-in-left">
									<span className="badge__text">Feature</span>
								</div>
								<h3
									className="title features__title"
									data-aos="zoom-in-left"
									data-aos-delay="50"
								>
									Chatbot
								</h3>
								<p
									className="features__text"
									data-aos="zoom-in-left"
									data-aos-delay="75"
								>
									Chatbot allows your users to get 24/7 instant support.
								</p>
								<p
									className="features__text"
									data-aos="zoom-in-left"
									data-aos-delay="100"
								>
									It quickly answers their questions, provides solutions and
									maximises the customer experience.
								</p>
							</div>
							<div className="features__video-container" data-aos="zoom-in-up">
								<img
									className="features__video"
									src="/img/covers/write__cover.png"
									autoPlay
									loop
									muted
									playsInline
									onContextMenu={() => false}
									style={{ marginTop: "20px" }}
								/>
							</div>
						</div>
						<div className="features__row">
							<div className="features__column">
								<div className="badge badge--uppercase" data-aos="zoom-in-left">
									<span className="badge__text">Feature</span>
								</div>
								<h3
									className="title features__title"
									data-aos="zoom-in-left"
									data-aos-delay="50"
								>
									Encrypt
								</h3>
								<p
									className="features__text"
									data-aos="zoom-in-left"
									data-aos-delay="75"
								>
									Homomorphic encryption
								</p>
								<p
									className="features__text"
									data-aos="zoom-in-left"
									data-aos-delay="100"
								>
									Ensures secure processing of sensitive information while
									preserving privacy and confidentiality during data
									manipulation processes.
								</p>
							</div>
							<div
								className="features__video-container features__mina"
								data-aos="zoom-in-up"
							>
								<img
									className="features__video"
									src="/img/covers/read__cover.png"
									autoPlay
									loop
									muted
									playsInline
									onContextMenu={() => false}
									style={{ marginTop: "10px" }}
								/>
							</div>
						</div>
						<div className="features__row">
							<div className="features__column">
								<div className="badge badge--uppercase" data-aos="zoom-in-left">
									<span className="badge__text">Feature</span>
								</div>
								<h3
									className="title features__title"
									data-aos="zoom-in-left"
									data-aos-delay="50"
								>
									Oracle
								</h3>
								<p
									className="features__text"
									data-aos="zoom-in-left"
									data-aos-delay="75"
								></p>
								<p
									className="features__text"
									data-aos="zoom-in-left"
									data-aos-delay="100"
								>
									Connect EVM-chains with oracle
								</p>
							</div>
							<div
								className="features__video-container features__oracle"
								data-aos="zoom-in-up"
							>
								<img
									className="features__video"
									src="/img/covers/connect__cover.png"
									autoPlay
									loop
									muted
									playsInline
									onContextMenu={() => false}
									style={{ marginTop: "-20px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
