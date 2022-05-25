import Mcq from './Custom/Mcq'
import React from "react";
import '../assets/styles/css/global.css'
import McqServicee from '../services/McqServicee';


class McqQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingMcq: true,
            err: null,
            allMcq: [],
            currMcqInd: null,
            currMcq: null
        };
    }

    getMcqData() {
        McqServicee.getMcqQuiz()
            .then((data) => {
                this.setState({ 
                    isLoadingMcq: false,
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_to_reformat_objects_in_an_array
                    allMcq: data.map(({quesn, choices}) => ({quesn, choices})),
                    currMcqInd: 0,
                    currMcq: {
                        quesn: data[0].quesn,
                        choices: data[0].choices
                    }
                })
                console.error(this.state);
            })
            .catch((err) => {
                this.setState({ isLoadingMcq: false, err })
                console.error(err, err.message);
            })
    }

    // componentDidMount() method is the perfect place, where we can call the setState() method 
    // to change the state of our application and render() the updated data loaded JSX. 
    // For example, we are going to fetch any data from an API 
    // then API call should be placed in this lifecycle method, and then we get the response, we can call the setState() method and render the element with updated dat
    componentDidMount() {
        console.log('componentDidMount');
        this.getMcqData();
    }
    render() {
        return (
            <div>
                <div className='cstm-ldr-icon'>
                    {this.state.isLoadingMcq && <img src="https://acegif.com/wp-content/uploads/loading-63.gif" />}
                </div>
                {!this.state.isLoadingMcq && this.state.currMcq && <Mcq {...this.state.currMcq} />}
            </div>
        )
    }
}


export default McqQuiz