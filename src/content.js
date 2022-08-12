
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Markdown from 'markdown-to-jsx';


class content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "index": require("./markdown/index.json"),
            "content": "Consequat laborum quis culpa fugiat ut velit est. Deserunt sit labore ad dolore aliquip irure culpa laborum cupidatat laborum. Non ex esse cupidatat nisi nisi excepteur occaecat fugiat ea aliqua irure reprehenderit. Incididunt ex officia nostrud exercitation commodo ullamco esse sunt est id occaecat.",
            "hasContent": false
        }
        this.index = require("./markdown/index.json");
        this.content = "Mollit proident sit cillum adipisicing fugiat. Ad ea in non duis ex reprehenderit nisi in. Ipsum occaecat eiusmod laborum esse elit nostrud ullamco voluptate laboris magna ad culpa pariatur in. Eiusmod officia non id aliqua fugiat mollit excepteur sint excepteur deserunt nostrud excepteur eiusmod."
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
        this.setState({ "content": "Velit exercitation non exercitation est. Magna laborum excepteur sint eiusmod. Dolore est elit occaecat dolor. Aliqua id veniam est ipsum ex Lorem fugiat fugiat duis fugiat nulla exercitation ipsum. Ut labore pariatur fugiat laborum irure et est duis nulla sunt in in. Irure tempor et enim laboris ea tempor ipsum voluptate aliquip sunt tempor aliquip. Aliquip deserunt ullamco et incididunt irure Lorem do nisi dolor sit ipsum." });
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
                    {this.state.index.files.map(item => (
                        <div id={item}>
                            <div className="card-deck">
                                <br></br>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{item.filePath.split("/").pop().replace(".md", "")}</Card.Title>
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
            );
        }

    }
}

export default content;