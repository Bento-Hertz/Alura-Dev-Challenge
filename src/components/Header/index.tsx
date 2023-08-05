import logo from "assets/logo.svg";
import searchIcon from "assets/search-icon.svg";
import menuIcon from "assets/menu-icon.svg";
import styles from "./styles.module.scss";

const Header = () => {

    return(
        <header className={styles.header}>
            <img src={logo} alt="alura dev logo"/>
            <nav className={styles.nav}>
                <button>
                    <img src={searchIcon} alt="search"/>
                </button>
                <button>
                    <img src={menuIcon} alt="search"/>
                </button>
            </nav>
            
        </header>
    );
}

export default Header;