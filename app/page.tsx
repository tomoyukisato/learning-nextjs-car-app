import { Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
    return (
        <main className="ovnpmcerflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore out cars you might like</p>
                </div>
            </div>
            <div className="home__filters">
                <SearchBar />
            </div>
        </main>
    );
}
