import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import swal from 'sweetalert';

const Highlighter = () => {
  const [selectvalue, setSelectValue] = React.useState("");
  const [textfield, setTextField] = React.useState("");

  const handleInputChange = (e) => {
    setTextField(e.target.value);
  };
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <div className=" container flex h-screen flex-row">
      <div className=" h-full w-1/2 flex pt-14 items-center flex-col px-6 text-center">
        <h1 className=" text-xl font-medium text-blue-600 mb-12">
          Enter Code for syntax Highlighting
        </h1>
        {/* form container here */}
        <select
          // input field for language name
          className=" px-2 py-3 text-black outline-none textinput w-full mb-20"
          placeholder="Enter Language"
          value={selectvalue}
          onChange={handleSelect}
        >
          <option>Javascript</option>
          <option>CSS</option>
          <option>HTML</option>
          <option>TypeScript</option>
          <option>C++</option>
        </select>
        <textarea
          // text field for code
          className=" px-4 py-5 textinput w-full relative h-1/2 outline-none"
          placeholder="Write some code"
          value={textfield}
          onChange={handleInputChange}
        />
      </div>
      {/* code syntax highlighter window here */}
      <div className="h-full w-1/2 flex flex-col justify-center items-center">
        {/* copy to clipboard here */}
        <CopyToClipboard text={textfield} className=" px-4 py-2 textinput">
          <button onClick={()=>{swal("code copied successfully")}}>Copy Code</button>
        </CopyToClipboard>
        <SyntaxHighlighter language={selectvalue} style={docco}>
          {/* pass in code here */}
          {textfield}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Highlighter;
