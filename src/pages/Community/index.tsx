import ProjectContainer from "components/ProjectContainer";
import styles from "./styles.module.scss";

const Community = () => {

    const projects = [
        '1',
        '2',
        '3',
        '4'
    ]

    return (
        <main className={styles.container}>
            {projects.map((project) => (
                <ProjectContainer key={project}/>
            ))}
        </main>
    );
}

export default Community;