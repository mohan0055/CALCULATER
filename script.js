function msg()
{
    try{
        const res=eval(document.getElementById("iii").value);
        document.getElementById("iii").value=res;
    }
    catch
    {
        document.getElementById("iii").value=0;
    }
}

function append(value)
{
   document.getElementById("iii").value+=value;
}

function clearInput() {
    document.getElementById("iii").value = '';
}




//  const display=document.querySelector(".display");
//  const buttons=document.querySelectorAll("button");
//  const specialChars=["%","*","/","-","+","="];

//  let output=""

//  const calculate=(btnValue)=>
//  {
//      if(btnValue==="=" && btnValue!==""){
//          output=eval(output,replace("%","/100"));
//      }
//      else if(btnValue==="AC"){
//          output=""
//      }
//      else if(btnValue==="DEL"){
//          output=output.toString().slice(0,-1);
//      }
//      else{
//          if(output=== "" && specialChars.includes(btnValue)) return;
//          output+=btnValue;
//      }
//      display.value=output;
//  };

//  buttons.forEach((button)=>{
//      button.addEventListener("click",(e)=>calculate(e.target.dataset.value))
//  });
