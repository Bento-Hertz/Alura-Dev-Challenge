import styles from "./styles.module.scss";
import linuxColors from "components/linuxColors.json";
import classNames from "classnames";

interface Props {
    isRequired?: boolean;
    placeholder?: string;
    whenChanged?: (value: string) => void;
    value: string;
    themeColor: string;
}

const CodeContainer = (props: Props) => {

    const { isRequired=false, placeholder='',  whenChanged, value, themeColor} = props;

    if(whenChanged)
        return (
            <div style={{backgroundColor: themeColor}} className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    {linuxColors.map(color => (
                        <i key={color} className={classNames({[styles[color]]: true})}></i>
                    ))}
                </div>
                <textarea className={styles.codeInput} required={isRequired} placeholder={placeholder} value={value} onChange={(event) => whenChanged(event.target.value)}/>
            </div>
        );
    else
        return (
            <div style={{backgroundColor: themeColor}} className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    {linuxColors.map(color => (
                        <i key={color} className={classNames({[styles[color]]: true})}></i>
                    ))}
                </div>
                <textarea className={styles.codeInput} value={value} disabled/>
            </div>
        );
}

export default CodeContainer;