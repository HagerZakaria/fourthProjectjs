let userData = document.querySelector("#user");
let userInform = document.querySelector("#userInfo");
let links = document.querySelector("#userReg");
let logout = document.querySelector('#logout');
let count = document.querySelector('#countProd')
let veiwProducts = document.querySelector("#hoverMyProd")
let prodDiv = document.querySelector("#myProducts")
let cartProducts = document.querySelector('#cartProducts')
var AddToCartbtn = document.querySelector(".addToCart");
let price = document.querySelector("#price")
let favorites = document.querySelector("#addToFav")
let prodName = document.querySelectorAll("#prodName")
let searchBar = document.querySelector(".search-box input")
let searchIcon = document.querySelector(".search-box i")


if(localStorage.getItem("userName")){
  links.remove();
  userInform.style.display = "flex";
  userData.innerHTML = 'Welcome '+ localStorage.getItem("userName")
  userData.style.marginRight = '390px'
  userData.style.textTransform = 'uppercase'
  userData.style.fontSize = '22px'
  userData.style.fontStyle = 'italic'
  logout.style.display = 'block';
  
  
}
const showCartProd = ()=>{
  if(cartProducts.innerHTML){
    if(prodDiv.style.display === 'none'){
      prodDiv.style.display = 'block'}
     else{
      prodDiv.style.display = 'none'}
    
   }
  }

veiwProducts.addEventListener('click',showCartProd)
// ////////////////////////////////////////////////////////////////////////////////////////
logout.addEventListener('click' , function(){
  localStorage.clear();
})
// ////////////////////////////////////////////////////////////////////////////////////////////
// draw products 
let AllProducts = document.querySelector(".products");
let products = [
  {
    id:1,
    faceImageUrl:'../Images/lady-shirt.png', 
    backImageUrl: '../Images/back-lady-shirt.webp',
    title:' Women’s Herald Knit Shirt',
    price:90 
  },{
    id:2,
    faceImageUrl:'../Images/face-sweshirt.png', 
    backImageUrl: '../Images/back-sweshirt.png',
    title:' Garlic Head Sweatshirt',
    price:150 
  },
  {
    id:3,
    faceImageUrl:'../Images/cap front.png', 
    backImageUrl: '../Images/cap back.webp',
    title:' Spelling Bee Gray Baseball Cap',
    price:28 
  },
  {
    id:4,
    faceImageUrl:'../Images/black-super-t-shirt.png', 
    backImageUrl: '../Images/gray-super-t-shirt_330x.webp',
    title:'  Super “T” Shirt',
    price:100 
  },
  {
    id:5,
    faceImageUrl:'../Images/mug.png', 
    backImageUrl: '../Images/back-mug.png',
    title:' Porcelain Logo Mug',
    price:30
  },
  {
    id:6,
    faceImageUrl:'../Images/bottel.png', 
    backImageUrl: '../Images/nyt-water-bottle-open_330x.webp',
    title:' Logo Water Bottle',
    price:20
  }
]
function drawItems(){
  let product = products.map((item)=>{
    return `
    <div class="productItem">
                    <img class="faceImage" src="${item.faceImageUrl}"/>
                    <img class="backImage" src="${item.backImageUrl}"/>
                     <div class="productItemDescr">
                        <p id="prodName" >product: ${item.title}</p>
                        <span>price: ${item.price}$</span>
                     </div>
                     <div class="productItemAction">
                        <button class="addToCart" onClick ="AddProducts(${item.id})">add to cart</button>
                        <i class="fas fa-heart" id="addToFav" onClick ="AddToFavorite(${item.id})"></i>
                     </div>
                </div>
    `
  }).join('')
  AllProducts.innerHTML = product;
}
drawItems();
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// check if you have items choosen then add them to the div which show the titles of them and count the number af items and their cost 
// the problem was appered when you make refresh don't delete the number of choosen items before..
                            //  >>>>>>>>>>>>>>>>> start with this idea <<<<<<<<<<<<<<<<
let addedProductsToCart = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
let totalPrice = 0;
if(addedProductsToCart){
  addedProductsToCart.map( item =>{
  cartProducts.innerHTML += `<p> Product:${item.title}</p>`
  // cartProducts.innerHTML +=  `<i class="fas fa-plus "></i>
  totalPrice += item.price
})
count.innerHTML = addedProductsToCart.length;

}
else{
  count.style.display = 'block'
  count.innerHTML = '0';
}

function AddProducts(id){
 if(localStorage.getItem("userName") ){
  let choosenItem = products.find((item)=>item.id === id)
  cartProducts.innerHTML += `<p> Product:${choosenItem.title}</p>`
  let cartProdLength = document.querySelectorAll("#cartProducts p")
  count.innerHTML = cartProdLength.length;
  addedProductsToCart = [...addedProductsToCart,choosenItem]
  localStorage.setItem("productsInCart" , JSON.stringify(addedProductsToCart))
  totalPrice += choosenItem.price
  price.innerHTML = "Total cost: "+ totalPrice +" $"
  localStorage.setItem("totalPrice",totalPrice)
   
  // console.log(AddToCartbtn.innerHTML)
  
 }
 
 else{
  window.location ='login.html' 
 }
 
  }
  
// //////////////////////////////////////////////////////////////////////////////////////////////
// To add products to favorite section at the html page(cartProducts) we have to pass data from localStorage the same idea of passing cartsProduct
                                 //>>>>>>>>>>>>>>>>.. start  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 

let favoriteItems = localStorage.getItem("favoriteItems") ? JSON.stringify(localStorage.getItem("favoriteItems")) : [];
function AddToFavorite(id){
  if(localStorage.getItem("userName") ){
      let choosenItem = products.find((item)=>item.id === id)
      let findItem = favoriteItems.find((item)=> item.id === id)
        if(!findItem){
        favoriteItems = [...favoriteItems,choosenItem]
        localStorage.setItem("favoriteItems" , JSON.stringify(favoriteItems) )
        favorites.style.color = "Red"
        }
      }
  
   else{
    window.location ='login.html' 
   }
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                >>>>>>>>>>>>>>>>>>>>>>> search bar <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let productList = document.querySelectorAll(".productItem")
let productName = document.querySelectorAll('.productItem .productItemDescr p')
searchBar.addEventListener('keyup',function(){
  for(var i =0; i<productName.length; i++){
    if(productName[i].innerHTML.toUpperCase().indexOf(searchBar.value.toUpperCase()) >= 0){
      productList[i].style.display = "";
    }
    else{
      productList[i].style.display = "none";
    }
  }
})

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






