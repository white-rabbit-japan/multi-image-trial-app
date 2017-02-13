import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {storiesOf} from "@kadira/storybook";
import ReceivePackageComponent from "../components/ReceivePackageComponent";
import WebCam from '../components/WebCam';



storiesOf('My Component Stories', module)
  .add('step 1', () => (
    <ReceivePackageComponent WebCam={WebCam} />
  ));



