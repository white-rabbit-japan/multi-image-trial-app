import React from "react";
import placeholderImage from "../images/placeholder.jpg";
import packageImage from "../images/package.jpg";
import packageLabelImage from "../images/package-label.jpg";

export default class ReceivePackageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cameraOn: false,
    };
  }

  turnCameraOn() {
    this.setState({
      cameraOn: true,
    });
  }

  capture(mode) {

    let ret;
    switch (mode) {
      case "PACKAGEIMAGE":
        ret = packageImage;
        this.setState({
          cameraOn: false,
        });
        break;
      case "PACKAGELABELIMAGE":
        ret = packageLabelImage;
        this.setState({
          cameraOn: false,
        });
        break;
      default:
        ret = placeholderImage
    }
    return ret;
  }


  generatePlaceholderImage() {
    return <img src={placeholderImage} style={{marginBottom: "1em"}}
                alt="placeholder image"/>;
  }

  cameraFeed() {
    if (this.state.cameraOn) {
      return this.generatePlaceholderImage();
    } else {
      return null;
    }
  }

  render() {
    return this.cameraFeed();
  }
}




