function filterProducts() {
    let category = document.getElementById("category").value;
    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        if (category === "all" || product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function sortProducts(order) {
    let container = document.getElementById("product-list");
    let products = Array.from(document.querySelectorAll(".product"));

    products.sort(function(a, b) {
        let priceA = Number(a.dataset.price);
        let priceB = Number(b.dataset.price);

        if (order === "low") return priceA - priceB;
        if (order === "high") return priceB - priceA;

        return 0;
    });

    container.innerHTML = "";

    products.forEach(function(product) {
        container.appendChild(product);
    });
}
