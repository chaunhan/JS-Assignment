function bai4_1() {
    var tb = 0;
    var t = 0;
    var x = parseInt(prompt("Nhập điểm Toán"));
    if (isNaN(x) || x == ""){
        alert("hãy nhập điểm");
    }else{
    var y = parseInt(prompt("Nhập điểm Văn"));
    var z = parseInt(prompt("nhập điểm anh"));
    
        t = x+x + y+y + z;
        console.log(t)
        
        tb = t / 5 ;
        console.log(tb)

        alert("điểm trung bình: " + tb);

        if (tb <= 3.5){
            alert("Học lực yếu.")
        }else if(tb > 3.5 && tb <= 5){
            alert("Học lực Trung bình.")
        }else if(tb > 5 && tb <= 7){
            alert("Học lực Khá.")
        }else if(tb > 7 && tb <= 9){
            alert("Học lực Giỏi.")
        }else if(tb > 9 && tb <= 10){
            alert("Học lực Xuất Xắc.")
        }
        return true;
    }
}
function bai4_2() {
    var n =0;
    var S = 0;
    while(S < 10000)
    {
    
        n++;

        S = S + n;
    }
    alert(`n là : ${n}`)
}
function UCLN(a, b) {
while ( a != b)
{
    if (a > b)
        a = a - b;
    else
        b = b - a;
}
return a;
}

function bUCLN() {
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
alert(UCLN(a, b));

}
function KiemTraTamGiac(a, b, c)
{
if(a + b <= c || a + c <= b ||  b + c <= a)
{
    alert("tam giác ko hợp lệ nhập lại")
}
else
{
    if((a == b) && (b == c))
    {
        alert("tam giác cân");
    }
    else
    {
        if(a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c)
        {
            alert("tam giác Vuông");
        }
        if(a == b || a == c || b == c)
        {
            alert("tam giác đều");
        }
        else
        {
            alert("tam giác Thường");
        }
    }
}
}

