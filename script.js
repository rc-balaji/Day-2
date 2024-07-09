var count = document.getElementById("count");
var para = document.getElementById("entries");


var val = 0;
function inc(){

    val++;
    count.innerText = val;
}



var save = () => {
    var str = para.innerText;

    str += val + "-";

    para.innerText = str;
    count.innerText = 0;
    val = 0 ;
}