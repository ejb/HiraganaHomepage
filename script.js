var hiraganaMonographs = {
  "あ": "A", "い": "I", "う": "U", "え": "E", "お": "O",
  "か": "KA", "き": "KI", "く": "KU", "け": "KE", "こ": "KO",
  "さ": "SA", "し": "SHI", "す": "SU", "せ": "SE", "そ": "SO",
  "た": "TA", "ち": "CHI", "つ": "TSU", "て": "TE", "と": "TO",
  "な": "NA", "に": "NI", "ぬ": "NU", "ね": "NE", "の": "NO",
  "は": "HA", "ひ": "HI", "ふ": "FU", "へ": "HE", "ほ": "HO",
  "ま": "MA", "み": "MI", "む": "MU", "め": "ME", "も": "MO",
  "や": "YA", "ゆ": "YU", "よ": "YO",
  "ら": "RA", "り": "RI", "る": "RU", "れ": "RE", "ろ": "RO",
  "わ": "WA", "ゐ": "I", "ゑ": "E", "を": "O", "ん": "N",
  "が": "GA", "ぎ": "GI", "ぐ": "GU", "げ": "GE", "ご": "GO",
  "ざ": "ZA", "じ": "JI", "ず": "ZU", "ぜ": "ZE", "ぞ": "ZO",
  "だ": "DA", "ぢ": "JI", "づ": "ZU", "で": "DE", "ど": "DO",
  "ば": "BA", "び": "BI", "ぶ": "BU", "べ": "BE", "ぼ": "BO",
  "ぱ": "PA", "ぴ": "PI", "ぷ": "PU", "ぺ": "PE", "ぽ": "PO"
};

