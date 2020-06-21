window.addEventListener("load", function(){
    var section3 = document.getElementById("section3");
    
    var txtX = section3.getElementsByClassName("txt-x")[0];
    var txtY = section3.getElementsByClassName("txt-y")[0];
    var btnAdd = section3.getElementsByClassName("btn-add")[0];
    var txtSum = section3.getElementsByClassName("txt-sum")[0];

    btnAdd.onclick = function(){ 
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y; 
    }
})
window.addEventListener("load", function(){
    var section2 = document.getElementById("section2");
    var inputs =  section2.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];

    btnAdd.onclick = function(){ 
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y; 
    }
})

window.addEventListener("load", function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        
        txtSum.value = x+y;
    };
});