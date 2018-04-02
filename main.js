

$(document).ready(function() {
    var imageLoader = document.getElementById('filePhoto');
        imageLoader.addEventListener('change', handleImage, false);
    
    function handleImage(e) {
        var reader = new FileReader();
    
      //FOR artstyle 2
      $("#btnSubmit2").click(function(){
             
                
        var image=document.getElementById('myImage');
        image.crossOrigin = 'anonymous';
        GetBinary2(image, "#550000");
    
        })
       
                //FOR artstyle 4
            $("#btnSubmit4").click(function(){
             
                
                var image=document.getElementById('myImage');
                image.crossOrigin = 'anonymous';
                GetBinary4(image, "#550000");
            
                })
                
        reader.onload = function (event) {
            $('#uploader img').attr('src',event.target.result);
            
        }
    
        reader.readAsDataURL(e.target.files[0]);
     
    
    }
    
    var dropbox;
    dropbox = document.getElementById("uploader");
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);
    
    function dragenter(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    function dragover(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    function drop(e) {
      e.stopPropagation();
      e.preventDefault();
      //you can check e's properties
      //console.log(e);
      var dt = e.dataTransfer;
      var files = dt.files;
      
      //this code line fires your 'handleImage' function (imageLoader change event)
      imageLoader.files = files;
    }
    });
   
    
 //    FOR ARTSTYLE NUMBER 4
        
    //take value a and b onchange function
//      function GetBinary4(imgElement,tintColor) {
    
//         var canvas = document.createElement("canvas");
//         canvas.width = imgElement.offsetWidth;
//         canvas.height = imgElement.offsetHeight;
//         var ctx = canvas.getContext("2d");
//         ctx.translate(0.5, 0.5);
//         ctx.drawImage(imgElement,0,0);
//         var imgPixels = ctx.getImageData(0,0,canvas.width,canvas.height)
//         var pixels = imgPixels.data;
//         var w = canvas.width;
//         var h = canvas.height;
      
//       createSVG4(w,h);

//         var centerx = canvas.width / 2;
//         var centery = canvas.height / 2;
//         var l = w * h;
//         // ctx.moveTo(0,0)
//         // ctx.clearRect(0, 0, canvas.width, canvas.height);
//         for (var i = 0; i < l; i++) {
//             // get color of pixel
//             var r =  imgPixels.data[i*4]; // Red
//             var g =  imgPixels.data[i*4+1]; // Green
//             var b =  imgPixels.data[i*4+2]; // Blue
//             var a =  imgPixels.data[i*4+3]; // Alpha
//             var avg = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);//grayScale
    
//              let y = parseInt(i / w, 10);
//             let x = i - y * w;
//     // arr[x]=arr[x]||[]
//     // arr[x][y]=avg;
//             if(x%10==0&&y%8==0) //need to use variable from user for density of the pixels
//             Draw(x,y,avg,ctx)

//             // if(x%4==0&&y%5==0) //need to use variable from user for density of the pixels
//             // Draw2(x,y,avg,ctx)
//         }
// //    canvas.parentNode.removeChild(canvas);
  
// getSVG4(w,h);


//     function Draw(x,y,a,ctx)
//     {
        
    
//         ctx.beginPath();
      
//         var t=((a/255)*10);
    
//         var arc_s=.5*Math.PI;
//         var arc_end = .75*Math.PI;
//         var circle_start= 0;
//         var circle_end= 2*Math.PI;
    
    
//        var start =circle_start;
//         var end =circle_end;
//     if(a/255<.5) 
//     // || ((a/255)==.1))
//    { 
// // right slash direction section
// {
//     if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
//     {
//     //     ctx.strokeStyle='black'
//     // ctx.lineWidth= .5;
    
//     var svgNS = "http://www.w3.org/2000/svg";  

//       //**** <FOR THE vertical line ARTSTYLE> ******
//     var recta = document.createElementNS(svgNS, 'line');
//     recta.setAttributeNS(null, 'x1', x+5);
//     recta.setAttributeNS(null, 'y1',  y+30);
//     recta.setAttributeNS(null, 'x2',  x+20);
//     recta.setAttributeNS(null, 'y2',  y+20);
//     recta.setAttributeNS(null,'id','gg');
//     recta.setAttributeNS(null,'stroke','black');
//     recta.setAttributeNS(null,'fill','none');
//     recta.setAttributeNS(null,'stroke-width','.5');

//     document.getElementById("mySVG4").appendChild(recta);
// //  console.log("x=",x);
// //  console.log("y=",y);
// //  console.log("a=",a);

// }
// }

// // Left slash direction section
// {
//     if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
//     {
//     //     ctx.strokeStyle='black'
//     // ctx.lineWidth= .5;
    
//     var svgNS = "http://www.w3.org/2000/svg";  

//       //**** <FOR THE vertical line ARTSTYLE> ******
//     var recta = document.createElementNS(svgNS, 'line');
//     recta.setAttributeNS(null, 'x1', x+5);
//     recta.setAttributeNS(null, 'y1',  y+10);
//     recta.setAttributeNS(null, 'x2',  x+20);
//     recta.setAttributeNS(null, 'y2',  y+30);
//     // recta.setAttributeNS(null, 'x3',  5+Math.random()*5);
//     // recta.setAttributeNS(null, 'y3',  5+Math.random()*5);
//     // recta.setAttributeNS(null, 'x4',  10+Math.random()*10);
//     // recta.setAttributeNS(null, 'y4',  10+Math.random()*10);
//         // recta.setAttributeNS(null, 'width', '10');

//     // recta.setAttributeNS(null, 'x+4', x2+10);
//     // recta.setAttributeNS(null, 'y+5', y2+10);
//     // recta.setAttributeNS(null, 'height', '18');
//     // recta.setAttributeNS(null, 'width', '18');
//     recta.setAttributeNS(null,'id','gg');
//     recta.setAttributeNS(null,'stroke','black');
//     recta.setAttributeNS(null,'fill','none');
//     recta.setAttributeNS(null,'stroke-width','.5');

//     document.getElementById("mySVG4").appendChild(recta);
// //  console.log("x=",x);
// //  console.log("y=",y);
// //  console.log("a=",a);

// }
// }

//    }


//          ctx.stroke();
//         }
       

//        document.getElementById('gcodeButton4').disabled = false;
//            }

             
 //    FOR ARTSTYLE NUMBER 2
        
    //take value a and b onchange function
     function GetBinary2(imgElement,tintColor) {
    
        var canvas = document.createElement("canvas");
        canvas.width = imgElement.offsetWidth;
        canvas.height = imgElement.offsetHeight;
        var ctx = canvas.getContext("2d");
        ctx.translate(0.5, 0.5);
        ctx.drawImage(imgElement,0,0);
        var imgPixels = ctx.getImageData(0,0,canvas.width,canvas.height)
        var pixels = imgPixels.data;
        var w = canvas.width;
        var h = canvas.height;
      
      createSVG2(w,h);

        var centerx = canvas.width / 2;
        var centery = canvas.height / 2;
        var l = w * h;
        // ctx.moveTo(0,0)
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < l; i++) {
            // get color of pixel
            var r =  imgPixels.data[i*4]; // Red
            var g =  imgPixels.data[i*4+1]; // Green
            var b =  imgPixels.data[i*4+2]; // Blue
            var a =  imgPixels.data[i*4+3]; // Alpha
            var avg = Math.round(r * 0.2126 + g * 0.7152 + b * 0.0722);//grayScale
    
             let y = parseInt(i / w, 10);
            let x = i - y * w;
    // arr[x]=arr[x]||[]
    // arr[x][y]=avg;
            if(x%10==0&&y%8==0) //need to use variable from user for density of the pixels
            Draw(x,y,avg,ctx)

            // if(x%4==0&&y%5==0) //need to use variable from user for density of the pixels
            // Draw2(x,y,avg,ctx)
        }
//    canvas.parentNode.removeChild(canvas);
  
getSVG2(w,h);


    function Draw(x,y,a,ctx)
    {
        
    
        ctx.beginPath();
      
        var t=((a/255)*10);
    
        var arc_s=.5*Math.PI;
        var arc_end = .75*Math.PI;
        var circle_start= 0;
        var circle_end= 2*Math.PI;
    
    
       var start =circle_start;
        var end =circle_end;
    if(a/255<.5) 
    // || ((a/255)==.1))
   { 
// right slash direction section
{
    if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
    {
    //     ctx.strokeStyle='black'
    // ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

      //**** <FOR THE circles> ******
      var recta = document.createElementNS(svgNS, 'circle');
      recta.setAttributeNS(null, 'cx', x+1);
      recta.setAttributeNS(null, 'cy', y+1);
      recta.setAttributeNS(null, 'r',  5+Math.random()*10);
      recta.setAttributeNS(null,'id','gg');
      recta.setAttributeNS(null,'stroke','black');
      recta.setAttributeNS(null,'fill','none');
      recta.setAttributeNS(null,'stroke-width','.3');
   
      document.getElementById("mySVG2").appendChild(recta);
//  console.log("x=",x);
//  console.log("y=",y);
//  console.log("a=",a);

}
}


   }
   else
  
    // || ((a/255)==.1))
   { 
// right slash direction section
{
    if(x<(w) && y<(h)) //  a near to 255 = white, a near to 0 = black. 
      
    {
    //     ctx.strokeStyle='black'
    // ctx.lineWidth= .5;
    
    var svgNS = "http://www.w3.org/2000/svg";  

      //**** <FOR THE vertical line ARTSTYLE> ******
      var recta = document.createElementNS(svgNS, 'line');
      recta.setAttributeNS(null, 'x1', x+Math.random()*10);
      recta.setAttributeNS(null, 'y1',  y+Math.random()*10);
      recta.setAttributeNS(null, 'x2',  x+Math.random()*20);
      recta.setAttributeNS(null, 'y2',  y+Math.random()*20);
      recta.setAttributeNS(null,'id','gg');
      recta.setAttributeNS(null,'stroke','black');
      recta.setAttributeNS(null,'fill','none');
      recta.setAttributeNS(null,'stroke-width','.3');
  
     

    document.getElementById("mySVG2").appendChild(recta);
//  console.log("x=",x);
//  console.log("y=",y);
//  console.log("a=",a);

}
}


   }


         ctx.stroke();
        }
       

       document.getElementById('gcodeButton2').disabled = false;
           }



    //FOR Cross hatch 4
