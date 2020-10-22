var textarea = document.getElementById('mosresul'),
    btn = document.getElementById('btn-validar');
function validar(){ 
    var valor = document.getElementById('valorexpre').value;
    var expreg = /^[A-Z][\d]{3}([a-z]{3})([\$ftp]{3})$/;
    console.log(valor);
    if(expreg.test(valor)){
        textarea.value = "Expresion Correcta";
    }else{
        textarea.value = "Expresion Incorrecta";
    } 
} 