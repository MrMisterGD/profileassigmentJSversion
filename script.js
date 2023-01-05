var i=2
var o=418
/* No se por que pero innerText no me funcionaba así que tuve que improvisar*/
function nameedit(){
    var editablename = document.querySelector("#editablename");
    var change = prompt ("Select a new name")
    change
    /*en la linea que viene intente poner change != null pero por alguna razon no me tomaba el null y lo dejaba en blanco, asi que hice eso*/
    if (change != ""){
        editablename.innerHTML = change
    }
}
function clickr() {
    var todd = document.querySelector("#profiler1");
        todd.remove();
    var crb = document.querySelector("#crb");
        document.getElementById(crb);
        crb.innerHTML = --i;
    var ycb = document.querySelector("#ycb");
        document.getElementById(ycb);
        ycb.innerHTML = ++o;
}
function clickr2() {
    var phill = document.querySelector("#profiler2");
    phill.remove();
    var crb = document.querySelector("#crb");
    document.getElementById(crb);
    crb.innerHTML = --i;
    var ycb = document.querySelector("#ycb");
        document.getElementById(ycb);
        ycb.innerHTML = ++o;
}
function clickr3() {
    var todd = document.querySelector("#profiler1");
        todd.remove();
    var crb = document.querySelector("#crb");
        document.getElementById(crb);
        crb.innerHTML = --i;
}
function clickr4() {
    var todd = document.querySelector("#profiler2");
        todd.remove();
    var crb = document.querySelector("#crb");
        document.getElementById(crb);
        crb.innerHTML = --i;
}