var hiragana = [
    {"term": "あ", "dictionary": "hiragana", "readings": ["a"]},
    {"term": "い", "dictionary": "hiragana", "readings": ["i"]},
    {"term": "う", "dictionary": "hiragana", "readings": ["u"]},
    {"term": "え", "dictionary": "hiragana", "readings": ["e"]},
    {"term": "お", "dictionary": "hiragana", "readings": ["o"]},

    {"term": "か", "dictionary": "hiragana", "readings": ["ka"]},
    {"term": "き", "dictionary": "hiragana", "readings": ["ki"]},
    {"term": "く", "dictionary": "hiragana", "readings": ["ku"]},
    {"term": "け", "dictionary": "hiragana", "readings": ["ke"]},
    {"term": "こ", "dictionary": "hiragana", "readings": ["ko"]},

    {"term": "さ", "dictionary": "hiragana", "readings": ["sa"]},
    {"term": "し", "dictionary": "hiragana", "readings": ["shi", "si"]},
    {"term": "す", "dictionary": "hiragana", "readings": ["su"]},
    {"term": "せ", "dictionary": "hiragana", "readings": ["se"]},
    {"term": "そ", "dictionary": "hiragana", "readings": ["so"]},

    {"term": "た", "dictionary": "hiragana", "readings": ["ta"]},
    {"term": "ち", "dictionary": "hiragana", "readings": ["chi"]},
    {"term": "つ", "dictionary": "hiragana", "readings": ["tsu"]},
    {"term": "て", "dictionary": "hiragana", "readings": ["te"]},
    {"term": "と", "dictionary": "hiragana", "readings": ["to"]},

    {"term": "な", "dictionary": "hiragana", "readings": ["na"]},
    {"term": "に", "dictionary": "hiragana", "readings": ["ni"]},
    {"term": "ぬ", "dictionary": "hiragana", "readings": ["nu"]},
    {"term": "ね", "dictionary": "hiragana", "readings": ["ne"]},
    {"term": "の", "dictionary": "hiragana", "readings": ["no"]},

    {"term": "は", "dictionary": "hiragana", "readings": ["ha"]},
    {"term": "ひ", "dictionary": "hiragana", "readings": ["hi"]},
    {"term": "ふ", "dictionary": "hiragana", "readings": ["fu", "hu"]},
    {"term": "へ", "dictionary": "hiragana", "readings": ["he"]},
    {"term": "ほ", "dictionary": "hiragana", "readings": ["ho"]},

    {"term": "ま", "dictionary": "hiragana", "readings": ["ma"]},
    {"term": "み", "dictionary": "hiragana", "readings": ["mi"]},
    {"term": "む", "dictionary": "hiragana", "readings": ["mu"]},
    {"term": "め", "dictionary": "hiragana", "readings": ["me"]},
    {"term": "も", "dictionary": "hiragana", "readings": ["mo"]},

    {"term": "や", "dictionary": "hiragana", "readings": ["ya"]},
    {"term": "ゆ", "dictionary": "hiragana", "readings": ["yu"]},
    {"term": "よ", "dictionary": "hiragana", "readings": ["yo"]},

    {"term": "ら", "dictionary": "hiragana", "readings": ["ra"]},
    {"term": "り", "dictionary": "hiragana", "readings": ["ri"]},
    {"term": "る", "dictionary": "hiragana", "readings": ["ru"]},
    {"term": "れ", "dictionary": "hiragana", "readings": ["re"]},
    {"term": "ろ", "dictionary": "hiragana", "readings": ["ro"]},

    {"term": "わ", "dictionary": "hiragana", "readings": ["wa"]},
    {"term": "ゐ", "dictionary": "hiragana", "readings": ["wi"]},
    {"term": "ゑ", "dictionary": "hiragana", "readings": ["we"]},
    {"term": "を", "dictionary": "hiragana", "readings": ["wo"]},
    {"term": "ん", "dictionary": "hiragana", "readings": ["n"]},



    {"term": "きゃ", "dictionary": "hiragana", "readings": ["kya"]},
    {"term": "きゅ", "dictionary": "hiragana", "readings": ["kyu"]},
    {"term": "きょ", "dictionary": "hiragana", "readings": ["kyo"]},

    {"term": "しゃ", "dictionary": "hiragana", "readings": ["sha"]},
    {"term": "しゅ", "dictionary": "hiragana", "readings": ["shu"]},
    {"term": "しょ", "dictionary": "hiragana", "readings": ["sho"]},

    {"term": "ちゃ", "dictionary": "hiragana", "readings": ["cha"]},
    {"term": "ちゅ", "dictionary": "hiragana", "readings": ["chu"]},
    {"term": "ちょ", "dictionary": "hiragana", "readings": ["cho"]},

    {"term": "にゃ", "dictionary": "hiragana", "readings": ["nya"]},
    {"term": "にゅ", "dictionary": "hiragana", "readings": ["nyu"]},
    {"term": "にょ", "dictionary": "hiragana", "readings": ["nyo"]},

    {"term": "ひゃ", "dictionary": "hiragana", "readings": ["hya"]},
    {"term": "ひゅ", "dictionary": "hiragana", "readings": ["hyu"]},
    {"term": "ひょ", "dictionary": "hiragana", "readings": ["hyo"]},

    {"term": "みゃ", "dictionary": "hiragana", "readings": ["mya"]},
    {"term": "みゅ", "dictionary": "hiragana", "readings": ["myu"]},
    {"term": "みょ", "dictionary": "hiragana", "readings": ["myo"]},

    {"term": "りゃ", "dictionary": "hiragana", "readings": ["rya"]},
    {"term": "りゅ", "dictionary": "hiragana", "readings": ["ryu"]},
    {"term": "りょ", "dictionary": "hiragana", "readings": ["ryo"]},



    {"term": "が", "dictionary": "hiragana", "readings": ["ga"]},
    {"term": "ぎ", "dictionary": "hiragana", "readings": ["gi"]},
    {"term": "ぐ", "dictionary": "hiragana", "readings": ["gu"]},
    {"term": "げ", "dictionary": "hiragana", "readings": ["ge"]},
    {"term": "ご", "dictionary": "hiragana", "readings": ["go"]},

    {"term": "ざ", "dictionary": "hiragana", "readings": ["za"]},
    {"term": "じ", "dictionary": "hiragana", "readings": ["ji"]},
    {"term": "ず", "dictionary": "hiragana", "readings": ["zu"]},
    {"term": "ぜ", "dictionary": "hiragana", "readings": ["ze"]},
    {"term": "ぞ", "dictionary": "hiragana", "readings": ["zo"]},

    {"term": "だ", "dictionary": "hiragana", "readings": ["da"]},
    {"term": "ぢ", "dictionary": "hiragana", "readings": ["ji"]},
    {"term": "づ", "dictionary": "hiragana", "readings": ["zu"]},
    {"term": "で", "dictionary": "hiragana", "readings": ["de"]},
    {"term": "ど", "dictionary": "hiragana", "readings": ["do"]},

    {"term": "ば", "dictionary": "hiragana", "readings": ["ba"]},
    {"term": "び", "dictionary": "hiragana", "readings": ["bi"]},
    {"term": "ぶ", "dictionary": "hiragana", "readings": ["bu"]},
    {"term": "べ", "dictionary": "hiragana", "readings": ["be"]},
    {"term": "ぼ", "dictionary": "hiragana", "readings": ["bo"]},

    {"term": "ぱ", "dictionary": "hiragana", "readings": ["pa"]},
    {"term": "ぴ", "dictionary": "hiragana", "readings": ["pi"]},
    {"term": "ぷ", "dictionary": "hiragana", "readings": ["pu"]},
    {"term": "ぺ", "dictionary": "hiragana", "readings": ["pe"]},
    {"term": "ぽ", "dictionary": "hiragana", "readings": ["po"]},



    {"term": "ぎゃ", "dictionary": "hiragana", "readings": ["gya"]},
    {"term": "ぎゅ", "dictionary": "hiragana", "readings": ["gyu"]},
    {"term": "ぎょ", "dictionary": "hiragana", "readings": ["gyo"]},

    {"term": "じゃ", "dictionary": "hiragana", "readings": ["ja"]},
    {"term": "じゅ", "dictionary": "hiragana", "readings": ["ju"]},
    {"term": "じょ", "dictionary": "hiragana", "readings": ["jo"]},

    {"term": "ぢゃ", "dictionary": "hiragana", "readings": ["ja"]},
    {"term": "ぢゅ", "dictionary": "hiragana", "readings": ["ju"]},
    {"term": "ぢょ", "dictionary": "hiragana", "readings": ["jo"]},

    {"term": "びゃ", "dictionary": "hiragana", "readings": ["bya"]},
    {"term": "びゅ", "dictionary": "hiragana", "readings": ["byu"]},
    {"term": "びょ", "dictionary": "hiragana", "readings": ["byo"]},

    {"term": "ぴゃ", "dictionary": "hiragana", "readings": ["pya"]},
    {"term": "ぴゅ", "dictionary": "hiragana", "readings": ["pyu"]},
    {"term": "ぴょ", "dictionary": "hiragana", "readings": ["pyo"]}
];


