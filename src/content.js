
function content() {
    var RawIndex = require("./markdown/index.json");
    return (
        <div className="Content">
            {RawIndex.files.map(item =>
                <h4>{item}</h4>
                )};
            </div>
        );
}

export default content;