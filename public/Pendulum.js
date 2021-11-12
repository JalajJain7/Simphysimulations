// https://jsxgraph.org/wiki/index.php?title=
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
    axis:true,boundingbox: [-40, 20, 20, -20],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,
    
});

globalThis.hypertext = board.create('text',[10,10,
  function() { 
    return '\\[ Pendulum \\]';
  }], {fontSize:60});

p1 = board.create('point', [0.0, 0.0], {visible:false, name: 'a', size: 3}),
    c1 = board.create('circle', [p1, [0,8]], {visible:false, name: 'circle', size: 3}),
    p2 = board.create('glider', [3,-4, c1], {visible: true, name: '', size: 3}),
    grr=board.create('functiongraph', [function(t){ return -10-2*Math.cos(t/2); },-10, 10],{strokeColor: "#FA7D09",strokeWidth: 2}),
    p3 = board.create('point', [
                function(){return 2*Math.atan2(p2.X(),-p2.Y())},
                function(){return -10-2*Math.cos(Math.atan2(p2.X(),-p2.Y()))}], 
                {visible: true, name:'', size: 3}),
    line = board.create('line', [p1, p2], {visible:true, straightFirst: false,straightLast: false, strokeWidth: 4, strokeColor: "#C996CC"}),
    isInDragMode = false;

var gg =  board.create('slider',[[10,6],[28,6],[1,9.8,10]]); board.create('text',[7,6,'gravity']);
var cc =  board.create('slider',[[10,4],[28,4],[0,0.5,1]]); board.create('text',[6.5,4,'damping']);

function startAnimation(start_theta) {
 var c = cc.Value(), g = gg.Value(), l = 10;
    p2.moveAlong(function() {
        var f = function(t, x) {
                return [x[1], -c * x[1] - g / l * (Math.sin(x[0]))];
            },
            area = [0, 200],
            numberOfEvaluations = (area[1] - area[0]) * 100,
            data = JXG.Math.Numerics.rungeKutta('heun', [start_theta, 0], area, numberOfEvaluations, f),
            duration = 20 * 1e3;
   
        return function(t) {
            if (t >= duration)
                return NaN;
            angle2=-Math.PI/2+data[Math.floor(t / duration * numberOfEvaluations)][0];
            return [p1.X()+l*Math.cos(angle2),p1.Y()+l*Math.sin(angle2)];
        };
    }());
}

function hook() {
    if(!isInDragMode) {
        if(board.mode === board.BOARD_MODE_DRAG) {
            board.stopAllAnimation();
            isInDragMode = true;
        }
    }
    if(isInDragMode) {
        if(board.mode !== board.BOARD_MODE_DRAG) {
            isInDragMode = false;
            angle=Math.atan2(p2.Y()-p1.Y(),p2.X()-p1.X())+Math.PI*1/2;
            startAnimation(angle);
        }
    }
}

board.addHook(hook);
startAnimation(-1.2);