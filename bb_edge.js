/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bb_0004_back',
            type:'image',
            rect:['0px','0px','640px','320px','auto','auto'],
            fill:["rgba(0,0,0,0)",'bb_0004_back.png','0px','0px']
         },
         {
            id:'bb_0002_breakingbad',
            type:'image',
            rect:['13px','137px','307px','68px','auto','auto'],
            fill:["rgba(0,0,0,0)",'bb_0002_breakingbad.png','0px','0px']
         },
         {
            id:'bb_0000_walt',
            type:'image',
            rect:['165px','0px','475px','320px','auto','auto'],
            fill:["rgba(0,0,0,0)",'bb_0000_walt.png','0px','0px']
         },
         {
            id:'bb_0001_volatile',
            type:'image',
            rect:['92px','10px','119px','119px','auto','auto'],
            fill:["rgba(0,0,0,0)",'bb_0001_volatile.png','0px','0px']
         },
         {
            id:'bb_0003_amc',
            type:'image',
            rect:['81px','227px','114px','66px','auto','auto'],
            fill:["rgba(0,0,0,0)",'bb_0003_amc.png','0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_bb_0001_volatile}": [
            ["style", "top", '10px'],
            ["style", "background-size", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '92px']
         ],
         "${_bb_0002_breakingbad}": [
            ["style", "left", '466px'],
            ["style", "top", '137px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '640px'],
            ["style", "height", '320px'],
            ["style", "overflow", 'hidden']
         ],
         "${_bb_0003_amc}": [
            ["style", "top", '227px'],
            ["style", "left", '-139px']
         ],
         "${_bb_0000_walt}": [
            ["style", "left", '165px'],
            ["style", "top", '0px']
         ],
         "${_bb_0004_back}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid7", tween: [ "style", "${_bb_0002_breakingbad}", "left", '13px', { fromValue: '466px'}], position: 0, duration: 1000, easing: "easeOutExpo" },
            { id: "eid5", tween: [ "style", "${_bb_0003_amc}", "left", '81px', { fromValue: '-139px'}], position: 0, duration: 1000, easing: "easeOutExpo" },
            { id: "eid12", tween: [ "style", "${_bb_0001_volatile}", "background-size", [100,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,0]}], position: 0, duration: 1000, easing: "easeOutExpo" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6427044");
