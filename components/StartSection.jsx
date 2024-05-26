"use client";

import { useEffect } from "react";

let isInitialized = false;

export default function StartSection() {
	useEffect(() => {
		if (isInitialized) return;
		isInitialized = true;

		const startHeader = window.document.body.querySelector(".start__header");
		const startSlidingHeader = startHeader.querySelector(
			".start__sliding-header"
		);
		const startTriggers = startSlidingHeader.querySelectorAll(".start__button");
		const startTerminals = body.querySelectorAll(".start__terminal");
		const npmTerminal = body.querySelector(
			'.start__terminal[data-start-terminal="npm"]'
		);
		const boilerplateTerminal = body.querySelector(
			'.start__terminal[data-start-terminal="boilerplate"]'
		);

		function setupCanvas(canvas) {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			const ctx = canvas.getContext("2d");
			ctx.scale(dpr, dpr);
			return ctx;
		}

		const ctx = setupCanvas(document.querySelector(".terminal__confetti"));

		const showTerminalResult = (terminal) => {
			terminal
				.querySelector(".terminal__result")
				.classList.add("terminal__result--active");
			terminal
				.querySelector(".typed-cursor")
				.classList.add("terminal__cursor--hidden");
			terminal
				.querySelector(".terminal__spinner")
				.classList.add("terminal__spinner--active");
			const decorationTimeout = setTimeout(() => {
				terminal
					.querySelector(".terminal__spinner")
					.classList.remove("terminal__spinner--active");
				terminal
					.querySelector(".terminal__notification")
					.classList.add("terminal__notification--active");
				const terminalConfetti = confetti.create(
					terminal.querySelector(".terminal__confetti"),
					{
						resize: true,
					}
				);
				terminalConfetti({
					angle: 360,
					spread: 360,
					particleCount: 500,
					origin: { x: 0.5, y: 1.2 },
					useWorker: true,
				});
			}, 1500);
		};

		const terminalsSection = body.querySelector(".start__terminals");

		const terminalsObserverOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.2,
		};

		const typeNpmTerminal = new Typed(
			npmTerminal.querySelector(".terminal__prompt"),
			{
				strings: [
					`
  SPDX-License-Identifier: MIT
  pragma solidity 0.8.20;
  contract Atlaspad is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("AtlasToken", "AP") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}`,
				],

				typeSpeed: 40,
				onStringTyped: (pos, self) => showTerminalResult(npmTerminal),
				cursorChar: "|",
			}
		);

		const typeBoilerplateTerminal = new Typed(
			boilerplateTerminal.querySelector(".terminal__prompt"),
			{
				strings: [
					`import { Field, SelfProof, ZkProgram } from "o1js";
const AddOne = ZkProgram ( {
    name: "add-one-example",
    publicInput: Field,
    methods: {
        baseCase: {
            privateInputs: [],
            method(publicInput: Field) {
                publicInput.assertEquals(Field(0));
            },
        },
    },
});`,
				],
				typeSpeed: 45,
				onStringTyped: (pos, self) => showTerminalResult(boilerplateTerminal),
				cursorChar: "|",
			}
		);

		typeNpmTerminal.reset();
		typeNpmTerminal.stop();
		typeBoilerplateTerminal.reset();
		typeBoilerplateTerminal.stop();

		let firstEntry = true;

		function scrollEvents(entries, observer) {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0) {
					if (entry.isIntersecting) {
						if (firstEntry !== false) {
							typeNpmTerminal.reset();
							typeNpmTerminal.start();
						}
						firstEntry = false;
					}
				}
			});
		}

		const terminalsScrollObserver = new IntersectionObserver(
			scrollEvents,
			terminalsObserverOptions
		);
		terminalsScrollObserver.observe(terminalsSection);

		startHeader.addEventListener("click", (event) => {
			startTriggers.forEach((button) =>
				button.classList.remove("start__button--active")
			);
			event.target.classList.add("start__button--active");
			startTerminals.forEach((terminal) => {
				terminal.classList.remove("start__terminal--active");
				terminal
					.querySelector(".terminal__notification")
					.classList.remove("terminal__notification--active");
				terminal
					.querySelector(".terminal__result")
					.classList.remove("terminal__result--active");
				terminal
					.querySelector(".typed-cursor")
					.classList.remove("terminal__cursor--hidden");
				terminal
					.querySelector(".terminal__spinner")
					.classList.remove("terminal__spinner--active");
				if (
					terminal.dataset.startTerminal === event.target.dataset.startTerminal
				) {
					terminal.classList.add("start__terminal--active");
					typeNpmTerminal.reset();
					typeBoilerplateTerminal.reset();
					typeNpmTerminal.start();
					typeBoilerplateTerminal.start();
					if (event.target.dataset.startTerminal === "boilerplate") {
						startSlidingHeader.style.transform = `translateX(-${Math.max(
							0,
							startSlidingHeader.clientWidth - startHeader.clientWidth
						)}px)`;
					} else {
						startSlidingHeader.style.transform = `translateX(0px)`;
					}
				}
			});
		});
	}, []);

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
