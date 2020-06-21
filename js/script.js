window.addEventListener("load", function(){
    var section4 = document.getElementById("section4");
    
    var txtX = section4.querySelector(".txt-x");
    var txtY = section4.querySelector(".txt-y");
    var btnAdd = section4.querySelector(".btn-add");
    var txtSum = section4.querySelector(".txt-sum");

    btnAdd.onclick = function(){ 
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y; 
    };
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
    };
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