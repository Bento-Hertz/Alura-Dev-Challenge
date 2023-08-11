import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

const ScrollToTop = (props: any) => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>{props.children}</>
    );
}

export default ScrollToTop;