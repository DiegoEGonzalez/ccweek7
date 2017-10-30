
var raindropsx = [];
var raindropsy = [];
var raindrops = [];

function setup() {
    createCanvas(1280, 800);
    
    for(x=0;x<500;x++){
        raindrops.push(new rain());
        
        raindropsx.push(Math.random(1000)*1000);
        raindropsy.push(Math.random(1500)*1500-1500);
    }
}

function draw() {
    background(255,255,255);

    fill(color(125,150,255));
   
    for( x=0;x<500;x++){
        ellipse(raindrops[x].x,raindrops[x].y,5,5);
        raindrops[x].update();
    }

}

function rain(x,y,r,opacity){
    this.x = Math.random(1000)*1000;
    this.y = Math.random(5000)*5000-2500;
    this.vy = 0;
    this.ay = 0.098;
    this.radius = 5;
    this.opacity = 100;
    
    this.update = function (){
        this.y += this.vy;
        this.vy += this.ay;
        
        
        if( this.y > 1000){
            this.y = Math.random(1500)*1500-1500;
            this.vy = 0;
        }
    };
    
}

