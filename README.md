## Overview

As a package forwarding company, we receive packages on behalf of our customers. Your job is to develop the "ReceivePackageComponent" to meet all our requirements below.
 
When a package arrives our receiving department needs to capture one or two photos of it: a photo of the entire package, and optionally, a photo of the package label. Some packages are large, so if we move back far enough to shoot the whole package, then the label is not readable. But for smaller packages, a single photo is sufficient.
 
See the reference mockup illustration: `/images/mockup-master.png`

#### Mockup Image - Figure 1
* When the page loads, have the webcam ON and ready to capture the package photo. You can pass the Webcam's "capture" property the "PACKAGEPHOTO" value to get it to return the package photo.  
* You shouldn't need to do any development on the WebCam component. Just pretend it's a third-party (blackbox). But do let us know if you believe it had any bugs.

#### Mockup Image - Figure 2
* After capturing the package photo, render it as a thumbnail and link the thumbnail so that clicking it will open the full-size image in a new browser tab.
* Render a delete button as an "X" in the top-right corner of the image. Clicking this X will delete the image, causing the product image section state to revert to Step 1
* One the package photo is captured, render the "Package Label Photo" label and button to "Turn on camera" for Package Label Capture.

#### Mockup Image - Figure 3
* When "Turn on Camera" is clicked, start the webcam's live video feed.
* Render the capture button and also a cancel button. 
* cancelling should return to the previous state
* clicking the cancel button should revert the component state back like we have in step 2.
* deleting the packageImage while in this state, should revert us back to step 1

#### Mockup Image - Figure 4
* Once the PackageLabelPhoto has been captured, render it as a thumbnail and link the thumbnail so that clicking it will open the full-size image in a new browser tab.
* Render a delete button as an "X" in the top-right corner of the image. Clicking this X will delete the image, causing the product image section state to revert to Step 1


#### Mockup Image - Figure 5
* This is what the view looks like after the PackageImage has been deleted.
* Because the camera can only supply a single live-feed at a time, if the PackageLabelImage is now deleted before a new PackageImage has been captured, the state should revert to like we have in Step 1.

## Starting the app

We use React Storybook. A React development tool. You story book using the following command: 

`npm run storybook`

Then visit the Storybook URL. As you develop the "ReceivePackageComponent", you can interact with it here.