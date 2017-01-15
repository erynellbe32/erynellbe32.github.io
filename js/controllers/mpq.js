myApp.controller('mpqCtrl',function($scope) {


    /**
     * TODO
     * set Scope on each value
     * 1st function push on scope on after verified submission
     * 2nd function on maps and reduces array values on next
     * return values on each scope
     */


  /**
   * Declaration of Scope Values for each S1-S14
   * @type {number[]}
   */
    $scope.rawDimensionS01 = [0];
    $scope.rawDimensionS02 = [0];
    $scope.rawDimensionS03 = [0];
    $scope.rawDimensionS04 = [0];
    $scope.rawDimensionS05 = [0];
    $scope.rawDimensionS06 = [0];
    $scope.rawDimensionS07 = [0];
    $scope.rawDimensionS08 = [0];
    $scope.rawDimensionS09 = [0];
    $scope.rawDimensionS10 = [0];
    $scope.rawDimensionS11 = [0];
    $scope.rawDimensionS12 = [0];
    $scope.rawDimensionS13 = [0];
    $scope.rawDimensionS14 = [0];


    $scope.rawSumUp = function () {
        if ( $scope.testQuestions.group == 's01') {
            // pointer
            $scope.rawDimensionS01.push(value)

        }


    };

    $scope.verfiyAnswer = function () {
        alert("READY TO SUBMIT?")
    };

    $scope.allRawSum()// upon verified submission

    /*
    $scope.getrawSum = function(values) {  // set function on NgRepeat on Results page
    return values // returns total parameter
      .map(function(x) { return x.raw; }) // maps length of array
      .reduce(function(a, b) { return a + b; });  // adds all array values
    };
    */


  /**
   * TODO STEN Array
   * @type {*[]}
   * if sumRawValue = min && max {.lenghtArray, return stenvalue == arraylength}
   *
   */





//TODO Array vs Object

    $scope.testQuestions = [ // refactoring to array objects, and for key value pairing
        {
        "id": "mpq001", // refactored from rawscore to ID
        "textQuestion":"I seem to have the same ideas as other people",
        "raw": 0,
        "group": 'S01',
        "reverseValue": 'false'
        }, {
        "id": "mpq002",
        "textQuestion":"I tend to follow the rules",
        "raw":0,
        "group": 'S02',
        "reverseValue": 'false'
        },{
        "id": 'mpq003',
        "textQuestion":"I dislike discussing theories and concepts",
        "raw":0,
        "group": 'S03',
        "reverseValue": 'false'
        },{
        "id": 'mpq004',
        "textQuestion":"I fail to push my own views and ideas",
        "raw":0,
        "group": 'S04',
        "reverseValue": 'false'
        },{
        "id": 'mpq005',
        "textQuestion":"I find it hard to put people at ease",
        "raw": 0,
        "group": "S05",
        "reverseValue": 'false'
        },{
        "id": "mpq006",
        "textQuestion":"I forget to ask people what they think",
        "raw": 0,
        "group": "S06",
        "reverseValue": 'false'
        },{
        "id":"mpq007",
        "textQuestion":"I keep my personal emotions under control",
        "raw": 0,
        "group": "S07",
        "reverseValue": 'false'
        },{
        "id":"mpq008",
        "textQuestion":"I tend to dislike working on my own",
        "raw": 0,
        "group": "S08",
        "reverseValue": 'false'
        },{
        "id": "mpq009",
        "textQuestion":"I make decisions without gathering a lot of information",
        "raw": 0,
        "group": "S09",
        "reverseValue": 'false'
        },{
        "id": "mpq010",
        "textQuestion":"I dislike successful people",
        "raw": 0,
        "group": "S10",
        "reverseValue": 'false'
        },{
        "id": "mpq011",
        "textQuestion":"I find my Values clash with those of my colleagues",
        "raw": 0,
        "group": "S11",
        "reverseValue": 'false'
        },{
        "id": "mpq012",
        "textQuestion":"I leave jobs unfinished",
        "raw": 0,
        "group": "S12",
        "reverseValue": 'false'
        },{
        "id": "mpq013",
        "textQuestion":"I find it hard to take decisions",
        "raw": 0,
        "group": "S13",
        "reverseValue": 'false'
        },{
        "id": "mpq014",
        "textQuestion":"I can handle criticism without getting defensive",
        "raw": 0,
        "group": "S14",
        "reverseValue": 'false'
        },{
        "id": "mpq015",
        "textQuestion":"I dislike planning ahead",
        "raw": 0,
        "group": "S15",
        "reverseValue": 'false'
        },{
        "id": "mpq016",
        "textQuestion":"I invent new ways of doing things",
        "raw": 0,
        "group": 'S01',
        "reverseValue": 'true'
        },{
        "id": "mpq017",
        "textQuestion":"I am prepared to ignore rules and procedures",
        "raw": 0,
        "group": 'S02',
        "reverseValue": 'true'
        },{
        "id": "mpq018",
        "textQuestion":"I like to let my imagination run free",
        "raw": 0,
        "group": 'S03',
        "reverseValue": 'true'
        }, {
        "id":"mpq019",
        "textQuestion":"I tend to argue my own point of view",
        "raw": 0,
        "group": 'S04',
        "reverseValue": 'true'
        },{
        "id":"mpq020",
        "textQuestion":"I find other people support my ideas",
        "raw": 0,
        "group": "S05",
        "reverseValue": 'true'
        },{
        "id":"mpq021",
        "textQuestion":"I praise people for their efforts",
        "raw": 0,
        "group": "S06",
        "reverseValue": 'true'
        },{
        "id":"mpq022",
        "textQuestion":"I express my feelings rather than keep them to myself",
        "raw": 0,
        "group": "S07",
        "reverseValue": 'true'
        },{
        "id": "mpq023",
        "textQuestion":"I like to solve my own problems",
        "raw": 0,
        "group": "S08",
        "reverseValue": 'true'
        },{
        "id": "mpq024",
        "textQuestion":"I weigh up different options before taking decisions",
        "raw": 0,
        "group": "S09",
        "reverseValue": 'true'
        },{
        "id": "mpq025",
        "textQuestion":"I set myself challenges",
        "raw": 0,
        "group": "S10",
        "reverseValue": 'true'
        },{
        "id": "mpq026",
        "textQuestion":"I tend to feel a strong sense of duty",
        "raw": 0,
        "group": "S11",
        "reverseValue": 'true'
        },{
        "id": "mpq027",
        "textQuestion":"I set myself high standards",
        "raw": 0,
        "group": "S12",
        "reverseValue": 'true'
        },{
        "id": "mpq028",
        "textQuestion":"I feel in full control of things",
        "raw": 0,
        "group": "S13",
        "reverseValue": 'true'
        },{
        "id": "mpq029",
        "textQuestion":"I worry about what others think of me",
        "raw": 0,
        "group": "S14",
        "reverseValue": 'true'
        },{
        "id": "mpq030",
        "textQuestion":"I am keen to try new approaches",
        "raw": 0,
        "group": "S15",
        "reverseValue": 'true'
        },{
        "id": "mpq031",
        "textQuestion":"I find it hard to see how to improve things",
        "raw": 0,
        "group": 'S01',
        "reverseValue": 'false'
        },{
        "id": "mpq032",
        "textQuestion":"I prefer established methods to new approaches",
        "raw": 0,
        "group": 'S02',
        "reverseValue": 'false'
        },{
        "id": "mpq033",
        "textQuestion":"I tend to approach tasks from the usual angles",
        "raw": 0,
        "group": 'S03',
        "reverseValue": 'false'
        },{
        "id": "mpq034",
        "textQuestion":"I find it difficult to hold my ground against a group",
        "raw": 0,
        "group": 'S04',
        "reverseValue": 'false'
        },{
        "id": "mpq035",
        "textQuestion":"I find it difficult to mix in social situations",
        "raw": 0,
        "group": "S05",
        "reverseValue": 'false'
        },{
        "id": "mpq036",
        "textQuestion":"I tend to ignore other people's feelings",
        "raw": 0,
        "group": "S06",
        "reverseValue": 'false'
        }, {
        "id": "mpq037",
        "textQuestion":"I keep my personal views about people to myself",
        "raw": 0,
        "group": "S07",
        "reverseValue": 'false'
        },{
        "id": "mpq038",
        "textQuestion":"I work best as a member of team",
        "raw": 0,
        "group": "S08",
        "reverseValue": 'false'
        }, {
        "id": "mpq039",
        "textQuestion":"I take decisions without necessarily establishing the facts",
        "raw": 0,
        "group": "S09",
        "reverseValue": 'false'
        },{
        "id": "mpq040",
        "textQuestion":"I think a lot about the present rather than the future",
        "raw": 0,
        "group": "S10",
        "reverseValue": 'false'
        }, {
        "id": "mpq041",
        "textQuestion":"I am apt to treat people with authority insensitively",
        "raw": 0,
        "group": "S11",
        "reverseValue": 'false'
        }, {
        "id": "mpq042",
        "textQuestion":"I forget to check the quality of my work",
        "raw": 0,
        "group": "S12",
        "reverseValue": 'false'
        }, {
        "id": "mpq043",
        "textQuestion":"I forget to check the quality of my work",
        "raw": 0,
        "group": "S13",
        "reverseValue": 'false'
        },{
        "id": "mpq044",
        "textQuestion":"I can take unpopular decisions without any difficulty",
        "raw": 0,
        "group": "S14",
        "reverseValue": 'false'
        }, {
        "id": "mpq045",
        "textQuestion":"I tend to be unrealistic about what I can achieve",
        "raw": 0,
        "group": "S15",
        "reverseValue": 'false'
        },{
        "id": "mpq046",
        "textQuestion":"I am person who originates changes",
        "raw": 0,
        "group": 'S01',
        "reverseValue": 'true'
        },{
        "id": "mpq047",
        "textQuestion":"I tend to challenge rules and procedures",
        "raw": 0,
        "group": 'S02',
        "reverseValue": 'true'
        }, {
        "id": "mpq048",
        "textQuestion":"I am interested in new ideas and innovations",
        "raw": 0,
        "group": 'S03',
        "reverseValue": 'true'
        },{
        "id": "mpq049",
        "textQuestion":"I have strong views on how things should be done",
        "raw": 0,
        "group": 'S04',
        "reverseValue": 'true'
        }, {
        "id": "mpq050",
        "textQuestion":"People seem to ask for my advice",
        "raw": 0,
        "group": "S05",
        "reverseValue": 'true'
        },{
        "id": "mpq051",
        "textQuestion":"In a group, I acknowledge good points other people make",
        "raw": 0,
        "group": "S06",
        "reverseValue": 'true'
        }, {
        "id": "mpq052",
        "textQuestion":"I let people know how I feel about things",
        "raw": 0,
        "group": "S07",
        "reverseValue": 'true'
        }, {
        "id": "mpq053",
        "textQuestion":"I require a lot of personal space",
        "raw": 0,
        "group": "S08",
        "reverseValue": 'true'
        }, {
        "id": "mpq054",
        "textQuestion":"I tend to check the logic of my thinking",
        "raw": 0,
        "group": "S09",
        "reverseValue": 'true'
        }, {
        "id": "mpq055",
        "textQuestion":"I need to feel I am accomplishing something",
        "raw": 0,
        "group": "S10",
        "reverseValue": 'true'
        }, {
        "id": "mpq056",
        "textQuestion":"People have a responsibility to work hard for society",
        "raw": 0,
        "group": "S11",
        "reverseValue": 'true'
        }, {
        "id": "mpq057",
        "textQuestion":"I tend to be a perfectionist in my work",
        "raw": 0,
        "group": "S12",
        "reverseValue": 'true'
        }, {
        "id": "mpq058",
        "textQuestion":"I take action when I see what needs to be done",
        "raw": 0,
        "group": "S13",
        "reverseValue": 'true'
        }, {
        "id": "mpq059",
        "textQuestion":"I feel threatened by people who don't like me",
        "raw": 0,
        "group": "S14",
        "reverseValue": 'true'
        }, {
        "id": "mpq060",
        "textQuestion":"I remain calm in difficult situations",
        "raw": 0,
        "group": "S15",
        "reverseValue": 'true'
        },  {
        "id": "mpq061",
        "textQuestion":"I have to work hard to make things happen",
        "raw": 0,
        "group": 'S01',
        "reverseValue": 'false'
        },  {
        "id": "mpq062",
        "textQuestion":"I am inclined to do things in fairly conventional ways",
        "raw": 0,
        "group": 'S02',
        "reverseValue": 'false'
        },  {
        "id": "mpq063",
        "textQuestion":"I dislike tackling complex tasks",
        "raw": 0,
        "group": 'S03',
        "reverseValue": 'false'
        }, {
        "id": "mpq064",
        "textQuestion":"I hold back if I suspect people won't like what I say",
        "raw": 0,
        "group": 'S04',
        "reverseValue": 'false'
        }, {
        "id": "mpq065",
        "textQuestion":"I tend to unsure of the impact I have on people",
        "raw": 0,
        "group": "S05",
        "reverseValue": 'false'
        }, {
        "id": "mpq066",
        "textQuestion":"I forget to check people's views",
        "raw": 0,
        "group": "S06",
        "reverseValue": 'false'
        }, {
        "id": "mpq067",
        "textQuestion":"I keep quiet about my ambitions",
        "raw": 0,
        "group": "S07",
        "reverseValue": 'false'
        }, {
        "id": "mpq068",
        "textQuestion":"I enjoy working closely with people",
        "raw": 0,
        "group": "S08",
        "reverseValue": 'false'
        }, {
        "id": "mpq069",
        "textQuestion":"I fail to predict the consequences of my actions",
        "raw": 0,
        "group": "S09",
        "reverseValue": 'false'
        }, {
        "id": "mpq070",
        "textQuestion":"I dislike the competitive aspect of work",
        "raw": 0,
        "group": "S10",
        "reverseValue": 'false'
        }, {
        "id": "mpq071",
        "textQuestion":"Traditions prevent progress in modern society",
        "raw": 0,
        "group": "S11",
        "reverseValue": 'false'
        }, {
        "id": "mpq072",
        "textQuestion":"I miss deadlines",
        "raw": 0,
        "group": "S12",
        "reverseValue": 'false'
        }, {
        "id": "mpq073",
        "textQuestion":"I dislike being in charge",
        "raw": 0,
        "group": "S13",
        "reverseValue": 'false'
        },{
        "id": "mpq074",
        "textQuestion":"I feel content about what I am achieving",
        "raw": 0,
        "group": "S14",
        "reverseValue": 'false'
        }, {
        "id": "mpq075",
        "textQuestion":"I tend to boast about my achievements",
        "raw": 0,
        "group": "S15",
        "reverseValue": 'false'
        }, {
        "id": "mpq076",
        "textQuestion":"I seem to have original ideas",
        "raw": 0,
        "group": 'S01',
        "reverseValue": 'true'
        }, {
        "id": "mpq077",
        "textQuestion":"I am apt to make things up as I go along",
        "raw": 0,
        "group": 'S02',
        "reverseValue": 'true'
        },  {
        "id": "mpq078",
        "textQuestion":"I tend to need change to stay interested",
        "raw": 0,
        "group": 'S03',
        "reverseValue": 'true'
        }, {
        "id": "mpq079",
        "textQuestion":"I am inclined to look critically at people in charge",
        "raw": 0,
        "group": 'S04',
        "reverseValue": 'true'
        }, {
        "id": "mpq080",
        "textQuestion":"I tend to take control when others are uncertain what to do",
        "raw": 0,
        "group": "S05",
        "reverseValue": 'true'
        }, {
        "id": "mpq081",
        "textQuestion":"I apologise when I have made a mistake",
        "raw": 0,
        "group": "S06",
        "reverseValue": 'true'
        }, {
        "id": "mpq082",
        "textQuestion":"I share my problems with other people",
        "raw":0,
        "group": "S07",
        "reverseValue": 'true'
        }, {
        "id": "mpq083",
        "textQuestion":"I prefer to find out things by myself",
        "raw": 0,
        "group": "S08",
        "reverseValue": 'true'
        }, {
        "id": "mpq084",
        "textQuestion":"I approach things in a logical manner",
        "raw": 0,
        "group": "S09",
        "reverseValue": 'true'
        }, {
        "id": "mpq085",
        "textQuestion":"I like to win",
        "raw": 0,
        "group": "S10",
        "reverseValue": 'true'
        }, {
        "id": "mpq086",
        "textQuestion":"Attitude and respect is the way to win people's hearts",
        "raw": 0,
        "group": "S11",
        "reverseValue": 'true'
        }, {
        "id": "mpq087",
        "textQuestion":"I work harder than the average person",
        "raw": 0,
        "group": "S12",
        "reverseValue": 'true'
        }, {
        "id": "mpq088",
        "textQuestion":"I manage to cope with stress",
        "raw": 0,
        "group": "S13",
        "reverseValue": 'true'
        }, {
        "id": "mpq089",
        "textQuestion":"I feel a need to please others",
        "raw": 0,
        "group": "S14",
        "reverseValue": 'true'
        }, {
        "id": "mpq090",
        "textQuestion":"I treat people as my equal",
        "raw": 0,
        "group": "S15",
        "reverseValue": 'true'
        }
    ];




/*
    $scope.questionraw = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
        26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
        55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,
        84,85,86,87,88,89];

*/



/*    
    $scope.random = function() {
        return 0.5 - Math.random();
    };

    $scope.abc = {};
    $scope.abc.ok = 'wat';

    var list_index = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
    26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
    55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,
    84,85,86,87,88,89];

    var j = 0;
    while(list_index.length > 0) {
        var i = Math.floor(list_index.length * Math.random());
      if (i >= list_index.length)
        i --;
        
      var val = list_index.splice(i, 1);
      $scope.testQuestions[j]._order = val[0];
      j ++;
    }

*/

// "st": {{"min":0},{"max":11}},


    $scope.mpqPriDims = [
        {
            id: "mpqS01",
            "average": 0,
            scale: "Originality",
            "leftDesc": "Implements ideas and changes", // nghide
            "rightDesc": "Originates action, invents things", // ngshow
            "stenArray" : [
                {min:0, max:11},
                {min:12, max:12},
                {min:23, max:14},
                {min:15, max:16},
                {min:17, max:18},
                {min:19, max:20},
                {min:21, max:22},
                {min:23, max:24},
                {min:25, max:26},
                {min:27, max:30}
                ]
            // "stenArray": [ "st1": {["min":0,"max":11]},"st2": {["min":12,"max":12]}],
            // "st3": {{"min":13},{"max":14}},"st4": {{"min":15},{"max":16}},"st5": {{"min":17},{"max":18}},
            // "st6": {{"min":19},{"max":20}},"st": {{"min":21},{"max":22}},"st": {{"min":23},{"max":24}},
            // "st": {{"min":25},{"max":26}},"st": {{"min":27},{"max":30}}],

        }, {

        id: "mpqS02",
        "average": 0,
        scale: "Rule Consciousness",
        "leftDesc": "Keeps to rules, reduces risks",
        "rightDesc": "Challenges assumptions, takes risks",
// "stenArray": ["0-8", "9-10",  "11-12", "13-14", "15-16", "17-18", "19-20", "21-22", "23-24", "25-30"],
        "stenArray" : [{min:0, max:8},{min:9, max:10},{min:11, max:12},{min:13, max:14},{min:15, max:16},{min:17, max:18},{min:19, max:20},{min:21, max:22},{min:23, max:24},{min:25, max:30}]
        }, {
        id: "mpqS03",
        "average": 0,
        scale: "Openness to Change",
        "leftDesc": "Practical, grounded, task oriented",
        "rightDesc": "Imaginative, change oriented, experimental",
        "stenArray": [{min:0,max:12},{min:13,max:14},{min:15,max:16},{min:17,max:19},{min:20,max:21},{min:22,max:23},{min:24,max:25},{min:26,max:27},{min:28,max:29},{min:30,max:30}]
        }, {
        id:"mpqS04",
        scale: "Assertiveness",
        "average": 0,
        "leftDesc": "Holds back ideas, gives way to others",
        "rightDesc": "Assertive, persuasive, convincing",
        "stenArray": [{min:0,max:13},{min:14,max:14},{min:15,max:16},{min:17,max:18},{min:19,max:20},{min:21,max:22},{min:23,max:23},{min:24,max:25},{min:26,max:27},{min:28,max:30}]
        }, {
        id:"mpqS05",
        scale: "Social Confidence",
        "average":0,
        "leftDesc": "Less comfortable in social situations",
        "rightDesc": "Fits in quickly, interacts effectively",
        "stenArray": [{min:0,max:13},{min:14,max:15}, {min:16,max:16},{min:17,max:18},{min:19,max:19},{min:20,max:21},{min:22,max:23},{min:24,max:24},{min:25,max:26},{min:27,max:30}]
        }, {
        id:"mpqS06",
        scale: "Empathy",
        "average":0,
        "leftDesc": "Individualistic, self reliant",
        "rightDesc": "Supportive, sensitive, considerate",
        "stenArray": [{min:0,max:16},{min:17,max:17},{min:18,max:19},{min:20,max:21},{min:22,max:22},{min:23,max:24},{min:25,max:25},{min:26,max:27},{min:28,max:29},{min:30,max:30}]
        },{
        id:"mpqS07",
        scale: "Communicativeness",
        "average":0,
        "rightDesc": "Communicative, open, expressive",
        "leftDesc": "Reserved, quiet, distant from people",
        "stenArray": [{min:0,max:9},{min:10,max:11},{min:12,max:13},{min:14,max:15},{min:16,max:16},{min:17,max:18},{min:19,max:20},{min:21,max:21},{min:22,max:23},{min:24,max:30}]
        },{
        id:"mpqS08",
        scale: "Independence",
        "average":0,
        "leftDesc": "Sociable, group-oriented",
        "rightDesc": "Self contained, works well alone",
        "stenArray": [{min:0,max:10},{min:11,max:12},{min:13,max:14},{min:15,max:15},{min:16,max:17},{min:18,max:19},{min:20,max:20},{min:21,max:22},{min:23,max:24},{min:25,max:30}]
        },{
        id:"mpqS09",
        scale: "Rationality",
        "average":0,
        "leftDesc": "Intuitive, spontaneous",
        "rightDesc": "Logical, reflective, systematic",
        "stenArray": [{min:0,max:14},{min:15,max:16},{min:17,max:17},{min:18,max:19},{min:20,max:21},{min:22,max:23},{min:24,max:24},{min:25,max:26},{min:27,max:28},{min:29,max:30}]
        },{
        id:"mpqS10",
        scale: "Competitiveness",
        "average":0,
        "leftDesc": "Accommodating, less committed to career",
        "rightDesc": "Committed to career, contesting",
        "stenArray": [{min:0,max:13},{min:14,max:15},{min:16,max:17},{min:18,max:19},{min:20,max:21},{min:22,max:23},{min:24,max:25},{min:26,max:27},{min:28,max:29},{min:30,max:30}]
        },{
        id:"mpqS11",
        scale: "Conscientiousness",
        "average":0,
        "leftDesc": "Radical, challenging, expedient",
        "rightDesc": "Conscientious, persevering",
        "stenArray": [{min:0,max:10},{min:11,max:12},{min:13,max:14},{min:15,max:16},{min:17,max:18},{min:19,max:20},{min:21,max:22},{min:23,max:24},{min:25,max:26},{min:27,max:30}]
        },{
        id:"mpqS12",
        scale: "Perfectionism",
        "average":0,
        "leftDesc": "Less methodical, less detail oriented",
        "rightDesc": "Quality driven, detail oriented, methodical",
        "stenArray": [{min:0,max:14},{min:15,max:16},{min:17,max:17},{min:18,max:19},{min:20,max:21},{min:22,max:23},{min:24,max:25},{min:26,max:26},{min:27,max:28},{min:29,max:30}]
        },{
        id:"mpqS13",
        scale: "Decisiveness",
        "average":0,
        "leftDesc": "Cautious, slower to take initiative",
        "rightDesc": "Decisive, controlling",
        "stenArray": [{min:0,max:14},{min:15,max:15},{min:16,max:17},{min:18,max:19},{min:20,max:21},{min:22,max:22},{min:23,max:24},{min:25,max:26},{min:27,max:27},{min:28,max:30}]
        },{
        id:"mpqS14",
        scale: "Apprehension",
        "average":0,
        "leftDesc": "Calm, relaxed",
        "rightDesc": "Apprehensive, worried",
        "stenArray": [{min:0,max:7},{min:8,max:10},{min:11,max:12},{min:13,max:14},{min:15,max:16},{min:17,max:18},{min:19,max:20},{min:21,max:22},{min:23,max:24},{min:25,max:30}]
        }
    ];




    /**
     * BIG FIVE FACTORS as other "Ident", 
     */

    $scope.mpqBigFives = [
        {
        id:"mpqB1",
        "dimension": "Apprehension",
        "equation" : "null",//
        "leftDesc": "Adaptive, pragmatic implementation focused",
        "rightDesc": "Innovative, change oriented, nonconformist",
        "average":0,
        "stenArray": [{min:0,max:16},{min:17,max:25},{min:26,max:35},{min:36,max:44},{min:45,max:54},{min:55,max:63},{min:64,max:73},{min:74,max:82},{min:83,max:92},{min:93,max:93}]
          // max 93
        },{
        id:"mpqB2",
        "dimension": "Agreeableness",
        "equation" : "null",//
        "leftDesc": "Individualistic, self reliant, independent",
        "rightDesc": "Participative, rational, team player",
        "average":0,
        "stenArray": [{min:0,max:24},{min:25,max:31},{min:32,max:39},{min:40,max:47},{min:48,max:54},{min:55,max:62},{min:63,max:70},{min:71,max:77},{min:78,max:85},{min:86,max:86}]
            // max 86
        },{
        id: "mpqB3",
        "dimension": "Achievement",
        "equation" : "null",//
        "leftDesc": "Accommodating, expedient",
        "rightDesc": "Quality driven, archieving, conscientious",
        "average":0,
        "stenArray": [{min:0,max:16},{min:17,max:25},{min:26,max:35},{min:36,max:44},{min:45,max:54},{min:55,max:63},{min:64,max:73},{min:74,max:82},{min:83,max:92},{min:93,max:93}]
            // max 93
        },{
        id: "mpqB4",
        "dimension": "Extroversion",
        "equation" : "null",//
        "leftDesc": "Reserved, socially inhibited, introvert",
        "rightDesc": "Communicative, outgoing, extrovert",
        "average":0,
        "stenArray": [{min:0,max:20},{min:21,max:28},{min:29,max:37},{min:38,max:45},{min:46,max:54},{min:55,max:62},{min:63,max:71},{min:72,max:79},{min:80,max:88},{min:89,max:89}]
            // max 89
        },{
        id: "mpqB5",
        "dimension": "Resillience",
        "equation" : "null",//
        "leftDesc": "Apprehensive, worried, anxious",
        "rightDesc": "Calm, stable, decisive",
        "average":0,
        "stenArray": [{min:0,max:19},{min:20,max:28},{min:29,max:37},{min:38,max:46},{min:47,max:54},{min:55,max:63},{min:64,max:72},{min:73,max:80},{min:81,max:89},{min:90,max:90}]
            // max 90 ++, 29-17 ?? what??, turned to 37, same for next 18-46
        }
    ];

});