var size = 0;
var size1 = 1;
var cart = [];

class Sp {
    constructor(productImg, productName, productSize, productSL, productPrice) {
      this.productImg = productImg;
      this.productName = productName;
      this.productSize = productSize;
      this.productSL = productSL;
      this.productPrice = productPrice;
    }
    getProductImg() {
      return this.productImg;
    }
    getProductName() {
      return this.productName;
    }
    getProductSize() {
        return this.productSize;
    }
    getProductSL() {
        return this.productSL;
    }
    getProductPrice() {
        return this.productPrice;
      }
  }
function add(x) {
    var card = x.parentElement.parentElement;
    var card__ = card.children;

    var productImg = card__[2].children[0].src;
    var productName = card__[3].innerText;
    var productPrice = card__[4].children[1].innerText;
    var productSize = size;
    var productSL = 1;
    
    var sp = new Sp(productImg, productName, productSize, productSL, productPrice);
    
    var kt = 0;
    for (let i =0 ; i< cart.length;i++){
        if(cart[i].productName == productName && cart[i].productSize == productSize){
            kt =1;
            productSL += cart[i].productSL;
            cart[i].productSL = productSL;

            break;
        }console.log(cart[i]);
    }
    if(productSize == 0){
        document.getElementById("textbox").innerHTML = `Hãy chọn size giày`;
        return false;
    }else if(productSize != 0 && kt == 0){
        document.getElementById("textbox").innerHTML = `Thêm vào giỏ hàng ${productName} Side: ${productSize}`;
        cart.push(sp);
        localStorage.setItem("Cart", JSON.stringify(cart));   
        return true;
    }else if(!(productSize != 0 && kt == 0)) {
        document.getElementById("textbox").innerHTML = `Thêm vào giỏ hàng ${productName} Side: ${productSize}`;
        cart.push(sp); 
        localStorage.setItem("Cart", JSON.stringify(cart));
        return true;
    }else{
        document.getElementById("textbox").innerHTML = `Hãy chọn size giày`;
        return false;
    }
    

    
}
function xoa(x) {
    // gọi nó ra nè
    var gh = localStorage.getItem("Cart");
    var giohang = JSON.parse(gh);

    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText; // gọi tên sp nè
    // localStorage.removeItem("Cart")
    tr.remove();// xóa đi cái item trên web nè
    
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i].productName == tensp) { // trùng với tên sản phầm nè
            giohang.splice(i,1);
            localStorage.setItem("Cart",JSON.stringify(giohang));
        }
        
    }
    showcart();
    
}
function showcart(){
    var gh = localStorage.getItem("Cart");
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tong = 0;
    for (let i= 0 ; i < giohang.length;i++){
        var tien = parseInt(giohang[i].productPrice) * parseInt(giohang[i].productSL); 
        tong += tien;
        ttgh += `<tr>
        <th>${i+1}</th>
        <th><img src="${giohang[i].productImg}"></th>
        <th>${giohang[i].productName}</th>
        <th>${giohang[i].productSize}</th>
        <th>${giohang[i].productPrice}<sup>$</sup></th>
        <th>${giohang[i].productSL}</th>
        <th>${tien}<sup>$</sup></th>
        <th class="xoa">
            <button onclick="xoa(this)">Xóa</button>
        </th>
    </tr>`;
    }
        ttgh += `<tr>
        <th colspan="6">Tổng đơn hàng</th>
        <th colspan="2" >${tong}<sup>$</sup></th>
    </tr>`
        var xuat = document.getElementById("cart1");
        xuat.innerHTML = ttgh; 
}
function chonSize(x) {

    size1++
    if(size1 %2 == 0){
        x.style = "background-color: red";
        size = x.innerText;
    }else{
        x.style = "background-color: #dadada";
        size = 0 ;
    }
    if(size == 0 ){
        document.getElementById("textbox").innerHTML = `Hãy chọn size giày`;
    }
}




