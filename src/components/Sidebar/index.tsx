import styles from "./styles.module.scss";
import logo from "assets/logo.svg";
import tagIcon from "assets/tag.svg";
import communityIcon from "assets/community.svg";

const Sidebar = () => {
    return(
        <div className={styles.sidebar}>
            <header className={styles.sidebarHeader}>
                <img className={styles.logo} src={logo} alt="alura dev logo"/>
            </header>

            <h3 className="sidebarTitle">MENU</h3>
            <section className={styles.sidebarMenu}>
                <a className={styles.link} href="typescript:void(0)">
                    <div className={styles.iconContainer}>
                        <img src={tagIcon} alt="code editor icon"/>
                    </div>
                    <span>Code Editor</span>
                </a>
                <a className={styles.link} href="typescript:void(0)">
                    <div className={styles.iconContainer}>
                        <img src={communityIcon} alt="community icon" />
                    </div>
                    <span>Community</span>
                </a>
            </section>
        </div>
    );
}

export default Sidebar;