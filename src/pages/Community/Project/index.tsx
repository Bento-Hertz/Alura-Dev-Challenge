import styles from "./styles.module.scss";
import CodeInput from "components/CodeInput";
import profileIcon from "assets/profile-icon.png";
import commentsIcon from "assets/comments.svg";
import likesIcon from "assets/likes.svg";
import { IProject } from "shared/interfaces/IProject";

interface Props {
    project: IProject;
}

const Project = (props: Props) => {

    const {project} = props;

    return(
        <li className={styles.codeContainer}>
            <CodeInput value={project.code} themeColor={project.themeColor}/>

            <div className={styles.details}>
                <section className={styles.projectSection}>
                    <h2 className="title">{project.name}</h2>
                    <p>{project.description}</p>
                </section>
                <section className={styles.interactiveSection}>
                    <div className={styles.social}>
                        <div>
                            <img src={commentsIcon} alt="comment icon" />
                            <span>3</span>
                        </div>
                        <div>
                            <img src={likesIcon} alt="like icon" />
                            <span>3</span>
                        </div>
                    </div>
                    <div className={styles.profileInfo}>
                        <img src={profileIcon} alt="like icon" />
                        <span>@Bento</span>
                    </div>
                </section>
            </div>
        </li>
    );
}

export default Project;