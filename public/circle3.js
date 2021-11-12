
var board = JXG.JSXGraph.initBoard('jxgbox',{
    axis:true,boundingbox: [-20, 20, 40, -10],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false});
board.suspendUpdate();

yaxis = board.create('axis', [[0,0],[0,1]]);
yaxis.removeAllTicks();
globalThis.center = board.create('glider',[0,9,yaxis],{name:"Center"});


//Slider -------------
// globalThis.slider = board.create('slider', [[0, 0], [0, 15], [0, 9, 15]], {

//     baseline: { strokeColor: 'none'},
//     highline: { strokeColor: 'none'},
//     fillColor: 'red',
//     label: {fontSize: 24, strokeColor: 'BLACK'},
//     // name: 'xyz', // Not shown, if suffixLabel is set
//     suffixLabel: 'y = ',
//     // postLabel: ' '
//     // snapWidth:1
// });

    


//CIRCLE -------------

globalThis.radiusPoint = board.create('point',[4,9]);
globalThis.circle = board.create('circle', [center, radiusPoint],{
    strokeColor: 'orange',
    fillColor: 'orange',
    fillOpacity:'0.2'
});

globalThis.glider = board.create('glider',[0,5,circle],{name:'',size:0});
//CIRCLE -------------

globalThis.mainLine = board.create('line', [0.0, 0.0, -1.0]);
globalThis.gliderLine = board.create('glider',[0,1,mainLine],{name:'',size:0});

//LOCUS -------------
// line = board.create('segment', [gliderLine,glider])



globalThis.mainLine0 = board.create('line', [function(){
    return -circle.Radius();
}, 0.0, -1.0],{
    visible: false
});

globalThis.parabola = board.create('parabola',[[0,function()
    {
        return center.Y();
    }],mainLine0],{
        visible: false,
        strokeColor: 'black',
        
    });

globalThis.gliderpara = board.create('glider',[0,2.5,parabola],{
    trace:true
})

globalThis.circle3 = board.create('circle',[gliderpara,function() {
    return center.Dist(gliderpara) - circle.Radius();
}],{
    strokeColor: 'green',
    fillColor: 'greenn',
    fillOpacity:'0.2'
});

globalThis.mainText = board.create('text',[20,13,"A circle touches the line L and the circle C_1 externally such that both the circles are on the same side of the line, then the locus of centre of the circle is ?"],
{
    fontSize: 20, 
    fontUnit: 'vw',
    cssClass: 'head',
    color: ''
}
);


//CLEAR TRACER
board.create('text', [20, 7, '<button type="button" id="next" class="btn btn-primary" onclick="cleartracer()">CLEAR TRACER</button>']);

function cleartracer(){
    gliderpara.clearTrace();
}

//SHOW LOCUS
board.create('text', [20, 9, '<div class="form-check form-switch"><input onclick="check()" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"><label class="form-check-label" for="flexSwitchCheckDefault" style="color:black; font-size:1vw;">SHOW LOCUS</label></div>'],{
    
});



function check(){
    var isChecked=document.getElementById("flexSwitchCheckDefault").checked;
    if(isChecked == true)
        parabola.setAttribute({visible: true});

    else
    parabola.setAttribute({visible: false});

    }


board.unsuspendUpdate();