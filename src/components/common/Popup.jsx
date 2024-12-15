import PropTypes from "prop-types";

const Popup = ({ isOpen, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup">
                <p>{message}</p>
                <button onClick={onConfirm}>Так, залишити</button>
                <button onClick={onCancel}>Ні, залишитися</button>
            </div>
        </div>
    );
};

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export { Popup };