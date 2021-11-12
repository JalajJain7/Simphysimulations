
var board = JXG.JSXGraph.initBoard('jxgbox',{
    axis:true,boundingbox: [-13, 15, 40, -13],
    showCopyright:false,
    keepaspectratio:true,
	showNavigation:false});
board.suspendUpdate();


function init(){
//MAIN CIRCLE
globalThis.center = board.create('point',[0,0],{name:'O',color:'black',fixed:true});
globalThis.radius_point = board.create('point',[0,-5],{name:'R',color:'red'});
globalThis.theCircle = board.create('circle',[[0,0],"R"],{fillColor:'none',strokeColor:'red',strokeWidth:5,fixed:true});


//POINTS ON CIRCLE
globalThis.P=board.create('point',[15,0],{name:'P',color:'black'})


//LINES
globalThis.OP = board.create('line',[center,P], 
 {straightFirst:false, straightLast:false, strokeWidth:2, dash:2,color:'black'});


//MIDPOINT
globalThis.midpoint = board.create('midpoint', [center, P],{name:'midpoint'});






//
globalThis.mainText = board.create('text',[20,13,"Construction Of Tangent To A Circle From An External Point"],
{
    fontSize: 20, 
    fontUnit: 'vw',
    cssClass: 'head',
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

    else if(step==4) {
        stepFour();
    }

    else{
        step--;
    }
};

function previous(){
    
    if(step==1) {
        step--;
        board.removeObject([circle2]);
        

    }

    else if(step == 2)
    {
        step--;
        board.removeObject([intersection1,intersection2]);
        circle2.setAttribute({strokeWidth:2, dash:0})
    }

    else if(step == 3)
    {
        step--;
        console.log("hello")
        board.removeObject([tangent1,tangent2]);
    }

    else if(step == 4)
    {
        step--;
        console.log("hello")
        board.removeObject([tangent1,tangent2]);
    }

    else{}
};

console.log(step);





function stepOne(){

//Circle animate

    document.getElementById("next").disabled = true;
    globalThis.animator = board.create('point',[0,0], {name:'',size:0});
    globalThis.arc = board.create('arc', [midpoint, center, animator],{strokeColor:'black'});
    animator.moveTo([midpoint.X(),midpoint.Y()-5],250);
    setTimeout(function() { animator.moveTo([P.X(),P.Y()],250);},250);
    setTimeout(function() { animator.moveTo([midpoint.X(),midpoint.Y()+5],250);},500);
    setTimeout(function() { animator.moveTo([center.X(),center.Y()+0.001],250);},750);


    //MAIN
    setTimeout(function() { 
        globalThis.circle2 = board.create('circle',[midpoint,center],{strokeColor:"black"})
        board.removeObject([animator,arc]);
        document.getElementById("next").disabled = false;
    },1000);
    

}

function stepTwo(){
    circle2.setAttribute({straightFirst:false, straightLast:false, strokeWidth:2, dash:2})
    globalThis.intersection1 = board.create('intersection', [theCircle, circle2, 1],{size:3,color:"black",strokeColor:"black"});
    globalThis.intersection2 = board.create('intersection', [theCircle, circle2, 0],{size:3,color:"black",strokeColor:"black"});
}

function stepThree(){

    document.getElementById("next").disabled = true;
    // ANIMATE TANGENT
    globalThis.tangent1animate = board.create('point',[intersection1.X(),intersection1.Y()],{name:'',size:0})
    globalThis.tangentanimate1 = board.create('line', [tangent1animate,intersection1], {straightFirst:false, straightLast:true});
    tangent1animate.moveTo([P.X(),P.Y()],1000)

    setTimeout(function() {
        globalThis.tangent2animate = board.create('point',[intersection2.X(),intersection2.Y()],{name:'',size:0})
        globalThis.tangentanimate2 = board.create('line', [tangent2animate,intersection2], {straightFirst:false, straightLast:true});
        tangent2animate.moveTo([P.X(),P.Y()],1000)
    },1000)


    setTimeout(function() {
        document.getElementById("next").disabled = false;
        board.removeObject([tangent1animate,tangent2animate,tangentanimate1,tangentanimate2])
        globalThis.tangent1 = board.create('line', [P,intersection1], {straightFirst:false, straightLast:true,color:'black'});
        globalThis.tangent2 = board.create('line', [P,intersection2], {straightFirst:false, straightLast:true,color:'black'});
        
    },2000)
    
 
}

function stepFour(){ 
    board.removeObject([OP])
    circle2.setAttribute({opacity:0})
    midpoint.setAttribute({opacity:0,name:""})
}

board.unsuspendUpdate();