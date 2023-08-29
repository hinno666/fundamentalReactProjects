import PropTypes from "prop-types";

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

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    currentAccordion: PropTypes.number,
    getId: PropTypes.func,
}