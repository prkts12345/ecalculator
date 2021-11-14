function num(Value) {
    document.getElementById("result").value +=Value;
}

function ops(Value) {
    document.getElementById("result").value +=Value;
}

function clr() {
    document.getElementById("result").value = "";
  }


  function del() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}  

function solve() {
    exp = "";
    exp = document.getElementById("result").value;
    l = exp.length;
    if (exp[0] == '*' || exp[0] == '/' || exp[0] == '%' || exp[0] == '+' || exp[l - 1] == '+' || exp[l - 1] == '%' || exp[l - 1] == '/' || exp[l - 1] == '*' || exp[l - 1] == '-') {
      document.getElementById("result").value = 'NaN';
    } else {
      exp = document.getElementById("result").value;
      res = eval(exp);
      console.log(res);
      document.getElementById("result").value = res;
      if(res===undefined){
        document.getElementById("result").value = "";
      }
    }
  }
  
