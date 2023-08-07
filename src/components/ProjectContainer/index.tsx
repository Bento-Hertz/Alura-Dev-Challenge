import styles from "./styles.module.scss";
import CodeContainer from "components/CodeContainer";
import profileIcon from "assets/profile-icon.png";
import commentsIcon from "assets/comments.svg";
import likesIcon from "assets/likes.svg";

const ProjectContainer = () => {
    return(
        <div className={styles.codeContainer}>
            <CodeContainer value="function typescript(){return 0;}" themeColor="#6BD1FF"/>

            <div className={styles.details}>
                <section className={styles.projectSection}>
                    <h2 className="title">Project Title</h2>
                    <p>This is the description of the project</p>
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
                        <span>@Harry</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProjectContainer;