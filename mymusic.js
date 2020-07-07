let mymusicBtn,wemusicBtn,d2Btn,appsBtn,blogBtn,d3Btn,tutorialsBtn,mainBtn;
let infoDiv;let label1, vid1, image1;let images = [];let curVid = undefined;
//let winW;

function setup(){
	noCanvas();
	mymusicBtn = createElement('label','My music');
	mymusicBtn.id('mymusicBtn');
	infoDiv = createDiv('');
	infoDiv.size(850,640);
	
	d2Btn = createA('d2.html','2D','_self');
	d2Btn.position(mymusicBtn.position().x+d2Btn.width+mymusicBtn.width*3+d2Btn.width+30+random(5),mymusicBtn.position().y-random(10)+random(30));
	
	d3Btn = createA('d3.html','3D','_self');
	d3Btn.position(mymusicBtn.position().x-5-random(5)+random(25)+d2Btn.width,mymusicBtn.position().y-mymusicBtn.height-random(20));

	tutorialsBtn = createA('tutorials.html','Tutorials','_self');
	tutorialsBtn.position(mymusicBtn.position().x+mymusicBtn.width+d2Btn.width-random(30)+random(5),mymusicBtn.position().y-(mymusicBtn.height/1.1)-random(10)+random(10));

	wemusicBtn = createA('wemusic.html','Music of this week','_self');
	wemusicBtn.position(mymusicBtn.position().x+mymusicBtn.width-random(40)+random(10)+wemusicBtn.width,mymusicBtn.position().y-(mymusicBtn.height/1.5)-random(30)+random(30));

	appsBtn = createA('apps.html','Applications','_self');
	appsBtn.position(mymusicBtn.position().x-mymusicBtn.width*0.7-random(20)+random(20),mymusicBtn.position().y-mymusicBtn.height/1.3-random(10));

	blogBtn = createA('blog.html','Daily work blog','_self');
	blogBtn.position(mymusicBtn.position().x-mymusicBtn.width*2.3-random(10)+random(10),mymusicBtn.position().y-mymusicBtn.height/2-random(20));

	mainBtn = createA('index.html','Main','_self');
	mainBtn.position(mymusicBtn.position().x-mainBtn.width-random(20)-mymusicBtn.width*2.4+random(5),mymusicBtn.position().y-random(10)+random(30));

	label1 = createElement('label','Pixicolours');
	infoDiv.child(label1);
	infoDiv.child(createElement('br'));
	
	vid1 = createVideo(['pcol/vid1.mp4','pcol/vid2.mp4','pcol/vid3.mp4','pcol/vid4.mp4','pcol/vid5.mp4','pcol/vid6.mp4'],vid1Loaded);
	infoDiv.child(vid1);vid1.size(576,576);
	
	for(let i=1;i<5;i++){
		let tmpImg = createImg('mymusicImgs/pcol'+i+'.png','pcol'+i);
		tmpImg.position(vid1.position().x+((i-1)*144),vid1.position().y);
		images.push(tmpImg);tmpImg.mousePressed(pcolPlay);
		tmpImg.mouseOver(pcolHover);tmpImg.mouseOut(pcolUnhover);
		infoDiv.child(tmpImg);
	}
	for(let i=5;i<7;i++){
		let tmpImg = createImg('mymusicImgs/pcol'+i+'.png','pcol'+i);
		tmpImg.position(vid1.position().x+((i-5)*144),vid1.position().y+144);
		images.push(tmpImg);tmpImg.mousePressed(pcolPlay);
		tmpImg.mouseOver(pcolHover);tmpImg.mouseOut(pcolUnhover);
		infoDiv.child(tmpImg);
	}
	
	for(let i=0;i<images.length;i++){
		images[i].vId = (i+1);
	}
	vid1.mousePressed(pauseVid1);

}
function draw(){
}

function vid1Loaded(){
	vid1.volume(1);
}
function pcolHover(){
	if(this.elt.src != "https://yaroslavnovikov.github.io/mymusicImgs/pcol"+this.vId+"p.png"){
		this.elt.src = "https://yaroslavnovikov.github.io/mymusicImgs/pcol"+this.vId+"h.png";
	}
}
function pcolUnhover(){
	if(this.elt.src != "https://yaroslavnovikov.github.io/mymusicImgs/pcol"+this.vId+"p.png"){
		this.elt.src = "https://yaroslavnovikov.github.io/mymusicImgs/pcol"+this.vId+".png";
	}
}
function pcolPlay(){

	if(mouseButton === LEFT && curVid == (this.vId-1)){
	for(let i=0;i<images.length;i++){images[i].hide();}
	//curVid = this.vId-1;
	//vid1.src = "http://192.168.1.65:8080/p5/cite/pcol/vid"+this.vId+".mp4"
	vid1.play();
	}else if(mouseButton === LEFT && curVid != (this.vId-1)){
	for(let i=0;i<images.length;i++){images[i].hide();}
	if(curVid != undefined){
		images[curVid].elt.src = "https://yaroslavnovikov.github.io/mymusicImgs/pcol"+(curVid+1)+".png";
	}
	curVid = this.vId-1;
	vid1.src = "https://yaroslavnovikov.github.io/pcol/vid"+this.vId+".mp4"
	vid1.play();
	}
}
function pauseVid1(){
	if(mouseButton === LEFT){
	if(vid1.elt.paused == false){
		vid1.pause();
		for(let i=0;i<images.length;i++){
			images[i].show();
		}
		images[curVid].elt.src = "https://yaroslavnovikov.github.io/mymusicImgs/pcol"+(curVid+1)+"p.png";
	}else if(vid1.elt.paused == true){
		vid1.play();
	}
}
}
/*
window.onresize = moveBtns;
function moveBtns(){
	mymusicBtn.position(appsBtn.position().x-5-random(5),appsBtn.position().y-appsBtn.height-random(20));
}
*/



