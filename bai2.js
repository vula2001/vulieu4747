function kiem_tra_snt(n)
{	var n=document.getElementById('so').value;
    // Biến cờ hiệu
    var a = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        a = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                a = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến a
    if (a == true){
        alert(n + " là số nguyên tố");
      
    }
    else{
        alert(n + " không phải là số nguyên tố ");
    }
}