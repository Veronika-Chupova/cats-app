import styles from "./CatButton.module.css"

export default function CatButton ({callBack, isDisabled}) {
    return (
        <button className={styles.catBtn} onClick={callBack} disabled={isDisabled} >
            Get Cat
        </button>
    )
}