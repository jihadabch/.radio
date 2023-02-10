class Player{
	constructor(){
		var heightMain=document.getElementById("player");
		heightMain.style.height=screen.height+"px";
		if(screen.width< 500){
			heightMain.style.width=screen.width+"px";
		}
		var heightdiv=document.getElementById("content");
		heightdiv.style.height=screen.height -300+"px";
	}
};
onload=new Player();
//-------------------------------------------------------------------------
class Audio_Player{
	constructor(){
		this.audio_file=document.getElementById("audiofile");
		this.title_radio=document.getElementById("titleradio");
		this.play_pause_button=document.getElementById("play_pause_button")
		
		this.isPlayed;
		
		this.play_pause_button.addEventListener("click",()=>{
			this.play_pause();
			
		});
		//this.play_pause();
	//-----------------------------------------------------------------------
		this.namesRadio=[];
			this.namesRadio[0]="Nostalgie Lebanon FM 88.1 ";
			this.namesRadio[1]="FM 87.9 أغاني أغاني";
			this.namesRadio[2]="Radio Light FM - Lebanon 90.5-90.7 MHz";
			this.namesRadio[3]="Radio Light FM - Lebanon 90.5-90.7 MHz";
			this.namesRadio[4]=" FM 103.0 MCD  ";
			this.namesRadio[5]="صوت الغد 96.7 & 97.1";
			this.namesRadio[6]=" FM 102.7 إذاعة لبنان الحر";
			this.namesRadio[7]="AL FAJER FM 104.9 ";
			this.namesRadio[8]="Mix FM 104.4 & 104.7 MHz";
			this.namesRadio[9]="صوت النجوم FM 95.9";
			
			
			
			this.sourceAudio=[];
			this.sourceAudio[0]="https://scdn.nrjaudio.fm/adwz1/lb/55175/mp3_128.mp3";
			this.sourceAudio[1]="http://185.52.127.168/lb/1/mp3_128.mp3?access_token=6074266b963c4b5eba78f6be792103d2";
			this.sourceAudio[2]="https://playerservices.streamtheworld.com/api/livestream-redirect/LIGHTFM.mp3";
			this.sourceAudio[3]="https://playerservices.streamtheworld.com/api/livestream-redirect/LIGHTFM.mp3";
			this.sourceAudio[4]="https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3";
			this.sourceAudio[5]="https://l3.itworkscdn.net/itwaudio/9030/stream";
			this.sourceAudio[6]="https://edge.mixlr.com/channel/qtqeb";
			this.sourceAudio[7]="http://vps1.osina.cloud:9306/;";
			this.sourceAudio[8]="https://playerservices.streamtheworld.com/api/livestream-redirect/MIXFM_LEBANONAAC.aac";
			this.sourceAudio[9]="http://s25.myradiostream.com:15298/listen.mp3";
			
			
			
			
			
			
this.server=0;
			this.setResource()
			document.getElementById("next").addEventListener("click",()=>{
				if(this.server<this.sourceAudio.length -1){
					++this.server;
					this.isPlayed=false;
				}else{
					this.server=0;
				}
				localStorage.setItem("saveChanel",this.server);
				this.setResource();
			});
			document.getElementById("back").addEventListener("click",()=>{
				if(this.server>0){
					--this.server;
					this.isPlayed=false;
				}else{
					this.server=this.sourceAudio.length -1;
				}
				localStorage.setItem("saveChanel",this.server);
				this.setResource();
			});	
	};
	setResource(){
		if(localStorage.getItem("saveChanel")!=null){
			this.server=localStorage.getItem("saveChanel");
		}
		this.audio_file.src=this.sourceAudio[this.server];
		this.title_radio.innerHTML=this.namesRadio[this.server];
		this.play_pause();
	};
	//----------------------------------------------------------------------------
	play_pause(){
		if(this.isPlayed == false){
			this.play_pause_button.src="pause.jpg"
			this.audio_file.play();
			this.isPlayed=true;
		}else{
			this.play_pause_button.src="play.png"
			this.audio_file.pause();
			this.isPlayed = false;
			
		}
	};
};
onload = new Audio_Player();
//---------------------------------------------------------------------------------



