import style from './search.module.scss'
export default function Search() {
    /*
    since the time has reached setting 
    a variable to show what i would have 
    done when i got the data. :|
    */
    var stocks = [
        "Bhansali Engg",
        "Coal Indi",
        "IOL Chemical",
        "Dolat Investmen",
        "NDT",
        "Balmer Law Inv",
        "Ebixcash Worl",
        "Mangalam Organi",
        "INEOS Styrolut",
        "Expleo Solution",
        "Sh Jagdamba Po",
        "Godawari Powe",
        "Cigniti Tech",
        "Kirl Ferrou",
        "Rite",
        "GujStPetrone",
        "Ester Industrie",
        "Anjani Portlan",
        "Venky's (India",
        "Heritage Food-",
        "SI",
        "GTPL Hathwa",
        "Welspun Cor",
        "I G Petrochem",
        "Geojit Fin Ser",
        "Sasken Technol",
        "Engineers Indi",
        "Petronet LN",
        "Saksof",
        "Polyplex Corp"
    ];

    return (
        <div className={style.container}>
            <input className={style.search} type="text" list="stocks" name="" id="" />
            <datalist id="stocks">
                {stocks.map((value, key) => <option key={key} value={value}>{value}</option>)}
            </datalist>
        </div>
    )
}