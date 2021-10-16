(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HanabiGeomancyStances_atlas_1", frames: [[1094,990,843,923],[0,0,1920,988],[0,990,1092,859]]},
		{name:"HanabiGeomancyStances_atlas_2", frames: [[0,948,499,129],[775,0,650,651],[0,1079,607,100],[1285,1236,456,126],[0,1283,397,77],[1017,896,266,348],[775,896,240,477],[0,0,773,946],[399,1283,325,55],[1285,1134,607,100],[1427,587,544,545],[0,1181,607,100],[775,653,511,241],[1427,0,582,585]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.AzumasDecree = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Earth_icon = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Earthname = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ElementalEarthFist = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.EmberofDivineRealm = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Firecopy = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.HanabiEarthStance = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HanabiFireStance = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.HanabiLightningStance = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.HanabiNaganoharacopy2 = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.HanabiNaganoharawater = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Lightning = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Lname = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.RaidenShogunsLutebow = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.WaterStance = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Water = function() {
	this.initialize(ss["HanabiGeomancyStances_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WaterBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Water();
	this.instance.setTransform(0,0,0.171,0.1709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.5,100);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.RaidenShogunsLutebow();
	this.instance.setTransform(0,0,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,270.9,127.8), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Lname();
	this.instance.setTransform(0,0,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,321.7,53), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HanabiLightningStance();
	this.instance.setTransform(0,0,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,409.7,501.4), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Lightning();
	this.instance.setTransform(0,0,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,288.3,288.9), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.EmberofDivineRealm();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,397,77), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HanabiNaganoharacopy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,325,55), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HanabiFireStance();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,240,477), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Firecopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,266,348), null);


(lib.LightningBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Lightning();
	this.instance.setTransform(0,0,0.1835,0.1835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.8,100);


(lib.FireBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Firecopy();
	this.instance.setTransform(0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.8,104.4);


(lib.EarthBTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Earth_icon();
	this.instance.setTransform(0,0,0.1536,0.1536);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.9,100);


// stage content:
(lib.HanabiGeomancyStances = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fire:2,ffade:50,lightning:75,lfade:123};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,49,74,75,122,147];
	// timeline functions:
	this.frame_0 = function() {
		root = this;
		this.lightningbtn.visible = false;
		
		current = 'lightning'
		next = 'lightning'
		
		
		// This Function is for the Fire Button
		////////////////////////////////////////////////
		this.firebtn.addEventListener("click", firenext)
		function firenext () {
			next = 'fire'
			if(current == 'lightning'){
				root.gotoAndPlay('lfade');
				
			}
		    else if(current == 'earth'){
				root.gotoAndPlay('efade');
			}
		    else if(current == 'water'){
				root.gotoAndPlay('wfade');
			}
		    else{
				root.gotoAndPlay('ffade');
			}
		}
		
		// This Function is for the Earth Button
		////////////////////////////////////////////////
		this.earthbtn.addEventListener("click", earthnext)
		function earthnext () {
			next = 'earth'
			if(current == 'lightning'){
				root.gotoAndPlay('lfade');
				
			}
		    else if(current == 'earth'){
				root.gotoAndPlay('efade');
			}
		    else if(current == 'water'){
				root.gotoAndPlay('wfade');
			}
		    else{
				root.gotoAndPlay('ffade');
			}
		}
		
		// This Function is for the Water Button
		////////////////////////////////////////////////
		this.waterbtn.addEventListener("click", waternext)
		function waternext () {
			next = 'water'
			if(current == 'lightning'){
				root.gotoAndPlay('lfade');
				
			}
		    else if(current == 'earth'){
				root.gotoAndPlay('efade');
			}
		    else if(current == 'water'){
				root.gotoAndPlay('wfade');
			}
		    else{
				root.gotoAndPlay('ffade');
			}
		}
		
		// This Function is for the Lightning Button
		////////////////////////////////////////////////
		this.lightningbtn.addEventListener("click", lightningnext)
		function lightningnext () {
			next = 'lightning'
			if(current == 'lightning'){
				root.gotoAndPlay('lfade');
				
			}
		    else if(current == 'earth'){
				root.gotoAndPlay('efade');
			}
		    else if(current == 'water'){
				root.gotoAndPlay('wfade');
			}
		    else{
				root.gotoAndPlay('ffade');
			}
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.firebtn.visible = false;
		this.earthbtn.visible = true;
		this.waterbtn.visible = true;
		this.lightningbtn.visible = true;
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		this.stop()
		root = this;
		
		current = next;
		if(next == 'fire'){
			root.gotoAndPlay('fire');
		}
		else if(next == 'water'){
			root.gotoAndPlay('water');
		}
		else if(next == 'earth'){
			root.gotoAndPlay('earth');
		}
		else{
			root.gotoAndPlay('lightning');
		}
	}
	this.frame_75 = function() {
		this.firebtn.visible = true;
		this.earthbtn.visible = true;
		this.waterbtn.visible = true;
		this.lightningbtn.visible = false;
	}
	this.frame_122 = function() {
		this.stop();
	}
	this.frame_147 = function() {
		this.stop()
		root = this;
		
		current = next;
		if(next == 'fire'){
			root.gotoAndPlay('fire');
		}
		else if(next == 'water'){
			root.gotoAndPlay('water');
		}
		else if(next == 'earth'){
			root.gotoAndPlay('earth');
		}
		else{
			root.gotoAndPlay('lightning');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(47).call(this.frame_49).wait(25).call(this.frame_74).wait(1).call(this.frame_75).wait(47).call(this.frame_122).wait(25).call(this.frame_147).wait(1));

	// Button
	this.earthbtn = new lib.EarthBTN();
	this.earthbtn.name = "earthbtn";
	this.earthbtn.setTransform(54.9,472,1,1,0,0,0,49.9,50);
	new cjs.ButtonHelper(this.earthbtn, 0, 1, 1);

	this.waterbtn = new lib.WaterBtn();
	this.waterbtn.name = "waterbtn";
	this.waterbtn.setTransform(54.8,55,1,1,0,0,0,49.8,50);
	new cjs.ButtonHelper(this.waterbtn, 0, 1, 1);

	this.lightningbtn = new lib.LightningBTN();
	this.lightningbtn.name = "lightningbtn";
	this.lightningbtn.setTransform(969.9,55,1,1,0,0,0,49.9,50);
	new cjs.ButtonHelper(this.lightningbtn, 0, 1, 1);

	this.firebtn = new lib.FireBtn();
	this.firebtn.name = "firebtn";
	this.firebtn.setTransform(978.3,472,0.9574,0.9577,0,0,0,40,52.2);
	new cjs.ButtonHelper(this.firebtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.firebtn},{t:this.lightningbtn},{t:this.waterbtn},{t:this.earthbtn}]}).wait(148));

	// Ltitle
	this.instance = new lib.RaidenShogunsLutebow();
	this.instance.setTransform(542,214,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(146));

	// Lname
	this.instance_1 = new lib.Lname();
	this.instance_1.setTransform(334,351,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(146));

	// Lstance
	this.instance_2 = new lib.HanabiLightningStance();
	this.instance_2.setTransform(246,4,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(146));

	// Lightning
	this.instance_3 = new lib.Lightning();
	this.instance_3.setTransform(190,63,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(146));

	// Ltitle
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(677.4,363.85,0.7,0.7,0,0,0,135.3,63.8);
	this.instance_4.alpha = 0.1016;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97).to({_off:false},0).wait(1).to({regX:135.4,regY:63.9,scaleX:0.712,scaleY:0.712,x:677.45,y:360.45,alpha:0.136},0).wait(1).to({scaleX:0.724,scaleY:0.724,x:677.5,y:357,alpha:0.172},0).wait(1).to({scaleX:0.736,scaleY:0.736,x:677.45,y:353.6,alpha:0.208},0).wait(1).to({scaleX:0.748,scaleY:0.748,x:677.5,y:350.15,alpha:0.244},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:677.45,y:346.7,alpha:0.28},0).wait(1).to({scaleX:0.772,scaleY:0.772,x:677.5,y:343.3,alpha:0.316},0).wait(1).to({scaleX:0.784,scaleY:0.784,x:677.45,y:339.85,alpha:0.352},0).wait(1).to({scaleX:0.796,scaleY:0.796,x:677.5,y:336.4,alpha:0.388},0).wait(1).to({scaleX:0.808,scaleY:0.808,x:677.45,y:332.95,alpha:0.424},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:677.5,y:329.5,alpha:0.46},0).wait(1).to({scaleX:0.832,scaleY:0.832,x:677.45,y:326.05,alpha:0.496},0).wait(1).to({scaleX:0.844,scaleY:0.844,x:677.5,y:322.65,alpha:0.532},0).wait(1).to({scaleX:0.856,scaleY:0.856,x:677.45,y:319.2,alpha:0.568},0).wait(1).to({scaleX:0.868,scaleY:0.868,x:677.5,y:315.75,alpha:0.604},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:677.45,y:312.35,alpha:0.64},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:677.5,y:308.9,alpha:0.676},0).wait(1).to({scaleX:0.904,scaleY:0.904,x:677.45,y:305.45,alpha:0.712},0).wait(1).to({scaleX:0.916,scaleY:0.916,y:302,alpha:0.748},0).wait(1).to({scaleX:0.928,scaleY:0.928,x:677.5,y:298.55,alpha:0.784},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:677.45,y:295.1,alpha:0.82},0).wait(1).to({scaleX:0.952,scaleY:0.952,x:677.5,y:291.7,alpha:0.856},0).wait(1).to({scaleX:0.964,scaleY:0.964,x:677.45,y:288.25,alpha:0.892},0).wait(1).to({scaleX:0.976,scaleY:0.976,x:677.5,y:284.8,alpha:0.928},0).wait(1).to({scaleX:0.988,scaleY:0.988,x:677.45,y:281.4,alpha:0.964},0).wait(1).to({scaleX:1,scaleY:1,x:677.5,y:277.95,alpha:1},0).wait(2).to({scaleX:0.9111,scaleY:0.9111,x:641.15,y:271.25,alpha:0.8889},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:604.8,y:264.6,alpha:0.7778},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:568.45,y:257.9,alpha:0.6667},0).wait(1).to({scaleX:0.6444,scaleY:0.6444,x:532.1,y:251.25,alpha:0.5556},0).wait(1).to({scaleX:0.5556,scaleY:0.5556,x:495.75,y:244.6,alpha:0.4444},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:459.45,y:237.9,alpha:0.3333},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:423.1,y:231.25,alpha:0.2222},0).wait(1).to({scaleX:0.2889,scaleY:0.2889,x:386.75,y:224.55,alpha:0.1111},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:350.4,y:217.9,alpha:0},0).wait(16));

	// Lname
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(494.8,377.5,1,1,0,0,0,160.8,26.5);
	this.instance_5.alpha = 0.1016;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(97).to({_off:false},0).wait(1).to({regX:160.9,x:494.9,alpha:0.136},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.424},0).wait(1).to({alpha:0.46},0).wait(1).to({alpha:0.496},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.604},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.712},0).wait(1).to({alpha:0.748},0).wait(1).to({alpha:0.784},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.856},0).wait(1).to({alpha:0.892},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:1},0).wait(2).to({scaleX:0.9111,scaleY:0.9111,x:476.85,y:360.05,alpha:0.8889},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:458.85,y:342.6,alpha:0.7778},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:440.85,y:325.2,alpha:0.6667},0).wait(1).to({scaleX:0.6444,scaleY:0.6444,x:422.85,y:307.75,alpha:0.5556},0).wait(1).to({scaleX:0.5556,scaleY:0.5556,x:404.85,y:290.25,alpha:0.4444},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:386.85,y:272.85,alpha:0.3333},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:368.85,y:255.4,alpha:0.2222},0).wait(1).to({scaleX:0.2889,scaleY:0.2889,x:350.85,y:237.95,alpha:0.1111},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:332.85,y:220.55,alpha:0},0).wait(16));

	// Lstance
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(345.85,180.25,0.4,0.4,0,0,0,204.9,250.7);
	this.instance_6.alpha = 0.4883;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(86).to({_off:false},0).wait(1).to({regX:204.8,scaleX:0.4545,scaleY:0.4545,x:355.35,y:186.95,alpha:0.5364},0).wait(1).to({scaleX:0.5091,scaleY:0.5091,x:364.85,y:193.8,alpha:0.5827},0).wait(1).to({scaleX:0.5636,scaleY:0.5636,x:374.45,y:200.55,alpha:0.6291},0).wait(1).to({scaleX:0.6182,scaleY:0.6182,x:383.95,y:207.35,alpha:0.6755},0).wait(1).to({scaleX:0.6727,scaleY:0.6727,x:393.45,y:214.1,alpha:0.7218},0).wait(1).to({scaleX:0.7273,scaleY:0.7273,x:403.05,y:220.9,alpha:0.7682},0).wait(1).to({scaleX:0.7818,scaleY:0.7818,x:412.55,y:227.65,alpha:0.8145},0).wait(1).to({scaleX:0.8364,scaleY:0.8364,x:422.15,y:234.4,alpha:0.8609},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:431.65,y:241.2,alpha:0.9073},0).wait(1).to({scaleX:0.9455,scaleY:0.9455,x:441.2,y:247.95,alpha:0.9536},0).wait(1).to({scaleX:1,scaleY:1,x:450.75,y:254.75,alpha:1},0).wait(27).to({scaleX:0.9333,scaleY:0.9333,x:439.1,y:246.6,alpha:0.8889},0).wait(1).to({scaleX:0.8667,scaleY:0.8667,x:427.4,y:238.4,alpha:0.7778},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:415.75,y:230.25,alpha:0.6667},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:404.1,y:222.1,alpha:0.5556},0).wait(1).to({scaleX:0.6667,scaleY:0.6667,x:392.45,y:214,alpha:0.4444},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:380.8,y:205.8,alpha:0.3333},0).wait(1).to({scaleX:0.5333,scaleY:0.5333,x:369.15,y:197.65,alpha:0.2222},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:357.45,y:189.5,alpha:0.1111},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:345.75,y:181.35,alpha:0},0).wait(16));

	// Lightning
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(969.85,54.95,0.3462,0.3462,0,0,0,144,144.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(75).to({_off:false},0).wait(1).to({regX:144.2,regY:144.4,scaleX:0.4056,scaleY:0.4056,x:912.1,y:68.8},0).wait(1).to({scaleX:0.465,scaleY:0.4651,x:854.3,y:82.7},0).wait(1).to({scaleX:0.5245,scaleY:0.5245,x:796.55,y:96.55},0).wait(1).to({scaleX:0.5839,scaleY:0.5839,x:738.75,y:110.4},0).wait(1).to({scaleX:0.6434,scaleY:0.6434,x:680.95,y:124.3},0).wait(1).to({scaleX:0.7028,scaleY:0.7028,x:623.2,y:138.15},0).wait(1).to({scaleX:0.7622,scaleY:0.7623,x:565.4,y:152},0).wait(1).to({scaleX:0.8217,scaleY:0.8217,x:507.65,y:165.9},0).wait(1).to({scaleX:0.8811,scaleY:0.8811,x:449.85,y:179.75},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:392.1,y:193.6},0).wait(1).to({scaleX:1,scaleY:1,x:334.3,y:207.5},0).wait(47).to({scaleX:0.9564,scaleY:0.9564,x:376.7,y:197.3},0).wait(1).to({scaleX:0.9128,scaleY:0.9128,x:419.1,y:187.1},0).wait(1).to({scaleX:0.8692,scaleY:0.8692,x:461.45,y:176.95},0).wait(1).to({scaleX:0.8256,scaleY:0.8257,x:503.8,y:166.75},0).wait(1).to({scaleX:0.782,scaleY:0.7821,x:546.15,y:156.65},0).wait(1).to({scaleX:0.7385,scaleY:0.7385,x:588.6,y:146.45},0).wait(1).to({scaleX:0.6949,scaleY:0.6949,x:630.95,y:136.25},0).wait(1).to({scaleX:0.6513,scaleY:0.6513,x:673.3,y:126.1},0).wait(1).to({scaleX:0.6077,scaleY:0.6077,x:715.7,y:115.9},0).wait(1).to({scaleX:0.5641,scaleY:0.5641,x:758.1,y:105.75},0).wait(1).to({scaleX:0.5205,scaleY:0.5205,x:800.45,y:95.55},0).wait(1).to({scaleX:0.4769,scaleY:0.477,x:842.8,y:85.35},0).wait(1).to({scaleX:0.4333,scaleY:0.4334,x:885.2,y:75.25},0).wait(1).to({scaleX:0.3897,scaleY:0.3898,x:927.55,y:65.05},0).wait(1).to({scaleX:0.3461,scaleY:0.3462,x:969.95,y:54.9},0).wait(1));

	// EarthTItle
	this.instance_8 = new lib.ElementalEarthFist();
	this.instance_8.setTransform(591,231,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(147));

	// EarthName
	this.instance_9 = new lib.Earthname();
	this.instance_9.setTransform(303,357,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(147));

	// EarthStance
	this.instance_10 = new lib.HanabiEarthStance();
	this.instance_10.setTransform(275,11,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(147));

	// Earth
	this.instance_11 = new lib.Earth_icon();
	this.instance_11.setTransform(190,38,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(147));

	// WaterTitle
	this.instance_12 = new lib.AzumasDecree();
	this.instance_12.setTransform(539,110,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(147));

	// Watername
	this.instance_13 = new lib.HanabiNaganoharawater();
	this.instance_13.setTransform(291,362,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(147));

	// Waterstance
	this.instance_14 = new lib.WaterStance();
	this.instance_14.setTransform(212,16,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},1).wait(147));

	// Water
	this.instance_15 = new lib.Water();
	this.instance_15.setTransform(185,15,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},1).wait(147));

	// FireTitle
	this.instance_16 = new lib.Symbol4();
	this.instance_16.setTransform(684.55,287.55,0.7,0.7,0,0,0,198.5,38.5);
	this.instance_16.alpha = 0.1016;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({_off:false},0).wait(1).to({scaleX:0.7125,scaleY:0.7125,y:284.3,alpha:0.1375},0).wait(1).to({scaleX:0.725,scaleY:0.725,x:684.5,y:281,alpha:0.175},0).wait(1).to({scaleX:0.7375,scaleY:0.7375,x:684.55,y:277.8,alpha:0.2125},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:274.55,alpha:0.25},0).wait(1).to({scaleX:0.7625,scaleY:0.7625,x:684.5,y:271.25,alpha:0.2875},0).wait(1).to({scaleX:0.775,scaleY:0.775,x:684.55,y:268.05,alpha:0.325},0).wait(1).to({scaleX:0.7875,scaleY:0.7875,x:684.5,y:264.75,alpha:0.3625},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:684.55,y:261.55,alpha:0.4},0).wait(1).to({scaleX:0.8125,scaleY:0.8125,y:258.3,alpha:0.4375},0).wait(1).to({scaleX:0.825,scaleY:0.825,x:684.5,y:255,alpha:0.475},0).wait(1).to({scaleX:0.8375,scaleY:0.8375,x:684.55,y:251.8,alpha:0.5125},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:684.5,y:248.5,alpha:0.55},0).wait(1).to({scaleX:0.8625,scaleY:0.8625,x:684.55,y:245.3,alpha:0.5875},0).wait(1).to({scaleX:0.875,scaleY:0.875,y:242.05,alpha:0.625},0).wait(1).to({scaleX:0.8875,scaleY:0.8875,x:684.5,y:238.75,alpha:0.6625},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:684.55,y:235.55,alpha:0.7},0).wait(1).to({scaleX:0.9125,scaleY:0.9125,y:232.3,alpha:0.7375},0).wait(1).to({scaleX:0.925,scaleY:0.925,x:684.5,y:229,alpha:0.775},0).wait(1).to({scaleX:0.9375,scaleY:0.9375,x:684.55,y:225.8,alpha:0.8125},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:684.5,y:222.5,alpha:0.85},0).wait(1).to({scaleX:0.9625,scaleY:0.9625,x:684.55,y:219.3,alpha:0.8875},0).wait(1).to({scaleX:0.975,scaleY:0.975,y:216.05,alpha:0.925},0).wait(1).to({scaleX:0.9875,scaleY:0.9875,x:684.5,y:212.75,alpha:0.9625},0).wait(1).to({scaleX:1,scaleY:1,x:684.55,y:209.55,alpha:1},0).wait(2).to({scaleX:0.9111,scaleY:0.9111,x:649.75,y:220.2,alpha:0.8889},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:614.95,y:230.85,alpha:0.7778},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:580.2,y:241.55,alpha:0.6667},0).wait(1).to({scaleX:0.6444,scaleY:0.6444,x:545.4,y:252.15,alpha:0.5556},0).wait(1).to({scaleX:0.5556,scaleY:0.5556,x:510.65,y:262.85,alpha:0.4444},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:475.85,y:273.45,alpha:0.3333},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:441.05,y:284.15,alpha:0.2222},0).wait(1).to({scaleX:0.2889,scaleY:0.2889,x:406.3,y:294.75,alpha:0.1111},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:371.5,y:305.45,alpha:0},0).wait(15).to({_off:true},1).wait(73));

	// Firename
	this.instance_17 = new lib.Symbol3();
	this.instance_17.setTransform(444.5,378.55,1,1,0,0,0,162.3,27.6);
	this.instance_17.alpha = 0.1016;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(25).to({_off:false},0).wait(1).to({regX:162.5,regY:27.5,x:444.7,y:378.45,alpha:0.1375},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.2125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2875},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.3625},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.4375},0).wait(1).to({alpha:0.475},0).wait(1).to({alpha:0.5125},0).wait(1).to({alpha:0.55},0).wait(1).to({alpha:0.5875},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6625},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.7375},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.8875},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.9625},0).wait(1).to({alpha:1},0).wait(2).to({scaleX:0.9111,scaleY:0.9111,x:435.65,y:369.1,alpha:0.8889},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:426.65,y:359.75,alpha:0.7778},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:417.6,y:350.4,alpha:0.6667},0).wait(1).to({scaleX:0.6444,scaleY:0.6444,x:408.6,y:341.1,alpha:0.5556},0).wait(1).to({scaleX:0.5556,scaleY:0.5556,x:399.6,y:331.8,alpha:0.4444},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:390.6,y:322.45,alpha:0.3333},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:381.55,y:313.15,alpha:0.2222},0).wait(1).to({scaleX:0.2889,scaleY:0.2889,x:372.55,y:303.8,alpha:0.1111},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:363.5,y:294.45,alpha:0},0).wait(15).to({_off:true},1).wait(73));

	// Hanabi
	this.instance_18 = new lib.Symbol2();
	this.instance_18.setTransform(376.05,279.55,0.4,0.4,0,0,0,119.7,238.2);
	this.instance_18.alpha = 0.4883;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(14).to({_off:false},0).wait(1).to({regX:120,regY:238.5,scaleX:0.4545,scaleY:0.4545,x:384.5,y:277.7,alpha:0.5364},0).wait(1).to({scaleX:0.5091,scaleY:0.5091,x:392.9,y:275.85,alpha:0.5827},0).wait(1).to({scaleX:0.5636,scaleY:0.5636,x:401.3,y:274,alpha:0.6291},0).wait(1).to({scaleX:0.6182,scaleY:0.6182,x:409.65,y:272.1,alpha:0.6755},0).wait(1).to({scaleX:0.6727,scaleY:0.6727,x:418.05,y:270.2,alpha:0.7218},0).wait(1).to({scaleX:0.7273,scaleY:0.7273,x:426.4,y:268.3,alpha:0.7682},0).wait(1).to({scaleX:0.7818,scaleY:0.7818,x:434.8,y:266.4,alpha:0.8145},0).wait(1).to({scaleX:0.8364,scaleY:0.8364,x:443.15,y:264.5,alpha:0.8609},0).wait(1).to({scaleX:0.8909,scaleY:0.8909,x:451.55,y:262.65,alpha:0.9073},0).wait(1).to({scaleX:0.9455,scaleY:0.9455,x:459.95,y:260.75,alpha:0.9536},0).wait(1).to({scaleX:1,scaleY:1,x:468.35,y:258.85,alpha:1},0).wait(26).to({scaleX:0.9111,scaleY:0.9111,x:457.75,y:261.25,alpha:0.8889},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:447.15,y:263.65,alpha:0.7778},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:436.55,y:266.05,alpha:0.6667},0).wait(1).to({scaleX:0.6444,scaleY:0.6444,x:426,y:268.5,alpha:0.5556},0).wait(1).to({scaleX:0.5556,scaleY:0.5556,x:415.4,y:270.9,alpha:0.4444},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,x:404.8,y:273.3,alpha:0.3333},0).wait(1).to({scaleX:0.3778,scaleY:0.3778,x:394.25,y:275.75,alpha:0.2222},0).wait(1).to({scaleX:0.2889,scaleY:0.2889,x:383.6,y:278.15,alpha:0.1111},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:373.05,y:280.55,alpha:0},0).wait(15).to({_off:true},1).wait(73));

	// Fire
	this.instance_19 = new lib.Symbol1();
	this.instance_19.setTransform(978.25,472.05,0.2872,0.2874,0,0,0,133.2,174.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2).to({_off:false},0).wait(1).to({regX:133,regY:174,scaleX:0.3466,scaleY:0.3467,x:928.55,y:452.05},0).wait(1).to({scaleX:0.406,scaleY:0.4061,x:878.95,y:432.1},0).wait(1).to({scaleX:0.4654,scaleY:0.4655,x:829.35,y:412.2},0).wait(1).to({scaleX:0.5248,scaleY:0.5249,x:779.75,y:392.3},0).wait(1).to({scaleX:0.5842,scaleY:0.5843,x:730.1,y:372.3},0).wait(1).to({scaleX:0.6436,scaleY:0.6437,x:680.5,y:352.4},0).wait(1).to({scaleX:0.703,scaleY:0.7031,x:630.9,y:332.5},0).wait(1).to({scaleX:0.7624,scaleY:0.7625,x:581.3,y:312.55},0).wait(1).to({scaleX:0.8218,scaleY:0.8218,x:531.65,y:292.6},0).wait(1).to({scaleX:0.8812,scaleY:0.8812,x:482.05,y:272.7},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:432.45,y:252.75},0).wait(1).to({scaleX:1,scaleY:1,x:382.85,y:232.85},0).wait(46).to({scaleX:0.9525,scaleY:0.9525,x:422.55,y:248.8},0).wait(1).to({scaleX:0.905,scaleY:0.905,x:462.2,y:264.7},0).wait(1).to({scaleX:0.8574,scaleY:0.8575,x:501.9,y:280.65},0).wait(1).to({scaleX:0.8099,scaleY:0.81,x:541.55,y:296.6},0).wait(1).to({scaleX:0.7624,scaleY:0.7624,x:581.3,y:312.55},0).wait(1).to({scaleX:0.7149,scaleY:0.7149,x:621,y:328.5},0).wait(1).to({scaleX:0.6674,scaleY:0.6674,x:660.65,y:344.45},0).wait(1).to({scaleX:0.6198,scaleY:0.6199,x:700.35,y:360.35},0).wait(1).to({scaleX:0.5723,scaleY:0.5724,x:740,y:376.3},0).wait(1).to({scaleX:0.5248,scaleY:0.5249,x:779.75,y:392.3},0).wait(1).to({scaleX:0.4773,scaleY:0.4774,x:819.45,y:408.2},0).wait(1).to({scaleX:0.4298,scaleY:0.4299,x:859.1,y:424.15},0).wait(1).to({scaleX:0.3822,scaleY:0.3824,x:898.8,y:440.1},0).wait(1).to({scaleX:0.3347,scaleY:0.3348,x:938.45,y:456},0).wait(1).to({scaleX:0.2872,scaleY:0.2873,x:978.15,y:472},0).to({_off:true},1).wait(73));

	// Background
	this.instance_20 = new lib.Layer1();
	this.instance_20.setTransform(0,0,0.5333,0.5334);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(148));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,263.5,512,263.5);
// library properties:
lib.properties = {
	id: '2A0CA8247C6AEE439C477105C3E85E4E',
	width: 1024,
	height: 527,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HanabiGeomancyStances_atlas_1.png", id:"HanabiGeomancyStances_atlas_1"},
		{src:"images/HanabiGeomancyStances_atlas_2.png", id:"HanabiGeomancyStances_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2A0CA8247C6AEE439C477105C3E85E4E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;