
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Markdown from 'markdown-to-jsx';


class content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "index": require("./markdown/index.json"),
            "content": "Consequat laborum quis culpa fugiat ut velit est. Deserunt sit labore ad dolore aliquip irure culpa laborum cupidatat laborum. Non ex esse cupidatat nisi nisi excepteur occaecat fugiat ea aliqua irure reprehenderit. Incididunt ex officia nostrud exercitation commodo ullamco esse sunt est id occaecat."
        }
        this.index = require("./markdown/index.json");
        this.content = "Mollit proident sit cillum adipisicing fugiat. Ad ea in non duis ex reprehenderit nisi in. Ipsum occaecat eiusmod laborum esse elit nostrud ullamco voluptate laboris magna ad culpa pariatur in. Eiusmod officia non id aliqua fugiat mollit excepteur sint excepteur deserunt nostrud excepteur eiusmod."
    }
    redirectToMD = (e, item) => {
        e.preventDefault();
        console.log('You clicked ' + item);
        this.content = "YNOT"
            import(`./markdown/${item}`)
                .then(res => {
                    fetch(res.default)
                        .then(res => res.text())
                        .then(res => {
                            this.setState({"content": res});
                            console.log(res)
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="Content">
                {this.state.index.files.map(item => (
                    <div id={item}>
                        <div className="card-deck">
                            <br></br>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{item.split("/").pop().replace(".md", "")}</Card.Title>
                                    <Card.Text>
                                        <Markdown>
                                            {this.state.content}
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

export default content;