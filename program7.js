var html = " "
var red = Math.floor(Math.random()*256);
var blue = Math.floor(Math.random()*256);
var green = Math.floor(Math.random()*256);
//rgb(255, 0, 0)
rgbColor = 'rgb('+ red +','+ blue +','+ green +')';
console.log(rgbColor);
html += '<div style = "background-color:'+rgbColor+'hello"></div>';
document.write(html);
