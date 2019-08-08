(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.btn_login = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJBXIAAgGIAEAAQALAAAFgDQAFgEACgHIAAgSIAAhEQAAgXgFgLQgHgLgOAAQgVAAgWAZIAABYQAAASACADQADAGAEACQAFADAOAAIAAAGIhUAAIAAgGIADAAQANAAAFgGQAFgHAAgTIAAg+QAAgfgCgGQgBgHgDgCQgDgDgFAAQgFAAgHADIgDgGIAzgVIAIAAIAAAkQAegkAaAAQAOAAAKAGQAKAIAGAQQAEALAAAXIAABHQAAAQADAGQACAEAEADQAFADAMAAIAAAGg");
	this.shape.setTransform(132.8,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnCEIAAgGQAMgBAFgCQAEgCADgGQACgFAAgRIAAhBQAAgbgCgHQgBgGgDgDQgDgDgEABQgGAAgHACIgDgGIAzgVIAIAAIAACHQAAARACAFQACAFAFACQAEAEANAAIAAAGgAgLhiQgGgHAAgHQAAgIAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAIQAAAHgFAHQgGAFgIAAQgGAAgGgFg");
	this.shape_1.setTransform(118.1,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhHBwQgOgJAAgKQAAgFACgEQADgHAKgMIATgUQgKgFgEgFQgEgFAAgFQAAgHAGgJQAFgIATgQQgQgHgIgNQgIgOAAgRQAAgZATgSQATgTAeABQAXAAASAMIAkAAIAJAAIACABIABAHIgBAGIgCACIgJAAIgWAAQAKANAAAVQAAAYgSARQgSARgeAAQgNAAgNgEQgIAHgDAFQgDAFAAAEQAAACADAEQADACAJACIAaABQAlABAMABQARADAKALQALAKAAAPQAAAVgUASQgdAbguAAQgjABgZgRgAg2BAQgEAJAAAGQAAAJAKAGQATAMAiAAQAhAAAQgMQAQgMAAgMQAAgLgJgDQgKgEgdgBQgogCgXgDQgIAKgFAIgAgehrQgJAKAAAXQAAAdANARQAJALAPABQANAAAJgLQAJgLAAgWQAAgegMgQQgKgMgOAAQgNAAgKALg");
	this.shape_2.setTransform(103.5,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag+A8QgTgaAAghQAAgVAMgYQALgXATgLQATgLAUAAQAmAAAYAdQAUAaAAAgQAAAWgLAXQgLAYgTAMQgUALgWAAQgmAAgXgegAgYhHQgLAGgGAOQgFAPgBAXQAAAkAPAbQAPAbAXAAQASAAAMgPQALgPABgkQAAgsgUgaQgNgSgUAAQgJAAgKAGg");
	this.shape_3.setTransform(84.3,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhrB+IAAgHIAJAAQAQAAAHgLQAEgFAAgWIAAihQAAgYgFgGQgHgIgPAAIgJAAIAAgHIBxAAIAAAHQgTAAgIAEQgIAEgDAGQgDAFAAAXIAACdQAAAPADAGQACAEAEACQAFACAXAAIATAAQAdAAALgEQAMgFAKgLQAJgKAKgYIAGABIgVBFg");
	this.shape_4.setTransform(63.1,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AvJj0IeTAAIAAHpI+TAAg");
	this.shape_5.setTransform(97,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AvJD1IAAnpIeTAAIAAHpg");
	this.shape_6.setTransform(97,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,197,52);


(lib.btn_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAMCEIAAgHQAHAAADgBQACgDAAgEQAAgDgHgKIgzhDIAAA5QgBARADAEQADAFAEADQAEACAOAAIAAAHIhXAAIAAgHQAOAAAGgDQAEgCACgEQADgHAAgOIAAiaQAAgegCgGQgBgGgCgDQgEgCgFgBQgDAAgIAEIgEgHIAzgVIAJAAIAACoIAqgmIAQgQIACgEQAAgEgEgDQgDgDgHAAIAAgGIBKAAIAAAGQgPABgKADQgLAFgMALIgqAnIAqA3QASAXAHAGQAJAJAHADQAEABALAAIAAAHg");
	this.shape.setTransform(130.8,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxBCQgVgZgBgpQAAgnAZgZQAXgZAgAAQAaAAAQAOQAQAMAAAPQAAAHgFAEQgEAFgIAAQgLgBgGgGQgDgEgBgMQgBgKgGgGQgHgGgLABQgSAAgMANQgOASAAAeQAAAdAOAYQAPAYAZgBQASAAAOgMQALgIAKgXIAEADQgGAhgUASQgUASgZAAQgbAAgWgYg");
	this.shape_1.setTransform(112.7,48.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXBTQgFgHgBgPQgZAUgGAEQgKAEgMAAQgRAAgMgMQgLgMAAgUQAAgMAFgJQAIgNATgLQATgKAqgQIAAgHQAAgZgIgJQgIgKgOAAQgMAAgHAGQgHAHAAAIIABALQAAAIgFAFQgEAEgHAAQgHAAgEgEQgFgFAAgJQAAgQARgNQAQgNAdAAQAWAAAPAHQALAGAFAMQADAIAAAZIAAA5IABAeQABAFACACQABAAAAABQABAAAAAAQABAAABABQAAAAABAAQADAAACgCQAEgCALgLIAAAKQgVAcgTAAQgJAAgFgGgAgSAAQgOAIgHAJQgGAJAAALQAAANAIAJQAIAJAKAAQAOAAAWgTIAAhAQgbAMgIADg");
	this.shape_2.setTransform(96.4,48.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhwB+IAAgHIAKAAQAPAAAHgKQAEgHAAgVIAAihQAAgYgFgGQgHgIgOAAIgKAAIAAgHIBtAAQAdAAASAFQAcAGAPARQAOARAAAWQABATgMAPQgLAPgXAHQAaAFANAMQASARAAAZQAAATgMARQgLARgVAIQgVAIgqAAgAgbADIgNABIAABoQAWAFATAAQAiAAARgPQASgQAAgWQAAgPgIgNQgIgOgSgHQgSgIgaAAIgTAAgAgohsIAABgIAPACIAUABQAaAAAOgGQANgGAHgMQAIgMgBgOQAAgWgSgQQgSgPghAAQgTAAgOAEg");
	this.shape_3.setTransform(74,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AwUmUMAgpAAAIAAMpMggpAAAg");
	this.shape_4.setTransform(104.5,40.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AwUGVIAAspMAgpAAAIAAMpg");
	this.shape_5.setTransform(104.5,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,212,84);


(lib.mc_welcome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_back.on ("click" ,onBack.bind(this));
		
		function onBack(e) {
			this.parent.addChild (new lib.mc_login());
			this.parent.removeChild(this);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoKCHIg6igIg5CgIgGAAIhLjQIgLgcQgDgHgHgDQgGgEgLAAIAAgGIBdAAIAAAGIgFAAQgJAAgGAFQgFAEAAAGQAAAHAIAXIAyCNIAqh3IgOgnQgEgJgEgHIgGgGQgFgDgFgCIgLgBIAAgGIBiAAIAAAGIgGAAQgLAAgFAFQgEAEAAAIQAAAJAIAYIAwCIIAwiKQAIgXAAgJQAAgEgCgEQgDgEgEgBQgHgDgMAAIAAgGIBLAAIAAAGQgJAAgHAEQgGADgFAKQgEAGgIAZIhGDKgAJ7BuQgWgXAAgpQAAgrAXgXQAWgZAiAAQAcAAATATQASATAAAeIh1AAQAAAmASAVQATAWAZAAQAQAAANgJQAMgJAIgXIAGAEQgEAZgSAWQgTAUgcAAQgfAAgWgYgAKOgUQgMAMgCAVIBOAAQgBgQgDgHQgEgKgJgGQgKgGgKAAQgPAAgMAMgACSBoQgTgaAAghQAAgWALgXQAMgXATgLQATgLAVAAQAmAAAYAdQAUAZAAAgQAAAXgLAXQgLAYgTAMQgUALgXAAQgnAAgWgegAC3gbQgKAGgGAOQgGAOAAAXQAAAlAPAbQAPAbAYAAQASAAALgPQAMgPAAgkQAAgtgTgZQgOgSgUAAQgKAAgKAGgAgTBuQgWgYAAgqQAAgoAYgYQAXgZAhAAQAZAAARAOQAQANAAAOQAAAGgFAFQgEADgJAAQgLAAgFgGQgDgEgBgKQgBgLgHgGQgGgGgMAAQgSAAgMAOQgOATAAAcQAAAeAOAYQAPAYAaAAQASAAAOgNQAKgJAKgWIAFACQgGAigUASQgUASgZAAQgdAAgUgYgAmNBuQgWgXAAgpQAAgrAWgXQAXgZAhAAQAdAAASATQATATAAAeIh2AAQAAAmATAVQASAWAZAAQARAAAMgJQANgJAIgXIAGAEQgEAZgTAWQgTAUgcAAQgfAAgVgYgAl7gUQgMAMgCAVIBPAAQgBgQgDgHQgFgKgJgGQgJgGgKAAQgPAAgNAMgAICCBIAAgGIADAAQALgBAGgEQAFgDACgHIAAgSIAAhJQAAgTgFgJQgHgMgQABQgKAAgKAEQgKAFgOANIAAABIAABZQAAASACAFQACADAGADQAFAEANAAIAAAGIhWAAIAAgGQAOgBAFgDQAGgEACgGQABgDAAgQIAAhJQAAgUgGgIQgJgNgOAAQgKAAgKAGQgQAIgIAKIAABaQAAARADAGQACAFAEACQAFACAOABIAAAGIhUAAIAAgGQALgBAFgCQAFgCACgGQACgFAAgRIAAhAQAAgbgBgJQgBgFgDgDQgDgDgFABQgFAAgHACIgDgGIAzgVIAIAAIAAAkIAWgVQAIgHAKgEQAKgEAJAAQAQAAAMAJQALAJAEASQATgWANgHQANgHAOAAQAOAAAKAHQALAHAGAPQAEALAAAWIAABJQAAAQACAHQACADAFADQAFAEAMAAIAAAGgAiRCBIAAgGQAMgBAEgCQAEgCADgGQACgFAAgRIAAiZQAAgdgBgGQgBgHgDgCQgDgDgFABQgEAAgIACIgDgGIAzgVIAIAAIAADgQAAAQACAGQADAFAFACQAEAEAOAAIAAAGgAj6CBIAAgGQALgBAFgCQAEgCACgGQADgFAAgRIAAiZQAAgdgCgGQgBgHgDgCQgDgDgEABQgFAAgHACIgDgGIAygVIAJAAIAADgQAAAQACAGQACAFAFACQAFAEANAAIAAAGg");
	this.shape.setTransform(278.2,172.5);

	this.btn_back = new lib.btn_back();
	this.btn_back.name = "btn_back";
	this.btn_back.parent = this;
	this.btn_back.setTransform(281.5,292.9,1,1,0,0,0,104.5,40.5);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_back},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_welcome, new cjs.Rectangle(175.5,159,212,175.9), null);


(lib.mc_login = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var txt_pass =document.getElementById ("txt_pass");
		txt_pass.setAttribute("type" , "password");
		
		this.btn_login.on ("click" , onLogin.bind (this));
		
		function onLogin (e) {
			var user = document.getElementById ("txt_user").value;
			var pass = document.getElementById ("txt_pass").value;
			
			if (user == "admin" && pass =="123")
			{
			this.parent.addChild (new lib.mc_welcome ());
			this.parent.removeChild (this);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.txt_pass = new lib.an_TextInput({'id': 'txt_pass', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txt_pass.setTransform(337,231.6,1.5,1.5,0,0,0,50,11.1);

	this.txt_user = new lib.an_TextInput({'id': 'txt_user', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txt_user.setTransform(336.8,180.9,1.5,1.498,0,0,0,49.9,11.1);

	this.btn_login = new lib.btn_login();
	this.btn_login.name = "btn_login";
	this.btn_login.parent = this;
	this.btn_login.setTransform(359,324.5,1,1,0,0,0,97,24.5);
	new cjs.ButtonHelper(this.btn_login, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeCGIAAgXQgMANgMAFQgLAGgOgBQgcAAgUgWQgVgYAAglQAAgkAXgdQAXgeAkgBQAWABAOAOIAAggQAAgdgBgHQgCgGgDgDQgDgCgEAAQgFAAgIADIgCgGIAygWIAJAAIAADEQAAAeABAGQACAHADADQADADAEAAQAFAAAIgEIACAHIgyAUgAglgTQgRATAAAlQAAAlAQAVQAQATAVAAQAPAAAQgRIAAhXQgBgMgGgKQgFgKgJgGQgJgFgIAAQgQAAgNAOg");
	this.shape.setTransform(208.9,227.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8BYIAAgHQANAAAGgFQAEgCACgHQABgDAAgPIAAhBQAAgegBgFQgBgGgDgCQgEgDgEAAQgGAAgHADIgCgGIAzgWIAIAAIAAAnQAUgnAXAAQAKABAHAGQAGAGAAAIQAAAIgFAFQgEAEgHAAQgHABgIgHQgIgGgEgBQgDAAgEAEQgIAIgIARIAABRQAAAOADAHQACAFAGAEQAGADAMAAIAAAHg");
	this.shape_1.setTransform(192.6,231.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+A7QgTgZAAggQAAgXALgWQAMgYATgLQATgLAUAAQAnAAAXAdQAUAZAAAhQAAAWgLAXQgLAYgTALQgTAMgXAAQgmAAgXgfgAgZhHQgJAGgGAOQgHAPABAXQAAAkAOAbQAPAbAXAAQASAAALgPQAMgPAAgkQAAgsgTgaQgNgSgUAAQgKAAgKAGg");
	this.shape_2.setTransform(176.6,231.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAuBXIgqhrIgxBrIgHAAIg2iNQgGgNgFgGQgFgEgLgCIAAgHIBHAAIAAAHQgKAAgDADQgDADAAAFQAAAGADAIIAkBgIAlhOIgKgZQgEgLgHgEQgEgDgMAAIAAgHIBQAAIAAAHQgNAAgGAEQgDADAAAGIABAIIAnBhIAkhdQADgKAAgGQAAgDgDgDQgEgDgKAAIAAgHIA1AAIAAAHQgQACgIATIg4CRg");
	this.shape_3.setTransform(153.3,231.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBUIgKgBQgEAAgCAEIgGAAIAAg8IAGAAQAFAaAPANQAOANARAAQANAAAJgHQAHgIABgKQgBgNgIgJQgJgJgagNQgbgNgIgKQgJgLAAgQQAAgVAOgOQAPgOAWAAQAKAAAOAEIANADIAEgBQACgBACgFIAGAAIAAA6IgGAAQgHgcgLgJQgLgKgQAAQgNAAgIAHQgIAHAAAIQAAAKAGAIQAGAHARAJIAaANQAmARAAAeQAAAYgRAOQgSAOgWAAQgOAAgVgGg");
	this.shape_4.setTransform(132.5,231.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghBUIgKgBQgFAAgCAEIgGAAIAAg8IAGAAQAFAaAPANQAPANARAAQANAAAHgHQAJgIgBgKQABgNgKgJQgJgJgagNQgagNgJgKQgIgLAAgQQAAgVAPgOQAOgOAWAAQAKAAAOAEIAMADIAFgBQACgBACgFIAGAAIAAA6IgGAAQgHgcgLgJQgLgKgQAAQgNAAgIAHQgIAHAAAIQAAAKAGAIQAFAHASAJIAaANQAmARAAAeQAAAYgSAOQgRAOgWAAQgPAAgTgGg");
	this.shape_5.setTransform(117.7,231.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXBTQgFgHgBgPQgZAUgGAEQgKAEgMAAQgRAAgMgMQgLgMAAgUQAAgMAFgJQAIgNATgLQATgKAqgQIAAgHQAAgZgIgJQgIgKgOAAQgMAAgHAGQgHAHAAAIIABALQAAAIgFAFQgEAEgHAAQgHAAgEgEQgFgFAAgJQAAgQARgNQAQgNAdAAQAWAAAPAHQALAGAFAMQADAIAAAZIAAA5IABAeQABAFACACQABAAAAABQABAAAAAAQABAAABABQAAAAABAAQADAAACgCQAEgCALgLIAAAKQgVAcgTAAQgJAAgFgGgAgSAAQgOAIgHAJQgGAJAAALQAAANAIAJQAIAJAKAAQAOAAAWgTIAAhAQgbAMgIADg");
	this.shape_6.setTransform(102.2,231.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhfB+IAAgHIAKAAQAPAAAHgLQAEgFAAgWIAAihQAAgYgFgGQgHgIgOAAIgKAAIAAgHIBcAAQAhAAAUAHQATAHANARQAOAQAAAXQAAAfgUATQgVASglAAIgTgBQgKgBgMgDIAABJQAAAYAFAGQAHAIANAAIAKAAIAAAHgAgXhqIAABoIARACIAMABQATAAAPgOQANgPAAgYQAAgQgGgOQgHgOgMgHQgMgHgQAAQgIAAgPAEg");
	this.shape_7.setTransform(82.2,227.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgxBCQgWgYAAgoQAAgrAWgYQAXgYAhAAQAcAAATATQASATAAAfIh0AAQAAAlASAVQATAWAYAAQAQAAANgJQAMgJAIgWIAGADQgEAagTAUQgTAVgcAAQgeAAgVgYgAgfhAQgLAMgCAVIBNAAQgBgQgDgGQgFgLgIgGQgKgGgJAAQgPAAgNAMg");
	this.shape_8.setTransform(217.8,177.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA+BYIAAgHIADAAQALAAAGgFQAFgDACgGIAAgSIAAhIQAAgVgFgJQgHgLgQAAQgKAAgKAFQgKAEgOAOIAAACIAAAIIAABQQAAARACAFQACAEAFADQAFADANAAIAAAHIhVAAIAAgHQAPAAAFgDQAGgEABgHQACgDAAgPIAAhIQgBgVgFgJQgJgMgPAAQgJAAgLAFQgPAJgIAKIAABaQAAARADAFQACAFAEADQAEACAPAAIAAAHIhVAAIAAgHQAMAAAFgCQAEgDADgFQACgGAAgQIAAhAQAAgcgBgIQgBgGgEgDQgDgCgEAAQgFAAgIADIgCgGIAzgWIAIAAIAAAkIAWgUQAIgIAKgDQAKgFAJAAQAQAAAKAKQAMAJAEARQATgVANgIQANgHAOAAQAOAAAKAHQAKAIAHAPQAEALAAAXIAABIQAAAQACAGQACAEAFADQAFADALAAIAAAHg");
	this.shape_9.setTransform(194.5,177.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAXBTQgFgHgBgPQgZAUgGAEQgKAEgMAAQgRAAgMgMQgLgMAAgUQAAgMAFgJQAIgNATgLQATgKAqgQIAAgHQAAgZgIgJQgIgKgOAAQgMAAgHAGQgHAHAAAIIABALQAAAIgFAFQgEAEgHAAQgHAAgEgEQgFgFAAgJQAAgQARgNQAQgNAdAAQAWAAAPAHQALAGAFAMQADAIAAAZIAAA5IABAeQABAFACACQABAAAAABQABAAAAAAQABAAABABQAAAAABAAQADAAACgCQAEgCALgLIAAAKQgVAcgTAAQgJAAgFgGgAgSAAQgOAIgHAJQgGAJAAALQAAANAIAJQAIAJAKAAQAOAAAWgTIAAhAQgbAMgIADg");
	this.shape_10.setTransform(171.8,177.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAJBYIAAgHIAEAAQALAAAFgDQAFgFACgHIAAgRIAAhEQAAgYgFgKQgHgKgOAAQgVAAgWAXIAABZQAAARACAFQADAFAEADQAFACAOAAIAAAHIhUAAIAAgHIADAAQANAAAFgHQAFgGAAgTIAAg+QAAgegCgIQgBgGgDgDQgDgCgFAAQgFAAgHADIgDgGIAzgWIAIAAIAAAkQAegjAagBQAOAAAKAHQAKAHAGARQAEAKAAAXIAABIQAAAQADAGQACAFAEACQAFADAMAAIAAAHg");
	this.shape_11.setTransform(153.3,177.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag8BYIAAgHQANAAAGgFQAEgCACgHQABgDAAgPIAAhBQAAgegBgFQgBgGgDgCQgEgDgEAAQgGAAgHADIgCgGIAzgWIAIAAIAAAnQAUgnAXAAQAKABAHAGQAGAGAAAIQAAAIgFAFQgEAEgHAAQgHABgIgHQgIgGgEgBQgDAAgEAEQgIAIgIARIAABRQAAAOADAHQACAFAGAEQAGADAMAAIAAAHg");
	this.shape_12.setTransform(137.7,177.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxBCQgWgYAAgoQAAgrAXgYQAWgYAgAAQAdAAASATQATATAAAfIh1AAQABAlASAVQASAWAYAAQARAAANgJQAMgJAIgWIAGADQgEAagSAUQgTAVgcAAQgfAAgVgYgAgfhAQgLAMgDAVIBOAAQgBgQgDgGQgEgLgKgGQgJgGgJAAQgPAAgNAMg");
	this.shape_13.setTransform(122.9,177.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghBUIgKgBQgEAAgDAEIgGAAIAAg8IAGAAQAFAaAPANQAOANASAAQAMAAAIgHQAJgIAAgKQAAgNgJgJQgKgJgZgNQgbgNgIgKQgJgLAAgQQAAgVAPgOQAOgOAXAAQAJAAAOAEIANADIAEgBQACgBACgFIAGAAIAAA6IgGAAQgHgcgLgJQgLgKgQAAQgNAAgIAHQgIAHAAAIQAAAKAGAIQAFAHATAJIAaANQAlARAAAeQAAAYgRAOQgSAOgWAAQgPAAgTgGg");
	this.shape_14.setTransform(107.1,177.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag8ByQgWgOgJgYQgGgRAAgtIAAhhQAAgYgGgHQgGgHgPAAIgJAAIAAgHIBtAAIAAAHIgKAAQgQAAgGAKQgFAHAAAVIAABsQAAAPADATQACATAHAKQAHALAOAHQANAHASAAQAZAAATgLQAUgLAHgQQAHgRAAgoIAAhlQAAgYgFgGQgHgIgPAAIgJAAIAAgHIBZAAIAAAHIgJAAQgPAAgIAMQgEAGAAAVIAABlQAAAmgIAVQgHAVgWAPQgWAPgmAAQgoAAgVgPg");
	this.shape_15.setTransform(85.6,173.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("EgmbgbpMBM3AAAMAAAA3TMhM3AAAg");
	this.shape_16.setTransform(276,197);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("EgmbAbqMAAAg3TMBM3AAAMAAAA3TgAiLXwIeTAAIAAnqI+TAAg");
	this.shape_17.setTransform(276,197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_login},{t:this.txt_user},{t:this.txt_pass}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.5,18.5,495,357);


// stage content:
(lib.logintext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addChild (new lib.mc_login () );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: 'B417AE9E821A2F418585DFFAC2E57676',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
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
an.compositions['B417AE9E821A2F418585DFFAC2E57676'] = {
	getStage: function() { return exportRoot.getStage(); },
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;