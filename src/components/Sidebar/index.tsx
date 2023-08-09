import styles from "./styles.module.scss";
import logo from "assets/logo.svg";
import tagIcon from "assets/tag.svg";
import communityIcon from "assets/community.svg";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
    return(
        <div className={styles.sidebar}>
            <header className={styles.sidebarHeader}>
                <img className={styles.logo} src={logo} alt="alura dev logo"/>
            </header>

            <h3 className="sidebarTitle">MENU</h3>
            <div className={styles.sidebarMenu}>
                <SidebarLink path="/" label="Community" alt="community icon" icon={communityIcon}/>
                <SidebarLink path="/code-editor" label="Code Editor" alt="code editor icon" icon={tagIcon}/>
            </div>
        </div>
    );
}

export default Sidebar;