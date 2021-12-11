function validateForm(theForm){
    var msv = document.getElementById("msv").value;
    var ten = document.getElementById("ten").value;
    var email = document.getElementById("email").value;
    var quoctich = document.getElementById("country").value;

    if(msv== "") {
        alert("Hãy Nhập mã số sinh viên");
        return false;
    }
    if(ten == "") {
        alert("Hãy nhập họ và tên của bạn");
        return false;
    }
    if(email == "") {
        alert("Hãy nhập địa chỉ email");
        return false;
    }

    if (theForm.nam.checked == false && theForm.nu.checked == false){
            alert ('Bạn chưa chọn giới tính của mình');
            return false;
    }
    if (theForm.DocSach.checked == false && theForm.DuLich.checked == false && theForm.AmNhac.checked == false && theForm.AmThuc.checked == false && theForm.Khac.checked == false){
        alert ('Bạn chưa chọn sở thích của mình');
        return false;
    }
    if(quoctich == "none"){
        alert("Hãy Chọn Quốc tịch của bạn");
        return false;
    }   
    alert("Đăng Ký Thành công");
    
    return true;
}