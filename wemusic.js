let mymusicBtn,wemusicBtn,d2Btn,appsBtn,blogBtn,d3Btn,tutorialsBtn,mainBtn;
let infoDiv,iframes = [];let iframe1;


function setup(){
	wemusicBtn = createElement('label','Music of this week')
	wemusicBtn.id('wemusicBtn');
	infoDiv = createDiv('');
	infoDiv.size(850,400);

	mymusicBtn = createA('mymusic.html','My music','_self');
	mymusicBtn.position(wemusicBtn.position().x+wemusicBtn.width*1.7-random(20)+random(30),wemusicBtn.position().y-wemusicBtn.height-random(10)+random(30));

	d2Btn = createA('d2.html','2D','_self');
	d2Btn.position(wemusicBtn.position().x-wemusicBtn.width*0.7-random(10)+random(30),wemusicBtn.position().y-wemusicBtn.height-random(20));

	appsBtn = createA('apps.html','Applications','_self');
	appsBtn.position(wemusicBtn.position().x+appsBtn.width*1.2-random(20)+random(5),wemusicBtn.position().y-(wemusicBtn.height/1.1)-random(10)+random(10));

	blogBtn = createA('blog.html','Daily work blog','_self');
	blogBtn.position(wemusicBtn.position().x-blogBtn.width*0.2-random(30)+random(5),wemusicBtn.position().y-wemusicBtn.height-random(10)+random(10));

	d3Btn = createA('d3.html','3D','_self');
	d3Btn.position(wemusicBtn.position().x+d3Btn.width*1.5+wemusicBtn.width*2+30+random(5),wemusicBtn.position().y-random(10)+random(30));

	mainBtn = createA('index.html','Main','_self');
	mainBtn.position(wemusicBtn.position().x-mainBtn.width*4.7-random(20)+random(5),wemusicBtn.position().y-random(10)+random(30));

	tutorialsBtn = createA('tutorials.html','Tutorials','_self');
	tutorialsBtn.position(wemusicBtn.position().x-tutorialsBtn.width*2.5-random(15)+random(15),wemusicBtn.position().y-wemusicBtn.height/2-random(20));
/*
	iframe1 = createElement('iframe','');
	infoDiv.child(iframe1);
	iframe1.position(10,10);
	iframe1.attribute('width','50%');//iframe1.attribute('height','166px');
	iframe1.elt.src = 'https://drooble.com/embed/59490';//'https://www.youtube.com/embed/y-sUb3fQOp8';
	//'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/667184045&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"';
*/
}
function draw(){
}