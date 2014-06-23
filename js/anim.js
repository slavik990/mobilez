$(document).ready(function(){
    var current=0;
    function my(){
        current+=1;
        if (current>8){
            clearInterval(inter);
            return;
        }
//        $(".gear-animation .lamp").css({"background-image":"url(/i/desktop/superAnimate/lamp"+current+".png)"});
        $(".gear-animation .lamp").css({"background-positionY":"-"+(current*68)+"px"});
    }



    function my2(){
        current+=1;
//        var can = document.getElementById('canvas1');
//        var ctx = can.getContext('2d');

        var canvas = document.getElementById('canvas1');
        canvas.width = canvas.width;

        var context = canvas.getContext('2d');
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var radius = 105;
        var startAngle = (1.1+1/100*current) * Math.PI;
        var endAngle = (1.9+1/100*current) * Math.PI;
        var counterClockwise = false;

        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        context.lineWidth = 40;

        // line color
        context.strokeStyle = '#067da1';
        context.stroke();
       // ctx.translate(50,50); // just to get it away from the edge


       /* var greenPart = ctx.createLinearGradient(0,0,0,100);
        greenPart.addColorStop(0, 'palegreen');
        greenPart.addColorStop(1, 'lightgray');

        var whitePart = ctx.createLinearGradient(0,0,0,100);
        whitePart.addColorStop(0, 'white');
        whitePart.addColorStop(1, 'lightgray');


        var width = 20;
        ctx.lineWidth = width;

        // First we make a clipping region for the left half
        ctx.save();
        ctx.beginPath();
        ctx.rect(-width, -width, 50+width, 100 + width*2);
        ctx.clip();

        // Then we draw the left half
        ctx.strokeStyle = greenPart;
        ctx.beginPath();
        ctx.arc(50,50,50,Math.PI*current/100,Math.PI*2*current/100, false);
        ctx.stroke();

        ctx.restore(); */// restore clipping region to default

        // Then we make a clipping region for the right half
      /*  ctx.save();
        ctx.beginPath();
        ctx.rect(50, -width, 50+width, 100 + width*2);
        ctx.clip();

        // Then we draw the right half
        ctx.strokeStyle = whitePart;
        ctx.beginPath();
        ctx.arc(50,50,50,0,Math.PI*2, false);
        ctx.stroke();

        ctx.restore();*/ // restore clipping region to default
    }
    var inter=setInterval(my2,30);

 
});
