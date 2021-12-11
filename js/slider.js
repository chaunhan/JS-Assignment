
const hinh = [
    "./img/0.jpg",
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
]
var index = 0;

const viewHinh = () => {
    var hinhEle = document.getElementById("img");
    hinhEle.src = hinh[index];
}

const next = () => {
    index++;
    if(index > hinh.length -1){
        index = 0;
    }
    console.log("index", index);
    viewHinh();
    count();
}
const pre = () => {
    
    if(index == 0){
        index = hinh.length;
    }
    console.log("index", index)
    index--;
    viewHinh();
    count();
}
const count = () =>{
    document.getElementById('vitri').innerText = `Ảnh ${index +1}/${hinh.length}.`;
}
