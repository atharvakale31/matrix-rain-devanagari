var symbol;
var symbolSize =16;
var streams =[];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  var x =0;
  var y = 0;
  for(var i = 0; i <= width/symbolSize; i++){
    var stream = new Stream();
    stream.generateSymbols(x,y);
    streams.push(stream);
    x += symbolSize;
    }
  //stream = new Stream();
  //stream.generateSymbols();
  //symbol = new Symbole(
     //width/2, 0,random(5,10)
  //);
  //symbol.setToRandomSymbol() ;
  textSize(symbolSize)
  
 
}

function draw() {
  background(0);
   //stream.render();
  streams.forEach(function (stream){
    stream.render();
                  });
}

function Symbole(x,y,speed){
  this.x = x;
  this.y = y;
  //this.value = value;
  this.speed = speed;
  this.switchInterval = round( random(2,35));
  
  this.setToRandomSymbol = function ()  {
    if( frameCount % this.switchInterval ==0) {
    this.value = String.fromCharCode(0x0904 + round(random(0,50))
    );}
  }
  // this.render = function()  {
  //   fill(0,255,70);
  //   text(this.value,this.x,this.y);
  //   this.rain();
  //   this.setToRandomSymbol();
     
  // }
  
  this.rain = function(){
    if( this.y >=height){
      this.y = 0;
    }
else {this.y += this.speed}
  }
}

function Stream ()  {
  this.symbols = [];
  this.totalSymbols = round(random(5,30));
  this.speed = random(3,11);
  
  this.generateSymbols = function (x,y)  {
    //var y = 0 ;
    //var x = width /2 ;
    
    for(var i = 0 ; i <=this.totalSymbols; i++){
      symbol = new Symbole(x,y,this.speed);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y  -= symbolSize;
      
      
    }
    
  }
  
  this.render = function (){
    this.symbols.forEach(function(symbol){
    fill(0,255,70);
    text(symbol.value,symbol.x, symbol.y);
    symbol.rain() ;
    symbol.setToRandomSymbol();
    });
  }
  
  
}










