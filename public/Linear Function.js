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

board.suspendUpdate();

// var gr = board.create("grid");

var m = board.create(
  "slider",
  [
    [10, 1],
    [10, 5],
    [0, 1, 4],
  ],
  {
    snapWidth: 0.1,
    precision: 1,
    // ticks: { drawLabels: true, label: { position: "rt", offset: [20, 0] } },
    offset: [10, 0],
    name: "\\(m\\)",
  }
);
var t = board.create(
  "slider",
  [
    [-4, 1],
    [-4, 5],
    [-2, 0, 6],
  ],
  {
    snapWidth: 0.1,
    precision: 1,
    // ticks: {
    //   drawZero: true,
    //   drawLabels: true,
    //   ticksDistance: 1,
    //   minTicksDistance: 5, // insertTicks: true,
    //   tickEndings: [1, 0],
    //   label: { position: "lft", offset: [-30, 0] },
    // },
    name: "\\(t\\)",
  }
);
var tval = function () {
  return t.Value();
};
var T = board.create("point", [0, tval], {
  name: "T",
  label: "T",
  strokeColor: "white",
  face: "cross",
});
var mval = function () {
  return m.Value();
};
var linF0 = function (x) {
  return mval() * x;
};
var linF = function (x) {
  return mval() * x + tval();
};
var G0 = board.create("functiongraph", [linF0, -5, 5], {
  strokeWidth: 1,
  dash: 2,
  Color:"#FFDD93"
});
var G = board.create("functiongraph", [linF, -5, 5], { strokeWidth: 2 ,Color:"#FFDD93"});

var ftextval = function () {
  var vz = "";
  var tv = "";
  if (tval() >= 0.0) {
    if (tval() == 0.0) {
      tv = "";
      vz = "";
    } else {
      vz = "+";
      tv = JXG.toFixed(tval(), 1);
    }
  } else {
    vz = "";
    tv = JXG.toFixed(tval(), 1);
  }
  return "\\[f(x)=" + JXG.toFixed(mval(), 1) + " \\cdot x" + vz + tv + "\\]";
};
var ftext = board.create("text", [15, 5.0, ftextval], {
  fontSize: 18,
  color: "white",
  
});
var dt = board.create(
  "segment",
  [
    [0, 0],
    [0, tval],
  ],
  { strokeColor: "white", strokeWidth: 3 }
);
var A = board.create("glider", [1, 2, G], { label: { offset: [0, -15] } });
var tangent = board.create("tangent", [A],{ });


var st = board.create("slopetriangle", [tangent], {
  toppoint: { face: "plus", withLabel: false },color: "white",strokeColor: "white"
});

var text = board.create('text',[10,7,
    function() { 
      return '\\[ Linear Funciton \\]';
    }], {fontSize:24});
board.unsuspendUpdate();
