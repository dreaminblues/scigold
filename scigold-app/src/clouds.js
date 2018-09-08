import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import CloudItem from './cloud-item';
import * as React from 'react';

export class Clouds extends React.Component {

    render() {
        return (
            <div className='app-outer'>
                <div className='app-inner'>
                    <h1>react-tag-cloud demo</h1>
                    <TagCloud
                        className='tag-cloud'
                        style={{
                            fontFamily: 'sans-serif',
                            fontSize: () => Math.round(Math.random() * 50) + 16,
                            color: () => randomColor({
                                hue: 'blue'
                            }),
                            padding: 5,
                        }}>
                        <div
                            style={{
                                fontFamily: 'serif',
                                fontSize: 40,
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                color: randomColor()
                            }}>Nutrition</div>
                        <CloudItem text="Horticulture in Arid Climates" />
                        <CloudItem text="Rainfall pattern in Antartica" />
                        <div style={{ fontSize: 'large' }}>Philosophy</div>
                        <div style={{ fontSize: 'large' }}>Biology</div>
                        <div style={{ fontSize: 'large' }}>Agriculture</div>
                        <div style={{ fontSize: 'large' }}>Horology</div>
                        <div style={{ fontFamily: 'courier' }}>Astronomy</div>
                        <div style={{ fontSize: 30 }}>Inuit Dance Theory</div>
                        <div style={{ fontStyle: 'italic' }}>Aerospace</div>
                        <div style={{ color: 'green' }}>Entertainment</div>
                        <div style={{ fontSize: 'small' }}>Physics</div>
                        <div style={{ fontSize: 'small' }}>Art Theory</div>
                        <div style={{ fontSize: 'small' }}>Italian</div>
                        <div style={{ fontSize: 'small' }}>Aztec</div>
                        <div style={{ fontSize: 'small' }}>Anthropology</div>
                        <div style={{ fontSize: 'small' }}>History of Adriatic ca. 800 B.C.</div>
                        <div style={{ fontSize: 'small' }}>Comics And Anthology in Modern Entertainment</div>
                    </TagCloud>
                </div>
            </div>
        );
    }
}