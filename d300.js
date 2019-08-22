/*
var fruits = ['Apples', 'Pears', 'Bananas'];   
d3.selectAll('li')
  .data(fruits)
  .text( function(d){ return d;});
  
  */

var fruits = ['Apples', 'Pears', 'Bananas', 'Oranges', 'Strawberries'];
var list = d3.select('ul');
var fruits = list.selectAll('li').data(fruits).text( function(d){ return d;});;
fruits.enter()
  .append('li')
  .text( function(d){return d;});


//DINAMIC APPLYING

d3.selectAll("p")  .style("color", function() {
  r = Math.round((Math.random() * 255));
  g = Math.round((Math.random() * 255));
  b = Math.round((Math.random() * 255));
  return "rgb("+r+", "+g+", "+b+")";
});
