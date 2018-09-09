import * as React from 'react';
import { Modal } from 'react-bootstrap';
import './App.css';

export default class Detail extends React.Component {

    render(){
        return(
            <div className="detail-container">
                <figure class="figure">
                    <img src="https://picsum.photos/200/150/?random" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption A">A caption for the above image.</figcaption>
                </figure>
                <figure class="figure" >
                    <img src="https://picsum.photos/200/100/?random" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption B">A caption for the above image.</figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/200/350/?random" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption C">A caption for the above image.</figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/200/200/?random" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption A">A caption for the above image.</figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/200/215/?random" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption B">A caption for the above image.</figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/200/300/?random" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption C">A caption for the above image.</figcaption>
                </figure>
            </div>
        );
    }

}