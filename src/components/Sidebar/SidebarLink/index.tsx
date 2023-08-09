import style from './style.module.scss';
import { Link } from "react-router-dom";

interface Props {
    path: string;
    label: string;
    alt: string;
    icon: string;
}

const SidebarLink = (props: Props) => {

    const {path, label, alt, icon} = props;

    return (
        <li>
            <Link to={path} className={style.link}>
                <div className={style.iconContainer}>
                    <img src={icon} alt={alt}/>
                </div>
                <span>{label}</span>
            </Link>
        </li>
    );
}

export default SidebarLink;