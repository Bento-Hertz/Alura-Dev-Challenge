import styles from "./styles.module.scss";
import { useState } from "react";
import classNames from "classnames";

interface Props {
    type?: string;
    value: string;
    onSelect: (value: string) => void;
    options: string[];
}

const Select = (props: Props) => {

    const {type, value, onSelect, options} = props;

    const [open, setOpen] = useState(false);

    const isColorSelector = type === 'selectColor';

    return (
        <button
            className={classNames({
                [styles.select]: !isColorSelector,
                [styles[`select--active`]]: !isColorSelector && open,
                [styles.selectColor]: isColorSelector,
                [styles[`selectColor--active`]]: isColorSelector && open
            })}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
            type="button"
        >
            <span style={isColorSelector ? {backgroundColor: value} : {}} className={classNames({
                [styles.selectedOption]: !isColorSelector,
                [styles.selectedColor]: isColorSelector
            })}>
                {isColorSelector ? <></> : value}
                {!isColorSelector && !open ? <span className="material-symbols-rounded">expand_less</span> : <></>}
                {!isColorSelector && open ? <span className="material-symbols-rounded">expand_more</span> : <></>}
            </span>
            <div className={classNames({
                [styles.options]: !isColorSelector,
                [styles[`options--active`]]: !isColorSelector && open,
                [styles.colorOptions]: isColorSelector,
                [styles[`colorOptions--active`]]: isColorSelector && open,
            })}>
                {options.map((option, index) => {
                    if(option !== value) {
                        return (
                            <div style={isColorSelector ? {backgroundColor: option} : {}} className={classNames({
                                [styles.option]: !isColorSelector,
                                [styles.colorOption]: isColorSelector
                            })} key={option} onClick={() => onSelect(option)}>
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