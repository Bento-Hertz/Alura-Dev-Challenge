import searchIcon from "assets/search-icon.svg";
import logo from "assets/logo.svg";
import menuIcon from "assets/menu-icon.svg";
import xIcon from "assets/x.svg";
import profileIcon from "assets/profile-icon.png";
import styles from "./styles.module.scss";
import Input from "components/Input";   
import { useState } from "react";

interface Props {
    activeSidebar: boolean;
    toggleSidebar: () => void;
}

const Header = (props: Props) => {

    const {activeSidebar, toggleSidebar} = props;

    const [search, setSearch] = useState('');

    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="alura dev logo"/>
            <nav className={styles.nav}>
                <button className={styles.searchButton}>
                    <img src={searchIcon} alt="search"/>
                </button>
                <Input isSearchBar={true} type="text" placeholder="Search" value={search} whenChanged={(search)=> setSearch(search)}/>
                
                <button onClick={() => toggleSidebar()} className={styles.sidebarToggle}>
                    { !activeSidebar ? <img src={menuIcon} alt="menu"/> : <img src={xIcon} alt="menu"/> }
                </button>

                <div className={styles.profileIcon}>
                    <img src={profileIcon} alt="profile"/>
                    <span>Bento</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;