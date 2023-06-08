function calculateTotal() {
    var quantity1 = parseInt(document.getElementById("quantity1").value);
    var price1 = 140;
    
    var total = quantity1 * price1;
    document.getElementById("total").innerText = "$" + total;
}

document.getElementById("paypal-button").addEventListener("click", function() {
    var total = parseInt(document.getElementById("total").innerText.replace("$", ""));
    
});