var hiragana_simple = [
    {"term": "&#12354;", "dictionary": "hiragana", "readings": ["a"]},
    {"term": "&#12356;", "dictionary": "hiragana", "readings": ["i"]},
    {"term": "&#12358;", "dictionary": "hiragana", "readings": ["u"]},
    {"term": "&#12360;", "dictionary": "hiragana", "readings": ["e"]},
    {"term": "&#12362;", "dictionary": "hiragana", "readings": ["o"]},

    {"term": "&#12363;", "dictionary": "hiragana", "readings": ["ka"]},
    {"term": "&#12365;", "dictionary": "hiragana", "readings": ["ki"]},
    {"term": "&#12367;", "dictionary": "hiragana", "readings": ["ku"]},
    {"term": "&#12369;", "dictionary": "hiragana", "readings": ["ke"]},
    {"term": "&#12371;", "dictionary": "hiragana", "readings": ["ko"]},

    {"term": "&#12373;", "dictionary": "hiragana", "readings": ["sa"]},
    {"term": "&#12375;", "dictionary": "hiragana", "readings": ["shi", "si"]},
    {"term": "&#12377;", "dictionary": "hiragana", "readings": ["su"]},
    {"term": "&#12379;", "dictionary": "hiragana", "readings": ["se"]},
    {"term": "&#12381;", "dictionary": "hiragana", "readings": ["so"]},

    {"term": "&#12383;", "dictionary": "hiragana", "readings": ["ta"]},
    {"term": "&#12385;", "dictionary": "hiragana", "readings": ["chi"]},
    {"term": "&#12388;", "dictionary": "hiragana", "readings": ["tsu"]},
    {"term": "&#12390;", "dictionary": "hiragana", "readings": ["te"]},
    {"term": "&#12392;", "dictionary": "hiragana", "readings": ["to"]},

    {"term": "&#12394;", "dictionary": "hiragana", "readings": ["na"]},
    {"term": "&#12395;", "dictionary": "hiragana", "readings": ["ni"]},
    {"term": "&#12396;", "dictionary": "hiragana", "readings": ["nu"]},
    {"term": "&#12397;", "dictionary": "hiragana", "readings": ["ne"]},
    {"term": "&#12398;", "dictionary": "hiragana", "readings": ["no"]},

    {"term": "&#12399;", "dictionary": "hiragana", "readings": ["ha"]},
    {"term": "&#12402;", "dictionary": "hiragana", "readings": ["hi"]},
    {"term": "&#12405;", "dictionary": "hiragana", "readings": ["fu", "hu"]},
    {"term": "&#12408;", "dictionary": "hiragana", "readings": ["he"]},
    {"term": "&#12411;", "dictionary": "hiragana", "readings": ["ho"]},

    {"term": "&#12414;", "dictionary": "hiragana", "readings": ["ma"]},
    {"term": "&#12415;", "dictionary": "hiragana", "readings": ["mi"]},
    {"term": "&#12416;", "dictionary": "hiragana", "readings": ["mu"]},
    {"term": "&#12417;", "dictionary": "hiragana", "readings": ["me"]},
    {"term": "&#12418;", "dictionary": "hiragana", "readings": ["mo"]},

    {"term": "&#12420;", "dictionary": "hiragana", "readings": ["ya"]},
    {"term": "&#12422;", "dictionary": "hiragana", "readings": ["yu"]},
    {"term": "&#12424;", "dictionary": "hiragana", "readings": ["yo"]},

    {"term": "&#12425;", "dictionary": "hiragana", "readings": ["ra"]},
    {"term": "&#12426;", "dictionary": "hiragana", "readings": ["ri"]},
    {"term": "&#12427;", "dictionary": "hiragana", "readings": ["ru"]},
    {"term": "&#12428;", "dictionary": "hiragana", "readings": ["re"]},
    {"term": "&#12429;", "dictionary": "hiragana", "readings": ["ro"]},

    {"term": "&#12431;", "dictionary": "hiragana", "readings": ["wa"]},
    {"term": "&#12432;", "dictionary": "hiragana", "readings": ["wi"]},
    {"term": "&#12433;", "dictionary": "hiragana", "readings": ["we"]},
    {"term": "&#12434;", "dictionary": "hiragana", "readings": ["wo"]},
    {"term": "&#12435;", "dictionary": "hiragana", "readings": ["n"]},



    {"term": "&#12365;&#12419;", "dictionary": "hiragana", "readings": ["kya"]},
    {"term": "&#12365;&#12421;", "dictionary": "hiragana", "readings": ["kyu"]},
    {"term": "&#12365;&#12423;", "dictionary": "hiragana", "readings": ["kyo"]},

    {"term": "&#12375;&#12419;", "dictionary": "hiragana", "readings": ["sha"]},
    {"term": "&#12375;&#12421;", "dictionary": "hiragana", "readings": ["shu"]},
    {"term": "&#12375;&#12423;", "dictionary": "hiragana", "readings": ["sho"]},

    {"term": "&#12385;&#12419;", "dictionary": "hiragana", "readings": ["cha"]},
    {"term": "&#12385;&#12421;", "dictionary": "hiragana", "readings": ["chu"]},
    {"term": "&#12385;&#12423;", "dictionary": "hiragana", "readings": ["cho"]},

    {"term": "&#12395;&#12419;", "dictionary": "hiragana", "readings": ["nya"]},
    {"term": "&#12395;&#12421;", "dictionary": "hiragana", "readings": ["nyu"]},
    {"term": "&#12395;&#12423;", "dictionary": "hiragana", "readings": ["nyo"]},

    {"term": "&#12402;&#12419;", "dictionary": "hiragana", "readings": ["hya"]},
    {"term": "&#12402;&#12421;", "dictionary": "hiragana", "readings": ["hyu"]},
    {"term": "&#12402;&#12423;", "dictionary": "hiragana", "readings": ["hyo"]},

    {"term": "&#12415;&#12419;", "dictionary": "hiragana", "readings": ["mya"]},
    {"term": "&#12415;&#12421;", "dictionary": "hiragana", "readings": ["myu"]},
    {"term": "&#12415;&#12423;", "dictionary": "hiragana", "readings": ["myo"]},

    {"term": "&#12426;&#12419;", "dictionary": "hiragana", "readings": ["rya"]},
    {"term": "&#12426;&#12421;", "dictionary": "hiragana", "readings": ["ryu"]},
    {"term": "&#12426;&#12423;", "dictionary": "hiragana", "readings": ["ryo"]},



    {"term": "&#12364;", "dictionary": "hiragana", "readings": ["ga"]},
    {"term": "&#12366;", "dictionary": "hiragana", "readings": ["gi"]},
    {"term": "&#12368;", "dictionary": "hiragana", "readings": ["gu"]},
    {"term": "&#12370;", "dictionary": "hiragana", "readings": ["ge"]},
    {"term": "&#12372;", "dictionary": "hiragana", "readings": ["go"]},

    {"term": "&#12374;", "dictionary": "hiragana", "readings": ["za"]},
    {"term": "&#12376;", "dictionary": "hiragana", "readings": ["ji"]},
    {"term": "&#12378;", "dictionary": "hiragana", "readings": ["zu"]},
    {"term": "&#12380;", "dictionary": "hiragana", "readings": ["ze"]},
    {"term": "&#12382;", "dictionary": "hiragana", "readings": ["zo"]},

    {"term": "&#12384;", "dictionary": "hiragana", "readings": ["da"]},
    {"term": "&#12386;", "dictionary": "hiragana", "readings": ["ji"]},
    {"term": "&#12389;", "dictionary": "hiragana", "readings": ["zu"]},
    {"term": "&#12391;", "dictionary": "hiragana", "readings": ["de"]},
    {"term": "&#12393;", "dictionary": "hiragana", "readings": ["do"]},

    {"term": "&#12400;", "dictionary": "hiragana", "readings": ["ba"]},
    {"term": "&#12403;", "dictionary": "hiragana", "readings": ["bi"]},
    {"term": "&#12406;", "dictionary": "hiragana", "readings": ["bu"]},
    {"term": "&#12409;", "dictionary": "hiragana", "readings": ["be"]},
    {"term": "&#12412;", "dictionary": "hiragana", "readings": ["bo"]},

    {"term": "&#12401;", "dictionary": "hiragana", "readings": ["pa"]},
    {"term": "&#12404;", "dictionary": "hiragana", "readings": ["pi"]},
    {"term": "&#12407;", "dictionary": "hiragana", "readings": ["pu"]},
    {"term": "&#12410;", "dictionary": "hiragana", "readings": ["pe"]},
    {"term": "&#12413;", "dictionary": "hiragana", "readings": ["po"]},



    {"term": "&#12366;&#12419;", "dictionary": "hiragana", "readings": ["gya"]},
    {"term": "&#12366;&#12421;", "dictionary": "hiragana", "readings": ["gyu"]},
    {"term": "&#12366;&#12423;", "dictionary": "hiragana", "readings": ["gyo"]},

    {"term": "&#12376;&#12419;", "dictionary": "hiragana", "readings": ["ja"]},
    {"term": "&#12376;&#12421;", "dictionary": "hiragana", "readings": ["ju"]},
    {"term": "&#12376;&#12423;", "dictionary": "hiragana", "readings": ["jo"]},

    {"term": "&#12386;&#12419;", "dictionary": "hiragana", "readings": ["ja"]},
    {"term": "&#12386;&#12421;", "dictionary": "hiragana", "readings": ["ju"]},
    {"term": "&#12386;&#12423;", "dictionary": "hiragana", "readings": ["jo"]},

    {"term": "&#12403;&#12419;", "dictionary": "hiragana", "readings": ["bya"]},
    {"term": "&#12403;&#12421;", "dictionary": "hiragana", "readings": ["byu"]},
    {"term": "&#12403;&#12423;", "dictionary": "hiragana", "readings": ["byo"]},

    {"term": "&#12404;&#12419;", "dictionary": "hiragana", "readings": ["pya"]},
    {"term": "&#12404;&#12421;", "dictionary": "hiragana", "readings": ["pyu"]},
    {"term": "&#12404;&#12423;", "dictionary": "hiragana", "readings": ["pyo"]}
];


