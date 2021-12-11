var balancebs = 500;
var input4;
var input5;
var random4;
var random5;
var random6; 
var output1;
var kq1;
var bau1 = 1;
var cua1 = 1;
var ga1 = 1;
var tom1 = 1;
var ca1 = 1;
var huou1 = 1;
var tam4,tam5,tam6;

function bau(x) {
    bau1++;
        if (bau1 % 2 == 0) {
            x.style = "background-color: red";
        } else {
            x.style = "background-color: white";
        }

    }

function cua(x) {
        cua1++;
        if (cua1 % 2 == 0) {
            x.style = "background-color: red";
        } else {
            x.style = "background-color: white";
        }
    }

function tom(x) {
        tom1++;
        if (tom1 % 2 == 0) {
            x.style = "background-color: red";
        } else {
            x.style = "background-color: white";
        }
    }

function ca(x) {
        ca1++;
        if (ca1 % 2 == 0) {
            x.style = "background-color: red";
        } else {
            x.style = "background-color: white";
        }
    }

function huou(x) {
        huou1++;
        if (huou1 % 2 == 0) {
            x.style = "background-color: red";
        } else {
            x.style = "background-color: white";
        }
    }

function ga(x) {
    ga1++;
    if (ga1 % 2 == 0) {
        x.style = "background-color: red";
    } else {
        x.style = "background-color: white";
    }
}
function Cuoc2(){
var huou = document.getElementsByTagName("button")[2].value;
var bau = document.getElementsByTagName("button")[3].value;
var ga = document.getElementsByTagName("button")[4].value;
var ca = document.getElementsByTagName("button")[5].value;
var cua = document.getElementsByTagName("button")[6].value;
var tom = document.getElementsByTagName("button")[7].value;
console.log("Name",input);
if(bau1 %2 == 0){
    input4 = bau;
    input3 = "Bầu";
}else if (cua1 %2 == 0){
    input4 = cua;
    input3 = "Cua";
}else if (tom1 %2 == 0){
    input4 = tom;
    input3 = "Tôm";
}else if (ca1 %2 == 0){
    input4 = ca;
    input3 = "Cá";
}
else if (ga1 %2 == 0){
    input4 = ga;
    input3 = "Gà";
}
else if (huou1 %2 == 0){
    input4 = huou;
    input3 = "Hươu";
}
else {
    input4 = 9;
    alert("Hãy chọn 1 cửa để cược.")
    return false;
}

input5 = document.getElementById("input5").value;
    if(balancebs <= 0) {
        alert("Bạn Đã hết Tiền. Không thể chơi tiếp!!!!")
        hettien1();
        return false;
    }console.log("name", input);
    if(input4 == "" && input5 == "" || input4 == "" || input5 == "") {
        alert("Vui Lòng đặt cược")
        return false;
    }else{
        alert("Đặt cược thành công")
        balancebs = balancebs - input5;
        xuly1();
        return true;
    }
    
    
    
}
function xuly1() {
    
    random4 = Math.floor(Math.random() * 6 );
    random5 = Math.floor(Math.random() * 6 );
    random6 = Math.floor(Math.random() * 6 ); 
    if(random4 == 0 ){
        tam4 = "Hươu"
    }else if (random4 == 1) {
        tam4 = "Bầu"
    }else if (random4 == 2) {
        tam4 = "Gà"
    }else if (random4 == 3) {
        tam4 = "Cá"
    }else if (random4 == 4) {
        tam4 = "Cua"
    }else if (random4 == 5) {
        tam4 = "Tôm"
    }
    if(random5 == 0 ){
        tam5 = "Hươu"
    }else if (random5 == 1) {
        tam5 = "Bầu"
    }else if (random5 == 2) {
        tam5 = "Gà"
    }else if (random5 == 3) {
        tam5 = "Cá"
    }else if (random5 == 4) {
        tam5 = "Cua"
    }else if (random5 == 5) {
        tam5 = "Tôm"
    }
    if(random6 == 0 ){
        tam6 = "Hươu"
    }else if (random6 == 1) {
        tam6 = "Bầu"
    }else if (random6 == 2) {
        tam6 = "Gà"
    }else if (random6 == 3) {
        tam6 = "Cá"
    }else if (random6 == 4) {
        tam6 = "Cua"
    }else if (random6 == 5) {
        tam6 = "Tôm"
    }
    output1 = 0;
    if(input4 == random4 && input4 == random5 && input4 == random6){
        output1 = input5 * 4;
        balancebs = balancebs + output1;
    }else if ((input4 == random4 && input4 == random5) || (input4 == random4 && input4 == random6) || (input4 == random5 && input4 == random6)) {
        output1 = input5 * 3;
        balancebs = balancebs + output1;
    }else if (input4 == random4 || input4 == random5 || input4 == random6) {
        output1 = input5  * 2;
        balancebs = balancebs + output1;
    }else {
        output1 = -input5;
    }
    console.log(balancebs);
    kq1 =` ${tam4} ${tam5} ${tam6} `
    console.log(random4 , random5 , random6);
    if(balancebs <= 0) {
        alert("Bạn Đã hết Tiền. Không thể chơi tiếp!!!!")
        hettien1();
        return false
    }
    xuat1();
}

function xuat1(){
    document.getElementById('inbs').innerText = `Bạn đặt cược vào ${input3} với ${input5}k.`;
    document.getElementById('kqbs').innerText = "Xốc Ra :" + kq1; 
    document.getElementById('outbs').innerText = `Bạn Nhận Được : ${output1}k`;
    document.getElementById('balbs').innerText = `Tài sản còn : ${balancebs}k`;
}
function hettien1(){
    document.getElementById('hetbs').innerText = "Bạn Đã Hết Tiền.";
    document.getElementById('inbs').innerText = `Bạn đặt cược vào ${input3} với ${input5}k.`;
    document.getElementById('kqbs').innerText = "Xốc Ra :" + kq1; 
    document.getElementById('balbs').innerText = `Tài sản còn : ${balancebs}k`;
    return false;
}
document.getElementById('balbs').innerText = `Tài sản : ${balancebs}k`;