"use client";

export default function IntegrationSection() {
	return (
		<section
			id="integration"
			className="section section--integration section-with-squares"
		>
			<img src="/img/map.svg" className="integration__map" />
			<div className="container">
				<div className="integration">
					<div className="integration__content">
						<h2
							className="title text--white text--gradient integration__title"
							data-text="One Launchpad Endless Solutions"
							data-aos="zoom-in-right"
						>
							One Launchpad Endless Solutions
						</h2>
						<p
							className="title text--black integration__description"
							data-aos="zoom-in-right"
							data-aos-delay="50"
						>
							Trust Issue Resolution
						</p>
						<ul className="integration__list">
							<li className="integration__item" data-aos="zoom-in-up">
								Chatbot AI for Launchpad
							</li>
							<li className="integration__item" data-aos="zoom-in-up">
								Sign-In with zero-knowledge
							</li>
							<li className="integration__item" data-aos="zoom-in-up">
								Cross-Chain Transactions
							</li>
							<li className="integration__item" data-aos="zoom-in-up">
								Native Mobile App
							</li>
							<li className="integration__item" data-aos="zoom-in-up">
								Analytics & Report
							</li>
							<li className="integration__item" data-aos="zoom-in-up">
								Confident Privacy
							</li>
							<li className="integration__item" data-aos="zoom-in-up">
								NFT
							</li>
						</ul>
					</div>
					<div className="card-container">
						<div className="card">
							<p className="heading">
								<img
									src="./img/cards/celestia_cards.svg"
									style={{ height: "35px", marginTop: "10px" }}
								/>
							</p>
							{/* <hr className="divider" /> */}
							<p className="card-text">
								We are using celestia for scalable, accessible and secure data
								storage
							</p>
						</div>
						<div className="card">
							<p className="heading">
								<img
									src="./img/cards/o1labs_cards.svg"
									style={{ width: "90px", height: "40px" }}
								/>
							</p>
							<p className="card-text">
								We are using o1.js to build confidential and lightweight
								blockchain applications on the Mina network{" "}
							</p>
						</div>
						<div className="card">
							<p className="heading">
								<img
									src="./img/cards/mina_cards.png"
									style={{ width: "160px", height: "63px" }}
								/>
							</p>
							<p className="card-text">
								We're building secure and private ZK-Apps on the MINA blockchain
							</p>
						</div>

						<div className="card">
							<p className="heading">
								<img
									src="./img/cards/oracle_cards.png"
									style={{ width: "100%", height: "50px" }}
								/>
							</p>
							<p className="card-text">
								We are using blockchain oracles for accurate cross-chain data{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
