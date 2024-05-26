"use client";

export default function FaqSection() {
	return (
		<section
			style={{ textAlign: "center" }}
			className="section section-with-squares"
		>
			<h2
				className="title text--gradient resources__title"
				data-text="FAQ"
				data-aos="zoom-in-down"
				style={{ marginTop: "75px", zIndex: "2" }}
			>
				FAQ
			</h2>
			<div
				className="accordion accordion-flush"
				id="accordionFlushExample"
				style={{
					display: "block",
					textAlign: "left",
					maxWidth: "800px",
					margin: "auto",
					lineHeight: "23px",
				}}
			>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne"
						>
							What is AtlasPad ?
						</button>
					</h2>
					<div
						id="flush-collapseOne"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							AtlasPad is a cross-chain ZK Launchpad platform that enables
							secure and fair transactions across multiple blockchain networks.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseTwo"
							aria-expanded="false"
							aria-controls="flush-collapseTwo"
						>
							What is the main purpose of AtlasPad ?
						</button>
					</h2>
					<div
						id="flush-collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							AtlasPad aims to solve the urgent privacy issues and high
							transaction costs in DeFi by using zero-knowledge proofs, allowing
							secure and private transactions across multiple blockchain
							networks.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseThree"
							aria-expanded="false"
							aria-controls="flush-collapseThree"
						>
							Which Blockchain Networks does AtlasPad support ?
						</button>
					</h2>
					<div
						id="flush-collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							AtlasPad is a multi-chain platform, supporting various blockchain
							networks including Ethereum, Binance Smart Chain, and Mina
							Protocol.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseFour"
							aria-expanded="false"
							aria-controls="flush-collapseFour"
						>
							How can users utilize AtlasPad ?
						</button>
					</h2>
					<div
						id="flush-collapseFour"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Users can participate in upcoming projects' pre-sales by staking
							on the platform across multiple blockchain networks.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseFive"
							aria-expanded="false"
							aria-controls="flush-collapseFive"
						>
							What are the Security Features of AtlasPad ?
						</button>
					</h2>
					<div
						id="flush-collapseFive"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							AtlasPad is recognized as the gold standard for security and
							reliability in the crypto industry. It employs stringent security
							measures such as smart contracts and zero-knowledge-based
							technology.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseSix"
							aria-expanded="false"
							aria-controls="flush-collapseSix"
						>
							How can I join the community ?
						</button>
					</h2>
					<div
						id="flush-collapseSix"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							You can join our community through our Linktree:{" "}
							<a href="https://linktr.ee/atlaspad" target="_blank">
								https://linktr.ee/atlaspad
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
