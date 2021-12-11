
const arrUser = [];
class Account {
  constructor(username, password, ten) {
    this.username = username;
    this.password = password;
    this.ten = ten;
  }
  getUsername() {
    return this.username;
  }
  getPassword() {
    return this.password;
  }
  getTen() {
    return this.ten;
  }
}
const register = () => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const ten = document.getElementById("ten").value;
  if (username !== "" && password !== "") {
    const userLocal = localStorage.getItem("users");
    if (userLocal) {
      const userList = JSON.parse(userLocal);
      console.log("list", userList)
      const isFound = userList.find((user) => user.username === username);
      if (isFound) {
        alert("tài khoản đã tồn tại");
      }else{
        const userRegister = new Account(username, password, ten);
        arrUser.push(userRegister);
        // create localStorage
        localStorage.setItem("users", JSON.stringify(arrUser));
        alert("đăng ký thành công");
      }
      // check user -> localstorage
    } else {
      const userRegister = new Account(username, password, ten);
      arrUser.push(userRegister);
      localStorage.setItem("users", JSON.stringify(arrUser));
      alert("đăng ký thành công");
    }
    // đăng ký
  } else {
    alert("Tài Khoản hoặc mật khẩu không hợp lệ.");
  }
  console.log(arrUser);
};
var loginUser = "";
const DangNhap = () => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  loginUser += username;
  
  localStorage.setItem("username", JSON.stringify(loginUser));
  if (username !== "" && password !== "") {
    const userLocal = localStorage.getItem("users");
    if (userLocal) {
      const userList = JSON.parse(userLocal);
      const isFound = userList.find(
        (user) => user.username === username && user.password === password
      );
      if (isFound) {
        alert("đăng nhập thành công");
        location.href = "./trangchu.html";
      }
    } else {
      alert("Sai Tài Khoản hoặc mật khẩu.");
    }
  } else {
    alert("Sai Tài Khoản hoặc mật khẩu.");
  }
};

function checklogin() {

var users = localStorage.getItem("username");
var username = JSON.parse(users);
if(username != null){
  document.getElementById('tk').innerText = `Bạn đang đăng nhập bằng tài khoản ${username}.`;
}else{
  alert("Hãy đăng nhập để tiếp tục!!!")
  logout();
  }
}


const logout = () => {
  window.localStorage.clear();
  window.location.reload(true);
  window.location.replace('./login.html');
};