//     function createSVG4(width,height)
//     {
//        var svgNS = "http://www.w3.org/2000/svg";
//        var check=document.getElementById("mySVG4");
//        if(check!=null){
//            var svg=  document.getElementById("mySVG4")
//       svg.parentNode.removeChild(svg);
//        }
//        var svg = document.createElementNS(svgNS, "svg");
//        svg.setAttributeNS(null,'width',width);
//       svg.setAttributeNS(
//            'http://www.w3.org/2000/xmlns/',
//            'xmlns:xlink',
//            'http://www.w3.org/1999/xlink'
//        );
//        svg.setAttributeNS(null,'height',height);
//        svg.setAttributeNS(null,'id','mySVG4');
//        document.getElementById("container").appendChild(svg)
//        var g=document.createElementNS(svgNS,'g');
//        // g.setAttributeNS(null,'id','gg');
//        // g.setAttributeNS(null,'stroke','black');
//        // g.setAttributeNS(null,'fill','none');
//        // g.setAttributeNS(null,'stroke-width','.2');
   
//        document.getElementById("mySVG4").appendChild(g);   
//     }
   
   
//     function getSVG4( w, h)
//     {
   
//     var svgc =document.getElementById('mySVG4').innerHTML;
//     var text = '<svg xmlns="http://www.w3.org/2000/svg" width= "' + w +'" height="'+h+ '" viewBox="0 0 ' + w + ' ' +h + '">' +  svgc + '</svg>'
//     var url = null
   
