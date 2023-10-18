let addedProductsToCart = JSON.parse(localStorage.getItem("productsInCart"))
 let AllProducts = document.querySelector(".products");
 if(addedProductsToCart){

    drawItems(addedProductsToCart); 
}
else{
    console.log("havent items yet")
}
 function drawItems(Item){
    let product = addedProductsToCart.map((item)=>{
      return `
      <div class="productItem">
                      <img class="faceImage" src="${item.faceImageUrl}"/>
                      <img class="backImage" src="${item.backImageUrl}"/>
                       <div class="productItemDescr">
                          <p>product: ${item.title}</p>
                          <span>price: ${item.price}$</span>
                       </div>
                       <div class="productItemAction">
                          <button class="addToCart" id="remove" style="background-color: red;" onClick ="Remove(${item.id})">remove from cart</button>
                       </div>
                  </div>
      `
    }).join('')
    AllProducts.innerHTML = product;
  }
  let TotalPrice = document.querySelector(".price")
  TotalPrice.innerHTML = "total Price = " +localStorage.getItem("totalPrice") +" $"
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let favorites= document.querySelector("#AddToFavorite")
let addedToFav = JSON.parse(localStorage.getItem("favoriteItems"))
function drawFavoriteItems(Item){
   let product = addedToFav.map((item)=>{
      return `
      <div class="productItem ">
                      <img class="faceImage" src="${item.faceImageUrl}"/>
                      <img class="backImage" src="${item.backImageUrl}"/>
                       <div class="productItemDescr">
                          <p>product: ${item.title}</p>
                          <span>price: ${item.price}$</span>
                       </div>
                       <div class="productItemAction">
                          <button class="addToCart" id="remove" >add to cart</button>
                       </div>
                  </div>
      `
    }).join('')
    favorites.innerHTML = product;
  }
  if(addedToFav){
   drawFavoriteItems(addedToFav); 
}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let removeBtn = document.querySelector("#remove")
let productItem = document.querySelector(".productItem")
let newPrice = 0;

const Remove = function(id){
  let currentItems = addedProductsToCart.filter(item => item.id != id );
  localStorage.setItem("productsInCart", JSON.stringify((currentItems)))
  addedProductsToCart = localStorage.getItem("productsInCart")
  currentItems.map((item)=>{
   newPrice += item.price
  })
  localStorage.setItem("totalPrice", newPrice)
}






  