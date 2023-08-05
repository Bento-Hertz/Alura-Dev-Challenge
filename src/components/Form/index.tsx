import { useState } from "react";
import styles from "./styles.module.scss";
import classNames from 'classnames';

const Form = () => {

    const linuxColors = [
        'inputHeader__red',
        'inputHeader__yellow',
        'inputHeader__green'
      ];
    
    const editorThemes = [
        '#6BD1FF',
        '#E0BE36',
        '#998650',
        '#A0CA92',
        '#D8F793'
    ]

    const [open, setOpen] = useState(false);

    function onOpeningOptions(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setOpen(!open);
    }

    return (
            <form className={styles.form}>

                <div className={styles.codeContainer}>
                    <div className={styles.inputHeader}>
                        {linuxColors.map(color => (
                            <i key={color} className={classNames({[styles[color]]: true})}></i>
                        ))}
                    </div>
                    <textarea className={styles.codeInput}/>
                </div>

                <button className={styles.highlightButton}>Visualize with the highlight</button>

                <div className={styles.inputContainer}>
                    <h2 className="subtitle">YOUR PROJECT</h2>
                    <input type="text" placeholder="Name your project" className={styles.input}/>
                    <textarea placeholder="Project description" className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                    <h2 className="subtitle">CUSTOMIZATION</h2>
                    <input type="text" placeholder="Javascript" className={styles.input}/>
                    <button 
                        className={styles.colorInput}
                        onClick={(e) => onOpeningOptions(e)} 
                        onBlur={() => setOpen(false)}
                    >
                        <div className={styles.option}></div>
                        <div className={classNames({[styles.colorInput__options]: open})}>
                            {}
                        </div>
                    </button>
                </div>

            </form>
    ); 
}

export default Form;