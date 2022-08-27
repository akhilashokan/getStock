import style from './search.module.scss'
export default function Search() {

    return (
        <div className={style.container}>
            <input className={style.search} type="text" list="stocks" name="" id="" />
            <datalist id="stocks">
                <option value="stockName">stock</option>
            </datalist>
        </div>
    )
}