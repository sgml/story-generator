namespace.module('agherriot.story-generator.objects', 
	function (exports, require) {
	"use strict";
	
	var utility = require('agherriot.story-generator.utilities');
	
	exports.extend({
		"World": World
	});
	
	/**
	 * Creates a new World object.
	 * @class This Object tracks the description of the world
	 * and the sceneEntity that are contained within the scene.
	 */ 
	function World(location) {
		"use strict";
		
		var _location;
		var _sceneEntities;
		
		var locationNames = ["Castle", "Desert island hut"];

	    if ( location === undefined ) {
	        _location = utility.randomSelection( locationNames );
	    } else {
	        _location = location;
	    }
	    
//	    descriptiveWords = new Array();
//	    utility.addWordToList(this.descriptiveWords, positiveAdjectives);
	    
	    _sceneEntities = new Array();
	    _sceneEntities[0] = new SceneEntity();
	    _sceneEntities[1] = new SceneEntity();
	    
	    
	    this.toString = function() {
	    	return "World: " + _location;
	    };
	    
	    this.openingLine = function() {
	    	return utility.adlib([ 
          	    ["It was a {0} and {1} night!", 
          	     	[visualAdjectives, audioAdjectives] ],
          	     	
          	    ["Once upon a time, there was a {0} " + this.location + ".", 
          	     	[textureAdjectives]],
          	     	
          	    ["All was {0} in the " + this.location + ", even the weather was {1}.", 
          	     	[audioAdjectives, positiveAdjectives]],
          	     	
          	     [""]
          	    //there live a ___
          	    // along time ago.
          	]);	
	    	
	    };
	    
	    this.visualDescription = function() {
	    	return "It looked nice.  ";
	    	// The styling of the room was reminesciennt of a ___ ___.
	    	// The decor could be described as ___ and ___.
	    	// 
	    };

	    this.audioDescription = function() {
	    	return "It sounded quiet.  ";
	    	// The faint sounds of ___ echoed throughout the room.
	    	// The sound could best be described as __ and ____.
	    	// An echo of ___ could be heard ___.
	    	// The wisps of ____ and ___ were 
	    };

	    this.smellDescription = function() {
	    	
	    	return utility.adlib([ 
	      	    ["The {0} room was filled with a {1} and {1} odour.", 
	      	     	[visualAdjectives, smellAdjectives] ],
	      	     	
	      	    ["Upon entering the {0} room, you notice a {1}, {1} smell.", 
	      	     	[positiveAdjectives, smellAdjectives]],
	      	     	
	      	    ["There was a hint of {0} {1} {2} smell that hung in the room, "
	      	     + "as well as a touch of {1} {2} to compliment it.", 
	      	     	[neutralAdjectives, smellAdjectives, smellNouns] ]
	    	]);	
	    	
	    	// A smell of ___ hung in the hair as if a had recently been there.
	    	
	    };

	    this.initialDescription = function() {
	    	
	    	var paragraph = this.openingLine();
	    	
	    	var descriptions = [this.visualDescription, 
	    	                    this.audioDescription,
	    	                    this.smellDescription];
	    	
	    	utility.shuffle( descriptions );
	    	
	    	paragraph += descriptions[0]();
	    	paragraph += descriptions[1]();	
	    	paragraph += descriptions[2]();
	    	
	    	return paragraph;

	    };
	    
	}
	
});