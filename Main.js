// Khai báo một function 
function Tinh() {

  // Phương thức getElementById () trả về phần tử có thuộc tính ID với giá trị được chỉ định
  tienvay = +document.getElementById("NhapVay").value;
  thoigianvay = +document.getElementById("NhapTG").value;
  tienlai = +document.getElementById("NhapLai").value;
  NgayGiaiNgan = new Date(document.getElementById("ngayGiaiNgan").value);

  // Khai báo biến rỗng để gán 

  var thang = " ";
  var gocConLai = " ";
  var Goc = " ";
  var Lai = " ";
  var GocLai = "";
  var ngayTra = "";
  var NgayGiaiNgan = new Date(ngayGiaiNgan.value);
  

  //  Đề bài toán cho 
  TienGoc = tienvay / thoigianvay;

  // dùng vòng lặp for 
  for (var i = 0; i < thoigianvay; i++) {
    
    // now = ngay;
    n = i + 1; // gán n = i + 1 

    // Đề bài cho
    tienlaihangthang = tienvay * (tienlai / 12 / 100);
    tientrahangthang = TienGoc + tienlaihangthang;
    GocCon = tienvay - TienGoc;


    // nếu n >= 1 thì xuất ra 
    if (n >= 1) {
      NgayGiaiNgan.setMonth(NgayGiaiNgan.getMonth() + 01);
      ngayTra = ngayTra + NgayGiaiNgan.toLocaleDateString() + "<br>";
      thang = thang + n + "<br>";
      gocConLai = gocConLai + GocCon.toLocaleString() + "<br>";
      Goc = Goc + TienGoc.toLocaleString() + "<br>";
      Lai = Lai + tienlaihangthang.toLocaleString() + "<br>";
      GocLai = GocLai + tientrahangthang.toLocaleString() + "<br>";
      tienvay -= TienGoc;
    } else {
      // còn không đúng n >=1 thì xuất ra giá trị dưới
      thang = thang + n + "<br>";
      gocConLai = gocConLai + GocCon.toLocaleString() + "<br>";
      Goc = Goc + TienGoc.toLocaleString() + "<br>";
      Lai = Lai + tienlaihangthang.toLocaleString() + "<br>";
      GocLai = GocLai + tientrahangthang.toLocaleString() + "<br>";
      tienvay -= TienGoc;
    }

    // console.log("") ra giá trị bên tab console

    console.log("Tháng " + n);
    console.log("Gốc Còn Lại: " + GocCon.toLocaleString());
    console.log("Gốc: " + TienGoc.toLocaleString());
    console.log("Lãi: " + tienlaihangthang.toLocaleString());
    console.log("Gốc + Lãi: " + tientrahangthang.toLocaleString());
    console.log("Thời Hạn Trả: " + NgayGiaiNgan.toLocaleString());
    console.log("--------------");

    // In kết quả ra màn hình

    document.getElementById("newDate").innerHTML = ngayTra;
    document.getElementById("t").innerHTML = thang;
    document.getElementById("gocConLai").innerHTML = gocConLai;
    document.getElementById("Goc").innerHTML = Goc;
    document.getElementById("Lai").innerHTML = Lai;
    document.getElementById("GocLai").innerHTML = GocLai;
   
  }
}
