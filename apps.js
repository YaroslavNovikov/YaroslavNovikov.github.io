let mymusicBtn,wemusicBtn,d2Btn,appsBtn,blogBtn,d3Btn,tutorialsBtn,mainBtn;
let infoDiv;
let p5seHead;let p5seLinks = [];let p5seText = [];let tmpText = undefined;let tmpImg;
//let winW;

function setup(){
	//winW = window
	noCanvas();
	appsBtn = createElement('label','Applications');
	appsBtn.id('appsBtn');
	infoDiv = createDiv('Main goal of this app - fast color choose/correction in sprites and tiles.');
	infoDiv.size(850,480);
	
	mymusicBtn = createA('mymusic.html','My music','_self');
	mymusicBtn.position(appsBtn.position().x-5-random(5),appsBtn.position().y-appsBtn.height-random(20));
	
	wemusicBtn = createA('wemusic.html','Music of this week','_self');
	wemusicBtn.position(appsBtn.position().x+wemusicBtn.width+appsBtn.width+30+random(5),appsBtn.position().y-random(10)+random(30));

	d2Btn = createA('d2.html','2D','_self');
	d2Btn.position(appsBtn.position().x-appsBtn.width*2-random(10)+random(10),appsBtn.position().y-appsBtn.height/2-random(20));
	
	mainBtn = createA('index.html','Main','_self');
	mainBtn.position(appsBtn.position().x-mainBtn.width-random(20)-appsBtn.width*2+random(5),appsBtn.position().y-random(10)+random(30));

	blogBtn = createA('blog.html','Daily work blog','_self');
	blogBtn.position(appsBtn.position().x-appsBtn.width-random(30)-blogBtn.width/4,appsBtn.position().y-appsBtn.height/1.3-random(10));

	d3Btn = createA('d3.html','3D','_self');
	d3Btn.position(appsBtn.position().x+appsBtn.width-random(30)+random(20)+d3Btn.width/4,appsBtn.position().y-(appsBtn.height/1.1)-random(10)+random(10));

	tutorialsBtn = createA('tutorials.html','Tutorials','_self');
	tutorialsBtn.position(appsBtn.position().x+appsBtn.width-random(40)+random(30)+tutorialsBtn.width,appsBtn.position().y-(appsBtn.height/1.5)-random(30)+random(30));


	p5seHead = createElement('label','p5js sprite editor');
	p5seHead.id('p5seHead');
	infoDiv.child(p5seHead);

	
	for(let i = 0;i<4;i++){
		p5seLinks.push(createA('0.0'+(i+1)+'.zip','[<<]'));
		p5seLinks[i].id('p5seLinks');
		p5seLinks[i].position(p5seLinks[0].position().x,p5seLinks[0].position().y+i*p5seLinks[0].height);
		infoDiv.child(p5seLinks[i]);
	}
	for(let i = 0;i<4;i++){
		p5seText.push(createElement('label','0.0'+(i+1)));
		p5seText[i].id('p5seText');
		p5seText[i].position(p5seLinks[0].position().x+p5seLinks[0].size().width-1,p5seLinks[0].position().y+i*p5seLinks[0].height);
		p5seText[i].mouseOut(descriptionHide);p5seText[i].mouseOver(descriptionHide);
		p5seText[i].mouseClicked(descriptionShow);
		infoDiv.child(p5seText[i]);
	}
	tmpImg = createImg('','infoImg');tmpImg.size(700,440);
	tmpImg.position(p5seText[0].position().x+p5seText[0].size().width,p5seText[0].position().y);
	infoDiv.child(tmpImg);tmpImg.hide();
	p5seInfo = createDiv('');p5seInfo.id('seInfo');p5seInfo.size(360);p5seInfo.elt.hidden = true;
	infoDiv.child(p5seInfo);

}
function draw(){
}

function descriptionShow(){
if(p5seInfo.elt.hidden == true || tmpText != this.html()){
	p5seInfo.elt.hidden = false;
	p5seInfo.position(this.position().x+this.size().width+5,this.position().y);
	if(this === p5seText[0]){
		tmpText = this.html();
		p5seInfo.html('"simplestPen" - \
			First version. Has just simple pen for drawing. Save can be done in context menu.');
		tmpImg.elt.src = "appsImgs/p5se/01.png";
		tmpImg.show();
	}else if(this === p5seText[1]){
		tmpText = this.html();
		p5seInfo.html('"canvasgrid" - \
			Second version. Were added grid, and some settings for pen.');
		tmpImg.elt.src = "appsImgs/p5se/02.png";
		tmpImg.show();
	}else if(this === p5seText[2]){
		tmpText = this.html();
		p5seInfo.html('"fillit" - \
			Were added first version of replacer, some options, basic fill and eraser, settings for pen were fixed.');
		tmpImg.elt.src = "appsImgs/p5se/03.png";
		tmpImg.show();
	}else if(this === p5seText[3]){
		tmpText = this.html();
		p5seInfo.html('"layers:begin" - \
			Added layers. You can add, remove, hide and rename layers, change their opacity and move up and down(but now they move only in tab). \
			Canvas now is not a layer. Images download on current layer and current layer saving on save button');
		tmpImg.elt.src = "appsImgs/p5se/04.png";
		tmpImg.show();
	}

}else if(this.html() == tmpText){
	p5seInfo.elt.hidden = true;tmpText = undefined;
	tmpImg.elt.src = "";tmpImg.hide();
}
}
function descriptionHide(){
	if(p5seInfo.elt.hidden == false && this.html() == tmpText){
		p5seInfo.elt.hidden = true;
	}else if(p5seInfo.elt.hidden == true && this.html() == tmpText){
		p5seInfo.elt.hidden = false;
	}
}
/*
window.onresize = moveBtns;
function moveBtns(){
	mymusicBtn.position(appsBtn.position().x-5-random(5),appsBtn.position().y-appsBtn.height-random(20));
}
*/



