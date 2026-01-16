import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="w-full pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
