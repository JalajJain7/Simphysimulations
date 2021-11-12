// https://jsxgraph.uni-bayreuth.de/wiki/index.php/Change_Equation_of_a_Graph


JXG.Options.text.useMathJax = true;
JXG.Options.label.autoPosition = true;
JXG.Options.text.fontSize = 16;
JXG.Options.text.color = "white";
JXG.Options.line.strokeWidth = 0.8;

var board = JXG.JSXGraph.initBoard('jxgbox',{
    axis:true,boundingbox: [-5, 5, 5, -5],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,
    
});

var input = board.create('input', [10, 3, 'Math.sin(x)*Math.cos(x)',''], {cssStyle: 'width:300px'});
// var text = board.create('text',[2,14,'<div style="z-index:15"><input style="z-index:15" type="text" id="eingabe" value="Math.sin(x)*Math.cos(x)"></div>'], {fontSize:24});
// var text2 = board.create('text',[2,10,'<input type="button" value="set" onClick="doIt()">'], {fontSize:24});
board.create('text', [9, 3, '<button type="button" class="btn btn-success" onclick="doIt()">SET</button>']);

eval("function f(x){ return "+input.Value()+";}");
graph = board.create('functiongraph', [function(x){ return f(x); },-10, 30], {strokeWidth:3,strokeColor:'#FFDD93'});

//glider on the curve
p1 = board.create('glider', [0,0,graph], {style:6, name:'P',size:2});
//define the derivative of f
g = JXG.Math.Numerics.D(f);
//a point on the tangent
//                                 variable x coordinate           variable y coordinate depending on the derivative of f at point p1.X()
p2 = board.create('point', [function() { return p1.X()+1;}, function() {return p1.Y()+JXG.Math.Numerics.D(graph.Y)(p1.X());}], {style:1, name:'',size:2});
//the tangent 
l1 = board.create('line', [p1,p2],{strokeColor:'#C060A1',strokeWidth:2});
//a third point fpr the slope triangle
p3 = board.create('point', [function() { return p2.X();}, function() {return p1.Y();}],{style:1, name:'',size:2});
//the slope triangle
pol = board.create('polygon', [p1,p2,p3], {fillColor:'#C060A1',strokeWidth:2});
//a text for displaying slope's value
//                               variable x coordinate          variable y coordinate                        variable value
t = board.create('text', [function(){return p1.X()+1.1;},function(){return p1.Y()+(p2.Y()-p3.Y())/2;},function(){ return "m="+(p2.Y()-p3.Y()).toFixed(2);}],{color:ff0000});

function doIt(){
    //redefine function f according to the current text field value
    eval("function f(x){ return "+input.Value()+";}");
    //change the Y attribute of the graph to the new function 
    graph.Y = function(x){ return f(x); };
    //update the graph
    graph.updateCurve();
    //update the whole board
    board.update();
  }