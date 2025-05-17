import styles from "./ImageFrame.module.css"

export default function ImageFrame ({link}) {
    return <div className={styles.container}>
        <img src={link}/>
    </div>
}