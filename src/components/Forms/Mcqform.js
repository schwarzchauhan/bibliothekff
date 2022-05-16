import { useState, useTransition } from 'react';
import McqService from '../../services/McqService';
import '../../assets/styles/css/Form.css'
import '../../assets/styles/css/global.css'

// https://www.w3schools.com/react/react_forms.asp
export default function Mcqform() {

    const mcqService = new McqService();
    const [inputs, setInputs] = useState({quesn: "", ans: ""});
    const [mcqs, setMcqs] = useState(['first choice','second choice','third choice', 'fourth choice']);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [err,setErr] = useState("");

    const handleChange = (event) => {
       var arr = ['quesn', 'ans'];
      //  console.error(arr.includes(event.target.name), 'arr.includes(event.target.name)');
       if(arr.includes(event.target.name)){
           const name = event.target.name;
           const value = event.target.value;
           // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#try_it
           setInputs(prevInputs => ({...prevInputs, [name]: value}))
          // setInputs(prevInputs => { return  ({...prevInputs, [name]: value})  } )
       }else {
           // handle useState for mcqs 
       }
    }

    // fn to add 1 more choice field
    const addMcq = () => {
      const temp = [...mcqs];
      temp.push("");
      setMcqs(temp);
    }

    // https://stackoverflow.com/questions/55987953/how-do-i-update-states-onchange-in-an-array-of-object-in-react-hooks
    // https://stackoverflow.com/questions/63734803/is-it-possible-to-pass-an-additional-parameter-with-an-onchange-event-in-react-f
    const changeMcq = (event, index) => {
        event.preventDefault();
        var temp = [...mcqs];
        temp[index] = event.target.value;
        setMcqs(temp)
    }

    const deleteMcq = (index) => {
        const temp = [...mcqs];  // copy of current mcq array
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_at_index_3
        temp.splice(index, 1);  // remove the mcq choice
        setMcqs(temp);   // modify mcq choices array
    }

  
    const handleSubmit = (event) => {
      // https://dmitripavlutin.com/react-forms-tutorial/#4-form-submission
      event.preventDefault();
      setErr("");
      var input = { quesn: inputs.quesn, ans: inputs.ans, choices: mcqs};
      console.error(input);
      setIsSubmitting(true)
      mcqService.saveMcq(input)
      .then((data) => { 
          setIsSubmitting(false)
          console.error(data);
        })
        .catch((err) => {
          setTimeout(() => {
            setIsSubmitting(false)
            setErr(err.message)
            console.error(err, err.message);
          }, 3000);
        })
    }
  // TODO : make a error popup
    return (
      <div className='mcq-form-cont'>
        <div className='mcq-form-inner'>
          <form onSubmit={handleSubmit}>
            
            <div className='cstm-ldr-icon'>
              { isSubmitting && <img src="https://acegif.com/wp-content/uploads/loading-63.gif" /> }
              {err}
            </div>

            <div>
              <label htmlFor="quesn">Question</label>
              <br />
              <div className='dspFlex-75-20per'>
                <div className='fl-item1'>
                  <input type="text" id="quesn" name="quesn" value={inputs.quesn || ""} onChange={handleChange} required />
                </div>
                <div className='fl-item2'>
                  <button className='btn-dflt' type="button" onClick={() => addMcq()}>➕</button>
                </div>
              </div>
            </div>

            {mcqs.map((mcq,index) => {
              return (
                <div className='form-field-row' key={index}>
                      <div className='dspFlex-75-20per'>
                        <div className='fl-item1'>
                          <label>
                            <input type="text"  onChange={(event) => changeMcq(event, index)} value={mcq || ""} />
                          </label>
                        </div>
                        <div className='fl-item2'>
                          <button className='btn-dflt' type="button" onClick={() => deleteMcq(index)}>❌</button>
                        </div>
                      </div>
                    </div>
                )
              })}

            <div className='form-inpt-rw'>
              <label htmlFor="ans">Answer</label>
              <br />
              <input className='wdth100per' type="text" id="ans" name="ans" value={inputs.ans || ""} onChange={handleChange} required />
            </div>              

            <button className='formSbmitBtn' type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
}
// https://flaviocopes.com/react-pass-parameter-event/
// https://stackoverflow.com/questions/932653/how-to-prevent-buttons-from-submitting-forms