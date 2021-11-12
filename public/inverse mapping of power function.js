// https://jsxgraph.org/wiki/index.php?title=Inverse_mapping_of_the_power_function
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
    axis:true,boundingbox: [-5, 40, 40, -5],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,
    
});

globalThis.hypertext = board.create('text',[40,30,
  function() { 
    return '\\[ Inverse \bMapping\b of\b Power\b Function \\]';
  }], {fontSize:30});
  board.suspendUpdate();

  var n = board.create('slider',[[50,25],[60,25],[-5,1,5]],{name:'n'});
  board.create('functiongraph', [function(t){ return t}],{strokeColor:'#EDEDED',dash:1,strokeWidth:1});
  board.create('functiongraph', [function(t){ return JXG.Math.pow(t,n.Value()); },0.001,80],{strokeColor:'#FFDD93',strokeWidth:2});
  board.create('functiongraph', [function(t){ return JXG.Math.pow(t,1/n.Value()); },0.001,80],{strokeColor:'#FFDD93',dash:2,strokeWidth:2});
  board.unsuspendUpdate();