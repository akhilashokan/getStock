'use strict';
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

exports.handler = function (event, context, callback) {
    if (event.httpMethod === 'GET' && event.path === '/') {
        const newValue = getStocks();
        callback(null, {
            statusCode: 200,
            body: newValue
        });
    } else {
        callback(null, {
            statusCode: 400,
            body: {}
        });
    }
}

