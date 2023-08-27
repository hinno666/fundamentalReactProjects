import { Accordion } from "./Accordion/Accordion";
import Reviews from "./Reviews/Reviews";

export const ProjectsContainer = () => {
    return (
        <main className="main container">
            <h1 className="title">my projects</h1>
            <Reviews />
            <Accordion />
        </main>
    );
}
