//your JS code here. If required.
let currElement=[];
function handleOnClick(){

	let elements=document.getElementById("colorSelect");

	if(elements.length<=0)return;
	elements.remove(0);
	currElement=elements;
	
	document.getElementById("colorSelect")=currElement;

}