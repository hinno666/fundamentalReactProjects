export const AccordionItem = ({ title, info, id, currentAccordion, getId }) => {


    return (
        <div className="question">
            <div className="question__header">
                <h5>{title}</h5>
                <button className="btn" onClick={() => getId(id)}>show</button>
            </div>
            {currentAccordion === id && <p>{info}</p>}
        </div>
    );
}
