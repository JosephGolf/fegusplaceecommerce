import React, { Component } from "react";
import { ReactComponent as IconAlertTriangleFill } from "bootstrap-icons/icons/exclamation-triangle-fill.svg";
/*const Search = lazy(() => import("../../components/Search"));*/
/*[jduSW7,-[l7*/
class NotFoundView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container text-center p-5">
        <div className="row">
          <div className="col-md-6 text-left">
           <div className="display-1">
              <IconAlertTriangleFill className="i-va text-warning" />
              404
            </div>
            <h1 className="mb-3">Oops... Page Not Found!</h1>
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <a href='/' className="btn btn-lg btn-warning">Go to home</a>
              </div>
            </div>
          </div>
            <div className="col-md-6">
              <img src="https://www.jumia.com.eg/assets_he/images/people.ec5b815c.svg" alt="jumia"/>
            </div>
        </div>
        
      </div>
    );
  }
}

export default NotFoundView;
