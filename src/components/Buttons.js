import React from "react";

class Buttons extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="row pb-3">
        <div className="col col-6 mx-auto">
          <button className="btn btn-info" type="button" id="import">
            Import Photo
          </button>
        </div>
        <div className="col col-6 mx-auto">
          <button className="btn btn-info" type="button" id="shuffle">
            Shuffle
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
