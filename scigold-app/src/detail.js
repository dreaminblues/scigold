import * as React from 'react';
import { Modal, Grid, Row, Col, Button, OverlayTrigger } from 'react-bootstrap';
import './App.css';
import imageOne from "./one.jpg";
import imageTwo from "./two.jpg";
import imageThree from "./three.jpg";

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
                <Grid>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <div>
                                <Button bsSize="sm" onClick={this.handleShow}>
                                    <figure class="figure">
                                        <img src="https://picsum.photos/200/199/?image=789" className="figure-img img-fluid rounded"></img>
                                        <figcaption class="figure-caption A" />
                                    </figure>
                                </Button>

                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Information</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h4>More Information</h4>

                                        <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={this.handleClose}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <figure class="figure" >
                                <img src={imageTwo} width="200" height="200"></img>
                                <figcaption class="figure-caption B" />
                            </figure>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <figure class="figure">
                                <img src="https://picsum.photos/200/198/?image=803" className="figure-img img-fluid rounded"></img>
                                <figcaption class="figure-caption C" />
                            </figure>
                        </Col>
                    </Row>
                    <div><p /></div>
                    <div><br /></div>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <figure class="figure">
                                <img src={imageOne} width="200" height="200" />
                                <figcaption class="figure-caption D" />
                            </figure>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <figure class="figure">
                                <img src="https://picsum.photos/200/201/?image=844" className="figure-img img-fluid rounded"></img>
                                <figcaption class="figure-caption E" />
                            </figure>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <figure class="figure">
                                <img src="https://picsum.photos/201/200/?image=976" className="figure-img img-fluid rounded"></img>
                                <figcaption class="figure-caption F" />
                            </figure>
                        </Col>
                    </Row>
                    <div><p /></div>
                    <div><br /></div>
                    <Row>
                        <Col lg={4} md={4} sm={4}>
                            <figure class="figure">
                                <img src="https://picsum.photos/200/202/?image=977" className="figure-img img-fluid rounded"></img>
                                <figcaption class="figure-caption G" />
                            </figure>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <figure class="figure">
                                <img src="https://picsum.photos/202/200/?image=958" className="figure-img img-fluid rounded"></img>
                                <figcaption class="figure-caption H" />
                            </figure>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <figure class="figure">
                                <img src={imageThree} width="200" height="200"></img>
                                <figcaption class="figure-caption I" />
                            </figure>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}