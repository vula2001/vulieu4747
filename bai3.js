console.log('c')

function calculateBMI(){
    var height = document.getElementById("cao").value;
        weight = document.getElementById("rong").value;
        bmi = weight/(height**2);

        if (bmi <18.5) {
            alert('Bạn gầy =>> bạn nên giữ sức khỏe');
        }
        else if (18.5< bmi && bmi<24.9) {
            alert('Bạn bình thường   ==> Body ok :3');
        }
        else if (25.0< bmi && bmi<29.9){
            alert('bạn hơi mập =>>> Cao');

        } 
        else if (30.0< bmi && bmi <34.9){
            alert('bạn  mập loại 1 =>>> Cao');

        } 
        else if (35.0< bmi && bmi <39.9){
            alert('bạn  mập loại 2 =>>> Rất cao');

        } 
        else  {
            alert('bạn  mập loại 3  =>>> Nguy Hiểm');
        }
