import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import * as React from 'react';

class Clouds extends React.Component {


    render() {
        return (
            <TagCloud
                style={{
                    fontFamily: 'sans-serif',
                    fontSize: 30,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: () => randomColor(),
                    padding: 5,
                    width: '100%',
                    height: '100%'
                }}>
                <div style={{ fontSize: 50 }}>react</div>
                <div style={{ color: 'green' }}>tag</div>
                <div rotate={90}>cloud</div>
                ...
      </TagCloud>
        );
    }
}