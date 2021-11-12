// https://jsxgraph.uni-bayreuth.de/wiki/index.php?title=Cosine

JXG.Options.text.useMathJax = true;
JXG.Options.label.autoPosition = true;
JXG.Options.text.fontSize = 16;
JXG.Options.fontSize = 16;
JXG.Options.text.color = "white";
JXG.Options.line.strokeWidth = 0.8;
JXG.Options.slider.baseline.strokecolor = "#F1D4D4";
JXG.Options.slider.highline.strokecolor = "#F1D4D4";
JXG.Options.slider.fillColor = "#C060A1";
JXG.Options.slider.label = { fontSize: 24, strokeColor: "white", autoPosition: true };
JXG.Options.line.strokeColor = "#FFDD93";
// JXG.Options.functionGraph.strokeColor = "#FFDD93";
JXG.Options.line.strokeWidth = 2;

//SIN WAVE
var brd1 = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-10, 5, 5, -5], axis:true,
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,});
       var xr = brd1.create('line',[[-9,0],[9,0]],{visible:false});
       var x = brd1.create('glider',[-9,0,xr],{visible:true, name:'\\[x\\]',fontSize:10});
       var y = brd1.create('point',[x.X(),Math.cos(x.X())],{size:1,name:'',strokeColor:'#EDEDED'});
       var x1 = brd1.create('segment',[x,y],{visible:true, straightFirst:false,straightLast:false,strokeColor:'red'});
       x.on('drag', function(){ transform(x);});
       var f = brd1.create('functiongraph',
          [function(x){ 
	    return Math.cos(x); 
          }],{
              strokeColor:'#FFDD93',
              strokeWidth:2
          });
       brd1.create('text',[
         function(){return x.X()+0.3;},
         function(){return y.Y()*0.5;},function(){
            return '\\[cos\\]';
        }],{});
       function transform(x) {
        p2.setPosition(JXG.COORDS_BY_USER,[Math.cos(x.X()),Math.sin(x.X())]);
        y.setPosition(JXG.COORDS_BY_USER,[x.X(),Math.cos(x.X())]);
        brd.update();
       }


       var brd = JXG.JSXGraph.initBoard('jxgbox2', {boundingbox: [-1.5, 1.5, 1.5, -1.5], axis:true,
        showCopyright:false,
        keepaspectratio:true,
        showNavigation:false,}); 
       brd1.addChild(brd);
       var ax = brd.create('line',[[0,0],[1,0]],{visible:false});
       var ay = brd.create('line',[[0,0],[0,1]],{visible:false});
 
       var p0 = brd.create('point',[0,0],{fixed:true,visible:false});
       var p1 = brd.create('point',[1,0],{name:'',visible:false,fixed:true});
       var c = brd.create('circle',[p0,p1],{dash:2,strokeWidth:1,strokeOpacity:0.6,
        
            strokeColor:'#FFDD93',
            strokeWidth:2
        });


       var p2 = brd.create('point',[Math.cos(x.X()),Math.sin(x.X())],{name:'\\[exp(ix)\\]',fixed:true,size:1, strokeColor:'#EDEDED'});

       var p3 = brd.create('point',[function(){return p2.X();},0.0],{visible:false,name:'',withLabel:false});
       var p4 = brd.create('point',[0.0,function(){return p2.Y();}],{visible:false,name:'',withLabel:false});
 
       brd.create('line',[p2,p4],{straightFirst:false,straightLast:false,strokeColor:'red'});     // cos
       brd.create('text',[
        function(){return (p2.X()+p4.X())*0.3;},
        function(){return p2.Y()+0.05;}, function(){
            return '\\[cos(x)\\]';
        }],{});

