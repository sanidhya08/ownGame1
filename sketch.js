var jerry
var cheese,cheeseGroup;
var tom1,tom2,tom3,dog1,dog2,dog3,dog4;
var maze;

function preload(){}
  
function setup() {
  createCanvas(1098,400);

  cheeseGroup = createGroup();
  

  maze=createGroup();
  maze.add(createSprite(20,80,10,120));
  maze.add(createSprite(1078,80,10,120));
  maze.add(createSprite(20,320,10,120));
  maze.add(createSprite(1078,320,10,120));
  maze.add(createSprite(549,20,1068,10));
  maze.add(createSprite(549,380,1068,10));
  maze.add(createSprite(65,135,80,10));
  maze.add(createSprite(60,165,90,10));
  maze.add(createSprite(65,265,80,10));
  maze.add(createSprite(60,235,90,10));
  maze.add(createSprite(100,147,10,30));
  maze.add(createSprite(100,250,10,30));
  maze.add(createSprite(1035,135,80,10));
  maze.add(createSprite(1040,165,90,10));
  maze.add(createSprite(1035,265,80,10));
  maze.add(createSprite(1040,235,90,10));
  maze.add(createSprite(1000,147,10,30));
  maze.add(createSprite(1000,250,10,30));
  maze.add(createSprite(380,350,15,60));
  maze.add(createSprite(615,355,15,40));
  maze.add(createSprite(750,355,15,40));
  maze.add(createSprite(678,290,15,40));
  maze.add(createSprite(678,270,130,15));
  maze.add(createSprite(80,60,40,15));
  maze.add(createSprite(410,60,300,15));
  maze.add(createSprite(680,60,140,15));
  maze.add(createSprite(910,60,60,15));
  maze.add(createSprite(1010,60,60,15));
  maze.add(createSprite(80,320,50,15));
  maze.add(createSprite(225,320,140,15));
  maze.add(createSprite(500,320,140,15));
  maze.add(createSprite(870,320,140,15));
  maze.add(createSprite(1010,320,70,15));
  maze.add(createSprite(830,160,30,220));
  maze.add(createSprite(920,215,90,110));
  maze.add(createSprite(920,115,90,30));
  maze.add(createSprite(220,120,140,20));
  maze.add(createSprite(220,190,20,150));
  maze.add(createSprite(550,190,20,150));
  maze.add(createSprite(500,255,100,20));
  maze.add(createSprite(460,220,20,50));
  
  
  

  jerry = createSprite(678,345,20,20);
  
  
  tom1 = createSprite(678,170,20,20);
 
  tom2 = createSprite(630,170,20,20);
  
  tom3 = createSprite(720,170,20,20);
  
  dog1 = createSprite(40,40,20,20);
  
  dog2 = createSprite(40,360,20,20);
  
  dog3 = createSprite(1055,40,20,20);
  
  dog4 = createSprite(1055,360,20,20);
  
}

function draw() {
  background("black");  
  //text(mouseX+" "+ mouseY,100,100);
  
  cheeseCollection()

  for(var i=40 ; i<1500 ; i=i+45 ){
      for(var j=40 ; j<380 ; j=j+30){
        cheese = createSprite(i,j,10,10);
        if(cheese.overlap(maze) || cheese.overlap(jerry) 
       ||cheese.overlap(dog1) || cheese.overlap(dog2) ||  
        cheese.overlap(dog3) ||cheese.overlap(dog4) ||  
        cheese.overlap(tom1) || cheese.overlap(tom2) || cheese.overlap(tom3)  ){

         cheese.visible = false
}
  else{
       cheeseGroup.add(cheese);
  }

      }
  }
  drawSprites();
 
  
}

function cheeseCollection()
{
  for(var c=0;c<cheeseGroup.length;c++)
  {
    if(jerry.isTouching(cheeseGroup.get(c)))
    {
      cheeseGroup.get(c).destroy();
     // score++;
    }
  }
  
}