function volume_sphere(event) {
    //Write your code here
	event.preventDefault()
	let radius=document.getElementById("radius").value;
	if(radius===""){
		return;
	}
	if(!radius.length || Number.isNaN(radius) || Number(radius)<0){
		document.getElementById("volume").value=NaN
	}else{
		let r = parseFloat(radius);
		document.getElementById("volume").value=((4/3)*(Math.PI)*Math.pow(r,3)).toFixed(4);
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
