function upDate(previewPic){
    old = document.getElementById("display").innerHTML
    document.getElementById("display").innerHTML = previewPic.alt
    document.getElementById("display").style.background = "url("+previewPic.src+")";
}

function Undo(){
    document.getElementById("display").innerHTML = old
    document.getElementById("display").style.background = "url(u13.jpg)"
    document.getElementById("display").style.backgroundRepeat = "no-repeat";
}