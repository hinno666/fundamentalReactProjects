import { questions } from "../../../data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
    return (
        <article className="accordion project" id="Accordion">
            <div className="project__name">Accordion</div>
            {questions.map((question) => {
                return (
                    <AccordionItem key={question.id} {...question} />
                )
            })}
        </article>
    );
}

export default Accordion;