//    var downFilename = "Plotter_CrossHatch_";
//    var downLink=document.getElementById('downSVG4');
//    var blob = new Blob([text], {type: "image/svg+xml"})
//    if (url != null) {
//        URL.revokeObjectURL(url)
//    }
//    url = URL.createObjectURL(blob)
//    downLink.href = url
//    var name = downFilename + Math.floor((Math.random() * 1000) + 1) + ".svg"
//    downLink.innerHTML = name
//    downLink.download = name
//    downLink.style.visibility = "visible"
    
//    }

 
    //FOR random_hatching NUM 2
    function createSVG2(width,height)
    {
       var svgNS = "http://www.w3.org/2000/svg";
       var check=document.getElementById("mySVG2");
       if(check!=null){
           var svg=  document.getElementById("mySVG2")
      svg.parentNode.removeChild(svg);
       }
       var svg = document.createElementNS(svgNS, "svg");
       svg.setAttributeNS(null,'width',width);
      svg.setAttributeNS(
           'http://www.w3.org/2000/xmlns/',
           'xmlns:xlink',
           'http://www.w3.org/1999/xlink'
       );
       svg.setAttributeNS(null,'height',height);
       svg.setAttributeNS(null,'id','mySVG2');
       document.getElementById("container").appendChild(svg)
       var g=document.createElementNS(svgNS,'g');
       // g.setAttributeNS(null,'id','gg');
       // g.setAttributeNS(null,'stroke','black');
       // g.setAttributeNS(null,'fill','none');
       // g.setAttributeNS(null,'stroke-width','.2');
   
       document.getElementById("mySVG2").appendChild(g);   
    }
   
   
    function getSVG2( w, h)
    {
   
    var svgc =document.getElementById('mySVG2').innerHTML;
    var text = '<svg xmlns="http://www.w3.org/2000/svg" width= "' + w +'" height="'+h+ '" viewBox="0 0 ' + w + ' ' +h + '">' +  svgc + '</svg>'
    var url = null
   
   var downFilename = "Plotter_vertical_line_";
   var downLink=document.getElementById('downSVG2');
   var blob = new Blob([text], {type: "image/svg+xml"})
   if (url != null) {
       URL.revokeObjectURL(url)
   }
   url = URL.createObjectURL(blob)
   downLink.href = url
   var name = downFilename + Math.floor((Math.random() * 1000) + 1) + ".svg"
   downLink.innerHTML = name
   downLink.download = name
   downLink.style.visibility = "visible"
    
   }

 

