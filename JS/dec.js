function decrypt() {
    var e = document.getElementById("content").innerHTML;
    var decodeString = window.atob(e);
    console.log(decodeString)
    document.getElementById("disp").innerHTML = decodeString;
    // console.log(document.getElementById("content").innerHTML)

}