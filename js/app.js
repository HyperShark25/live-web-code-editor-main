let array = JSON.parse(localStorage.getItem("array")) || [];
/*
document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";
*/

window.onload = function () {
	document.getElementById("htmlCode").value = localStorage.getItem("html_code") || "<div>\n\n</div>";
	document.getElementById("cssCode").value = localStorage.getItem("css_code") || "<style>\n\n</style>";
	document.getElementById("jsCode").value =  localStorage.getItem("js_code") || "<script>\n\n</script>";
}

function save_code () {
	localStorage.setItem("html_code", document.getElementById("htmlCode").value);
	localStorage.setItem("css_code", document.getElementById("cssCode").value);
	localStorage.setItem("js_code", document.getElementById("jsCode").value);
}


function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
	var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
	save_code();
	frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
/*
document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

document.getElementById('htmlCode').addEventListener('keyup', saveCode);
document.getElementById('cssCode').addEventListener('keyup', saveCode);
document.getElementById('jsCode').addEventListener('keyup', saveCode);

function saveCode() {
    localStorage.setItem('htmlCode', document.getElementById('htmlCode').value);
    localStorage.setItem('cssCode', document.getElementById('cssCode').value);
    localStorage.setItem('jsCode', document.getElementById('jsCode').value);
}


window.onload = function() {
    document.getElementById('htmlCode').value = localStorage.getItem('htmlCode');
    document.getElementById('cssCode').value = localStorage.getItem('cssCode');
    document.getElementById('jsCode').value = localStorage.getItem('jsCode');
};


function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

*/