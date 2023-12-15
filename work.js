const funAdd1=()=>{
 let newTextA=document.createElement("textarea");
 newTextA.rows=3;
 newTextA.placeholder="Enter Educational Detail";
 let divo=document.createElement("divpro");

 newTextA.classList.add("form-control");
 newTextA.classList.add("my-2");
 newTextA.classList.add("edu");

 let divObject=document.getElementById("add1");

 let objectiveObject=document.getElementById("forobjective");
divpro.insertBefore(newTextA,divObject);
};


const funAdd2=()=>{
 let newTextA=document.createElement("textarea");
 newTextA.rows=3;
 newTextA.placeholder="Enter WorkEperience ";
 let divo=document.createElement("divpro");

 newTextA.classList.add("form-control");
 newTextA.classList.add("my-2");
 newTextA.classList.add("we");


 let divObject=document.getElementById("add2");

 let objectiveObject=document.getElementById("forobjective");
divpro.insertBefore(newTextA,divObject);
};

let formdiv=document.getElementById("templatediv");
formdiv.style.display="none";





// to generate form




const generate=()=>{

    let n=document.getElementById("forname");
    document.getElementById("name").innerHTML=`Name: ${n.value}`;


    
    let p=document.getElementById("forphone");
    document.getElementById("phone").innerHTML=`Contact: ${p.value}`;


    
    let a=document.getElementById("foraddress");
    document.getElementById("address").innerHTML=`Name: ${a.value}`;


    
    let o=document.getElementById("forobjective");
    document.getElementById("objective").innerHTML=`${o.value}`;

    
    let e=document.getElementsByClassName("edu");
    let s=``;
    for(let a of e)s=s+`<li>${a.value}</li>`
    document.getElementById("education").innerHTML=`${s}`;




    let w=document.getElementsByClassName("we");
    let s1=``;
    for(let a of w)s1=s1+`<li>${a.value}</li>`
    document.getElementById("workexperience").innerHTML=`${s1}`;



    // for image
    let pic=document.getElementById("forpic").files[0];
    
    let reader=new FileReader();
    reader.readAsDataURL(pic);
    reader.onloadend=function(){
        document.getElementById("pic").src=reader.result;

    };

    document.getElementById("templatediv").style.display="block";
    
    document.getElementById("formdiv").style.display="none";

}


const cancel=()=>{
    document.getElementById("formdiv").style.display="block";
    document.getElementById("templatediv").style.display="none";
}