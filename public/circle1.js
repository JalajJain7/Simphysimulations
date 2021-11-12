
var board = JXG.JSXGraph.initBoard('jxgbox',{
    axis:true,boundingbox: [-13, 15, 40, -13],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false});
board.suspendUpdate();


function init(){
    //MAIN CIRCLE
globalThis.center = board.create('point',[0,0],{name:'O',color:'black',fixed:true});
globalThis.radius_point = board.create('point',[0,-10],{name:'R',color:'red'});
globalThis.theCircle = board.create('circle',[[0,0],"R"],{fillColor:'none',strokeColor:'red',strokeWidth:5,fixed:true});


//POINTS ON CIRCLE
globalThis.P = board.create('glider', [0.0, 5, theCircle],{name:'P',color:'black'});
globalThis.Q = board.create('glider', [5, 0, theCircle],{name:'Q',color:'black',fixed:true});
globalThis.S = board.create('glider', [-5, 0, theCircle],{name:'S',color:'black',fixed:true});


//LINES
globalThis.PQ = board.create('segment',[P,Q],{ color:'black'});
globalThis.SP = board.create('segment',[P,S],{ color:'black'});
globalThis.SQ = board.create('segment',[S,Q],{ color:'black'});

//ANGLE + LOGIC
// a1 = board.create('angle', [PQ, SP,  -1, -1], { radius:1 })
globalThis.SPQ = board.create('nonreflexangle', [S, P, Q], {radius: 1,name:'90°'})
// globalThis.SPQ = board.create('angle',[ function(){
//     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
//         return [S.X(),S.Y()];

//     else
//         return [Q.X(),Q.Y()];
// } ,P,function(){
//     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
//         return [Q.X(),Q.Y()];
//     else
//      return [S.X(),S.Y()];
// }] ,{name:'90°'}
    // {name: function() {
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
    //             return JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(1) + '°';

    //     else
    //     return JXG.Math.Geometry.trueAngle(Q, P, S).toFixed(1) + '°';
    // }}
    // );







globalThis.mainText = board.create('text',[20,13,"Inscribed angles subtended by a diameter are right Angle."],
{
    fontSize: 20, 
    fontUnit: 'vw',
    cssClass: 'head',
    color: ''
}
);

globalThis.anglep = board.create('text',[20,12,"Move Point P, You will observe that ∠P remains 90° always"],
{
    fontSize: 15, 
    fontUnit: 'vw',
    cssClass: 'text',
    color: ''
}
);

globalThis.step=0;
}

init();
//BUTTONS
board.create('text', [37, -10, '<button type="button" id="next" class="btn btn-success" onclick="next()">Next Step > ></button>']);

board.create('text', [-12, -10, '<button type="button" class="btn btn-success" onclick="previous()">< < Previus Step</button>']);




// stepOne();
// stepTwo();
// stepThree();
function next(){
    step++;
    console.log(step)

    if(step==1) {
            stepOne();
    }


    else if(step==2) {
        stepTwo();
    }

    else if(step==3) {
        stepThree();
    }

    else{
        step--;
    }
};

function previous(){
    if(step==1) {
        step--;
        board.removeObject([step1,step1content,OP,OPQ,OQP,POS]);
        SQ.setAttribute({color: 'black'});
        SP.setAttribute({color: 'black'});
        PQ.setAttribute({color: 'black'});
        SPQ.setAttribute({color: 'orange'});

    }

    else if(step == 2)
    {
        step--;
        board.removeObject([step2,step2content,OSP,OPS,POQ]);
        OP.setAttribute({color: 'black'});
        POS.setAttribute({color: 'orange',radius:2});
        OQP.setAttribute({color: 'orange',radius:2});
        OPQ.setAttribute({color: 'orange',radius:2});
    }

    else if(step == 3)
    {
        step--;
        board.removeObject([step3,step3content,henceproved]);
        OSP.setAttribute({color: 'orange',radius:2});
        OPS.setAttribute({color: 'orange',radius:2});
        POQ.setAttribute({color: 'orange',radius:2});
    }

    else{}
};

console.log(step);

