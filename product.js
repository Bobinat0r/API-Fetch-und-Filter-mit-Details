// Could be GET or POST/PUT/PATCH/DELETE
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        thumbnail: product.thumbnail,
        description: product.description,
    }));
  
    const table = document.getElementById("productTable");
    products.forEach((element) => {
      const row = table.insertRow();
      row.insertCell().textContent = element.id;
      row.insertCell().textContent = element.name;
      row.insertCell().textContent = element.price;
      const img = document.createElement("img");
      img.src = element.thumbnail;
      img.width = 100;
      img.height = 100;
      row.insertCell().appendChild(img);
      const button = document.createElement("button");
      row.insertCell().appendChild(button);
        button.textContent = "View";
        button.onclick = () => showProductDetails(element)

    });
});  

function showProductDetails (product) {
    console.log(product);
    
}