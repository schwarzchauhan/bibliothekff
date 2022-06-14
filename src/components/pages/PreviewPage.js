import React from 'react';
import "../../assets/styles/css/global.css";
import { useLocation } from 'react-router-dom';

export default function PreviewPage() {
    const { state } = useLocation(); // here state is the html response we get from our api
    console.error(state);
    // https://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript
    const downloadPdf = () => {
        var printWindow = window.open('', '', 'popup=1,left=500,top=0,height=400,width=800');
        printWindow.document.write(state);
        printWindow.document.close();
        // setTimeout(() => {
            printWindow.print();
            printWindow.close();
        // }, 0);
    }
    const previewPdf = () => {
        // https://www.w3schools.com/jsref/met_win_open.asp
        var previewWindow = window.open('', '', "popup=1,left=500,top=0,height=400,width=800");
        previewWindow.document.write(state);
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/document
        previewWindow.document.title="MCQ QUIZ RESULT 🧾";
        previewWindow.document.close();
        // previewWindow.print();
    }
    return (
        <div>
            <div className='txtAlgnCenter'>
                PREVIEW THE RESPONSE HERE 
                <br />
                <a className='btn btn-primary' onClick={downloadPdf}> DOWNLOAD </a>
                <a className='btn btn-primary' onClick={previewPdf}> PREVIEW </a>
            </div>
            <div></div>
        </div>
    )
}