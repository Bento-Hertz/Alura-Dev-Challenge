import styles from "./styles.module.scss";
import logo from "assets/logo.svg";
import tagIcon from "assets/tag.svg";
import comunityIcon from "assets/comunity.svg";

const Sidebar = () => {
    return(
        <div className={styles.sidebar}>
            <header className={styles.sidebarHeader}>
                <img className={styles.logo} src={logo} alt="alura dev logo"/>
            </header>
            
            <h2 className="subtitle">MENU</h2>
            <section className={styles.sidebarMenu}>
                <a className={styles.link} href="typescript:void(0)">
                    <div className={styles.iconContainer}>
                        <img src={tagIcon} alt="code editor icon"/>
                    </div>
                    <span>Code Editor</span>
                </a>
                <a className={styles.link} href="typescript:void(0)">
                    <div className={styles.iconContainer}>
                        <img src={comunityIcon} alt="comunity icon" />
                    </div>
                    <span>Comunity</span>
                </a>
            </section>
        </div>
    );
}

export default Sidebar;