import Header from "components/Navigation/Header";
import Sidebar from "components/Navigation/Sidebar";
import { useState } from "react";

const Navigation = () => {

    const [activeSidebar, setActiveSidebar] = useState(false);

    return (
        <>
            <Sidebar activeSidebar={activeSidebar} disableSidebar={() => setActiveSidebar(false)}/>
            <Header activeSidebar={activeSidebar} onToggleSidebar={(toggle) => setActiveSidebar(toggle)}/>
        </>
    );
} 

export default Navigation;