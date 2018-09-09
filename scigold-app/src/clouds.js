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

        tooClose = checkIfTooClose(num, top_nums, 10);
    }

    left_nums.push(num);

    return num;
}

function leftRandomNumber() {

    var tooClose = true;

    while (tooClose) {
        var opts = {
            min: 10,
            max: 1300,
            integer: true
        };

        var num = rn(opts);

        tooClose = checkIfTooClose(num, left_nums, 130);
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
    'Nutrition',
    'Philosophy',
    'Biology',
    'Agriculture',
    'Horology',
    'Astronomy',
    'Inuit Dance Theory',
    'Aerospace',
    'Entertainment',
    'Physics',
    'Art Theory',
    'Italian',
    'Aztec',
    'Anthropology',
    'History of Adriatic ca. 800 B.C.',
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

    showDetail(){
        switch(this.props.word){
            case 'Horology' :
                $('div').css({
                    backgroundColor : 'blue'
                })
            break;
        }
    }

    render() {
        return (
            <div className="word" style={getWordStyle('#141616', leftRandomNumber(), topRandomNumber(), fontSizeRandomNumber())} onMouseEnter={this.showDetail.bind(this)}>{this.props.word}</div>
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
