function listProducts(data)
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
}