import Mcq from './Custom/Mcq'
import React from "react";
import '../assets/styles/css/global.css'
import McqServicee from '../services/McqServicee';


class McqQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoadingMcq: true,
            err: null
        };
    }
    componentDidMount() {
        McqServicee.getMcqQuiz()
            .then((data) => {
                this.setState({ isLoadingMcq: false })
                console.error(data);
            })
            .catch((err) => {
                this.setState({ isLoadingMcq: false, err })
                console.error(err, err.message);
            })
    }
    render() {
        return (
            <div>
                <div className='cstm-ldr-icon'>
                    {this.state.isLoadingMcq && <img src="https://acegif.com/wp-content/uploads/loading-63.gif" />}
                </div>
                <Mcq />
            </div>
        )
    }
}


export default McqQuiz