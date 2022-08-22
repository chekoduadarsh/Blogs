
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Markdown from 'markdown-to-jsx';


class content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "index": require("./markdown/index.json"),
            "hasContent": false
        }
        this.index = require("./markdown/index.json");
    }
    redirectToMD = (e, item) => {
        e.preventDefault();
        import(`./markdown/${item.filePath}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => {
                        this.setState({ "content": res });
                        this.setState({ "hasContent": true });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }
    redirectToHome = (e, item) => {
        e.preventDefault();
        this.setState({ "hasContent": false });
    }
    render() {

        if (this.state.hasContent) {
            return (
                <div className="Content">
                <Markdown>
                    {this.state.content}
                </Markdown>
                 <Button variant="primary" onClick={(e) => { this.redirectToHome(e) }}>Go Back</Button>
                 </div>
            );
        } else {
            return (
                <div className="Content">
                    <div class="card-deck">

                    {this.state.index.files.map(item => (
                        <div id={item}>
                            <div >
                                
                                <br></br>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={ item.imageIcon } />
                                    <Card.Body>
                                        <Card.Title>{item.filePath.replace("HackerRank/Problem Solving/", "".replace("LeetCode/Problem Solving/", ""))}</Card.Title>
                                        <Card.Text>
                                            <Markdown>
                                                {item.fileDiscription}
                                            </Markdown>

                                        </Card.Text>
                                        <Button variant="primary" onClick={(e) => { this.redirectToMD(e, item) }}>Read More</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    )
                    )};
                    </div>

                </div>
            );
        }

    }
}

export default content;