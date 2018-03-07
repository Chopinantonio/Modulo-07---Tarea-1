// Isolated data array to a different file

let margin = null,
    width = null,
    height = null;

let svg = null;
let x, y = null; // scales

setupCanvasSize();
appendSvg("body");
setupXScale();
setupYScale();
appendXAxis();
appendYAxis();
appendChartBars();
appendLegend();

// 1. Selecting the SVG Node
function setupCanvasSize() {
  margin = {top: 50, left: 80, bottom: 120, right: 130};
  width = 700 - margin.left - margin.right;
  height = 800 - margin.top - margin.bottom;
}

function appendSvg(domElement) {
  svg = d3.select(domElement).append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform",`translate(${margin.left}, ${margin.top})`);

}


// Axis

function setupXScale()
{
    x = d3.scaleBand()
    .rangeRound([0, width])
    .domain(totalSales.map(function(d, i) {
      return d.product;
    }));
}

function setupYScale()
{
    var maxSales = d3.max(totalSales, function(d, i) {
        return d.sales;
      });
    
      y = d3.scaleLinear()
        .range([height,0])
        .domain([0, maxSales]); 
}

function appendXAxis() {
  svg.append("g")
    .attr("transform",`translate(0, ${height})`)
    .call(d3.axisBottom(x));
}

function appendYAxis() {
  svg.append("g")
  .call(d3.axisLeft(y));
}

// Rectangles

function appendChartBars()
{
  var divTooltip = d3.select("body").append("div").attr("class", "toolTip");
  var rects = svg.selectAll('rect')
    .data(totalSales);

    var newRects = rects.enter();

    newRects.append('rect')
      .attr('x',function(d,i){
          return x(d.product);
      })
      .attr('y',function(d){
          return y(d.sales);
      })
      .attr('height',function(d,i){
          return height - y(d.sales);
      })
      .attr('width', function(d,i){
        return x.bandwidth() -10;
      })
      .style('fill', function(d, i) {
        return d.color
    });
}
 
// Legend

function appendLegend()
{
    var legend = svg.selectAll('.legend')
        .data(totalSales)
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', function(d, i) { 
                return "translate(20," + i * 25 + ")"; 
            });
    legend.append('rect')
        .attr('x', width - 19)
        .attr('width', 19)
        .attr('height', 19)
        .style('fill', function(d, i) { return d.color;})
        .style('stroke', function(d, i) { return d.color;});

    legend.append('text')
        .attr('x', width)
        .attr('y', 9.5)
        .attr("dy", "0.32em")
        .text(function(d) { return d.product; });
}



