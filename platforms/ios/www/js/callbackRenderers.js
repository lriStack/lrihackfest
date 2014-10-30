//This file is to be used to render specific data. i.e. Stores, Products and so on.
function listProducts(data)
{
    var html = [];
    for (var i = 0; i < data.products.length; ++i) {
        var entry = data.products[i];
        html.push("<pre>");
        html.push('<a href="', entry.addToCartUrl, '">');
        html.push('<img src="', entry.image, '"/>');
        html.push(entry.name);
        html.push('</a><br/>');
        html.push('</pre>');
    }
    return html;
}

function displayProducts(data) {
    $("#ProductsResults").text(listProducts(data));
}


function listStores(data)
{
    var html = [];
    for (var i = 0; i < data.stores.length; ++i) {
        var entry = data.products[i];
        html.push("<pre>");
        html.push('<a href="', entry.addToCartUrl, '">');
        html.push('<img src="', entry.image, '"/>');
        html.push(entry.name);
        html.push('</a><br/>');
        html.push('</pre>');
    }
    return html;
}

function displayStores(data) {
    $("#StoresResults").text(listStores(data));
}


function listReviews(data)
{
    var html = [];
    for (var i = 0; i < data.reviews.length; ++i) {
        var entry = data.products[i];
        html.push("<pre>");
        html.push('<a href="', entry.addToCartUrl, '">');
        html.push('<img src="', entry.image, '"/>');
        html.push(entry.name);
        html.push('</a><br/>');
        html.push('</pre>');
    }
    return html;
}

function displayReviews(data) {
    $("#ReviewsResults").text(listReviews(data));
}

function listCategories(data)
{
    var html = [];
    for (var i = 0; i < data.categories.length; ++i) {
        var entry = data.products[i];
        html.push("<pre>");
        html.push('<a href="', entry.addToCartUrl, '">');
        html.push('<img src="', entry.image, '"/>');
        html.push(entry.name);
        html.push('</a><br/>');
        html.push('</pre>');
    }
    return html;
}

function displayCategories(data) {
    $("#CategoriesResults").text(listCategories(data));
}


/*function listProducts(data)
{
    var html = [];
    for (var i = 0; i < data.products.length; ++i) {
        var entry = data.products[i];
        html.push('<a href="', entry.addToCartUrl, '">');
        html.push('<img src="', entry.image, '"/>');
        html.push(entry.name);
        html.push('</a><br/>');
    }
    return html;
}

function displayProducts(data) {
    $("#Results").text(listProducts(data));
}*/