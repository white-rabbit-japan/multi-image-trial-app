import React from "react";
import placeholderImage from "../images/placeholder.png";
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

  capturePackageImage() {
    this.setState({
      cameraOn: false,
    });
    return packageImage;
  }

  capturePackageLabelImage() {
    this.setState({
      cameraOn: false,
    });
    return packageLabelImage;
  }

  generatePlaceholderImage(){
   return <img src={placeholderImage} style={{width: "480", height: "auto", marginBottom: "1em"}}
               alt="placeholder image"/>;
  }

  cameraFeed(){
    if(this.state.cameraOn){
      return this.generatePlaceholderImage();
    }else{
      return null;
    }
  }

  render() {
    return this.cameraFeed();
  }
}




