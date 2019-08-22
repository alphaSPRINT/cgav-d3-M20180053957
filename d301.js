/*

var svg = d3.select('#circle')
.append('svg')
.attr('width', 200)
.attr('height', 200);

svg.append('circle')
  .style('stroke', 'black')
  .style('fill', 'yellow')
  .attr('r', 40)
  .attr('cx', 50)
  .attr('cy', 50);
*/

 var svg = d3.select('#mysvg')  
 .append('svg') 
 .attr('width', 400)       
 .attr('height',400)
 
 .append('svg:g') 
 .attr("transform",  "translate(30, 30),scale(2, 1)")

svg.append('rect')
  .style('stroke', 'black')
  .style('fill', 'red')
  .attr('x', 50)
  .attr('y', 50)
  .attr('width', 50)
  .attr('height', 50)



svg.append('circle')
  .style('stroke', 'black')
  .style('fill', 'yellow')
  .attr('r', 20)
  .attr('cx', 50)
  .attr('cy', 50)


