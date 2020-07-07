let mymusicBtn,wemusicBtn,d2Btn,appsBtn,blogBtn,d3Btn,tutorialsBtn,mainBtn;
let infoDiv;
let winW;

function setup(){

	d3Btn = createElement('label','3D');
	d3Btn.id('d3Btn');
	infoDiv = createDiv('Later');
	infoDiv.size(850,400);
	
	mymusicBtn = createA('mymusic.html','My music','_self');
	mymusicBtn.position(d3Btn.position().x-d3Btn.width*2.5-random(5)+random(25),d3Btn.position().y-d3Btn.height-random(20));

	wemusicBtn = createA('wemusic.html','Music of this week','_self');
	wemusicBtn.position(d3Btn.position().x+wemusicBtn.width*0.8-random(20)+random(5),d3Btn.position().y-(d3Btn.height/1.1)-random(10)+random(10));
	
	tutorialsBtn = createA('tutorials.html','Tutorials','_self');
	tutorialsBtn.position(d3Btn.position().x+tutorialsBtn.width*0.2-random(30)+random(5),d3Btn.position().y-(d3Btn.height/1.1)-random(20)+random(10));

	blogBtn = createA('blog.html','Daily work blog','_self');
	blogBtn.position(d3Btn.position().x+blogBtn.width+d3Btn.width+blogBtn.width+30+random(5)-random(10),d3Btn.position().y-random(10)+random(30));

	d2Btn = createA('d2.html','2D','_self');
	d2Btn.position(d3Btn.position().x+d3Btn.width*6-random(20)+random(30),d3Btn.position().y-d3Btn.height/2-random(10)+random(30));

	mainBtn = createA('index.html','Main','_self');
	mainBtn.position(d3Btn.position().x-mainBtn.width*4.7-random(20)+random(5),d3Btn.position().y-random(10)+random(30));

	appsBtn = createA('apps.html','Applications','_self');
	appsBtn.position(d3Btn.position().x-appsBtn.width*2-random(15)+random(15),d3Btn.position().y-d3Btn.height/2-random(20)+random(20));


}
function draw(){
}

/*
window.onresize = moveBtns;
function moveBtns(){
	mymusicBtn.position(appsBtn.position().x-5-random(5),appsBtn.position().y-appsBtn.height-random(20));
}
*/