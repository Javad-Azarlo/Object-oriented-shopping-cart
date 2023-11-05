 class Product{
    constructor(prd_data , section , cart){
        this.prd_data = prd_data;
        this.section = section;
        this.cart = cart;

        this.section.addEventListener("click" , this)

    }
    showProduct(){
        this.prd_data.forEach(element =>this.createCard(element));
    }
    createCard(item){
        const {id , name , image , price , alt} = item;
        const div_elem = document.createElement("div");
            div_elem.innerHTML = `<img src=${image} alt=${alt}>
            <div id='products-info'>
            <div>
                <span>$ ${price}</span>
                <button id=${id}>+</button>
            </div>
            <h3>${name}</h3>
            </div>
            `;
            this.section.append(div_elem)
    }
    handleEvent(event){
        const elem = event.target.tagName;
        if(elem !== "BUTTON")return;
        else{
            this.addToCart(event.target.id);
            this.cart.totoalSum();
        }
    }
    addToCart(e){
         const add_prdct = this.prd_data.find(item => item.id === +e);
         this.cart.arry_product.push(add_prdct);
         this.cart.showProducts()
    }
 }

 export default Product;