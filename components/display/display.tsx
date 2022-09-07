import { useEffect, useState } from "react"
import style from "./display.module.scss"
export default function Display({ item }) {
    const [loading, setLoading] = useState(true)
    const stats = Object.entries(item).filter((item: [string, string]) => {
        let found = false
        if (item[0] === 'S.No.' || item[0] === 'Name') found = true
        return found ? null : item
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    return (
        <div className={`card ${style.card}`}>
            {loading ? <p>loading</p> : <>
                <h2>{item.Name}</h2>
                <div className="wrapper">
                    <div className={style.stats}>
                        {stats.map((value: [string, string], key) => {
                            return <div className={style.stat} key={key}>
                                <p className={style.statName}>{value[0]}</p>
                                <p className={style.value}>{value[1]}</p>
                            </div>
                        })}
                    </div>
                </div>
            </>}
        </div>
    )
}