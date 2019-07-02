import React, { Component } from "react";

class SocialCard extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-2">Avatar</div>
            <div className="col-10">
              Main SocialCard
              <p>Username</p>
              <span>HandleUsername</span>
              <span>Date Time</span>
              <p>Tweet Text - Change @Format if need be</p>
              <div className="card">
                <img src='' />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialCard;
