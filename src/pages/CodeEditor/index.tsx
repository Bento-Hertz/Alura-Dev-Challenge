import Select from "components/Select";
import styles from "./styles.module.scss";
import classNames from 'classnames';
import { useState } from 'react';
import Input from "components/Input";
import CodeContainer from "components/CodeContainer";

// interface Project {
//     code: string;
//     name: string;
//     description: string;
//     language: string;
//     color: string;
// }

const Form = () => {

    const languageOptions = [
        'Javascript',
        'Java',
        'Python',
        'C++11',
        'C#',
        'PHP'
    ];
    const themeColors = [
        '#6BD1FF',
        '#E0BE36',
        '#998650',
        '#A0CA92',
        '#D8F793'
    ];

    const[code, setCode] = useState('');
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[language, setLanguage] = useState(languageOptions[0]);
    const[themeColor, setThemeColor] = useState(themeColors[0]);

    function onSave(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setCode('');
        setName('');
        setDescription('');
        setLanguage(languageOptions[0]);
        setThemeColor(themeColors[0]);
    }

    return (
        <form className={styles.form} onSubmit={onSave}>
            <section className={styles.sectionContainer}>
                <CodeContainer isRequired={true} placeholder="//Coding..." value={code} themeColor={themeColor} whenChanged={(code) => setCode(code)}/>
                <button type="button" className={classNames({
                    [styles.button]: true,
                    [styles.highlight]: true
                })}>Visualize with the highlight</button>      
            </section>

            <section className={styles.sectionContainer}>
                <div className={styles.inputContainer}>
                    <h3 className="sidebarTitle">YOUR PROJECT</h3>
                    <Input value={name} type="text" placeholder="Name your project" isRequired={true} whenChanged={(name) => setName(name)}/>
                    <Input value={description} isTextarea={true} placeholder="Project description" whenChanged={(description) => setDescription(description)}/>
                </div>
                <div className={styles.inputContainer}>
                    <h3 className="sidebarTitle">CUSTOMIZATION</h3>
                    <div className={styles.selectContainer}>
                        <Select value={language} options={languageOptions} onSelect={(language) => setLanguage(language)}/>
                        <Select value={themeColor} type="selectColor" options={themeColors} onSelect={(color) => setThemeColor(color)}/>
                    </div>
                    
                </div>
                <button className={classNames({
                    [styles.button]: true,
                    [styles.submit]: true
                })} type="submit">Save project</button>
            </section>
        </form>
    ); 
}

export default Form;