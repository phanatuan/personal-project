var redGamePiece, blueGamePiece, yellowGamePiece, myGamePiece;
let myObstacle; 

function startGame() {
    myGamePiece = new component(75, 75, "red", 10, 10);
  myObstacle = new component(10, 200, 'green', 300, 120); 
      myGameArea.start();
}

let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
          myGameArea.keys = (myGameArea.keys || []);
          myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
          myGameArea.keys[e.keyCode] = false; 
        })
    
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;  
    this.speedX = 0; 
    this.speedY = 0;  
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() { 
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myObstacle.update();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0; 
  
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
  
    myGamePiece.newPos();
    myGamePiece.update();
  
  }


  function moveup() {
    myGamePiece.speedY -= 1; 
  }
  
  function movedown() {
    myGamePiece.speedY += 1; 
  }
  
  function moveleft() {
    myGamePiece.speedX -= 1;
  }
  
  function moveright() {
    myGamePiece.speedX += 1;
  }

  function stopMove() { 
      myGamePiece.speedX = 0;
      myGamePiece.speedY = 0;
  }
  

