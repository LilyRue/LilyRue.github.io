(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"LilyEp1_atlas_1", frames: [[842,331,916,247],[1855,0,186,80],[1760,331,203,80],[500,1053,299,81],[1478,928,392,388],[1478,580,531,346],[0,1053,498,245],[842,931,599,330],[842,580,634,349],[1872,928,98,46],[0,0,1853,329],[0,331,840,720]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.menubutton = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Textbox = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.textbutton = function() {
	this.initialize(ss["LilyEp1_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Title = function() {
	this.initialize(img.Title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2069,1161);


(lib.WoD1 = function() {
	this.initialize(img.WoD1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2551,1417);// helper functions:

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


(lib.TitleLily = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392,388);


(lib.titlebtns = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-227.65,-75.25,0.5,0.5);

	this.instance_1 = new lib.menubutton();
	this.instance_1.setTransform(-325.85,-152.95,6.65,6.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.8,-152.9,651.7,305.9);


(lib.SithonChat = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Sithon", "bold 30px 'Tahoma'", "#333300");
	this.text.lineHeight = 38;
	this.text.lineWidth = 121;
	this.text.parent = this;
	this.text.setTransform(538.75,-150.5);

	this.instance = new lib.Bitmap8();
	this.instance.setTransform(326,-165);

	this.instance_1 = new lib.Textbox();
	this.instance_1.setTransform(-924.95,-165,0.9984,1.003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SithonChat, new cjs.Rectangle(-924.9,-165,1849.9,330), null);


(lib.Narrate = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Textbox();
	this.instance.setTransform(-926.5,-164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Narrate, new cjs.Rectangle(-926.5,-164.5,1853,329), null);


(lib.MinosChat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-709,-137.8,0.5,0.5);

	this.instance_1 = new lib.Bitmap9();
	this.instance_1.setTransform(-924.9,-174.5);

	this.instance_2 = new lib.Textbox();
	this.instance_2.setTransform(-924.95,-155.5,0.9984,1.003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MinosChat, new cjs.Rectangle(-924.9,-174.5,1849.9,349), null);


(lib.impbtn1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.textbutton();
	this.instance.setTransform(-49.1,-42.1,0.1169,0.1169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-42.1,98.30000000000001,84.2);


(lib.FamesChat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(740.45,-53.4,0.5,0.5);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.setTransform(445.05,-80);

	this.instance_2 = new lib.Textbox();
	this.instance_2.setTransform(-943,-165,0.9984,1.003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FamesChat, new cjs.Rectangle(-943,-165,1886.1,330), null);


(lib.ArkeisiosChat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-666.95,-143.25,0.4943,0.4943);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-924.85,-172.95);

	this.instance_2 = new lib.Textbox();
	this.instance_2.setTransform(-924.9,-156.95,0.9983,1.003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ArkeisiosChat, new cjs.Rectangle(-924.9,-172.9,1849.9,346), null);


(lib.titlebtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.titlebtns();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titlebtn, new cjs.Rectangle(-325.8,-152.9,651.7,305.9), null);


// stage content:
(lib.LilyEp1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ImpSceneLoad:90,ImpScene:91,title:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,89,90,178];
	// timeline functions:
	this.frame_0 = function() {
		//Add function to the button
		var _this = this;
		
		
		
		this.titlebtns.addEventListener("click", nextScene)
		function nextScene () {
			_this.gotoAndPlay('ImpSceneLoad');
		}
	}
	this.frame_89 = function() {
		var _this = this;
		_this.gotoAndPlay('title');
	}
	this.frame_90 = function() {
		let root = this;
		
		txt = `Narrarator**
		Falling footsteps in the distance could be heard as someone was running, searching for a place to hide. Tap tap tap tap tap, a not rhythmic sound as someone clearly not physically fit was trying to run away and hide. Not far away, a patrol of imps, a minor type of voidsent was desperately searching for this fleeing woman.
		==Arkeisios**
		“Where did she go!?”
		==Fames**
		“You were the one that had her restrained, ~~YOU~~ tell me where she went!”
		==Arkeisios**
		“She just disappeared right in front of my eyes, she just ‘Vanish’ed!”
		==Minos**
		Frustrated, the squad leader silenced the troops. “SILENCE! If we don’t re-capture her after dragging her into the void, the Emperor will have us ‘disintegrated’. As Minos spoke his voice trembled slightly in fear.
		==Narrarator**
		The two Imps looked to each other, a pin drop could be heard in the sudden silence as the squabble ended just then. A scout Imp came rushing towards the group.
		==Sithon**
		“There you are, I have been searching all over for you. Ophellia says she is ready for soul extraction so you had better hurry and take the captured woman to the castle… wait, where is she?” The Imp was seemingly exhausted from rushing so quickly that it just then noticed the situation.
		==Minos**
		“It seems she was more resourceful than we were told, she used some trick to escape.” Minos then sent up a flare to put all nearby patrols on alert. “We will find her, the Emperor will still have her soul.”
		==Sithon**
		Snorting in disgust “Useless soldiers, you had better hope you find her, if you don’t you will be lucky if the Emperor only has you killed, it is more likely he will allow Ophellia to experiment on you, she has gotten very good at creating Chimera out of damned voidsent from what I saw, although it is clear they suffer.
		==Minos**
		“Lets split up to search, send up a flare when you find her, you two go that way and Sithon you come with me.”`;
		
		//split the RP up into paragraphs
		//all of the chat dialogue is separated by characters via == delimeters into paragraphs
		//all of the paragraphs are separated into name:text paras by ** delimiter 0 = name 1 = text
		let i = 0;	//index for chat
		var chat = txt.split("==");
		var para = chat[i].split("**");
		
		
		//Initialize Text
		txtupdate();
		
		
		
		//Add function to the button
		this.impbtn.addEventListener("click", nextText)
		function nextText () {
			i++;
			para = chat[i].split("**");
			txtupdate();
			console.log(i);
		}
		
		function txtupdate () {
			if (para[0] == "Narrarator"){
				root.NarrateText.visible = true;
				root.ArkeisiosText.visible = false;
				root.FamesText.visible = false;
				root.MinosText.visible = false;
				root.SithonText.visible = false;
				root.imptext.text = para[1];
				root.imptext.x = 330;
				root.imptext.y = 30;
			} 
			else if (para[0] == "Arkeisios"){
				root.NarrateText.visible = false;
				root.ArkeisiosText.visible = true;
				root.FamesText.visible = false;
				root.MinosText.visible = false;
				root.SithonText.visible = false;
		        root.imptext.text = para[1];
		        root.imptext.x = 500;
		        root.imptext.y = 750;		
			}
		    else if (para[0] == "Fames"){
				root.NarrateText.visible = false;
				root.ArkeisiosText.visible = false;
				root.FamesText.visible = true;
				root.MinosText.visible = false;
				root.SithonText.visible = false;
				root.imptext.text = para[1];
				root.imptext.x = 275;
				root.imptext.y = 745;
			}
		    else if (para[0] == "Minos"){
				root.NarrateText.visible = false;
				root.ArkeisiosText.visible = false;
				root.FamesText.visible = false;
				root.MinosText.visible = true;
				root.SithonText.visible = false;
		        root.imptext.text = para[1];
		        root.imptext.x = 535;
		        root.imptext.y = 745;		
			}
		    else{
				root.NarrateText.visible = false;
				root.ArkeisiosText.visible = false;
				root.FamesText.visible = false;
				root.MinosText.visible = false;
				root.SithonText.visible = true;
		        root.imptext.text = para[1];
		        root.imptext.x = 170;
		        root.imptext.y = 745;		
			}
					
		}
	}
	this.frame_178 = function() {
		this.gotoAndPlay('ImpScene');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1).call(this.frame_90).wait(88).call(this.frame_178).wait(1));

	// Chat
	this.impbtn = new lib.impbtn1();
	this.impbtn.name = "impbtn";
	this.impbtn.setTransform(1878.05,1041.55,1.0178,1.0095);
	new cjs.ButtonHelper(this.impbtn, 0, 1, 1);

	this.imptext = new cjs.Text("", "30px 'Verdana'", "#333300");
	this.imptext.name = "imptext";
	this.imptext.lineHeight = 38;
	this.imptext.lineWidth = 1196;
	this.imptext.parent = this;
	this.imptext.setTransform(173,746.4);

	this.SithonText = new lib.SithonChat();
	this.SithonText.name = "SithonText";
	this.SithonText.setTransform(960,889.4);

	this.MinosText = new lib.MinosChat();
	this.MinosText.name = "MinosText";
	this.MinosText.setTransform(960,890.5);

	this.FamesText = new lib.FamesChat();
	this.FamesText.name = "FamesText";
	this.FamesText.setTransform(962,889.4);

	this.ArkeisiosText = new lib.ArkeisiosChat();
	this.ArkeisiosText.name = "ArkeisiosText";
	this.ArkeisiosText.setTransform(955.1,879.5,1.0054,1.0116,0,0,0,0.1,0.1);

	this.NarrateText = new lib.Narrate();
	this.NarrateText.name = "NarrateText";
	this.NarrateText.setTransform(960,182.35,0.9984,1.003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.NarrateText},{t:this.ArkeisiosText},{t:this.FamesText},{t:this.MinosText},{t:this.SithonText},{t:this.imptext,p:{color:"#333300"}},{t:this.impbtn,p:{x:1878.05,y:1041.55}}]},90).to({state:[{t:this.NarrateText},{t:this.ArkeisiosText},{t:this.FamesText},{t:this.MinosText},{t:this.SithonText},{t:this.imptext,p:{color:"#000000"}},{t:this.impbtn,p:{x:1882.7,y:1044.25}}]},88).wait(1));

	// background
	this.instance = new lib.WoD1();
	this.instance.setTransform(0,1,0.7526,0.7622);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).wait(89));

	// Lily
	this.instance_1 = new lib.TitleLily("synched",0);
	this.instance_1.setTransform(163,-243,1,1,0,0,0,196,194);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:0.7195,x:163.5,y:-219.1},0).wait(1).to({rotation:1.439,x:164.3,y:-195.3},0).wait(1).to({rotation:2.1584,x:165.3,y:-171.5},0).wait(1).to({rotation:2.8779,x:166.65,y:-147.8},0).wait(1).to({rotation:3.5974,x:168.3,y:-124.15},0).wait(1).to({rotation:4.3169,x:170.25,y:-100.55},0).wait(1).to({rotation:5.0364,x:172.45,y:-77.05},0).wait(1).to({rotation:5.7559,x:175,y:-53.6},0).wait(1).to({rotation:6.4753,x:177.7,y:-30.15},0).wait(1).to({rotation:7.1948,x:180.85,y:-6.8},0).wait(1).to({rotation:7.9143,x:184.25,y:16.5},0).wait(1).to({rotation:8.6338,x:187.95,y:39.7},0).wait(1).to({rotation:9.3533,x:191.9,y:62.9},0).wait(1).to({rotation:10.0727,x:196.2,y:86.05},0).wait(1).to({rotation:10.7922,x:200.8,y:109.05},0).wait(1).to({rotation:11.5117,x:205.6,y:132.05},0).wait(1).to({rotation:12.2312,x:210.75,y:155},0).wait(1).to({rotation:12.9507,x:216.15,y:177.85},0).wait(1).to({rotation:13.6701,x:221.9,y:200.7},0).wait(1).to({rotation:14.3896,x:227.95,y:223.45},0).wait(1).to({rotation:15.1091,x:234.25,y:246.15},0).wait(1).to({rotation:15.8286,x:240.85,y:268.8},0).wait(1).to({rotation:16.5481,x:247.75,y:291.35},0).wait(1).to({rotation:17.2676,x:254.9,y:313.9},0).wait(1).to({rotation:17.987,x:262.4,y:336.3},0).wait(1).to({rotation:18.7065,x:270.2,y:358.75},0).wait(1).to({rotation:19.426,x:278.25,y:381.15},0).wait(1).to({rotation:20.1455,x:286.6,y:403.45},0).wait(1).to({rotation:20.865,x:295.25,y:425.7},0).wait(1).to({rotation:21.5844,x:304.15,y:447.85},0).wait(1).to({rotation:22.3039,x:313.4,y:470},0).wait(1).to({rotation:23.0234,x:322.95,y:492},0).wait(1).to({rotation:23.7429,x:332.7,y:514.05},0).wait(1).to({rotation:24.4624,x:342.8,y:536},0).wait(1).to({rotation:25.1818,x:353.2,y:557.85},0).wait(1).to({rotation:25.9013,x:363.9,y:579.65},0).wait(1).to({rotation:26.6208,x:374.85,y:601.45},0).wait(1).to({rotation:27.3403,x:386.15,y:623.2},0).wait(1).to({rotation:28.0598,x:397.7,y:644.85},0).wait(1).to({rotation:28.7793,x:409.55,y:666.45},0).wait(1).to({rotation:29.4987,x:421.7,y:688},0).wait(1).to({rotation:30.2182,x:434.1,y:709.5},0).wait(1).to({rotation:30.9377,x:446.85,y:730.9},0).wait(1).to({rotation:34.2502,x:459.85,y:752.25},0).wait(1).to({rotation:37.5627,x:499.85,y:756.85},0).wait(1).to({rotation:40.8752,x:539.2,y:761.65},0).wait(1).to({rotation:44.1877,x:577.85,y:766.85},0).wait(1).to({rotation:47.5002,x:615.75,y:772.35},0).wait(1).to({rotation:50.8127,x:653.1,y:778.2},0).wait(1).to({rotation:54.1252,x:689.65,y:784.35},0).wait(1).to({rotation:57.4377,x:725.6,y:790.85},0).wait(1).to({rotation:60.7502,x:760.85,y:797.65},0).wait(1).to({rotation:64.0627,x:795.45,y:804.8},0).wait(1).to({rotation:67.3752,x:829.3,y:812.25},0).wait(1).to({rotation:70.6876,x:862.5,y:820},0).wait(1).to({rotation:74.0001,x:895,y:828.1},0).wait(1).to({rotation:77.3126,x:926.95,y:836.55},0).wait(1).to({rotation:80.6251,x:958.1,y:845.35},0).wait(1).to({rotation:83.9376,x:988.6,y:854.45},0).wait(1).to({rotation:87.2501,x:1018.4,y:863.8},0).wait(1).to({rotation:90.5626,x:1047.6,y:873.55},0).wait(1).to({rotation:93.8751,x:1076.05,y:883.65},0).wait(1).to({rotation:97.1876,x:1103.8,y:894},0).wait(1).to({rotation:100.5001,x:1130.95,y:904.7},0).wait(1).to({rotation:103.8126,x:1157.35,y:915.75},0).wait(1).to({rotation:107.1251,x:1183.15,y:927.1},0).wait(1).to({rotation:110.4376,x:1208.2,y:938.75},0).wait(1).to({rotation:113.7501,x:1232.6,y:950.75},0).wait(1).to({rotation:117.0626,x:1256.35,y:963.15},0).wait(1).to({rotation:120.3751,x:1279.4,y:975.75},0).wait(1).to({rotation:123.6876,x:1301.75,y:988.75},0).wait(1).to({rotation:127.0001,x:1323.4,y:1002.1},0).wait(1).to({rotation:130.3126,x:1344.4,y:1015.7},0).wait(1).to({rotation:133.6251,x:1364.7,y:1029.65},0).wait(1).to({rotation:136.9376,x:1384.4,y:1043.95},0).wait(1).to({rotation:140.2501,x:1403.35,y:1058.55},0).wait(1).to({rotation:143.5625,x:1421.65,y:1073.5},0).wait(1).to({rotation:146.875,x:1439.25,y:1088.75},0).wait(1).to({rotation:150.1875,x:1456.2,y:1104.35},0).wait(1).to({rotation:153.5,x:1472.45,y:1120.25},0).wait(1).to({rotation:156.8125,x:1488,y:1136.4},0).wait(1).to({rotation:160.125,x:1502.95,y:1153.05},0).wait(1).to({rotation:163.4375,x:1517.15,y:1169.9},0).wait(1).to({rotation:166.75,x:1530.65,y:1187.1},0).wait(1).to({rotation:170.0625,x:1543.5,y:1204.6},0).wait(1).to({rotation:173.375,x:1555.65,y:1222.5},0).wait(1).to({rotation:176.6875,x:1567.2,y:1240.7},0).wait(1).to({rotation:180,x:1578,y:1259.25},0).wait(1).to({x:1588.15,y:1278.1},0).to({_off:true},1).wait(89));

	// button
	this.titlebtns = new lib.titlebtn();
	this.titlebtns.name = "titlebtns";
	this.titlebtns.setTransform(1617.1,964.05);
	new cjs.ButtonHelper(this.titlebtns, 0, 1, 1);

	this.titlebtn = new lib.titlebtn();
	this.titlebtn.name = "titlebtn";
	this.titlebtn.setTransform(1617.1,964.05);
	new cjs.ButtonHelper(this.titlebtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titlebtns}]}).to({state:[{t:this.titlebtn}]},89).to({state:[]},1).wait(89));

	// Background
	this.text = new cjs.Text("All images, music, and sounds are those found in Final Fantasy XIV\n\n*** FINAL FANTASY XIV © 2010 - 2017 SQUARE ENIX CO., LTD. All Rights Reserved. ***", "20px 'MS Reference Sans Serif'", "#333300");
	this.text.lineHeight = 26;
	this.text.lineWidth = 573;
	this.text.parent = this;
	this.text.setTransform(17.35,933.1);

	this.instance_2 = new lib.Title();
	this.instance_2.setTransform(-52,-67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text}]}).to({state:[{t:this.instance_2},{t:this.text}]},89).to({state:[]},1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(908,103,1109,1369.1);
// library properties:
lib.properties = {
	id: '536388A993F30946B64D81E08621DF07',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Title.png", id:"Title"},
		{src:"images/WoD1.png", id:"WoD1"},
		{src:"images/LilyEp1_atlas_1.png", id:"LilyEp1_atlas_1"}
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
an.compositions['536388A993F30946B64D81E08621DF07'] = {
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