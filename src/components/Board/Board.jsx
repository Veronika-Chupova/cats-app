import {useState, useEffect} from "react"
import CatButton from "../CatButton"
import CheckboxMode from "../CheckboxMode"
import getCatImage from "../../utils/getCatImage"
import styles from "./Board.module.css"
import ImageFrame from "../ImageFrame"

export default function Board () {
    const [mode, setMode] = useState({
        manual: true,
        auto: false
    })
    const [imgSrcURL, setImgSrcURL] = useState()

    useEffect( () => {
        updateImg()
    }, [])

    useEffect( () => {
        let intervalID
        if (mode.auto) {
            updateImg()
            intervalID = setInterval(updateImg, 5000)
        }
        return () => {
            intervalID && clearInterval(intervalID)}
    }, [mode.auto])

    async function updateImg () {
        const newImgURL = await getCatImage()
        if (newImgURL) setImgSrcURL(newImgURL)
    }
    return <div className={styles.container}>
        <div className={styles.controlContainer}>
            <CheckboxMode 
                key="firstInput"
                title = "Enabled" 
                name = "manual"
                isChecked = {mode.manual}
                changer = {setMode}
            />
            <CheckboxMode 
                key="secondInput"
                title = "Auto-refresh every 5 seconds" 
                name = "auto"
                isChecked={mode.auto}
                changer = {setMode}
            />
            <CatButton 
                callBack = {updateImg} 
                isDisabled = {!mode.manual} 
            />
        </div>
        <ImageFrame link={imgSrcURL}/>
    </div>
}