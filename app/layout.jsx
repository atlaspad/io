import Scripts from "@/components/Scripts";
import "./globals.sass";

export const metadata = {
	title: "Atlaspad",
	description:
		"Atlaspad, introduces a the first and only trustless Cross-Chain ZK Launchpad that utilizes zero-knowledge proofs to enable secure and private transactions across multiple blockchains.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/png" href="/img/atlasLogo.svg" />
				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
			</head>
			<body className="body">
				{children}
				<Scripts />
			</body>
		</html>
	);
}
