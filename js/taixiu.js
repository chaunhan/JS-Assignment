var tai1 = 1,xiu1 =1;
var tam1 = 0;
var tam2 = 0;
var tam3 = 0;
var balance = 500;
var input;
var input2;
var input3;
var random;
var random2;
var random3; 
var output;
var kq;
var kq2;
function tai(x) {
    tai1++;
        if (tai1 % 2 == 0) {
            x.style = "background-color: greenyellow";
        } else {
            x.style = "background-color: white";
        }

    }
function xiu(x) {
    xiu1++;
    if (xiu1 % 2 == 0) {
        x.style = "background-color: greenyellow";
    } else {
        x.style = "background-color: white";
    }

}
function Cuoc() {
var tai = document.getElementsByTagName("button")[0].value;
var xiu = document.getElementsByTagName("button")[1].value;
console.log("Name",input);

    if(tai1 %2 == 0){
        input = tai;
        input3 = "Tài";
    }else if (xiu1 %2 == 0){
        input = xiu;
        input3 = "Xỉu";
    }else {
    input = 9;
    alert("Hãy chọn 1 cửa để cược.")
    return false;
    }
    input2 = document.getElementById("input2").value;
    if(balance <= 0) {
        alert("Bạn Đã hết Tiền. Không thể chơi tiếp!!!!");
        hettien();
        return false;
    }
    console.log("name", input);
    if(input == "" && input2 == "" || input == "" || input2 == "") {
        alert("Vui Lòng đặt cược")
        return false;
    }else{
        alert("Đặt cược thành công")
        balance = balance - input2;
        xuly();
        return true
    }
    
}
function xuly() {
    
    random = Math.floor(Math.random() * 6 ) + 1;
    random2 = Math.floor(Math.random() * 6 ) + 1;
    random3 = Math.floor(Math.random() * 6 ) + 1;
    if (random == 1) {
        tam1 = "1"
    }else if (random == 2) {
        tam1 = "2"
    }else if (random == 3) {
        tam1 = "3"
    }else if (random == 4) {
        tam1 = "4"
    }else if (random == 5) {
        tam1 = "5"
    }else if (random == 6) {
        tam1 = "6"
    }
    if (random2 == 1) {
        tam2 = "1"
    }else if (random2 == 2) {
        tam2 = "2"
    }else if (random2 == 3) {
        tam2 = "3"
    }else if (random2 == 4) {
        tam2 = "4"
    }else if (random2 == 5) {
        tam2 = "5"
    }else if (random2 == 6) {
        tam2 = "6"
    }
    if (random3 == 1) {
        tam3 = "1"
    }else if (random3 == 2) {
        tam3 = "2"
    }else if (random3 == 3) {
        tam3 = "3"
    }else if (random3 == 4) {
        tam3 = "4"
    }else if (random3 == 5) {
        tam3 = "5"
    }else if (random3 == 6) {
        tam3 = "6"
    }
    output = 0;
    kq = random + random2 + random3;
    
    console.log(kq)
    if(kq>=3 && kq <= 10){
        kq2 = "Xỉu"
    }else if(kq >10 && kq <=18){
        kq2 = "Tài"
    }else{
        kq2 = "Xóc lệch chả tiền"
    }
    if(input3 == kq2){
        output = input2  * 2;
        balance = balance + output;
    }else{
        output = -input2;
    }
    xuat();
}
function xuat(){
    document.getElementById('in').innerText = `Bạn đặt cược vào ${input3} với ${input2}k.`;
    document.getElementById('kq').innerText = `Xốc Ra : ${kq} ${kq2}`; 
    document.getElementById('out').innerText = `Bạn Nhận Được : ${output}k`;
    document.getElementById('bal').innerText = `Tài sản còn : ${balance}k`;
}
document.getElementById('bal').innerText = `Tài sản còn : ${balance}k`;
function hettien(){
    document.getElementById('het').innerText = "Bạn Đã Hết Tiền.";
    document.getElementById('in').innerText = `Bạn đặt cược vào ${input3} với ${input2}k.`;
    document.getElementById('kq').innerText = "Xốc Ra :" + kq; 
    document.getElementById('bal').innerText = `Tài sản còn : ${balance}k`;
    
}