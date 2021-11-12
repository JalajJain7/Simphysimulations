// https://jsxgraph.org/wiki/index.php?title=Lagrange_interpolation
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
    axis:true,boundingbox: [-15, 10, 7, -6],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,
    
});

globalThis.hypertext = board.create('text',[5,8,
  function() { 
    return '\\[ Lagrange \b Interpolation \\]';
  }], {fontSize:30});

  board.create('text', [8, 7, '<button type="button" id="next" class="btn btn-success" onclick="addPoint()">Add Point</button>']);

  var p = [];
  p[0] = board.create('point', [-1,2], {size:4});
  p[1] = board.create('point', [3,-1], {size:4});
  var f = JXG.Math.Numerics.lagrangePolynomial(p);
  var graph = board.create('functiongraph', [f,-10, 10], {strokeWidth:3,strokeColor:'#FFDD93'});
  var d1 = board.create('functiongraph', [JXG.Math.Numerics.D(f), -10, 10], {dash:1,strokeColor:'#FA7D09'});
  var d2 = board.create('functiongraph', [JXG.Math.Numerics.D(JXG.Math.Numerics.D(f)), -10, 10], {dash:2,strokeColor:'#EDEDED'});
  
  function addPoint() {
      p.push(board.create('point',[(Math.random()-0.5)*10,(Math.random()-0.5)*3],{size:4}));
      board.update();
  }