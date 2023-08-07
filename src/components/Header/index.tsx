import searchIcon from "assets/search-icon.svg";
import logo from "assets/logo.svg";
import menuIcon from "assets/menu-icon.svg";
import profileIcon from "assets/profile-icon.png";
import styles from "./styles.module.scss";
import Input from "components/Input";
import { useState } from "react";

const Header = () => {

    const [search, setSearch] = useState('');

    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="alura dev logo"/>
            <nav className={styles.nav}>
                <img className={styles.searchIcon} src={searchIcon} alt="search"/>
                <Input isSearchBar={true} type="text" placeholder="Search" value={search} whenChanged={(search)=> setSearch(search)}/>

                <img className={styles.menuIcon} src={menuIcon} alt="menu"/>

                <div className={styles.profileIcon}>
                    <img src={profileIcon} alt="profile"/>
                    <span>Harry</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;