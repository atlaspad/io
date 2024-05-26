"use client";

export default function RoadmapSection() {
	return (
		<section
			id="testimonials_roadmap"
			className="section section--testimonials section-with-squares"
		>
			<div className="container">
				{/* <div className="testimonials">  join the Revolution of Mythology.animasyonunu bozuyor */}
				<div className="testimonials__head">
					<div className="badge badge--uppercase" data-aos="zoom-in-right">
						<span className="badge__text">Featured</span>
					</div>
					<h2 className="title testimonials__title roadmap-heading">
						<span
							className="text--gradient"
							data-text="Roadmap"
							data-aos="zoom-in-up"
							data-aos-delay="150"
						>
							Roadmap
						</span>
						<br />
					</h2>
					<div style={{ textAlign: "center" }}>
						<img
							src="./img/roadmap.png"
							style={{ maxWidth: "100%", height: "auto" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
