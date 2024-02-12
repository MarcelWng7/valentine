function nama() {
    var answer = document.getElementById("nama").value;

    if(answer === "facia") {
        document.getElementById("cont2").style.display="flex";
        document.getElementById("cont").style.display="none";
        document.getElementById("wrong").style.display="none";
    } else {
        document.getElementById("wrong").style.display="block";
    }
}

function pelayanan() {
    var answer2 = document.getElementById("pelayanan").value;

    if(answer2 === "multimedia") {
        document.getElementById("cont3").style.display="flex";
        document.getElementById("cont2").style.display="none";
        document.getElementById("cont").style.display="none";
        document.getElementById("wrong").style.display="none";
    } else {
        document.getElementById("wrong").style.display="block";
    }
}

function kalimat() {
    var answer3 = document.getElementById("kalimat").value;

    if(answer3 === "i love you") {
        document.getElementById("cont4").style.display="flex";
        document.getElementById("cont3").style.display="none";
        document.getElementById("cont2").style.display="none";
        document.getElementById("cont").style.display="none";
        document.getElementById("wrong").style.display="none";
    } else {
        document.getElementById("wrong").style.display="block";
    }
}

function gambar() {
    document.getElementById("cont5").style.display="flex";
    document.getElementById("cont4").style.display="none";
    document.getElementById("cont3").style.display="none";
    document.getElementById("cont2").style.display="none";
    document.getElementById("cont").style.display="none";
    document.getElementById("wrong").style.display="none";
}