// //FOR GCODE OF THE random hatch ARTSTYLE
function downloadGCode2() {
    var gcode;
    var tmp=document.getElementById('mySVG2').innerHTML;
    gcode=svg2gcode(tmp, {
        scale : 1,
        cutZ : 108,
        safeZ: 80
      });
    //   console.log(gcode);
    var gCodeFile = new Blob([gcode], { type: 'text/plain;charset=utf-8' });
    url=URL.createObjectURL(gCodeFile);
    downlink2.href=url;
    var name="Plotter_vertical_Line_"+Math.floor((Math.random()*1000)+1) +  '.gcode'
    downlink2.innerHTML= name;
    downlink2.download= name;
    downlink2.style.visibility="visible";
}

function downloadGCode4() {
    var gcode;
    var tmp=document.getElementById('mySVG4').innerHTML;
    gcode=svg2gcode(tmp, {
        scale : 1,
        cutZ : 108,
        safeZ: 80
      });
    //   console.log(gcode);
    var gCodeFile = new Blob([gcode], { type: 'text/plain;charset=utf-8' });
    url=URL.createObjectURL(gCodeFile);
    downlink4.href=url;
    var name="Plotter_CrossHatch_"+Math.floor((Math.random()*1000)+1) +  '.gcode'
    downlink4.innerHTML= name;
    downlink4.download= name;
    downlink4.style.visibility="visible";
}