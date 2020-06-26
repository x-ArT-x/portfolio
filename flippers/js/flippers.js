function ChangeImageBambuk(){
document.getElementById('bamboo').classList.remove("DisactivateImage");
document.getElementById('al').classList.add("DisactivateImage");
document.getElementById('but1').classList.remove("activeButton");
document.getElementById('but2').classList.add("activeButton");
}
function ChangeImageAlu(){
document.getElementById('al').classList.remove("DisactivateImage");
document.getElementById('bamboo').classList.add("DisactivateImage");
document.getElementById('but2').classList.remove("activeButton");
document.getElementById('but1').classList.add("activeButton");
}
function ChangeImagePlis() {
document.getElementById('plis2').classList.remove("DisactivateImage");
document.getElementById('plis1').classList.add("DisactivateImage");
}
function ChangeImagePlis2() {
document.getElementById('plis1').classList.remove("DisactivateImage");
document.getElementById('plis2').classList.add("DisactivateImage");
}
var inp1,inp2,result;
function MathCalc() {
	inp1 = document.getElemntById('input1').value;
	inp2 = document.getElemntById('input2').value;
	result = inp1*inp2;
	document.getElemntById('resultat').innerHTML=result;
}
function slider() {
document.getElementById('cont01').classList.add("Active");
}
function slider2() {
document.getElementById('cont01').classList.remove("Active");
}
function ChangeImageVert(){
document.getElementById('vert2').classList.remove("DisactivateImage");
document.getElementById('vert1').classList.add("DisactivateImage");
document.getElementById('vbut1').classList.remove("activeButton");
document.getElementById('vbut2').classList.add("activeButton");
}
function ChangeImageVert2(){
document.getElementById('vert1').classList.remove("DisactivateImage");
document.getElementById('vert2').classList.add("DisactivateImage");
document.getElementById('vbut2').classList.remove("activeButton");
document.getElementById('vbut1').classList.add("activeButton");
}