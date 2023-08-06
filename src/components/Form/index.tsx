// import { useState } from "react";
import Select from "components/Select";
import styles from "./styles.module.scss";
import classNames from 'classnames';
import { useState } from 'react';

// interface Project {
//     code: string;
//     name: string;
//     description: string;
//     language: string;
//     color: string;
// }

const Form = () => {

    const linuxColors = [
        'inputHeader__red',
        'inputHeader__yellow',
        'inputHeader__green'
    ];
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

    function preventDefault(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    function onSave() {
        setCode('');
        setName('');
        setDescription('');
        setLanguage(languageOptions[0]);
        setThemeColor(themeColors[0]);
    }

    return (
            <form className={styles.form} onSubmit={preventDefault}>

                <div style={{backgroundColor: themeColor}} className={styles.codeContainer}>
                    <div className={styles.inputHeader}>
                        {linuxColors.map(color => (
                            <i key={color} className={classNames({[styles[color]]: true})}></i>
                        ))}
                    </div>
                    <textarea className={styles.codeInput} value={code} onChange={(value) => setCode(value.target.value)}/>
                </div>

                <button className={classNames({
                    [styles.button]: true,
                    [styles.highlight]: true
                })}>Visualize with the highlight</button>

                <div className={styles.inputContainer}>
                    <h2 className="subtitle">YOUR PROJECT</h2>
                    <input type="text" placeholder="Name your project" className={styles.input} value={name} onChange={(value) => setName(value.target.value)}/>
                    <textarea placeholder="Project description" className={styles.input} value={description} onChange={(value) => setDescription(value.target.value)}/>
                </div>

                <div className={styles.inputContainer}>
                    <h2 className="subtitle">CUSTOMIZATION</h2>
                    <Select options={languageOptions} onSelect={(language) => setLanguage(language)}/>
                    <Select type="selectColor" options={themeColors} onSelect={(color) => setThemeColor(color)}/>
                </div>

                <button className={classNames({
                    [styles.button]: true,
                    [styles.submit]: true
                })} onClick={onSave}>Save project</button>

            </form>
    ); 
}

export default Form;