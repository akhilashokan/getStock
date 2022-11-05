import { useEffect, useRef, useState } from 'react'
import Display from '../display/display'
import style from './search.module.scss'
export default function Search() {
    const [stocks, setStocks] = useState([{
        "Name": "",
    },])
    const ref = useRef<HTMLInputElement>()
    const [selectStock, setSelectedStock] = useState(null)
    const [clear, setClear] = useState(false)
    useEffect(() => {


        const options = { method: 'GET', headers: { Accept: 'application/json' } };
        fetch('http://localhost:8888/.netlify/functions/getdata', options)
            .then(res => res.json())
            .then(result => {
                setStocks(result)
            })
    }, [])
    function handleChange(e) {
        const { value } = e.target
        stocks.find((item) => {
            if (item.Name === value) {
                setSelectedStock(item)
                setClear(true)
            }
        })
    }
    function handleClear() {
        setSelectedStock(null)
        setClear(false)
        if (ref) {
            ref.current.value = ''
        }
    }
    return (
        <div className={style.container}>
            <div className="input">
                <input className={style.search} ref={ref} onChange={handleChange} type="text" list="stocks" />
                <datalist id="stocks">
                    {stocks.map((value, key) => <option key={key} value={value.Name}>{value.Name}</option>)}
                </datalist>
                {clear && <p onClick={handleClear} className={style.clear}>clear</p>}
            </div>
            {selectStock && <Display item={selectStock} />}
        </div>
    )
}
