// https://jsxgraph.uni-bayreuth.de/wiki/index.php?title=Parabola_II


JXG.Options.text.useMathJax = true;
JXG.Options.label.autoPosition = true;
JXG.Options.text.fontSize = 16;
JXG.Options.text.color = "white";
JXG.Options.line.strokeWidth = 0.8;

var board = JXG.JSXGraph.initBoard('jxgbox',{
    axis:true,boundingbox: [-30, 20, 40, -25],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,
    
});


board.suspendUpdate();

 



var f = board.create('glider', [1, 0, board.defaultAxes.x], {name:"f"});
var c = board.create('glider', [-1, 0, board.defaultAxes.x], {name:"-c"});
var l = board.create('parallel', [board.defaultAxes.y, c], {name:"l", withLabel:true,strokecolor:'#EDEDED'});

var par = board.create('parabola', [f, l],{
    strokecolor:"#FFDD93"
});

var P = board.create('glider', [2, 2, par], {name: 'p'}); 
var s1 = board.create('segment', [f,P],{strokeColor: '#F1D4D4'});

var q = board.create('point', [()=>c.X(), ()=>P.Y()], {name:'q'});
var s2 = board.create('segment', [q, P],{strokeColor: '#F1D4D4'});

var txt = board.create('text', [20, 1, () => "\\[ |pf| - |pq| = " + P.Dist(f).toFixed(2) + ' - ' +  P.Dist(q).toFixed(2) + ' = ' + (P.Dist(f) - P.Dist(q)).toFixed(2) + "\\]"]);

var text = board.create('text',[2,14,
    function() { 
      return '\\[ Parabola \b II \\]';
    }], {fontSize:24});
board.unsuspendUpdate();