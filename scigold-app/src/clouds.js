import randomColor from 'randomcolor';
import * as React from 'react';
import rn from 'random-number';
import $ from 'jquery';

var left_nums = [];
var top_nums = [];

function fontSizeRandomNumber() {
    var opts = {
        min: 6,
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
            min: 200,
            max: 1200,
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
    'eucalyptus',
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
    'forest',
    'wood',
    'eucalyptus',
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
    'forest',
    'wood',
    'eucalyptus',
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

    wordClicked() {
        $('.word').hide();
        $('.detail-container').css({
            display: 'grid',
        });
    }

    showDetail() {
        switch (this.props.word) {
            default: return '';
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
