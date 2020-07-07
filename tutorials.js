let mymusicBtn,wemusicBtn,d2Btn,appsBtn,blogBtn,d3Btn,tutorialsBtn,mainBtn;
let infoDiv;
let winW;

function setup(){

	tutorialsBtn = createElement('label','Tutorials');
	tutorialsBtn.id('tutorialsBtn');
	infoDiv = createDiv('');
	infoDiv.size(850,400);
	
	wemusicBtn = createA('wemusic.html','Music of this week','_self');
	wemusicBtn.position(tutorialsBtn.position().x-wemusicBtn.width*0.2-random(30)+random(5),tutorialsBtn.position().y-(tutorialsBtn.height/1.1)-random(20)+random(10));

	blogBtn = createA('blog.html','Daily work blog','_self');
	blogBtn.position(tutorialsBtn.position().x+tutorialsBtn.width*2-random(20)+random(30),tutorialsBtn.position().y-tutorialsBtn.height/2-random(10)+random(30));

	d2Btn = createA('d2.html','2D','_self');
	d2Btn.position(tutorialsBtn.position().x+tutorialsBtn.width*1.5-random(20)+random(5),tutorialsBtn.position().y-(tutorialsBtn.height/1.1)-random(10)+random(10));

	appsBtn = createA('apps.html','Applications','_self');
	appsBtn.position(tutorialsBtn.position().x+appsBtn.width*2+tutorialsBtn.width+30+random(5)-random(10),tutorialsBtn.position().y-random(10)+random(30));

	mainBtn = createA('index.html','Main','_self');
	mainBtn.position(tutorialsBtn.position().x-mainBtn.width*4.8-random(20)+random(5),tutorialsBtn.position().y-random(10)+random(30));
	
	d3Btn = createA('d3.html','3D','_self');
	d3Btn.position(tutorialsBtn.position().x-d3Btn.width*2.5-random(5)+random(25),tutorialsBtn.position().y-tutorialsBtn.height-random(20));
	
	mymusicBtn = createA('mymusic.html','My music','_self');
	mymusicBtn.position(tutorialsBtn.position().x-mymusicBtn.width*2.5-random(15)+random(15),tutorialsBtn.position().y-tutorialsBtn.height/2-random(20)+random(20));
}
function draw(){
}

/*
window.onresize = moveBtns;
function moveBtns(){
	mymusicBtn.position(appsBtn.position().x-5-random(5),appsBtn.position().y-appsBtn.height-random(20));
}
*/