function stepOne(){
    document.getElementById("next").disabled = true;
    SQ.setAttribute({color: 'blue'});
    SP.setAttribute({color: 'blue'});
    PQ.setAttribute({color: 'blue'});
    SPQ.setAttribute({color: 'blue'});

    globalThis.step1 = board.create('text',[18,10.5,"Step 1 -"],
    {
        fontSize: 20, 
        fontUnit: 'vw',
        cssClass: 'head',
        color: ''
    }
    );

    globalThis.step1content = board.create('text',[21.5,9.2,"➡ PO = OQ <br>➡ ∠ OPQ = ∠ OQP = ɑ <br>➡ <i><b> By Exterior Angle Property </i></b> <br>➡ ∠ POS = 2ɑ"],
    {
        fontSize: 17, 
        fontUnit: 'vw',
        cssClass: 'text',
        color: ''
    }
    );

    globalThis.p = board.create('point',[P.X(),P.Y()],{name})
    globalThis.Op = board.create('segment',[P,p],{ color:'black'});
    p.moveTo([0,0],1000);

    
    setTimeout(function() {
        document.getElementById("next").disabled = false;
        board.removeObject(p);
      
    globalThis.OP = board.create('segment',[center,P],{ color:'black'});

    globalThis.OPQ = board.create('nonreflexangle', [Q, P, center], {radius: 2,name:'ɑ'})
    // globalThis.OPQ = board.create('angle',[ function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
    //         return [center.X(),center.Y()];
    
    //     else
    //         return [Q.X(),Q.Y()];
    // } ,P,function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
    //         return [Q.X(),Q.Y()];
    //     else
    //      return [center.X(),center.Y()];
    // }],{radius:2,name});


    // globalThis.OQP = board.create('angle',[ function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)!=90)
    //         return [center.X(),center.Y()];
    
    //     else
    //         return [P.X(),P.Y()];
    // } ,Q,function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)!=90)
    //         return [P.X(),P.Y()];
    //     else
    //      return [center.X(),center.Y()];
    // }],{radius:2,name});

    globalThis.OQP = board.create('nonreflexangle', [center, Q, P], {radius: 2,name:'ɑ'})

    // globalThis.POS = board.create('angle',[ function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)!=90)
    //         return [S.X(),S.Y()];
    
    //     else
    //         return [P.X(),P.Y()];
    // } ,center,function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)!=90)
    //         return [P.X(),P.Y()];
    //     else
    //      return [S.X(),S.Y()];
    // }],{radius:2,name});

    globalThis.POS = board.create('nonreflexangle', [P, center, S], {radius: 2,name:'2⍺'})


    
}, 1000);
}

function stepTwo(){
    OP.setAttribute({color: 'blue'});
    POS.setAttribute({color: 'blue',radius:0.5});
    OQP.setAttribute({color: 'blue',radius:0.5});
    OPQ.setAttribute({color: 'blue',radius:0.5});

    
    globalThis.OSP = board.create('nonreflexangle', [P, S, center], {radius: 2,name:'β'})
    // globalThis.OSP = board.create('angle',[ function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
    //         return [center.X(),center.Y()];
    
    //     else
    //         return [P.X(),P.Y()];
    // } ,S,function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
    //         return [P.X(),P.Y()];
    //     else
    //      return [center.X(),center.Y()];
    // }],{radius:2,name});


    globalThis.OPS = board.create('nonreflexangle', [S, P, center], {radius: 2,name:'β'})
    // globalThis.OPS = board.create('angle',[ function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)!=90)
    //         return [center.X(),center.Y()];
    
    //     else
    //         return [S.X(),S.Y()];
    // } ,P,function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)!=90)
    //         return [S.X(),S.Y()];
    //     else
    //      return [center.X(),center.Y()];
    // }],{radius:2,name});

    globalThis.POQ = board.create('nonreflexangle', [P, center,Q], {radius: 2,name:'2β'})
    // globalThis.POQ = board.create('angle',[ function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
    //         return [Q.X(),Q.Y()];
    
    //     else
    //         return [P.X(),P.Y()];
    // } ,center,function(){
    //     if(JXG.Math.Geometry.trueAngle(S, P, Q).toFixed(0)==90)
    //         return [P.X(),P.Y()];
    //     else
    //      return [Q.X(),Q.Y()];
    // }],{radius:2,name});


    globalThis.step2 = board.create('text',[18,4,"Step 2 -"],
    {
        fontSize: 20, 
        fontUnit: 'vw',
        cssClass: 'head',
        color: ''
    }
    );

    globalThis.step2content = board.create('text',[21.5,2.7,"➡ PO = OS <br>➡ ∠ OPS = ∠ OSP = β <br>➡ <i><b> By Exterior Angle Property </i></b> <br>➡ ∠ POQ = 2β"],
    {
        fontSize: 17, 
        fontUnit: 'vw',
        cssClass: 'text',
        color: ''
    }
    );
   
}


function stepThree(){
    OSP.setAttribute({color: 'blue',radius:0.5});
    OPS.setAttribute({color: 'blue',radius:0.5});
    POQ.setAttribute({color: 'blue',radius:0.5});

    

    


    globalThis.step3 = board.create('text',[18,-2.5,"Step 3 -"],
    {
        fontSize: 20, 
        fontUnit: 'vw',
        cssClass: 'head',
        color: ''
    }
    );

    globalThis.step3content = board.create('text',[21.5,-3.4,"➡ 2ɑ + 2β = &#120529; <br>➡ ɑ + β = &#120529;/2 <br>➡ ∠ P = &#120529;/2"],
    {
        fontSize: 17, 
        fontUnit: 'vw',
        cssClass: 'text',
        color: ''
    }

    
    );

    globalThis.henceproved = board.create('text',[21.5,-5.4,"Hence Proved"],
    {
        fontSize: 26, 
        fontUnit: 'vw',
        cssClass: 'head',
        color: 'black'
    }

    
    );
   
}
















board.unsuspendUpdate();