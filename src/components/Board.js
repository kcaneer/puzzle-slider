import React from "react";

class Board extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="row mx-auto mt-3" id="boardrow">
          <div className="col col-3 border border-secondary">0 </div>
          <div className="col col-3 border border-secondary">1 </div>
          <div className="col col-3 border border-secondary">2</div>
          <div className="col col-3 border border-secondary">3</div>
        </div>
        <div className="row mx-auto" id="boardrow">
          <div className="col col-3 border border-secondary">4</div>
          <div className="col col-3 border border-secondary">5</div>
          <div className="col col-3 border border-secondary">6</div>
          <div className="col col-3 border border-secondary">7</div>
        </div>
        <div className="row mx-auto" id="boardrow">
          <div className="col col-3 border border-secondary">8</div>
          <div className="col col-3 border border-secondary">9</div>
          <div className="col col-3 border border-secondary">10</div>
          <div className="col col-3 border border-secondary">11</div>
        </div>
        <div className="row mx-auto" id="boardrow">
          <div className="col col-3 border border-secondary">12</div>
          <div className="col col-3 border border-secondary">13</div>
          <div className="col col-3 border border-secondary">14</div>
          <div className="col col-3 border border-secondary">15</div>
        </div>
      </div>
    );
  }
}

export default Board;
