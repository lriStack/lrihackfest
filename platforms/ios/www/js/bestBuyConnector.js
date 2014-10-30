/**
 * Created by kylejones on 14-10-30.
 */
var PRODUCTS_URL =  "http://api.remix.bestbuy.com/v1/products{-=CONDITION=-}{-=PROPERTIES=-}?format=json&apiKey={-=API_KEY=-}&callback=?";
var STORES_URL = "http://api.remix.bestbuy.com/v1/stores{-=CONDITION=-}{-=PROPERTIES=-}?format=json&apiKey={-=API_KEY=-}&callback=?";
var REVIEWS_URL = "http://api.remix.bestbuy.com/v1/reviews{-=CONDITION=-}{-=PROPERTIES=-}?format=json&apiKey={-=API_KEY=-}&callback=?";
var CATEGORIES_URL = "http://api.remix.bestbuy.com/v1/categories{-=CONDITION=-}{-=PROPERTIES=-}?format=json&apiKey={-=API_KEY=-}&callback=?";

var CONDITION = "{-=CONDITION=-}";
var PROPERTIES = "{-=PROPERTIES=-}";
var API_KEY = "{-=API_KEY=-}";
var CALLBACK = "{-=CALLBACK=-}";

function GetProducts(condition, properties, apiKey, callback) {
    var apiUrl = PRODUCTS_URL.replace(CONDITION, condition)
        .replace(PROPERTIES, properties)
        .replace(API_KEY, apiKey);
    CallBestBuyApi(apiUrl, callback);
}

function GetStores(condition, properties, apiKey, callback) {
    var apiUrl = STORES_URL.replace(CONDITION, condition)
        .replace(PROPERTIES, properties)
        .replace(API_KEY, apiKey)
        .replace(CALLBACK, callback);
    CallBestBuyApi(apiUrl, callback);
}

function GetReviews(condition, properties, apiKey, callback) {
    var apiUrl = REVIEWS_URL.replace(CONDITION, condition)
        .replace(PROPERTIES, properties)
        .replace(API_KEY, apiKey)
        .replace(CALLBACK, callback);
    CallBestBuyApi(apiUrl, callback);
}

function GetCategories(condition, properties, apiKey, callback) {
    var apiUrl = CATEGORIES_URL.replace(CONDITION, condition)
        .replace(PROPERTIES, properties)
        .replace(API_KEY, apiKey)
        .replace(CALLBACK, callback);
    CallBestBuyApi(apiUrl, callback);
}

function CallBestBuyApi(urlToCall, callback) {
    $.ajax({ // ajax call starts
        url: urlToCall,
        type: "GET",
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        jsonpCallback: callback,
        cache: true,
        error: function(jqXHR, textStatus, errorThrown ) {
            console.log(textStatus);
        }
    });
}

/*function CallBestBuyApi(urlToCall) {
    $.getJSON(urlToCall, function (result) {
        //response data are now in the result variable
        alert(result);
    });
}*/

//var RECOMMENDATIONS_URL = "";
