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

board.suspendUpdate();
var s = board.create('slider', [[0.75,-2],[4.5,-2],[0,0,10]], {name:'S',snapWidth:1});
board.create('functiongraph', [
    function(t) {
        var val = 0, sv = s.Value()+1,
        k = 1;
        for(var i = 0; i < sv; i++) {
            val = val + Math.sin(2*Math.PI*k*t)/k;
            k += 1;
        }
        return val+2;
    }, -10, 15], {strokeColor: "#FA7D09",strokeWidth:2});

board.create('functiongraph', [
    function(t) {
        var val = 0, sv = s.Value()+1,
            k = 1;
        for(var i = 0; i < sv; i++) {
            val = val + Math.sin(2*Math.PI*(2*k-1)*t)/(2*k-1);
            k += 1;
        }
        return val-2;
    }, -10, 15], {strokeColor: "#FFDD93",strokeWidth:2});


    globalThis.hypertext = board.create('text',[8,4,
      function() { 
        return '\\[Harmonic \b Waves\\]';
      }], {fontSize:30});

board.unsuspendUpdate();