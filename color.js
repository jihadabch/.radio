class Color{
	constructor(){
		
		if(localStorage.getItem("colors")==null){
			document.body.style.background="linear-gradient(to right, rgb(20, 73, 245), rgb(218, 82, 82))";
		}
		this.select_color(localStorage.getItem("colors"))
		
		
		this.colorFile1=document.getElementById("color1");
		this.colorFile1.addEventListener("click",()=>{
			this.select_color("color1");
		})
		
		
		
		this.colorFile2=document.getElementById("color2");
		this.colorFile2.addEventListener("click",()=>{
			this.select_color("color2");
		})
		
		
		this.colorFile3=document.getElementById("color3");
		this.colorFile3.addEventListener("click",()=>{
			this.select_color("color3");
		})
		
		
		this.colorFile4=document.getElementById("color4");
		this.colorFile4.addEventListener("click",()=>{
			this.select_color("color4");
		})
	}
	
	select_color(color){
	if(color =="color1"){
		document.body.style.background="linear-gradient(to right, rgb(245, 166, 20), rgb(24, 23, 23))";
	}
	else if(color =="color2"){
		document.body.style.background="linear-gradient(to right, rgb(20, 73, 245), rgb(218, 82, 82))";
	}
	 else if(color =="color3"){
		document.body.style.background="linear-gradient(to right, rgb(206, 240, 58), rgb(74, 221, 118))";
	}
	else if(color =="color4"){
		document.body.style.background="linear-gradient(to right, rgb(8, 250, 0), rgb(8, 8, 8))";
	}
	
	localStorage.setItem("colors",color);
	
};
}
onload= new Color();