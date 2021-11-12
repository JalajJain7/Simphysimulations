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

var input = board.create('input', [-4, 4, 'sin(x)*x',''], {cssStyle: 'width:300px'});
board.create('text', [0, 4, '<button type="button" class="btn btn-success" onclick="plotter()">Plot</button>']);
board.create('text', [1, 4, '<button type="button" class="btn btn-success" onclick="clearAll()">Clear All</button>']);
board.create('text', [2.3, 4, '<button type="button" class="btn btn-success" onclick="addSlopeInfo()">Add slope info</button>']);
board.create('text', [4.2, 4, '<button type="button" class="btn btn-success" onclick="addTangent()">Add tangent</button>']);
board.create('text', [5.9, 4, '<button type="button" class="btn btn-success" onclick="addDerivative()">Add Derivative</button>']);
var f, curve; // global objects

function plotter() {
  var txtraw = input.Value();
  f = board.jc.snippet(txtraw, true, 'x', true);
  curve = board.create('functiongraph',[f,
                function(){ 
                  var c = new JXG.Coords(JXG.COORDS_BY_SCREEN,[0,0],board);
                  return c.usrCoords[1];
                },
                function(){ 
                  var c = new JXG.Coords(JXG.COORDS_BY_SCREEN,[board.canvasWidth,0],board);
                  return c.usrCoords[1];
                }
              ],{name:txtraw, withLabel:true,strokecolor:'#FA7D09',strokeWidth:3});
  var q = board.create('glider', [2, 1, curve], {withLabel:false});
  var t = board.create('text', [
          function(){ return q.X()+0.1; },
          function(){ return q.Y()+0.1; },
          function(){ return "The slope of the function f(x)=" + txtraw + "<br>at x=" + q.X().toFixed(2) + " is equal to " + (JXG.Math.Numerics.D(f))(q.X()).toFixed(2); }
      ], 
      {fontSize:15});
}

function clearAll() {
    JXG.JSXGraph.freeBoard(board);
    
    board = JXG.JSXGraph.initBoard('jxgbox',{
      axis:true,boundingbox: [-5, 5, 5, -5],
      showCopyright:false,
      keepaspectratio:true,
    showNavigation:false,
      
  });
  
  input = board.create('input', [-4, 4, 'sin(x)*x',''], {cssStyle: 'width:300px'});
  board.create('text', [0, 4, '<button type="button" class="btn btn-success" onclick="plotter()">Plot</button>']);
  board.create('text', [1, 4, '<button type="button" class="btn btn-success" onclick="clearAll()">Clear All</button>']);
  board.create('text', [2.3, 4, '<button type="button" class="btn btn-success" onclick="addSlopeInfo()">Add slope info</button>']);
  board.create('text', [4.2, 4, '<button type="button" class="btn btn-success" onclick="addTangent()">Add tangent</button>']);
  board.create('text', [5.9, 4, '<button type="button" class="btn btn-success" onclick="addDerivative()">Add Derivative</button>']);


    f = null;
    curve = null;
}

function addSlopeInfo() {
    if (JXG.isFunction(f)) {
        var txtraw = input.Value();
        board.suspendUpdate();
        var q = board.create('glider', [2, 1, curve], {withLabel:false});
        var t = board.create('text', [
          function(){ return q.X()+0.1; },
          function(){ return q.Y()+0.1; },
          function(){ return "The slope of the function f(x)=" + txtraw + "<br>at x=" + q.X().toFixed(2) + " is equal to " + (JXG.Math.Numerics.D(f))(q.X()).toFixed(2); }
      ], 
      {fontSize:15});
        board.unsuspendUpdate();
    }
}

function addTangent() {
    if (JXG.isFunction(f)) {
        board.suspendUpdate();
        var p = board.create('glider',[1,0,curve], {name:'drag me'});
        board.create('tangent',[p], {name:'drag me',strokeColor:'#916BBF',strokeWidth:3});
        board.unsuspendUpdate();
    }
}

function addDerivative() {
    if (JXG.isFunction(f)) {
        board.create('functiongraph',[JXG.Math.Numerics.D(f),
                function(){ 
                  var c = new JXG.Coords(JXG.COORDS_BY_SCREEN,[0,0],board);
                  return c.usrCoords[1];
                },
                function(){ 
                  var c = new JXG.Coords(JXG.COORDS_BY_SCREEN,[board.canvasWidth,0],board);
                  return c.usrCoords[1];
                }], {dash:2,strokeWidth:3,strokeColor:'#FFDD93'});
    }
}