import AboutSection from "@/components/AboutSection";
import DependentsSection from "@/components/DependentsSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntegrationSection from "@/components/IntegrationSection";
import ResourcesSection from "@/components/ResourcesSection";
import RoadmapSection from "@/components/RoadmapSection";
import StartSection from "@/components/StartSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main">
				<HeroSection />
				<IntegrationSection />
				<DependentsSection />
				<RoadmapSection />
				<TestimonialsSection />
				<FeaturesSection />
				<StartSection />
				<ResourcesSection />
				<FaqSection />
				<AboutSection />
			</main>
			<Footer />
		</>
	);
}
