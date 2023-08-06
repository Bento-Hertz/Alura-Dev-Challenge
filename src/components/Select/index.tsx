import styles from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";

interface Props {
    onSelect: (value: string) => void;
    type?: string;
    options: string[];
}

const Select = (props: Props) => {

    const {onSelect, type, options} = props;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(options[0]);

    const isColorSelector = type === 'selectColor';

    function select(option: string) {
        setValue(option);
        onSelect(option);
    }

    return (
        <button 
            className={classNames({
                [styles.select]: !isColorSelector,
                [styles.selectColor]: isColorSelector
            })}
            onClick={() => setOpen(!open)}
            // onBlur={() => setOpen(false)}
        >
            <span style={isColorSelector ? {backgroundColor: value} : {}} className={classNames({
                [styles.option]: !isColorSelector,
                [styles.border]: !isColorSelector && open,
                [styles.selectedColor]: isColorSelector
            })}>
                {isColorSelector ? <></> : value}
            </span>
            <div className={classNames({
                [styles.options]: true,
                [styles[`options--active`]]: open
            })}>
                {options.map((option, index) => {
                    if(option !== value) {
                        return (
                            <div style={isColorSelector ? {backgroundColor: option} : {}} className={classNames({
                                [styles.option]: !isColorSelector,
                                [styles.colorOption]: isColorSelector
                            })} key={option} onClick={() => select(option)}>
                                {isColorSelector ? <></> : option}
                            </div>
                        );
                    }
                    return <div style={index===0 && isColorSelector ? {height: '8px'} : {}} key={option}></div>
                })}
            </div>
        </button>
    );
}

export default Select;