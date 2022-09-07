import { useEffect, useState } from 'react'
import Display from '../display/display'
import style from './search.module.scss'
export default function Search() {
    const [stocks, setStocks] = useState([{
        "Name": "",
    },])
    const [selectStock, setSelectedStock] = useState(null)
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
            }
        })
    }
    return (
        <div className={style.container}>
            <div className="input">
                <input className={style.search} onChange={handleChange} type="text" list="stocks" name="" id="" />
                <datalist id="stocks">
                    {stocks.map((value, key) => <option key={key} value={value.Name}>{value.Name}</option>)}
                </datalist>
            </div>
            {selectStock && <Display item={selectStock} />}
        </div>
    )
}
