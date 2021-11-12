//https://jsxgraph.uni-bayreuth.de/wiki/index.php?title=Linear_Function:_parameters

JXG.Options.text.useMathJax = true;
JXG.Options.label.autoPosition = true;
JXG.Options.text.fontSize = 16;
JXG.Options.text.color = "white";
JXG.Options.line.strokeWidth = 0.8;
JXG.Options.slider.baseline.strokecolor = "#F1D4D4";
JXG.Options.slider.highline.strokecolor = "#F1D4D4";
JXG.Options.slider.fillColor = "#C060A1";
JXG.Options.slider.label = { fontSize: 24, strokeColor: "white", autoPosition: true };
JXG.Options.line.strokeColor = "#FFDD93";
JXG.Options.line.strokeWidth = 2;

var board = JXG.JSXGraph.initBoard("jxgbox", {
  axis: true,
  boundingbox: [-10, 10, 25, -5],
  //[left ,top ,right ,buttom]
  showCopyright: false,
  keepaspectratio: true,
  showNavigation: false,
});
var p = [];

p[0] = board.create('point', [0, -2], {size:2, name: '\\[C(a)\\]'});
p[1] = board.create('point', [-1.5, 5], {size:2, name: ''});
p[2] = board.create('point', [1, 4], {size:2, name: ''});
p[3] = board.create('point', [3, 3], {size:2, name: '\\[C(b)\\]'});

// Curve
var fg = JXG.Math.Numerics.Neville(p);
var graph = board.create('curve', fg, {strokeWidth:3, strokeOpacity:0.9,strokeColor:'#FFDD93'});

// Secant 
line = board.create('line', [p[0], p[3]], {strokeColor:'#F1D4D4', dash:1});

var df = JXG.Math.Numerics.D(fg[0]);
var dg = JXG.Math.Numerics.D(fg[1]);

// Usually, the extended mean value theorem is formulated as
// df(t) / dg(t) == (p[3].X() - p[0].X()) / (p[3].Y() - p[0].Y())
// We can avoid division by zero with the following formulation:
var quot = function(t) {
    return df(t) * (p[3].Y() - p[0].Y()) - dg(t) * (p[3].X() - p[0].X());
};

var r = board.create('glider', [
            function() { return fg[0](JXG.Math.Numerics.root(quot, (fg[3]() + fg[2]) * 0.5)); },
            function() { return fg[1](JXG.Math.Numerics.root(quot, (fg[3]() + fg[2]) * 0.5)); },
            graph], {name: '\\[C(&xi;)\\]', size: 4, fixed:true, color: 'white'});

board.create('tangent', [r], {strokeColor:'#F1D4D4'});


globalThis.hypertext = board.create('text',[8,7,
  function() { 
    return '\\[ Extended \b Mean \b Value \\] \\[ Theorem \\]';
  }], {fontSize:50});