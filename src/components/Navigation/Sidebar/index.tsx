import styles from "./styles.module.scss";
import logo from "assets/logo.svg";
import tagIcon from "assets/tag.svg";
import communityIcon from "assets/community.svg";
import SidebarLink from "./SidebarLink";
import classNames from "classnames";

interface Props {
    activeSidebar: boolean;
    disableSidebar: () => void;
}

const Sidebar = (props: Props) => {

    const {activeSidebar, disableSidebar} = props;

    return(
        <div
        className={classNames({
            [styles.sidebar]: true,
            [styles[`sidebar--active`]]: activeSidebar
        })}>
            <header className={styles.sidebarHeader}>
                <img className={styles.logo} src={logo} alt="alura dev logo"/>
            </header>
            
            <div onClick={() => disableSidebar()} className={styles.disableSidebarArea}></div>
            <div className={styles.darkestBlueBackground}>
                <div className={styles.sidebarMenu}>
                    <h3 className="sidebarTitle">MENU</h3>
                    <ul>
                        <li onClick={() => disableSidebar()}>
                            <SidebarLink path="/" label="Community" alt="community icon" icon={communityIcon}/>
                        </li>
                        <li onClick={() => disableSidebar()}>
                            <SidebarLink path="/code-editor" label="Code Editor" alt="code editor icon" icon={tagIcon}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;