console.log(hiragana[0]['readings']);

var quiz = hiragana_simple;



var num = Math.floor( Math.random()*quiz.length );
var chr = quiz[num];

var question = chr['term'];
var answer = chr['readings'][0];

$('.hiragana').html( chr['term'] );

var choices = [];
choices[0] = quiz[Math.floor( Math.random()*quiz.length )]['readings'][0];
choices[1] = quiz[Math.floor( Math.random()*quiz.length )]['readings'][0];
choices[2] = quiz[Math.floor( Math.random()*quiz.length )]['readings'][0];
choices[3] = ["correct", answer];

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

choices = shuffle(choices);

for (var i=0; i<choices.length; i++){
    var choice = choices[i];
    if (choice[0] == "correct") {
        $('.choices li:nth-child('+(i+1)+')').html( choice[1] ).addClass('correct');
    } else {
        $('.choices li:nth-child('+(i+1)+')').html( choice ).addClass('incorrect');
    }
    console.log( choice + i );
};

$('.correct').click(function(){
   // alert("Correct!"); 
   // $('.incorrect').fadeTo(500,0.1);
   $('.choices').addClass('over');
   $('.bg').addClass('over');
   $('.next').addClass('active');
});

$('.incorrect').click(function(){
    $(this).addClass('animated hinge');
   // alert("Wrong, try again!"); 
});

$('.next').click(function(){
    location.reload();
});

