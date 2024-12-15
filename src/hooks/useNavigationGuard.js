import {useState} from "react";
import {useNavigate} from "react-router-dom";

const useNavigationGuard = (isDirty, reset) => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handleNavigation = (e) => {
        if (isDirty) {
            e.preventDefault();
            setShowPopup(true);
        } else {
            navigate("/");
        }
    };

    const confirmNavigation = () => {
        setShowPopup(false);
        reset();
        navigate("/");
    };

    return {showPopup, setShowPopup, handleNavigation, confirmNavigation};
};

export {useNavigationGuard};
