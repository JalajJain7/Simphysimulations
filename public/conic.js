// https://jsxgraph.uni-bayreuth.de/wiki/index.php?title=Conic_sections

JXG.Options.text.useMathJax = true;
JXG.Options.label.autoPosition = true;
JXG.Options.text.fontSize = 16;
JXG.Options.text.color = "white";
JXG.Options.line.strokeWidth = 0.8;
JXG.Options.slider.baseline.strokecolor = "#F1D4D4";
JXG.Options.slider.highline.strokecolor = "#F1D4D4";
JXG.Options.slider.fillColor = "#C060A1";
JXG.Options.slider.label = { fontSize: 24, strokeColor: "white", autoPosition: true };
// JXG.Options.ellipse.strokeColor = "#FFDD93";
// JXG.Options.line.strokeWidth = 2;

globalThis.board = JXG.JSXGraph.initBoard("jxgbox", {
  axis: true,
  boundingbox: [-10, 10, 25, -5],
  //[left ,top ,right ,buttom]
  showCopyright: false,
  keepaspectratio: true,
  showNavigation: false,
});

globalThis.step = 1;

board.suspendUpdate();

board.create('text', [20, -5, '<button type="button" id="next" class="btn btn-success" onclick="next()">Next Conic > ></button>']);
board.create('text', [-9, -5, '<button type="button" id="next" class="btn btn-success" onclick="prev()">Previous Conic > ></button>']);

function Ellipse(){

  globalThis.Aell = board.create('point',[-5,1]);
  globalThis.Bell = board.create('point',[5,1]);
  globalThis.Cell = board.create('point',[0,-5]);
  globalThis.ell = board.create('ellipse',[Aell,Bell,Cell],{
    strokeColor: '#FFDD93',
    fillColor: '#FFDD90',
    fillOpacity:'0.2'
  });
  globalThis.ellpiseText = board.create('text',[15,5,
    function() { 
      return '\\[ Ellipse \\]';
    }], {fontSize:60});
}
// Ellipse();
function hyperbola(){
  globalThis.Ahyper = board.create('point',[0,1]);
globalThis.Bhyper = board.create('point',[9.9,-1]);
globalThis.Chyper = board.create('point',[0,-1]);
globalThis.hyp = board.create('hyperbola',[Ahyper,Bhyper,Chyper],{
  
    strokeColor: '#FFDD93',
    fillColor: '#FFDD90',
    fillOpacity:'0.2'
  
});

globalThis.hypertext = board.create('text',[15,5,
  function() { 
    return '\\[ Hyperbola \\]';
  }], {fontSize:60});

}
// hyperbola();

function parabola() {

globalThis.Apara = board.create('point',[-1,7]);
globalThis.Bpara = board.create('point',[1,7]);
globalThis.line = board.create('line',[Apara,Bpara],{strokeColor:'white',strokeWidth:2});
globalThis.Cpara = board.create('point',[0,-1]);
globalThis.par = board.create('parabola',[Cpara,line],{
  
  strokeColor: '#FFDD93',
  fillColor: '#FFDD90',
  fillOpacity:'0.2'

});

globalThis.hypertext = board.create('text',[15,5,
  function() { 
    return '\\[ Parabola \\]';
  }], {fontSize:60});
}

// parabola();
function fivePointConic(){
globalThis.Afive = board.create('point',[-3,-1.1]);
globalThis.Bfive = board.create('point',[.31,4.16]);
globalThis.Cfive = board.create('point',[2,-1]);
globalThis.Dfive = board.create('point',[19,5]);
globalThis.Efive = board.create('point',[0.3,-1.16]);
globalThis.con = board.create('conic',[Afive,Bfive,Cfive,Dfive,Efive],{
  
  strokeColor: '#FFDD93',
  fillColor: '#FFDD90',
  fillOpacity:'0.2'

});

globalThis.hypertext = board.create('text',[8,7,
  function() { 
    return '\\[ Five-Point \b Conic \\]';
  }], {fontSize:60});

}
// fivePointConic();

Ellipse();

function next() {
  step++;

  if (step == 1) {
    Ellipse();
    
  }

  if (step == 2) {
    board.removeObject([Aell,Bell,Cell,ell,ellpiseText]);
    hyperbola();
  }

  if (step == 3) {
    board.removeObject([Ahyper,Bhyper,Chyper,hyp,hypertext]);
    parabola();
  }

  if (step == 4) {
    board.removeObject([Apara,Bpara,line,Cpara,par,hypertext]);
    fivePointConic();
  }

  if (step == 5) {step--; }
}

function prev() {
  step--;

    // if (step == 0){
    //   board.removeObject([Aell,Bell,Cell,ell,ellpiseText]);
    // }

    if (step == 1){
      board.removeObject([Ahyper,Bhyper,Chyper,hyp,hypertext]);
      Ellipse();
    }

    if (step == 2){
      board.removeObject([Apara,Bpara,line,Cpara,par,hypertext]);
      hyperbola();
    }

    if (step == 3){
      board.removeObject([Afive,Bfive,Cfive,Dfive,Efive,con,hypertext]);
      parabola();
    }

    if (step == 4){
      board.removeObject([Afive,Bfive,Cfive,Dfive,Efive,con,hypertext]);
      fivePointConic();
    }
    
    if (step == 0){step++;}
}


board.unsuspendUpdate();
