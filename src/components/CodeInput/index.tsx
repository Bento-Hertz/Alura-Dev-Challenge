import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
    isRequired?: boolean;
    whenChanged?: (value: string) => void;
    value: string;
    themeColor: string;
}

const CodeInput = (props: Props) => {

    const { isRequired=false, whenChanged, value, themeColor} = props;

    const linuxColors = [
        "codeHeader__red",
        "codeHeader__yellow",
        "codeHeader__green"
    ] 

    return (
        <div style={{backgroundColor: themeColor}} className={styles.codeContainer}>
            <div className={styles.codeHeader}>
                {linuxColors.map(color => (
                    <i key={color} className={classNames({[styles[color]]: true})}></i>
                ))}
            </div>
            {whenChanged 
            ? 
                <textarea className={styles.codeInput} required={isRequired} placeholder="//Write your code here" value={value} onChange={(event) => whenChanged(event.target.value)}/>
            : 
                <textarea className={styles.codeInput} value={value} disabled/>
            }
        </div>
    );
}

export default CodeInput;