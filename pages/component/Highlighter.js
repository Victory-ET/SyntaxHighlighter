import React from "react";

const Highlighter = () => {
  return (
    <div className=" container flex h-screen flex-row">
      <div className=" h-full w-1/2 flex pt-14 items-center flex-col px-6 text-center">
        <h1 className=" text-xl font-medium text-blue-600 mb-12">Enter Code for syntax Highlighting</h1>
        {/* form container here */}
        <select
        // input field for language name
          className=" px-2 py-3 text-black outline-none textinput w-full mb-20"
          placeholder="Enter Language">
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
        />
      </div>
      {/* code syntax highlighter window here */}
    </div>
  );
};

export default Highlighter;
