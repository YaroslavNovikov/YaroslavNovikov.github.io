let mymusicBtn,wemusicBtn,d2Btn,appsBtn,blogBtn,d3Btn,tutorialsBtn,mainBtn;
let infoDiv;


function setup(){
	blogBtn = createElement('label','Daily work blog')
	blogBtn.id('blogBtn');
	infoDiv = createDiv('');
	infoDiv.size(850,400);
	
	appsBtn = createA('apps.html','Applications','_self');
	appsBtn.position(blogBtn.position().x+appsBtn.width*0.7-random(30)+random(5),blogBtn.position().y-blogBtn.height-random(10)+random(10));

	mymusicBtn = createA('mymusic.html','My music','_self');
	mymusicBtn.position(blogBtn.position().x+mymusicBtn.width*2.3-random(20)+random(10),blogBtn.position().y-(blogBtn.height/1.1)-random(10)+random(10));

	d3Btn = createA('d3.html','3D','_self');
	d3Btn.position(blogBtn.position().x+blogBtn.width*2.4-random(20)+random(30),blogBtn.position().y-blogBtn.height/1.4-random(10)+random(30));

	d2Btn = createA('d2.html','2D','_self');
	d2Btn.position(blogBtn.position().x-blogBtn.width*0.3-random(10)+random(30),blogBtn.position().y-blogBtn.height-random(20));

	tutorialsBtn = createA('tutorials.html','Tutorials','_self');
	tutorialsBtn.position(blogBtn.position().x+tutorialsBtn.width+blogBtn.width*2+30+random(5),blogBtn.position().y-random(10)+random(30));

	mainBtn = createA('index.html','Main','_self');
	mainBtn.position(blogBtn.position().x-mainBtn.width*4.7-random(20)+random(5),blogBtn.position().y-random(10)+random(30));

	wemusicBtn = createA('wemusic.html','Music of this week','_self');
	wemusicBtn.position(blogBtn.position().x-wemusicBtn.width*1.3-random(15)+random(15),blogBtn.position().y-blogBtn.height/2-random(20));


}
function draw(){
}


