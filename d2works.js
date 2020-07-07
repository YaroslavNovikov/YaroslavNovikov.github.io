let mymusicBtn,wemusicBtn,d2Btn,appsBtn,blogBtn,d3Btn,tutorialsBtn,mainBtn;
let infoDiv;
let winW;

function setup(){

	d2Btn = createElement('label','2D');
	d2Btn.id('d2Btn');
	infoDiv = createDiv('Later');
	infoDiv.size(850,400);
	
	blogBtn = createA('blog.html','Daily work blog','_self');
	blogBtn.position(d2Btn.position().x-d2Btn.width*2-random(5)+random(25),d2Btn.position().y-d2Btn.height-random(20));

	mymusicBtn = createA('mymusic.html','My music','_self');
	mymusicBtn.position(d2Btn.position().x+mymusicBtn.width*2.2-random(20)+random(5),d2Btn.position().y-(d2Btn.height/1.1)-random(10)+random(10));

	appsBtn = createA('apps.html','Applications','_self');
	appsBtn.position(d2Btn.position().x+appsBtn.width*0.8-random(30)+random(5),d2Btn.position().y-(d2Btn.height/1.1)-random(10)+random(10));

	d3Btn = createA('d3.html','3D','_self');
	d3Btn.position(d2Btn.position().x+d2Btn.width*6.5-random(20)+random(30),d2Btn.position().y-d2Btn.height-random(10)+random(30));

	tutorialsBtn = createA('tutorials.html','Tutorials','_self');
	tutorialsBtn.position(d2Btn.position().x+tutorialsBtn.width+d2Btn.width*3+tutorialsBtn.width+30+random(5),d2Btn.position().y-random(10)+random(30));

	wemusicBtn = createA('wemusic.html','Music of this week','_self');
	wemusicBtn.position(d2Btn.position().x-wemusicBtn.width*1.5-random(15)+random(15),d2Btn.position().y-d2Btn.height/2-random(20));

	mainBtn = createA('index.html','Main','_self');
	mainBtn.position(d2Btn.position().x-mainBtn.width*4.7-random(20)+random(5),d2Btn.position().y-random(10)+random(30));
	
}
function draw(){
}

/*
window.onresize = moveBtns;
function moveBtns(){
	mymusicBtn.position(appsBtn.position().x-5-random(5),appsBtn.position().y-appsBtn.height-random(20));
}
*/