import React from "react";
import './my.css';

export default function About(props) {
    let forBg = props.mode === 'dark' ? '#040d1a' : 'white';
    let forBgD = props.mode === 'dark' ? '#040d1a' : 'white';

    let forColor = props.mode === 'dark' ? '#fff' : '#000';
    return (
        <div className="container py-5" style={{ background: forBg, color: forColor }} >
            <h1 className="my-2">About US</h1>
            <div className="accordion border" id="accordionExample">
                <div className="accordion-item" style={{ background: forBg, color: forColor }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{ background: forBgD, color: forColor }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body border" >
                            TextUtils is free and advance site where you can easily manipulat your text as you want .We have provided some functionaly like Uppercase,
                            LowerCase, Download File, Cleartext, CopyToClipboard and many more,you can also select themes you want.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: forBg, color: forColor }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ background: forBgD, color: forColor }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body border">
                            Textutils is a free character counter tool,that provide instant character count & word count statistics for a given text. Textutils reports the number of word And characters.
                            Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: forBg, color: forColor }} >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{ background: forBgD, color: forColor }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Simple and clean UI/UX</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body border">
                            Here you will get simple UI to interact easily so everyone can use it as their own.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