function tamgiac() {
var a = document.getElementById("c1").value;
var b = document.getElementById("c2").value;
var c = document.getElementById("c3").value;
KiemTraTamGiac(a, b, c);
}
function cachdoc(){
var a = document.getElementById("so").value;
if(a == 0){
    alert("không")
}else if(a == 1){
    alert("một")
}else if(a == 2){
    alert("hai")
}else if(a == 3){
    alert("ba")
}else if(a == 4){
    alert("bốn")
}else if(a == 5){
    alert("năm")
}else if(a == 6){
    alert("sáu")
}else if(a == 7){
    alert("bảy")
}else if(a == 8){
    alert("tám")
}else if(a == 9) {
    alert("chín")
}else{
    alert("Nhập lại số")
}
}
const mang = [2,1,3,5,4];
document.getElementById('mang').innerText = `Mảng gốc là :${mang}.`;
function them(){
var x = document.getElementById("tim").value;
mang.push(x);
document.getElementById('mangadd').innerText = `Mảng đã thêm là :${mang}.`;
}
function xoa() {
var x = document.getElementById("tim").value;
mang.forEach(function(value, index) {
    if(value == x){
        mang.splice(index,1);
    }
});
document.getElementById('mangdel').innerText = `Mảng sau khi đã xóa là :${mang}.`;
}
function sua(){
var x = document.getElementById("tim").value;
var y = document.getElementById("sua").value;
for (let i = 0; i < mang.length; i++) {
    if(mang[i] == x){
        mang[i] = y;
    }
}
document.getElementById('mangsua').innerText = `Mảng sau khi đã sửa là :${mang}.`;
}
function chan(){
    var tam = "";
mang.forEach(function(value, index) {
    if(value %2 == 0){
        tam += ` ${value}`  
    }
});document.getElementById('mangchan').innerText = `Giá trị chẵn trong mảng là : ${tam}`;
}
function tim(){
var x = document.getElementById("tim").value;
var tam = -1;
mang.forEach(function(value, index) {
    if(value == x){
        tam = index;
    }
});
    if(tam != -1) {
        document.getElementById('mangtim').innerText = `Vị trị cần tìm trong mảng là : mang[${tam}]`;
    }else{
        document.getElementById('mangtim').innerText = `Không tìm thấy`;
    }
}
function sapxep(){
mang.sort();
document.getElementById('mangsort').innerText = `Mảng sau khi sắp xếp là :${mang}.`;
}
function tong() {
var tong = 0;
mang.forEach(function(vaule, index) {
    tong = tong + vaule; 
});
document.getElementById('mangtong').innerText = `Tổng các giá trị trong mảng là :${tong}.`;
}
const arrSinhVien = [];
for (let i = 0; i < 10; i++) {
        const currentSinhVien = {
            mssv: i + 1,
            ten: `sinh vien ${i}`,
            diem_toan: Math.floor(Math.random() * 10),
            diem_anh: Math.floor(Math.random() * 10),
            diem_van: Math.floor(Math.random() * 10),
            dtb: 0
        };
        arrSinhVien.push(currentSinhVien);
}
function sinhvien(){
    tinhdtb(arrSinhVien);
    var chuoi = `<th>mã sv</th>
                <th>tên sv</th>
                <th>điểm toán</th>
                <th>điểm anh</th>
                <th>điểm văn</th>
                <th>điểm trung bình</th>`;
                arrSinhVien.forEach((item, index) => {
                    chuoi += `<tr><td>  ${item.mssv}</td>
                        <td> ${item.ten}</td>
                    <td>  ${item.diem_toan}</td>
                   <td>${item.diem_van}</td>
                    <td> ${item.diem_van}</td>
                    <td> ${item.dtb}</td>`
                })
                var xuat = document.getElementsByClassName("xuat")[0];
                xuat.innerHTML = chuoi;
}
function tinhdtb(array){
array.forEach(element => {
    element.dtb = (element.diem_toan*2+element.diem_van*2+element.diem_anh)/5
    
});console.log("tính điểm tb", arrSinhVien)
}
function themsv(){
    var ms = prompt("nhập mã số sinh viên:");
    if (ms == "" || ms == null ){
        alert("hãy nhập mã số sv cần thêm");
    }else{
    var ten = prompt("nhập tên sv");
    var dt = parseInt(prompt("nhập điểm toán"));
    var dv = parseInt(prompt("nhập điểm văn"));
    var da = parseInt(prompt("nhập điểm anh"));
    
    var sv = {
        mssv: ms,
        ten: ten,
        diem_toan: dt,
        diem_van: dv,
        diem_anh: da,
        dtb: 0
    }
    arrSinhVien.push(sv);
    sinhvien();
    return true;
    }
}
function capnhat(array){
    var ms = prompt("nhập mã số sinh viên muốn sửa:");
    var ten = prompt("nhập tên sv");
    var dt = parseInt(prompt("nhập điểm toán"));
    var dv = parseInt(prompt("nhập điểm văn"));
    var da = parseInt(prompt("nhập điểm anh"));
array.forEach(element => {
    if (element.mssv == ms ) {
        element.ten = ten;
        element.diem_toan = dt;
        element.diem_van = dv;
        element.diem_anh = da;
    }
    
});sinhvien();
}
function sxsv() {
let tam = [];
for(let i = 0; i <arrSinhVien.length ; i++){
    for (let j = 0; j < arrSinhVien.length; j++) {
        if(arrSinhVien[i].dtb < arrSinhVien[j].dtb){
            tam = arrSinhVien[i];
            arrSinhVien[i] = arrSinhVien[j];
            arrSinhVien[j] = tam;
        }
    }
}
sinhvien();
}
function xoasv(array) {
    var x = prompt("Nhập mã số sinh viên muốn xóa");
    if (x == "" || x == null ){
        alert("hãy nhập mã số sv cần xóa");
    }else{
        array.forEach(element => {
            if (element.mssv === x) {
                var tam = array.indexOf(element)
                array.splice(tam, 1)
            }
        });sinhvien();
    }
}