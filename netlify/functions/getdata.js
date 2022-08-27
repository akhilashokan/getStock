import express, { json, request, response } from 'express';

const port = 3000;

const app = express();

app.listen(port, () => {
    console.log('test');
});
//for testing
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

function getStocks() {

    let response = { "stocks": { stocks } };

    return response;
}


export default function handler(request, response) {
    response.header('Access-Control-Allow-Origin', '*');
    response.json(getStocks());
}