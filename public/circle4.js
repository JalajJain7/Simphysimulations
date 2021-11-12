
JXG.Options.text.useMathJax = true;

var board = JXG.JSXGraph.initBoard('jxgbox',{
    axis:true,boundingbox: [-25, 30, 40, -10],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false,
    
});


board.suspendUpdate();

xaxis = board.create('axis', [[0,0],[1,0]]);
xaxis.removeAllTicks();
xticks = board.create('ticks',[xaxis, 5], {
    drawLabels: true,
    strokeColor: '#F05454',
    label: {
        offset: [-4, -15],
        strokeColor: 'white'
    }
});   

yaxis = board.create('axis', [[0,0],[0,1]]);
yaxis.removeAllTicks();
yticks = board.create('ticks',[yaxis, 5], {
    drawLabels: true,
    strokeColor: '#F05454',
    label: {
        // offset: [0, -15],
        strokeColor: 'white'
    }
});   



board.create('text', [30, 18, '<div class="form-check form-switch"><input onclick="check()" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"><label class="form-check-label" for="flexSwitchCheckDefault" style="color:#FFFFFF; font-size:1vw;">SHOW POLE</label></div>']);


//CIRCLE -------------
globalThis.center = board.create('point',[0,9],{name:"center",label:{color:"white"}});
globalThis.radiusPoint = board.create('point',[5,9],{name:"Radius",label:{color:"white"}});
globalThis.circle = board.create('circle', [center, radiusPoint],{strokecolor:"#C996CC",strokewidth:3,
fillColor:'#C996CC',fillOpacity:0.5});
// globalThis.glider = board.create('glider',[0,5,circle]);
//CIRCLE -------------

//SLIDER
globalThis.slider = board.create('slider', [[10, 20], [30, 20], [-50, -10, 50]], {

    baseline: { strokeColor: '#F1D4D4'},
    highline: { strokeColor: '#F1D4D4'},
    fillColor: '#C060A1',
    label: {fontSize: 24, strokeColor: 'white',autoPosition: true,},
    // name:function(){
        // return '\\[f(x)\\]';
    // },
    suffixLabel: '\\(Y=\\)',
    
    snapWidth:1
  });

//
globalThis.mainLine = board.create('line', [function(){
    return -slider.Value();
}, 1.0, 0.0],{strokecolor:"#FFDD93"});
globalThis.gliderLine = board.create('glider',[0,1,mainLine],{name:"P",label:{color:"white"}});

//Creating Tangent
midpoint = board.create('midpoint',[center,gliderLine],{name:'',size:0});
tangentcircle = board.create('circle',[midpoint,center],{strokeColor: 'none', center: {visible:false}});
inter1 = board.create('intersection', [tangentcircle, circle, 0],{label:{color:"white"}});
inter2 = board.create('intersection', [tangentcircle, circle, 1],{label:{color:"white"}});
tangent1 = board.create('line', [gliderLine,inter1], {straightFirst:false, straightLast:true,strokecolor:'#EDEDED'});
tangent1 = board.create('line', [gliderLine,inter2], {straightFirst:false, straightLast:true,strokecolor:'#EDEDED'});

//C996CC
//EDEDED

globalThis.text = board.create('text',[30,24,"Pole and Polar"],
{
    fontSize: 40, 
    fontUnit: 'vw',
    cssClass: 'text',
    color: 'White'
}
);

//COC
globalThis.cordOfContact = board.create('line',[inter1,inter2],{strokecolor:'#FFDD93'})



function check(){
    var isChecked=document.getElementById("flexSwitchCheckDefault").checked;
    if(isChecked == true)
        globalThis.pole = board.create('polepoint', [circle, mainLine],{name:"Pole",label:{color:"white"}});

    else
        board.removeObject([pole]);

    }




board.unsuspendUpdate();