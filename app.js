import Cart from "./models/Cart.js";
import Product from "./models/Products.js";
const cart_list = document.getElementById("cart-list") 
const products_elem = document.getElementById("products");
const total_price = document.getElementById("total-price")
const apiData = async()=>{
  const resualt = await fetch("data.json");
  const res_json = await resualt.json();
  return res_json;
}

async function apiProduct (){
  const api = await apiData();
  const cart_calss = new Cart(cart_list , total_price);
  const product_class = new Product(api , products_elem , cart_calss);
  product_class.showProduct();
}
window.addEventListener("DOMContentLoaded" , apiProduct)