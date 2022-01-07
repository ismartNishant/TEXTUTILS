import React, { useState } from 'react';
import './my.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to UpperCase', "success");
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('Converted to LowerCase', "success");
    }
    const handleToDelete = () => {
        let delText = "";
        setText(delText);
        props.showAlert('Text Cleard', "success");
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain;charset=utf-8' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert('File is Downloading.....', "success");
    }
    // const makeTitleCase = () => {
    //     let titleText = text.split(" ").map((currentValue) => {
    //         let titleText = currentValue[0].toUpperCase() + currentValue.slice(1);
    //         return titleText;
    //     }
    //     );
    //     setText(titleText.join(" "));
    //     props.showAlert('Converted to TitleCase', "success");
    // }
    const handleExtraSpace = () => {
        let exText = text.split(/[ ]+/);
        setText(exText.join(" "));
        props.showAlert('Extra spaces has been removed', "success");
    }
    const onCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(null)
        }, 1500)
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? "white" : 'black' }}>
                <h4> Welcome to textUtils </h4>
                <h2 className="">{props.heading} </h2>
                <div className="">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{
                        backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                        color: props.mode === 'dark' ? "white" : 'black'
                    }} id="myBox" rows="8"></textarea>
                    {copied ? <p className="bg-dark text-danger p-1">Text Copied.</p> : null}
                </div>
                <button disabled={text.length === 0} className="btn btn-info m-1" onClick={handleUpClick} >UperCase</button>
                <button disabled={text.length === 0} className="btn btn-info m-1" onClick={handleLoClick} >LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-info m-1" onClick={handleToDelete} >Clear Text</button>
                <CopyToClipboard text={text} >
                    <button disabled={text.length === 0} onClick={onCopy} className="btn btn-info m-1">Copy to clipboard</button>
                </CopyToClipboard>
                <button disabled={text.length === 0} className="btn btn-info m-1" onClick={downloadTxtFile}>Download</button>
                {/* <button disabled={text.length === 0} className="btn btn-info m-1" onClick={makeTitleCase}>Title Case</button> */}
                <button disabled={text.length === 0} className="btn btn-info m-1" onClick={handleExtraSpace} >Remove extra Spaces</button>
            </div>
            <div className="container pt-3">
                <h2>Your Text sumary</h2>
                <p>Words : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}  | letters : {text.length} </p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes To read</p>
                <h3>Preview :</h3>
                <p className="px-5 preview">{text.length === 0 ? "Nothing to Preview here" : text}</p>
            </div>

        </>
    );
}
