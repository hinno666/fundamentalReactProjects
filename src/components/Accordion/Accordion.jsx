import { useState } from "react";
import { questions } from "../../data";
import { AccordionItem } from "./AccordionItem/AccordionItem";

import './Accordion.css'


export const Accordion = () => {
    const [currentAccordion, setCurrentAccordion] = useState(null);

    const getId = (id) => {
        setCurrentAccordion((prevId) => prevId === id ? null : id)
    }

    return (
        <article className="accordion with-spacing" id="Accordion">
            <div className="project__name">Accordion</div>
            {questions.map((question) => {
                return (
                    <AccordionItem key={question.id} {...question} currentAccordion={currentAccordion} getId={getId} />
                )
            })}
        </article>
    );
}
