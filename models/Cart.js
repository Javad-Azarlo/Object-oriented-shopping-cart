 class Cart{
    constructor(section_cart , section_total){
        this.section_cart = section_cart;
        this.section_total = section_total;
        this.arry_product = [];
        this.toshow = null;
        this.section_cart.addEventListener("click" , this)
    }
    showProducts(){
        this.toshow = [...new Set(this.arry_product)];
        this.section_cart.innerHTML = "";
        this.toshow.forEach(element => {
            const qty = this.arry_product.filter(item => item.id === element.id).length;
            this.CreateCart(qty , element)
        });
    }
    CreateCart(qty , element){
        const {id , name , alt , price , image} = element;
        const cart_bx = document.createElement("div");
        cart_bx.innerHTML += `
        <img src=${image} alt=${alt}/>
        <div id="cart-info">
            <h4>${name}</h4>
            <p> $ ${price}</p>
        </div>
        <div id="cart-control">
            <div>
                <button id=${id}>-</button>
                <span>${qty}</span>
                <button id=${id}>+</button>
            </div>
            <button id=${id}>remove</button>
        </div>
        `;
        this.section_cart.append(cart_bx)
    };
    handleEvent(){
        const event_name = event.target.tagName;
        const event_id = event.target.id;
        const event_inner = event.target.innerText;

        if(event_name !== "BUTTON") return;
        else{
            if(event_inner === "-"){
                this.minez(event_id)
            }
            else  if(event_inner === "+"){
                this.pluse(event_id)
            }
            else if(event_inner === "remove"){
                this.remove(event_id)
            }
        }
    }
    minez(id){
        const new_array = this.arry_product.findIndex(item => item.id === +id);
        this.arry_product.splice(new_array , 1)
        this.showProducts();
    };
    pluse(id){
        const new_array = this.arry_product.find(item => item.id === +id);
        this.arry_product.push(new_array);
        this.showProducts();

    };
    remove(id){
        const new_array = this.arry_product.filter(item => item.id !== +id);
        this.arry_product = new_array;
        this.showProducts()
        // const new_array = this.toshow.findIndex(item => item.id === +id);
        // this.toshow.splice(new_array , 1);
        // this.showProducts()
    }
    totoalSum(){
        const totoal= this.arry_product.reduce((a , b)=>a+b.price , 0);
        this.section_total.innerText = `$ ${totoal}`;
    }
 }
 export default Cart;