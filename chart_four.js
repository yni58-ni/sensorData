var t = -1;
var n = 40;
var duration = 750;
var data1 = initialise();

function initialise() {
    var time = -1;
    var arr = [];
    for (var i = 0; i < n; i++) {
        var obj = {
            time: ++time,
            value: Math.floor(Math.random()* 100)
        };
        arr.push(obj);
    }
    t = time;
    return arr;
}
// push a new element on to the given array
function updateData(a) {
    var obj = {
        time: t,
        value: Math.floor(Math.random()* 100)
    };
    a.push(obj);
}
var margin = {top: 10,right: 20,bottom: 20,left: 40},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
var x = d3.scale.linear()
    .domain([t - n + 2, t])
    .range([0, width]);
var y = d3.scale.linear()
    .domain([0, 100])
    .range([height, 0]);
var line = d3.svg.line()
    .interpolate("basis")
    .x(function (d, i) {
    return x(d.time);
})
    .y(function (d, i) {
    return y(d.value);
});
var svg4 = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
var g = svg4.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// extra svg to clip the graph and x axis as they transition in and out
var graph = g.append("svg")
    .attr("width", width)
    .attr("height", height + margin.top + margin.bottom);
var xAxis = d3.svg.axis().scale(x).orient("bottom");
var axis = graph.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(x.axis = xAxis);
g.append("g")
    .attr("class", "y axis")
    .call(d3.svg.axis().scale(y).orient("left"));
var plot = graph.append("g").attr("class", "plot");
var path1 = plot.append("g")
    .append("path")
    .data([data1])
    .attr("class", "line1");
tick();
function tick() {
    t++;
    // push
    updateData(data1);
    
    x.domain([t - n + 2, t]);
    // redraw the lines
    graph.select(".line1").attr("d", line);
    plot.attr("transform", null);
    // slide the line left
    plot.transition()
        .duration(duration)
        .ease("linear")
        .attr("transform", "translate(" + x(t - n + 1) + ")");
    // slide the x-axis left
    axis.transition()
        .duration(duration)
        .ease("linear")
        .call(xAxis)
        .each("end", tick);
    data1.shift();
}
