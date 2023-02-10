class Volume{
	constructor(){
		this.audioFile=document.getElementById("audiofile");
		this.audioFile.volume=50/100;
		
		this.volumeRange=document.getElementById("volume");
		this.volumeRange.addEventListener("change",()=>{
			this.audioFile.volume=this.volumeRange.value/100;
		})
		this.volumeSpeed=document.getElementById("speed");
		this.volumeSpeed.playbackRate=1;
		this.volumeSpeed.addEventListener("change",()=>{
			this.audioFile.playbackRate =this.volumeSpeed.value/100;
		})
		
	}
};
onload= new Volume();