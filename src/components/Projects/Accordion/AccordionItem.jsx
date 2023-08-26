import { useState } from "react";


const AccordionItem = ({ title, info, id }) => {
    const [answer, setAnswer] = useState(false);

    // const [activeId, setActiveId] = useState(null)



    return (
        <div className="question">
            <div className="question__header">
                <h5>{title}</h5>
                <button className="btn" onClick={() => setAnswer(!answer)}>show</button>
            </div>
            {answer && <p>{info}</p>}
        </div>
    );
}

export default AccordionItem;