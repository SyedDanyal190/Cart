//we can create an arr with name product in which we can create our objec
const product = [
    {
        id    :   0,
        images :  'images/pic-4.jpg',
        title :  "Iphone",
        price :   500, 
    },
    {
        id : 1,
        images : 'images/pic-5.jpg',
        title : 'Laptop',
        price : 800,
    },
    {
        id : 2,
        images : 'images/pic-2.jpg',
        title : 'Food',
        price : 120,
    },
    {
        id : 3,
        images : 'images/pic-6.jpg',
        title : 'shoes',
        price : 70,
    }


];

const categories = [... new Set(product.map((item) => 
    {
    return item
}
    ))]
    let i =  0;
document.getElementById("root").innerHTML = categories.map((item) => {
        var { images, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src='${images}'></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button onclick='addtocart(${i++})'>Add to cart</button>
                </div>
            </div>`
        );
}).join('');


var  cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a,1);
    displaycart();
}
/*
function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>{
            var   {images,title,price} = items;
            return (
                `<div class ='cart-item'>
                 <div class='rowimg'>
                  <img class='rowimgimg' src=${images}>
                  </div>
                  <p  style='front-size :12px;'>${title}</p>
                  <h2 style='front-size :15px;'>$ ${price}.00</h2`+
                  "<i class='fa-solid fa-trash onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}
*/

// ...

function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML= cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$"+0+".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { images, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML= "$ "+total+".00";
            return (
                `<div class='cart-item'>
                    <div class='rowimg'>
                        <img class='rowimgimg' src=${images}>
                    </div>
                    <p style='front-size: 12px;'>${title}</p>
                    <h2 style='front-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}

// ...