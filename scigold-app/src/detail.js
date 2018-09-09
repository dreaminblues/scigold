import * as React from 'react';
import { Modal, Grid, Row, Col, Button, OverlayTrigger } from 'react-bootstrap';
import './App.css';
import imageOne from "./one.jpg";
import imageTwo from "./two.jpg";
import imageThree from "./three.jpg";
import $ from 'jquery';

function showModal() {
    
}

export default class Detail extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="detail-container">
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <figure class="figure">
                    <img src="https://picsum.photos/200/199/?image=789" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption A" />
                </figure>
                <figure class="figure" onClick={showModal()}>
                    <img src={imageTwo} width="200" height="200" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat lacus eget arcu auctor rhoncus. Mauris laoreet, nulla id ultricies dictum, nisl sapien vehicula mi, eget convallis eros nisi non.
                                </figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/200/198/?image=803" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat lacus eget arcu auctor rhoncus. Mauris laoreet, nulla id ultricies dictum, nisl sapien vehicula mi, eget convallis eros nisi non.
                    </figcaption>
                </figure>
                <figure class="figure">
                    <img src={imageOne} width="200" height="200" alt=""/>
                    <figcaption class="figure-caption" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat lacus eget arcu auctor rhoncus. Mauris laoreet, nulla id ultricies dictum, nisl sapien vehicula mi, eget convallis eros nisi non.
                    </figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/200/201/?image=844" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat lacus eget arcu auctor rhoncus. Mauris laoreet, nulla id ultricies dictum, nisl sapien vehicula mi, eget convallis eros nisi non.
                                </figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/201/200/?image=976" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat lacus eget arcu auctor rhoncus. Mauris laoreet, nulla id ultricies dictum, nisl sapien vehicula mi, eget convallis eros nisi non.
                                </figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/200/202/?image=977" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat lacus eget arcu auctor rhoncus. Mauris laoreet, nulla id ultricies dictum, nisl sapien vehicula mi, eget convallis eros nisi non.
                                </figcaption>
                </figure>
                <figure class="figure">
                    <img src="https://picsum.photos/202/200/?image=958" className="figure-img img-fluid rounded"></img>
                    <figcaption class="figure-caption" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat lacus eget arcu auctor rhoncus. Mauris laoreet, nulla id ultricies dictum, nisl sapien vehicula mi, eget convallis eros nisi non.
                                </figcaption>
                </figure>
                <figure class="figure">
                    <img src={imageThree} width="200" height="200"></img>
                    <figcaption class="figure-caption" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat lacus eget arcu auctor rhoncus. Mauris laoreet, nulla id ultricies dictum, nisl sapien vehicula mi, eget convallis eros nisi non.
                                </figcaption>
                </figure>

            </div>
        );
    }

}