import randomColor from 'randomcolor';
import * as React from 'react';
import rn from 'random-number';
import $ from 'jquery';

var left_nums = [];
var top_nums = [];

function fontSizeRandomNumber() {
    var opts = {
        min: 12,
        max: 30,
        integer: true
    };

    return rn(opts);
}

function topRandomNumber() {

    var tooClose = true;

    while (tooClose) {
        var opts = {
            min: 70,
            max: 680,
            integer: true
        };

        var num = rn(opts);

        tooClose = checkIfTooClose(num, top_nums, 1);
    }

    left_nums.push(num);

    return num;
}

function leftRandomNumber() {

    var tooClose = true;

    while (tooClose) {
        var opts = {
            min: 400,
            max: 1000,
            integer: true
        };

        var num = rn(opts);

        tooClose = checkIfTooClose(num, left_nums, 1);
        tooClose = false;
    }

    top_nums.push(num);

    return num;
}

function difference(a, b) {
    return Math.abs(a - b);
}

function checkIfTooClose(num, array, range) {

    var isTooClose = false;

    for (let i = 0; i < array.length; i++) {
        if (difference(num, array[i]) < range) {
            isTooClose = true;
            break;
        }
    }

    return isTooClose;
}

const words = [
    'forest',
    'wood',
    'eucalptus',
    'evergreen',
    'deciduous',
    'hornbeam',
    'gum',
    'leaf',
    'conifer',
    'puka',
    'ribbonwood',
    'rainforest',
    'souari',
    'grove',
    'bonsai',
];


function getWordStyle(textColor, leftPosition, topPosition, fontSize) {
    var style = {
        color: String(textColor),
        left: String(leftPosition) + 'px',
        top: String(topPosition) + 'px',
        fontSize: fontSize,
        position: 'absolute',
    }
    return style;
}

class Word extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    wordClicked(){
        $('.word').hide();
        $('.figure').show();
    }
    
    showDetail(){
        switch(this.props.word){
            // case 'Nutrition' :
            //     return 'Nutrition is the science that interprets the interaction of nutrients and other substances in food in relation to maintenance, growth, reproduction, health and disease of an organism. It includes food intake, absorption, assimilation, biosynthesis, catabolism, and excretion.';
            // break;
            // case 'Philosophy' :
            //     return 'Philosophy is the study of general and fundamental problems concerning matters such as existence, knowledge, values, reason, mind, and language.';
            // break;
            // case 'Biology' :
            //     return 'Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development and evolution.';
            // break;
            // case 'Agriculture' :
            //     return 'Agriculture is the cultivation of land and breeding of animals and plants to provide food, fiber, medicinal plants and other products to sustain and enhance life.';
            // break;
            // case 'Horology' :
            //     return 'Clocks, watches, clockwork, sundials, hourglasses, clepsydras, timers, time recorders, marine chronometers and atomic clocks are all examples of instruments used to measure time.';
            // break;
            // case 'Astronomy' :
            //     return 'Astronomy (from Greek: ἀστρονομία) is a natural science that studies celestial objects and phenomena. It applies mathematics, physics, and chemistry, in an effort to explain the origin of those objects and phenomena and their evolution. ';
            // break;
            // case 'Inuit Dance Theory' :
            //     return 'Inuit who make their homes across the vastness of Canadas Arctic belong to a much larger family that extends from the Bering Sea through Alaska and northern Canada to Greenland.';            
            // break;
            // case 'Aerospace' :
            //     return 'Aerospace is the human effort in science, engineering and business to fly in the atmosphere of Earth (aeronautics) and surrounding space (astronautics).';
            // break;
            // case 'Entertainment' :
            //     return 'Entertainment is a form of activity that holds the attention and interest of an audience, or gives pleasure and delight.';
            // break;
            // case 'Physics' :
            //     return 'Physics, science that deals with the structure of matter and the interactions between the fundamental constituents of the observable universe.';
            // break;
            // case 'Art Theory' :
            //     return 'At the broadest level, a theory of art aims to shed light on some aspect of the project of defining art or to theorize about the structure of our concept of art without providing classical definitions, namely definitions formulated in terms of “necessary and sufficient” conditions.';
            // break;
            // case 'Italian' :
            //     return 'Italian is a major European language, being one of the official languages of the Organisation for Security and Cooperation in Europe and one of the working languages of the Council of Europe.';
            // break;
            // case 'Aztec' :
            //     return 'When Tezozomoc died in 1425, his son Maxtla ascended to the throne of Azcapotzalco. Matla sought to tighten Azcapotzalcos grip on the nearby city-states in the Valley of Mexico. In the process, Chimalpopoca, tlatoani of Tenochtitlan, was assassinated by Maxtlas agents while Nezahualcoyotl of Texcoco was forced into exile.';
            // break;
            // case 'Anthropology' :
            //     return 'Anthropology is the study of humans and human behavior and societies in the past and present. Social anthropology and cultural anthropology study the norms and values of societies. Linguistic anthropology studies how language affects social life.';
            // break;
            // case 'History of Adriatic ca. 800 B.C.' :
            //     return 'The Adriatic is the northernmost arm of the Mediterranean Sea, extending from the Strait of Otranto (where it connects to the Ionian Sea) to the northwest and the Po Valley. ... The Adriatic contains over 1,300 islands, mostly located along its eastern, Croatian coast.';
            // break;
            default : return '';
        }
    }

    render() {
        return (
            <div className="word" style={getWordStyle('#141616', leftRandomNumber(), topRandomNumber(), fontSizeRandomNumber())} onMouseEnter={this.showDetail.bind(this)} onClick={this.wordClicked.bind(this)}>{this.props.word}
                <div className="detail">
                    {this.showDetail(this.props.word)}
                </div>
            </div>
        );
    }
}

const wordComponents = words.map((word) => {
    return <Word word={word}></Word>
}

);

export default class Cloud extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            hidden: true,
        };
    }

    render() {
        return (
            <div className='app-outer'>
                <div className='app-inner'>
                    {wordComponents}
                </div>
            </div>
        );
    }
}
