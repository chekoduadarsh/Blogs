
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function content() {
    var RawIndex = require("./markdown/index.json");
    return (
        <div className="Content">
            {RawIndex.files.map(item => (
                <div id={item}>
                    <br></br>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.split("/").pop().replace(".md", "")}</Card.Title>
                            <Card.Text>
                                Amet fugiat cillum ea excepteur velit nisi in voluptate. Tempor minim quis amet aute excepteur nulla anim eu. Veniam qui non cupidatat incididunt nostrud incididunt tempor anim ut qui. Ipsum nostrud elit tempor amet dolor in dolore.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
            )};
        </div>
    );
}

export default content;