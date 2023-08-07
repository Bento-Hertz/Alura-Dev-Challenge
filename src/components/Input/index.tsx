import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props {
    value: string;
    isTextarea?: boolean;
    isSearchBar?: boolean;
    type?: string;
    placeholder: string;
    isRequired?: boolean;
    whenChanged: (newValue: string) => void;
}

const Input = (props: Props) => {

    const {value, isTextarea=false, isSearchBar=false, type='text', placeholder, isRequired, whenChanged} = props;

    if(isTextarea) {
        return(
            <textarea placeholder={placeholder} className={styles.input} value={value} onChange={(event) => whenChanged(event.target.value)}/>
        );
    }
    return(
        <input className={classNames({
            [styles.input]: true,
            [styles.searchBar]: isSearchBar
        })} type={type} placeholder={placeholder} required={isRequired} value={value} onChange={(event) => whenChanged(event.target.value)}/>
    );
}

export default Input;