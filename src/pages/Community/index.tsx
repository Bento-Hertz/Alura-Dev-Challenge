import Project from "pages/Community/Project";
import styles from "./styles.module.scss";
import projects from "data/projects.json";

const Community = () => {

    return (
        <ul className={styles.container}>
            {projects.map((project, index) => (
                <Project project={project} key={index}/>
            ))}
        </ul>
    );
}

export default Community;