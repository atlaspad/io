"use client";

export default function StartSection() {
	return (
		<section id="getting_started" className="section section--start">
			<div className="container section-with-squares">
				<div className="start__header">
					<div className="start__sliding-header">
						<div data-aos="zoom-in-up">
							<button
								data-start-terminal="npm"
								className="title start__button text--gradient start__button--active"
								data-text="Solidity"
							>
								Solidity
							</button>
						</div>

						<div data-aos="zoom-in-up" data-aos-delay="50">
							<button
								data-start-terminal="boilerplate"
								className="title start__button text--gradient text--o1labs"
								data-text="O(1).js"
							>
								O(1).js
							</button>
						</div>
					</div>
				</div>
				<p
					className="title start__subtitle"
					data-aos="zoom-in-up"
					data-aos-delay="100"
				>
					If you want to participate in the early sale, connect your wallet and
					stake!
				</p>
				<div data-aos="zoom-in-up" data-aos-delay="150">
					<a
						href="https://drive.google.com/file/d/1ySCFX8h5IIKRpUF7UsI-vYYw1nGABA_3/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						className="button button--large start__link"
						data-button-text="Presale Demo"
					>
						Presale Demo
					</a>
				</div>
				<div
					className="start__terminals"
					data-aos="fade-up"
					data-aos-delay="175"
				>
					<div
						data-start-terminal="npm"
						className="terminal start__terminal start__terminal--active"
					>
						<div className="terminal__window">
							<div className="terminal__header">
								<div className="terminal__button terminal__button--red"></div>
								<div className="terminal__button terminal__button--yellow"></div>
								<div className="terminal__button terminal__button--green"></div>
							</div>
							<div className="terminal__section">
								<div className="terminal__history"></div>
								&gt;&nbsp;<span className="terminal__prompt"></span>
								<br />
								<span className="terminal__result">&gt; staking...</span>
								<svg
									className="terminal__spinner"
									viewBox="0 0 50 50"
									fill="none"
									color="currentColor"
								>
									<circle
										className="path"
										cx="25"
										cy="25"
										r="20"
										fill="none"
										stroke="currentColor"
										strokeWidth="5"
									></circle>
								</svg>
								<span className="terminal__notification">staked!</span>
							</div>
							<canvas className="terminal__confetti"></canvas>
						</div>
					</div>
					<div
						data-start-terminal="boilerplate"
						className="terminal terminal--white start__terminal"
					>
						<div className="terminal__window">
							<div className="terminal__header">
								<div className="terminal__button terminal__button--red"></div>
								<div className="terminal__button terminal__button--yellow"></div>
								<div className="terminal__button terminal__button--green"></div>
							</div>
							<div className="terminal__section">
								<div className="terminal__history"></div>
								&gt;&nbsp;<span className="terminal__prompt"></span>
								<br />
								<span className="terminal__result">&gt; launching...</span>
								<svg
									className="terminal__spinner"
									viewBox="0 0 50 50"
									fill="none"
									color="currentColor"
								>
									<circle
										className="path"
										cx="25"
										cy="25"
										r="20"
										fill="none"
										stroke="currentColor"
										strokeWidth="5"
									></circle>
								</svg>
								<span className="terminal__notification">launched!</span>
							</div>
							<canvas className="terminal__confetti"></canvas>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
