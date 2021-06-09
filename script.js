var input=document.getElementById("inp");
var button=document.querySelector("button");
var ul=document.querySelector("ul");
console.log(input.value);

function add(){
if(input.value!="")
{
creatLi();
}
}

function adder(event){
if(event.which===13&&input.value!="")
{
console.log(event.which);
creatLi();
}
}

function creatLi()
{
	var s=input.value;
input.value="";
var z=document.createElement("li");
var sp=document.createElement("span");
var ad=document.createTextNode(s+"	");
ul.appendChild(z);

// checkbox
var cb=document.createElement("input");
cb.setAttribute("type","checkbox");
cb.setAttribute("onclick","lineth(this)");
z.appendChild(cb);
z.appendChild(sp);
sp.appendChild(ad);

var zz=document.createElement("button");
zz.setAttribute("onclick","del(this)");
z.appendChild(zz);
// zz.appendChild(document.createTextNode("Delete"));
}

function del(event)
{
	var par=event.parentNode;
	console.log(par.parentNode.removeChild(par));
}

function lineth(event)
{
	var par=event.parentNode;
	var st=par.querySelector("span").style.textDecoration;
	if(st==="") 
	{
		
		par.querySelector("span").style.textDecoration="line-through";
		par.style.backgroundColor="black";

	}
	else 
	{
		par.querySelector("span").style.textDecoration="";
		par.style.backgroundColor="rgba(128, 128, 128, 0.644)";

	}
	console.log("somethinng happening in lineth",st);
}



button.addEventListener("click",add);
input.addEventListener("keypress",adder);

       