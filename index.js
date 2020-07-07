let mymusicBtn,wemusicBtn,d2Btn,appsBtn,blogBtn,d3Btn,tutorialsBtn;
let infoDiv;


function setup(){
	mymusicBtn = createA('mymusic.html','My music','_self');
	mymusicBtn.id('mymusicBtn');mymusicBtn.mouseOver(aboutSections);
	mymusicBtn.mouseOut(clearInfoDiv);
	
	wemusicBtn = createA('wemusic.html','Music of this week','_self');
	wemusicBtn.id('wemusicBtn');wemusicBtn.mouseOver(aboutSections);
	wemusicBtn.mouseOut(clearInfoDiv);
	
	d2Btn = createA('d2.html','2D','_self');
	d2Btn.id('d2Btn');d2Btn.mouseOver(aboutSections);
	d2Btn.mouseOut(clearInfoDiv);
	
	appsBtn = createA('apps.html','Applications','_self');
	appsBtn.id('appsBtn');appsBtn.mouseOver(aboutSections);
	appsBtn.mouseOut(clearInfoDiv);

	blogBtn = createA('blog.html','Daily work blog','_self');
	blogBtn.id('blogBtn');blogBtn.mouseOver(aboutSections);
	blogBtn.mouseOut(clearInfoDiv);
	
	d3Btn = createA('d3.html','3D','_self');
	d3Btn.id('d3Btn');d3Btn.mouseOver(aboutSections);
	d3Btn.mouseOut(clearInfoDiv);
	
	tutorialsBtn = createA('tutorials.html','Tutorials','_self');
	tutorialsBtn.id('tutorialsBtn');tutorialsBtn.mouseOver(aboutSections);
	tutorialsBtn.mouseOut(clearInfoDiv);
	
	infoDiv = createDiv('');
	infoDiv.size(400,50);
}
function draw(){
}

function aboutSections(){
	if(this === wemusicBtn){
		infoDiv.html(' In this section I share some music, that I liked on this week and which I listen in work time.');
	}else if(this === mymusicBtn){
		infoDiv.html('In this section I put my own music.');
	}else if(this === appsBtn){
		infoDiv.html('Here would be applications, that I writing.')
	}else if(this === d2Btn){
		infoDiv.html("Here I'll post my 2d works.");
	}else if(this === d3Btn){
		infoDiv.html('Here would be some 3d models.');
	}else if(this === tutorialsBtn){
		infoDiv.html('Here I post video tutorials.');
	}else if(this === blogBtn){
		infoDiv.html('Here I post everyday work news.');
	}
}
function clearInfoDiv(){
	infoDiv.html('');
}