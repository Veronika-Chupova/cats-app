import styles from "./CheckboxMode.module.css"

export default function CheckboxMode ({title, name, isChecked, changer}) {
    return <div className={styles.container}>
        <input 
            type="checkbox" 
            checked={isChecked}
            onChange = {() => changer(prev => {
                return {...prev, [name]: !isChecked}
            })}
        />
        <label>{title}</label>
    </div>
}