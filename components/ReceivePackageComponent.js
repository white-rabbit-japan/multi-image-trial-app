import React from "react";

export default class ReceivePackageComponent extends React.Component {
  componentDidMount() {
    this.webcam.turnCameraOn();
  }

  render() {
    const {WebCam} = this.props;

    return (
      <div className="container">


        <div className="row">
          <div className="col-lg-6">
            <h4>Capture Package Photo</h4>
            <p>notes..</p>


            <WebCam ref={c => this.webcam = c}/><br/>
            <button className="btn btn-success">Capture from Webcam</button>

          </div>

        </div>

      </div>
    )

  }
}

