
import React from "react";


// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
class Mcq extends React.Component {
    state = {...this.props}

    // https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
    onChangeMcqOptn = event =>{
        var selectedChoice = event.target.value;
        this.props.setCurrMcqAns(selectedChoice)
    }

    render() {
        const {quesn, choices} =  this.props;
        console.error(this.props);
        return (
            <div className="mcq-cont">
                <div className="container mt-5">
                    <div className="d-flex justify-content-center row">
                        <div className="col-md-10 col-lg-10">
                            <div className="border">
                                <div className="bg-info p-3 border-bottom">
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        <h4>MCQ Quiz</h4>
                                        <span>(5 of 20)</span>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom">
                                    <div className="d-flex flex-row">
                                        <h3 className="text-danger">Q. </h3>
                                        <h5 className="mt-1">{this.state.quesn}</h5>
                                    </div>
                                    {/* https://stackoverflow.com/questions/22876978/loop-inside-react-jsx */}
                                    {this.state.choices}
                                    {this.state.choices.map((choice, index) => (
                                        <div key={choice} className="mcq-radio" onChange={this.onChangeMcqOptn}>
                                            <label>
                                                <input type="radio" name="mcqOptn" value={choice} />
                                                <span>{choice}</span>
                                            </label>
                                        </div>
                                    ))}                                
                                </div>
                                <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                    <button className="btn btn-primary d-flex align-items-center btn-danger" type="button" onClick={this.props.prevQues}>
                                        <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
                                    </button>
                                   {this.props.dispSubmit &&  <button className="btn btn-primary d-flex align-items-center btn-primary" type="button" onClick={this.props.submitMcqs}>
                                        <i className="fa fa-angle-left mt-1 mr-1"></i>Submit
                                    </button>}
                                    <button className="btn btn-primary border-success align-items-center btn-success" type="button" onClick={this.props.nextQues}>
                                        Next<i className="fa fa-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Mcq