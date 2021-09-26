(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"LilyEp1_EscapeVoid_atlas_1", frames: [[0,722,404,57],[0,1407,392,388],[842,0,973,199],[842,201,973,199],[842,402,973,199],[842,603,973,199],[0,804,973,199],[975,804,973,199],[0,1005,973,199],[975,1005,973,199],[406,722,98,46],[0,1206,973,199],[975,1206,973,199],[0,0,840,720]]}
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



(lib.CachedBmp_1 = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ArkeisiosBar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Evabar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.FamesBar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Lily1 = function() {
	this.initialize(img.Lily1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2540,1425);


(lib.Lilybar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Lilyexplainbar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.LilyGaspbar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Lilyponderbar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.menubutton = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.MinosBar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.SithonBar = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.textbutton = function() {
	this.initialize(ss["LilyEp1_EscapeVoid_atlas_1"]);
	this.gotoAndStop(13);
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
	this.instance = new lib._4();
	this.instance.setTransform(0,0,0.3625,0.3608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,142.1,140), null);


(lib.sitchat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.SithonBar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sitchat, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.narchat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.narchat, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.minchat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MinosBar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.minchat, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.menubtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.menubutton();
	this.instance.setTransform(-138,-64.75,2.8163,2.8163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-64.7,276,129.5);


(lib.lilyresttext = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-29.05,-24.05,0.0692,0.0668);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-24,58.1,48.1);


(lib.lilpond = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Lilyponderbar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lilpond, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.lilnorm = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Lilybar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lilnorm, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.lilgasp = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LilyGaspbar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lilgasp, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.lilexplain = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Lilyexplainbar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.5,-99.5,973,199);


(lib.impbtn = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-27.05,-23.15,0.0644,0.0644);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-23.1,54.1,46.3);


(lib.famchat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FamesBar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.famchat, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.evachat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Evabar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.evachat, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.arkchat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ArkeisiosBar();
	this.instance.setTransform(-486.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arkchat, new cjs.Rectangle(-486.5,-99.5,973,199), null);


(lib.nextscene = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-101,-17.3,0.5,0.5);

	this.instance_1 = new lib.menubtn();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-64.7,276,129.5);


(lib.menubtn1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Storybook\nStart", "20px 'Wide Latin'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 192;
	this.text.parent = this;
	this.text.setTransform(0.95,-27.9);

	this.titlebtns = new lib.menubtn();
	this.titlebtns.name = "titlebtns";
	new cjs.ButtonHelper(this.titlebtns, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.titlebtns},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-64.7,276,129.5);


// stage content:
(lib.LilyEp1_EscapeVoid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {lilyrestload:144,lilyrestscene:145,impload:72,impscene:73,titlestart:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,71,72,143,144,215];
	// timeline functions:
	this.frame_0 = function() {
		//Add function to the button
		var _this = this;
		
		
		
		this.titlebtns.addEventListener("click", nextScene)
		function nextScene () {
			_this.gotoAndPlay('impload');
		}
	}
	this.frame_71 = function() {
		var _this = this;
		_this.gotoAndPlay('titlestart');
	}
	this.frame_72 = function() {
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
		“Lets split up to search, send up a flare when you find her, you two go that way and Sithon you come with me.”
		==endend**
		“Lets split up to search, send up a flare when you find her, you two go that way and Sithon you come with me.”`;
		
		//split the RP up into paragraphs
		//all of the chat dialogue is separated by characters via == delimeters into paragraphs
		//all of the paragraphs are separated into name:text paras by ** delimiter 0 = name 1 = text
		let i = 0;	//index for chat
		var chat = txt.split("==");
		var para = chat[i].split("**");
		
		
		//Initialize Text
		txtupdate();
		this.impnext.visible = false;
		//this.impnext.visible = true;
		
		
		
		//Add function to the button
		this.impbtn.addEventListener("click", nextText)
		function nextText () {
			i++;
			para = chat[i].split("**");
			txtupdate();
			//console.log(i);
		}
		
		//Add function to the button
		this.impnext.addEventListener("click", nextScene)
		function nextScene () {
			root.gotoAndPlay('lilyrestload');
		}
		
		function txtupdate () {
			if (para[0] == "Narrarator"){
				root.impnarchat.visible = true;
				root.imparkchat.visible = false;
				root.impfamchat.visible = false;
				root.impminchat.visible = false;
				root.impsitchat.visible = false;
				root.imptext.text = para[1];
				root.imptext.x = 50;
				root.imptext.y = 0;
			} 
			else if (para[0] == "Arkeisios"){
				root.impnarchat.visible = false;
				root.imparkchat.visible = true;
				root.impfamchat.visible = false;
				root.impminchat.visible = false;
				root.impsitchat.visible = false;
				root.imptext.text = para[1];
				root.imptext.x = 440;
				root.imptext.y = 550;		
			}
		    else if (para[0] == "Fames"){
				root.impnarchat.visible = false;
				root.imparkchat.visible = false;
				root.impfamchat.visible = true;
				root.impminchat.visible = false;
				root.impsitchat.visible = false;
				root.imptext.text = para[1];
				root.imptext.x = 220;
				root.imptext.y = 550;
			}
		    else if (para[0] == "Minos"){
				root.impnarchat.visible = false;
				root.imparkchat.visible = false;
				root.impfamchat.visible = false;
				root.impminchat.visible = true;
				root.impsitchat.visible = false;
				root.imptext.text = para[1];
				root.imptext.x = 440;
				root.imptext.y = 550;		
			}
		    else if (para[0] == "Sithon"){
				root.impnarchat.visible = false;
				root.imparkchat.visible = false;
				root.impfamchat.visible = false;
				root.impminchat.visible = false;
				root.impsitchat.visible = true;
				root.imptext.text = para[1];
				root.imptext.x = 190;
				root.imptext.y = 550;		
			}
		    else{
				root.impnarchat.visible = false;
				root.imparkchat.visible = false;
				root.impfamchat.visible = false;
				root.impminchat.visible = false;
				root.impsitchat.visible = false;
				root.imptext.visible = false;
				root.impbtn.visible = false;
				root.impnext.visible = true;
			
			}
					
		}
	}
	this.frame_143 = function() {
		this.gotoAndPlay('impscene');
	}
	this.frame_144 = function() {
		let root = this;
		
		txt = `Narrator**
		Meanwhile, not far away, the woman they were searching for found a moment of respite hiding in an area behind some purplish-black crystal growth. She was quite winded and was struggling to catch her breath.
		==Eva**
		Whirling around to scan the immediate surroundings. “Current Location unknown… Warning! Seven thousand low tier voidsent detected in immediate vicinity, three voidsent not able to be quantified also in vicinity… 
		==Eva**
		"Immediate evacuation recommended… request instructions.” The machine blurted, glowing red as it continued to perform its scan of the new surroundings.
		==Lily Gasping**
		Still gasping for air, the woman put her back to the crystal and then slid down to sit for a moment. “Haaaa….. So you don't….. Know where.....we are?” She almost cried from the silliness of that statement. She took a moment to catch her breath 
		==Lily**
		“Silly Eva, we are in the void, the thirteenth shard of our world, we got sucked into the aetherial tear” 
		==Lily Ponder**
		She considered for a moment. “Eva, report on your aether reserves, do you have enough to help me open a new tear?” 
		==Lily Explain**
		I should need perhaps eighty percent of your maximum, and if you help me we can open a way home for us.”
		==Eva**
		Eva was the designation of the node that was assisting the mage. “Aether reserves at seventy one percent, full usage will result in extended shutdown of this unit pending recharge.”
		==Lily Ponder**
		Lily pondered, tapping her knuckle to her chin as she considered. “See if you can charge from these crystals here Eva, disable your protection circuits if you have to we need you to get that aether quickly” 
		==Lily**
		Lily was nervous when she suggested that, it was actually quite a risk to Eva, but she saw no other options to charge the Node.
		==endend**
		“ending”`;
		
		//split the RP up into paragraphs
		//all of the chat dialogue is separated by characters via == delimeters into paragraphs
		//all of the paragraphs are separated into name:text paras by ** delimiter 0 = name 1 = text
		let i = 0;	//index for chat
		var chat = txt.split("==");
		var para = chat[i].split("**");
		
		
		//Initialize Text
		txtupdate();
		this.lilyrestnext.visible = false;
		//this.impnext.visible = true;
		
		
		
		//Add function to the button
		this.lilyrestbtn.addEventListener("click", nextText)
		function nextText () {
			i++;
			para = chat[i].split("**");
			txtupdate();
			//console.log(i);
		}
		
		//Add function to the button
		this.lilyrestnext.addEventListener("click", nextScene)
		function nextScene () {
			root.gotoAndPlay('titlestart');
		}
		
		function txtupdate () {
			if (para[0] == "Narrator"){
				root.lilyrestnar.visible = true;
				root.lilyresteva.visible = false;
				root.lilyrestlilpond.visible = false;
				root.lilyrestlilgasp.visible = false;
				root.lilyrestlilnorm.visible = false;
				root.lilyrestlilexplain.visible = false;
				root.lilyresttext.text = para[1];
				root.lilyresttext.x = 450;
				root.lilyresttext.y = 0;
			} 
			else if (para[0] == "Eva"){
				root.lilyrestnar.visible = false;
				root.lilyresteva.visible = true;
				root.lilyrestlilpond.visible = false;
				root.lilyrestlilgasp.visible = false;
				root.lilyrestlilnorm.visible = false;
				root.lilyrestlilexplain.visible = false;
				root.lilyresttext.text = para[1];
				root.lilyresttext.x = 400;
				root.lilyresttext.y = 550;		
			}
		    else if (para[0] == "Lily"){
				root.lilyrestnar.visible = false;
				root.lilyresteva.visible = false;
				root.lilyrestlilpond.visible = false;
				root.lilyrestlilgasp.visible = false;
				root.lilyrestlilnorm.visible = true;
				root.lilyrestlilexplain.visible = false;
				root.lilyresttext.text = para[1];
				root.lilyresttext.x = 400;
				root.lilyresttext.y = 550;
			}
		    else if (para[0] == "Lily Gasping"){
				root.lilyrestnar.visible = false;
				root.lilyresteva.visible = false;
				root.lilyrestlilpond.visible = false;
				root.lilyrestlilgasp.visible = true;
				root.lilyrestlilnorm.visible = false;
				root.lilyrestlilexplain.visible = false;
				root.lilyresttext.text = para[1];
				root.lilyresttext.x = 400;
				root.lilyresttext.y = 550;		
			}
		    else if (para[0] == "Lily Ponder"){
				root.lilyrestnar.visible = false;
				root.lilyresteva.visible = false;
				root.lilyrestlilpond.visible = true;
				root.lilyrestlilgasp.visible = false;
				root.lilyrestlilnorm.visible = false;
				root.lilyrestlilexplain.visible = false;
				root.lilyresttext.text = para[1];
				root.lilyresttext.x = 400;
				root.lilyresttext.y = 550;		
			}
		    else if (para[0] == "Lily Explain"){
				root.lilyrestnar.visible = false;
				root.lilyresteva.visible = false;
				root.lilyrestlilpond.visible = false;
				root.lilyrestlilgasp.visible = false;
				root.lilyrestlilnorm.visible = false;
				root.lilyrestlilexplain.visible = true;
				root.lilyresttext.text = para[1];
				root.lilyresttext.x = 400;
				root.lilyresttext.y = 550;		
			}
		    else{
				root.lilyrestnar.visible = false;
				root.lilyresteva.visible = false;
				root.lilyrestlilpond.visible = false;
				root.lilyrestlilgasp.visible = false;
				root.lilyrestlilnorm.visible = false;
				root.lilyrestlilexplain.visible = false;
				root.lilyresttext.visible = false;
				root.lilyrestnext.visible = true;
				root.lilyrestbtn.visible = false;
			
			}
					
		}
	}
	this.frame_215 = function() {
		this.gotoAndPlay('lilyrestscene');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1).call(this.frame_72).wait(71).call(this.frame_143).wait(1).call(this.frame_144).wait(71).call(this.frame_215).wait(1));

	// lilyrestchat
	this.lilyrestbtn = new lib.lilyresttext();
	this.lilyrestbtn.name = "lilyrestbtn";
	this.lilyrestbtn.setTransform(994.95,743.95);
	new cjs.ButtonHelper(this.lilyrestbtn, 0, 1, 1);

	this.lilyrestnext = new lib.nextscene();
	this.lilyrestnext.name = "lilyrestnext";
	this.lilyrestnext.setTransform(900.95,678.9);
	new cjs.ButtonHelper(this.lilyrestnext, 0, 1, 1);

	this.lilyresttext = new cjs.Text("", "20px 'Verdana'");
	this.lilyresttext.name = "lilyresttext";
	this.lilyresttext.lineHeight = 26;
	this.lilyresttext.lineWidth = 536;
	this.lilyresttext.parent = this;
	this.lilyresttext.setTransform(449,21.95);

	this.lilyrestlilexplain = new lib.lilexplain();
	this.lilyrestlilexplain.name = "lilyrestlilexplain";
	this.lilyrestlilexplain.setTransform(513.5,660.5);

	this.lilyresteva = new lib.evachat();
	this.lilyresteva.name = "lilyresteva";
	this.lilyresteva.setTransform(513,660);

	this.lilyrestlilpond = new lib.lilpond();
	this.lilyrestlilpond.name = "lilyrestlilpond";
	this.lilyrestlilpond.setTransform(513,660);

	this.lilyrestlilgasp = new lib.lilgasp();
	this.lilyrestlilgasp.name = "lilyrestlilgasp";
	this.lilyrestlilgasp.setTransform(513,660);

	this.lilyrestlilnorm = new lib.lilnorm();
	this.lilyrestlilnorm.name = "lilyrestlilnorm";
	this.lilyrestlilnorm.setTransform(513,660);

	this.lilyrestnar = new lib.narchat();
	this.lilyrestnar.name = "lilyrestnar";
	this.lilyrestnar.setTransform(718,110,0.5961,1);

	this.lilrestnarchat = new lib.narchat();
	this.lilrestnarchat.name = "lilrestnarchat";
	this.lilrestnarchat.setTransform(720,110,0.5961,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lilyrestnar},{t:this.lilyrestlilnorm},{t:this.lilyrestlilgasp},{t:this.lilyrestlilpond},{t:this.lilyresteva},{t:this.lilyrestlilexplain},{t:this.lilyresttext},{t:this.lilyrestnext},{t:this.lilyrestbtn}]},144).to({state:[{t:this.lilrestnarchat}]},71).wait(1));

	// lilyrestbkgd
	this.instance = new lib.Lily1();
	this.instance.setTransform(1,0,0.4032,0.5389);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).wait(72));

	// impchat
	this.impnext = new lib.nextscene();
	this.impnext.name = "impnext";
	this.impnext.setTransform(896.95,666.95);
	new cjs.ButtonHelper(this.impnext, 0, 1, 1);

	this.impbtn = new lib.impbtn();
	this.impbtn.name = "impbtn";
	this.impbtn.setTransform(997.95,736.3);
	new cjs.ButtonHelper(this.impbtn, 0, 1, 1);

	this.imptext = new cjs.Text("", "20px 'Verdana'");
	this.imptext.name = "imptext";
	this.imptext.lineHeight = 26;
	this.imptext.lineWidth = 536;
	this.imptext.parent = this;
	this.imptext.setTransform(442,572);

	this.impminchat = new lib.minchat();
	this.impminchat.name = "impminchat";
	this.impminchat.setTransform(514.5,660.5);

	this.impsitchat = new lib.sitchat();
	this.impsitchat.name = "impsitchat";
	this.impsitchat.setTransform(514,660.5);

	this.impfamchat = new lib.famchat();
	this.impfamchat.name = "impfamchat";
	this.impfamchat.setTransform(514.5,660.5);

	this.impnarchat = new lib.narchat();
	this.impnarchat.name = "impnarchat";
	this.impnarchat.setTransform(317.55,110,0.5961,1,0,0,0,0.1,0);

	this.imparkchat = new lib.arkchat();
	this.imparkchat.name = "imparkchat";
	this.imparkchat.setTransform(514,660);

	this.instance_1 = new lib.ArkeisiosBar();
	this.instance_1.setTransform(27,560);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.imparkchat},{t:this.impnarchat},{t:this.impfamchat},{t:this.impsitchat},{t:this.impminchat},{t:this.imptext},{t:this.impbtn},{t:this.impnext}]},72).to({state:[{t:this.instance_1}]},71).to({state:[]},1).wait(72));

	// imp_background
	this.instance_2 = new lib.WoD1();
	this.instance_2.setTransform(1,1,0.4014,0.542);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).wait(71).to({_off:true},1).wait(72));

	// Lily
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(91.95,-105.95,1,1,0,0,0,71,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.9967,scaleY:0.9967,rotation:0.4545,x:91.8,y:-84.65},0).wait(1).to({scaleX:0.9934,scaleY:0.9934,rotation:0.909,x:92.1,y:-63.25},0).wait(1).to({scaleX:0.9901,scaleY:0.9901,rotation:1.3635,x:92.8,y:-41.95},0).wait(1).to({scaleX:0.9868,scaleY:0.9868,rotation:1.818,x:93.95,y:-20.6},0).wait(1).to({scaleX:0.9835,scaleY:0.9835,rotation:2.2726,x:95.4,y:0.65},0).wait(1).to({scaleX:0.9801,scaleY:0.9801,rotation:2.7271,x:97.25,y:21.95},0).wait(1).to({scaleX:0.9768,scaleY:0.9768,rotation:3.1816,x:99.35,y:43.15},0).wait(1).to({scaleX:0.9735,scaleY:0.9735,rotation:3.6361,x:101.8,y:64.4},0).wait(1).to({scaleX:0.9702,scaleY:0.9702,rotation:4.0906,x:104.45,y:85.45},0).wait(1).to({scaleX:0.9669,scaleY:0.9669,rotation:4.5451,x:107.45,y:106.6},0).wait(1).to({scaleX:0.9636,scaleY:0.9636,rotation:4.9996,x:110.65,y:127.7},0).wait(1).to({scaleX:0.9603,scaleY:0.9603,rotation:5.4541,x:114.15,y:148.75},0).wait(1).to({scaleX:0.957,scaleY:0.957,rotation:5.9087,x:117.95,y:169.75},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,rotation:6.3632,x:122,y:190.7},0).wait(1).to({scaleX:0.9503,scaleY:0.9503,rotation:6.8177,x:126.25,y:211.6},0).wait(1).to({scaleX:0.947,scaleY:0.947,rotation:7.2722,x:130.8,y:232.45},0).wait(1).to({scaleX:0.9437,scaleY:0.9437,rotation:7.7267,x:135.6,y:253.25},0).wait(1).to({scaleX:0.9404,scaleY:0.9404,rotation:8.1812,x:140.7,y:273.95},0).wait(1).to({scaleX:0.9371,scaleY:0.9371,rotation:8.6357,x:146.05,y:294.6},0).wait(1).to({scaleX:0.9338,scaleY:0.9338,rotation:9.0902,x:151.65,y:315.15},0).wait(1).to({scaleX:0.9305,scaleY:0.9305,rotation:9.5448,x:157.6,y:335.7},0).wait(1).to({scaleX:0.9272,scaleY:0.9272,rotation:9.9993,x:163.9,y:356.1},0).wait(1).to({scaleX:0.9238,scaleY:0.9238,rotation:10.4538,x:170.4,y:376.4},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,rotation:10.9083,x:177.35,y:396.55},0).wait(1).to({scaleX:0.9172,scaleY:0.9172,rotation:11.3628,x:184.65,y:416.65},0).wait(1).to({scaleX:0.9139,scaleY:0.9139,rotation:11.8173,x:192.3,y:436.55},0).wait(1).to({scaleX:0.9106,scaleY:0.9106,rotation:12.2718,x:200.4,y:456.3},0).wait(1).to({scaleX:0.9073,scaleY:0.9073,rotation:12.7263,x:209,y:475.8},0).wait(1).to({scaleX:0.904,scaleY:0.904,rotation:13.1809,x:218.1,y:495.1},0).wait(1).to({scaleX:0.9007,scaleY:0.9007,rotation:13.6354,x:227.85,y:514.05},0).wait(1).to({scaleX:0.8973,scaleY:0.8973,rotation:14.0899,x:238.15,y:532.75},0).wait(1).to({scaleX:0.894,scaleY:0.894,rotation:14.5444,x:249.3,y:551},0).wait(1).to({scaleX:0.8907,scaleY:0.8907,rotation:14.9989,x:261.35,y:568.6},0).wait(1).to({scaleX:0.8874,scaleY:0.8874,rotation:23.7034,x:288.15,y:576.1},0).wait(1).to({rotation:26.1358,x:303.4,y:577.1},0).wait(1).to({rotation:28.5682,x:318.65,y:578.6},0).wait(1).to({rotation:31.0007,x:333.8,y:580.45},0).wait(1).to({rotation:33.4331,x:349,y:582.55},0).wait(1).to({rotation:35.8655,x:364.05,y:585},0).wait(1).to({rotation:38.2979,x:379.15,y:587.65},0).wait(1).to({rotation:40.7304,x:394.2,y:590.55},0).wait(1).to({rotation:43.1628,x:409.15,y:593.7},0).wait(1).to({rotation:45.5952,x:424.1,y:597.05},0).wait(1).to({rotation:48.0276,x:438.95,y:600.7},0).wait(1).to({rotation:50.46,x:453.8,y:604.55},0).wait(1).to({rotation:52.8925,x:468.5,y:608.65},0).wait(1).to({rotation:55.3249,x:483.2,y:613},0).wait(1).to({rotation:57.7573,x:497.75,y:617.65},0).wait(1).to({rotation:60.1897,x:512.25,y:622.55},0).wait(1).to({rotation:62.6221,x:526.65,y:627.75},0).wait(1).to({rotation:65.0546,x:540.9,y:633.4},0).wait(1).to({rotation:67.487,x:554.95,y:639.35},0).wait(1).to({rotation:69.9194,x:568.9,y:645.75},0).wait(1).to({rotation:72.3518,x:582.55,y:652.75},0).wait(1).to({rotation:74.7843,x:595.9,y:660.2},0).wait(1).to({rotation:77.2167,x:608.75,y:668.4},0).wait(1).to({rotation:79.6491,x:621.15,y:677.45},0).wait(1).to({rotation:82.0815,x:632.7,y:687.5},0).wait(1).to({rotation:84.5139,x:643,y:698.75},0).wait(1).to({rotation:86.9464,x:651.5,y:711.45},0).wait(1).to({rotation:89.3788,x:657.85,y:725.4},0).wait(1).to({rotation:91.8112,x:663.8,y:739.45},0).wait(1).to({rotation:94.2436,x:669.85,y:753.6},0).wait(1).to({rotation:96.676,x:675.8,y:767.7},0).wait(1).to({rotation:99.1085,x:681.65,y:781.75},0).wait(1).to({rotation:101.5409,x:687.3,y:796},0).wait(1).to({rotation:103.9733,x:692.5,y:810.4},0).wait(1).to({rotation:106.4057,x:696.9,y:825.05},0).wait(1).to({rotation:108.8382,x:700.1,y:840.05},0).wait(1).to({rotation:111.2706,x:701.8,y:855.2},0).wait(1).to({rotation:113.703,x:702,y:870.55},0).to({_off:true},1).wait(144));

	// button
	this.titlebtns = new lib.menubtn1();
	this.titlebtns.name = "titlebtns";
	this.titlebtns.setTransform(886,708.75);
	new cjs.ButtonHelper(this.titlebtns, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.titlebtns).wait(71).to({_off:true},1).wait(144));

	// background
	this.text = new cjs.Text("All images, music, and sounds are those found in Final Fantasy XIV\n\n*** FINAL FANTASY XIV © 2010 - 2017 SQUARE ENIX CO., LTD. All Rights Reserved. ***", "16px 'MS Reference Sans Serif'", "#333300");
	this.text.lineHeight = 21;
	this.text.lineWidth = 404;
	this.text.parent = this;
	this.text.setTransform(12.05,652.9);

	this.instance_4 = new lib.Title();
	this.instance_4.setTransform(0,0,0.4949,0.6615);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.text}]}).to({state:[]},72).wait(144));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,208.1,527,745.1999999999999);
// library properties:
lib.properties = {
	id: '17E3112BEF8C9A4D9DA57286F78B033C',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Lily1.png", id:"Lily1"},
		{src:"images/Title.png", id:"Title"},
		{src:"images/WoD1.png", id:"WoD1"},
		{src:"images/LilyEp1_EscapeVoid_atlas_1.png", id:"LilyEp1_EscapeVoid_atlas_1"}
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
an.compositions['17E3112BEF8C9A4D9DA57286F78B033C'] = {
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