import Mcq from './Custom/Mcq'
import React from "react";
import '../assets/styles/css/global.css'
import McqServicee from '../services/McqServicee';

//TODO: show mcq selected when user again goes to the answered quesn(ie. selected mcq optn should still be red)

// component for mcq quiz
class McqQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            err: null,
            allMcq: [],
            currMcqInd: null,
            currMcq: null, 
            allMcqAns:Array(10).fill(''),    // https://stackoverflow.com/questions/20007455/creating-array-of-empty-strings
            dispSubmit: false
        };
    }

    toggleLoader = () => {
        if(!this.state.isLoading){
          this.setState({isLoading: true})
        }else{
          this.setState({isLoading: false})
        }
     }

    // to get random mcqs from the backend
    getMcqData() {
        McqServicee.getMcqQuiz()
            .then((data) => {
                this.setState({ 
                    isLoading: false,
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_to_reformat_objects_in_an_array
                    allMcq: data.map(({quesn, choices, _id}) => ({quesn, choices, _id})),
                    currMcqInd: 0,
                    currMcq: {
                        quesn: data[0].quesn,
                        choices: data[0].choices
                    }
                }, () => {
                    console.error('setState callback', this.state);
                    console.error('this.state callbk', this.state.currMcqInd, this.state.currMcq);     
                })
            })
            .catch((err) => {
                this.setState({ isLoading: false, err })
                console.error(err, err.message);
            })
    }

    // sbumit the mcq answer as a array with each element as object -- {_id:<idOfQues>, ans: <selctedChoice>}
    sbmtMcqQuiz = () => {
        console.error(this.state.allMcq.map(({quesn, choices, _id}) => ({_id})), this.state.allMcqAns );
        var reqBodyArray =[];
        for (let i = 0; i < 10; i++) {
            reqBodyArray.push({_id: this.state.allMcq[i]._id, ans: this.state.allMcqAns[i]})
        }
        console.error('reqBodyArray', reqBodyArray);
        this.toggleLoader();
        McqServicee.submitMcqQuiz(reqBodyArray)
            .then((data) => {
                console.error(data);
                this.toggleLoader();
            })
            .catch((err) => {
                console.error(err);
                this.toggleLoader();
            })
    }

    // https://dev.to/vadims4/passing-down-functions-in-react-4618
    // https://stackoverflow.com/questions/65510636/reactjs-pass-multiple-functions-to-child-components-as-a-single-prop 
    functions = {
        // go to previous quesn
        prevQues : () => {
            if(this.state.currMcqInd <= 0){
                console.error('no previouse quesn');
            }else {
                var ind = this.state.currMcqInd - 1;
                console.error(ind);
                this.setState({
                    currMcqInd: ind, 
                    currMcq: {
                        quesn: this.state.allMcq[ind].quesn, 
                        choices: this.state.allMcq[ind].choices
                    }, 
                    dispSubmit: ( (ind == 9) ? true: false )
                }, () => {
                    console.error('this.state-prevQues', this.state.currMcqInd, this.state.currMcq);     
                })     
            }
        },
        // go to next quesn
        nextQues : () => {
            if(this.state.currMcqInd >= 9){
                console.error('no next quesn');
            }else {
                var ind = this.state.currMcqInd + 1;
                console.error(ind);
                this.setState({
                    currMcqInd: ind, 
                    currMcq: {
                        quesn: this.state.allMcq[ind].quesn, 
                        choices: this.state.allMcq[ind].choices
                    }, 
                    dispSubmit: ( (ind == 9) ? true: false )
                }, () => {
                    console.error('this.state-nextQues', this.state.currMcqInd, this.state.currMcq);     
                })
            }
        }, 
        //set answer for current mcq
        setCurrMcqAns : (selectedChoice) => {
            const temp = [...this.state.allMcqAns];
            temp[this.state.currMcqInd] = selectedChoice;
            this.setState({
                allMcqAns: temp
            }, () => {
                console.error('this.state-setCurrMcqAns', this.state.allMcqAns);     
            })        
        },
        // submit the mcq quiz answers
        submitMcqs : () => {
            this.sbmtMcqQuiz()
        }
    }

    // componentDidMount() method is the perfect place, where we can call the setState() method 
    // to change the state of our application and render() the updated data loaded JSX. 
    // For example, we are going to fetch any data from an API 
    // then API call should be placed in this lifecycle method, and then we get the response, we can call the setState() method and render the element with updated data
    componentDidMount() {
        console.log('componentDidMount');
        this.getMcqData();
    }
    render() {
        return (
            <div>
                {this.state.err}
                {this.state.currMcqInd}
                <div className='cstm-ldr-icon'>
                    {this.state.isLoading && <img src="https://acegif.com/wp-content/uploads/loading-63.gif" />}
                </div>
                {!this.state.isLoading && this.state.currMcq && <Mcq key={this.state.currMcqInd} {...this.state.currMcq} {...this.functions} dispSubmit={this.state.dispSubmit} currMcqInd={this.state.currMcqInd}  />}
            </div>
        )
    }
}


export default McqQuiz