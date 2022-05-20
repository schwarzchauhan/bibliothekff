
import React from "react";


class Mcq extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="question ml-sm-5 pl-sm-5 pt-2">
                    <div className="py-2 h5"><b>Q. which option best describes your job role?</b></div>
                    <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                        <label className="options">Small Business Owner or Employee
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="options">Nonprofit Owner or Employee
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="options">Journalist or Activist
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="options">Other
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                    <div id="prev">
                        <button className="btn btn-primary">Previous</button>
                    </div>
                    <div className="ml-auto mr-sm-5">
                        <button className="btn btn-success">Next</button>
                    </div>
                </div>
            </div>
        )
    }
  }


export default Mcq