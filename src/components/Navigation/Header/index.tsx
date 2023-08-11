import searchIcon from "assets/search-icon.svg";
import logo from "assets/logo.svg";
import menuIcon from "assets/menu-icon.svg";
import profileIcon from "assets/profile-icon.png";
import styles from "./styles.module.scss";
import Input from "components/Input";   
import { useState } from "react";

interface Props {
    activeSidebar: boolean;
    onToggleSidebar: (toggleSidebar: boolean) => void;
}

const Header = (props: Props) => {

    const {activeSidebar, onToggleSidebar} = props;

    const [search, setSearch] = useState('');

    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="alura dev logo"/>
            <nav className={styles.nav}>
                <button className={styles.searchButton}>
                    <img src={searchIcon} alt="search"/>
                </button>
                <Input isSearchBar={true} type="text" placeholder="Search" value={search} whenChanged={(search)=> setSearch(search)}/>
                
                <button onClick={() => onToggleSidebar(!activeSidebar)} className={styles.sidebarToggle}>
                    <img src={menuIcon} alt="menu"/>
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