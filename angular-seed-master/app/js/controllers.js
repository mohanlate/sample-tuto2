'use strict';

/* Controllers */

var app = angular.module('toyBuddyApp.controllers', []);

var myControllers = {};

/*controllers.ctrlPhones = function ($scope, $http){
	 $http.get({method: 'GET', url: "data/data.json"})
	 .success(function(data, status, response, config) {
		 	$scope.phones = data;
		 });
*/	

myControllers.ctrlCatalog = function ($scope){

	$scope.catalog = [
	      			{id : "15",itemTypeId : "3", name : "Noddy: Master tubby goblin", description : "Noddy and his friends live in toyland where toys come to life adventures never cease join noddy on his adventures with naughty goblins speeding cards flying rockets bouncing balls and fanastic magical potions.In this all new series of 'Noddy Master Tubby Goblin And Other Stories' join Noddy on his adventures.", ageGroup : "1-2-3-4-5-6", miTypeId : "7-4-5", amount : "0", brand : "Excel", isFeatured : "0", nLikes : "0", imageURL : "masterTubbyGoblin.jpg", nParts : "0"},
	    			{id : "12",itemTypeId : "0", name : "Playhouse Tent -Jungle", description : "All children love the Jungle fun cottage , brightly colored interactive fun that encourages active make-believe play which helps children develop both physically and mentally. Get the kids away from the TV! Encourage your child imagination with a physically interactive toy like the Jungle fun cottage 1. With an opening for the window and the door, children can peek out and say hello! 2. Constructed of durable, non-toxic and non-allergenic pvc plastic 3. Kids can play house or fort or camping or anything else they dream up! 4. Cleans easily with soapy water 5. Easy to assemble plastic rod frame 6. Affordable kids fun for hours of imaginative play!", ageGroup : "1-2-3-4-5-6", miTypeId : "0-5-6", amount : "0", brand : "Intext", isFeatured : "0", nLikes : "0", imageURL : "tentjungle.jpg", nParts : "0"},
	    			{id : "13",itemTypeId : "2", name : "Feast on fruits", description : "This unique tree triangle puzzle bears fruit in more ways than one! Besides recognizing and identifying 18 popular fruits, children can make other assortments and learn more fruity facts. They can make jigsaw assortment of fruits grown on trees separately from those grown on vines or berries, assortments based on single, few and multi-seeded fruits, or those which are juicy or pulpy etc.", ageGroup : "1-2-3-4", miTypeId : "3-4-6", amount : "0", brand : "Toy Craft", isFeatured : "0", nLikes : "0", imageURL : "feastOnFruits.jpg", nParts : "0"},
	    			{id : "10",itemTypeId : "0", name : "Magical Dancing Flower", description : "Shapes, music, flowers and fun all come together with the Magical Dancing Flower! This engaging infant toy features two modes of play with a light-up motorized flower that dances to music. Start infants off on a fun note with this engaging and educational learning toy that moves and dances with your child! Two modes of play designed specifically for the curious infant include bright lights, fun sounds and colorful shapes. In addition, five colored piano keys along with shape sorters activate motion and sounds to ignite babys imagination! Learning Mode allows infants to play and learn with five colorful piano keys and play with some adorable insect friends. The shape buttons teach new shapes and objects for a full array of fun! Planting Mode invites you to play melodies and hear insect sound effects while the shape buttons present fun lessons about digging,planting and watering plants!", ageGroup : "1-2", miTypeId : "0-1-6", amount : "0", brand : "Vtech", isFeatured : "1", nLikes : "0", imageURL : "vtechmagicaldancing.jpg", nParts : "0"},
	    			{id : "11",itemTypeId : "0", name : "Thomas & Friends Explore and Find - See n Say", description : "Plays fun sounds and phrases. Locate engines, objects, and destinations! 2 Ways to play: 1. Explore and Discover: Point the arrow to one of the engines, objects,or destinations. Pull the lever to hear them identified along with a fun sound. 2. Find the Story: Point the arrow to 'Sir Topham Hatt' and pull the lever. Listen to a Thomas and Friends story and point the arrow to the engine, object or destination you are asked to find!", ageGroup : "0-1-2-3-4", miTypeId : "5-6-7", amount : "0", brand : "Fisher Price", isFeatured : "0", nLikes : "0", imageURL : "thomasspinwheel.jpg", nParts : "0"},
	    			{id : "7",itemTypeId : "0", name : "Stack n Roll Little Golf", description : "The B Kids Stack n Roll Little Golf Set lets toddlers stack and create a new ball drop mini golf course each time they play. The B Kids Stack n Roll Little Golf Set is made of solid construction for long-lasting fun indoors or outside. Encourages hand-eye coordination and fine motor skills", ageGroup : "1-2", miTypeId : "0-4-5", amount : "0", brand : "B Kids", isFeatured : "0", nLikes : "0", imageURL : "StacknRollGolf.jpg", nParts : "0"},
	    			{id : "8",itemTypeId : "0", name : "My Discovery House", description : "Push, slide, open, close, turn?a learning home for little ones where there is always more to explore. 5 play areas offer more than 75 learning responses. Children can learn opposites and daily routines and listen to fun songs and stories. Parents can connect to the online LeapFrog Learning Path for customized learning insights and ideas to expand the learning.", ageGroup : "1-2", miTypeId : "0-1-6-7", amount : "0", brand : "Leap Frog", isFeatured : "0", nLikes : "0", imageURL : "leapfrogmydiscovery.jpg", nParts : "0"},
	    			{id : "9",itemTypeId : "0", name : "Stack n Surprise Blocks Peek-a-Boo Choo-Choo", description : "Bring building fun to a new level with music, lights, and peek-a-boo, pop-up action. Baby can stack four character blocks on the trains building surfaces, then push it along to make them come to life as silly faces pop up and down. Music plays and lights dance when baby presses the smokestack", ageGroup : "1-2", miTypeId : "0-1", amount : "0", brand : "Fisher Price", isFeatured : "0", nLikes : "0", imageURL : "FP_BlocksChooChoo.jpg", nParts : "0"},
	    			{id : "6",itemTypeId : "0", name : "Laugh & Learn Peek-a-Boo Cuckoo", description : "A friendly light-up birdie pops out with a greeting, and lots of songs and activities keep baby busy! Press the light-up nose for a counting song, spin the dial to learn about night and day, turn the key, slide the beads, spin the clock hands and pass the time with plenty of learning fun! Plays 10+ songs and tunes, with fun sounds, phrases and volume control for quiet play", ageGroup : "1-2", miTypeId : "0-1-7", amount : "0", brand : "Fisher Price", isFeatured : "0", nLikes : "0", imageURL : "Fisher price_peekaboo cuckoo.jpg", nParts : "0"}
    ];
	 
	$scope.orderProp = "ageGroup";
};
	
myControllers.ctrlLearningResource = function ($scope, $routeParams){

		$scope.learningResourceId = $routeParams.id;
};
	

app.controller(myControllers);
