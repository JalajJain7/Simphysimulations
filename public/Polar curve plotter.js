// https://jsxgraph.org/wiki/index.php?title=Polar_curve_plotter
//#C060A1
//#FFDD93
//#916BBF
// #C996CC
// #EDEDED
//  #FA7D09

JXG.Options.text.useMathJax = true;
JXG.Options.label.autoPosition = true;
JXG.Options.text.fontSize = 16;
JXG.Options.text.color = "white";
JXG.Options.line.strokeWidth = 0.8;
JXG.Options.slider.baseline.strokecolor = "#F1D4D4";
JXG.Options.slider.highline.strokecolor = "#F1D4D4";
JXG.Options.slider.fillColor = "#C060A1";
JXG.Options.slider.label = { fontSize: 24, strokeColor: "white", autoPosition: true };

var board = JXG.JSXGraph.initBoard('jxgbox',{
    axis:true,boundingbox: [-5, 5, 5, -5],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,
    
});

var input = board.create('input', [8, 3, 'function r(t) {return 0.2*t; };',''], {cssStyle: 'width:300px'});
board.create('text', [8, 2, '<button type="button" class="btn btn-success" onclick="plot()">PLOT</button>']);
board.create('text', [10, 2, '<button type="button" class="btn btn-success" onclick="clearAll()">Clear All</button>']);

a = board.create('slider', [[7,1],[10,1],[-4*Math.PI,0,0]], {style:6, name:'a'});
b = board.create('slider', [[7,0.5],[10,0.5],[0,7,4*Math.PI]], {style:6, name:'b'});
function plot(){
  eval(input.Value());
  graph = board.create('curve', [
            r, [0,0], 
            function(){return a.Value();}, 
            function(){return b.Value();}
            ], 
            {curveType:'polar',strokeColor:'#916BBF', strokeWidth:4}
          );
  board.update();
} 

function clearAll() { 
  JXG.JSXGraph.freeBoard(board);
  board = JXG.JSXGraph.initBoard('jxgbox',{
    axis:true,boundingbox: [-5, 5, 5, -5],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,
    
});

input = board.create('input', [8, 3, 'function r(t) {return 0.2*t; };',''], {cssStyle: 'width:300px'});
board.create('text', [8, 2, '<button type="button" class="btn btn-success" onclick="plot()">PLOT</button>']);
board.create('text', [10, 2, '<button type="button" class="btn btn-success" onclick="clearAll()">Clear All</button>']);

a = board.create('slider', [[7,1],[10,1],[-4*Math.PI,0,0]], {style:6, name:'a'});
b = board.create('slider', [[7,0.5],[10,0.5],[0,7,4*Math.PI]], {style:6, name:'b'});


}

plot();
