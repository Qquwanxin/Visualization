function ON(){
    d3.select("#input").append("input").attr("type","button").attr("onclick","add()").attr("value","+");
    d3.select("#input").append("input").attr("type","button").attr("onclick","minus()").attr("value","-");
    d3.select("#input").append("input").attr("type","button").attr("onclick","refresh()").attr("value","R");
    d3.select("#t").append("p").text("- 初始状态有 20 个 bar，bar 的高度随机");
    d3.select("#t").append("p").text("- 点击 + 按钮，直方图末端会增加一个 bar");
    d3.select("#t").append("p").text("- 点击 - 按钮，直方图末端会减少一个 bar");
    d3.select("#t").append("p").text("- 点击 R 按钮，重设每个 bar 的高度");
}

function add(){
    if(dataset.length * 20+15 >= 500)
    {
        alert("Can't add bars any more");
        return;
    }
    console.log("+");
    dataset.push(parseInt(Math.random()*21+1,10));
    console.log(dataset.length);
    svg.append("rect")
        .attr("x",(dataset.length-1)*20)
        .attr("y",300-15*dataset[dataset.length-1])
        .attr("width",15)
        .attr("height",15*dataset[dataset.length-1])
        .attr("fill","lightblue");
}

function minus(){
    console.log("-");
    dataset.pop();
    console.log(dataset.length);   
    var x = d3.select("body").selectAll("rect");
    x.remove();
    draw();
}

function refresh(){
    console.log("REFRESH");
    for(var i = 0;i < dataset.length;i++)   dataset[i]=parseInt(Math.random()*21+1,10);   
    var x = d3.select("body").selectAll("rect");
    x.remove();
    draw();
}

function draw()
{
    var dataset=new Array();
    for(var i = 0;i < 20;i++)   dataset[i]=parseInt(Math.random()*21+1,10);
    var svg = d3.select("#bar").append("svg").attr("width",500).attr("height",300);
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x",function(d,i){return i * 20;})
        .attr("y",function(d){return 300-15*d;})
        .attr("width",15)
        .attr("height",function(d){return 15*d;} )
        .attr("fill","lightblue");
}