import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";

const defaultCode = `// Complete the function
function solve(input) {
    // Your logic here
    return input;
}

// Main function (already provided)
function main() {
    const input = "Hello, World!";
    console.log(solve(input));
}

main();`;

const CodeEditor = () => {
    const [code, setCode] = useState(defaultCode);

    const handleReset = () => {
        setCode(defaultCode);
    };

    return (
        <div className="h-screen p-2 bg-gray-900 text-white">
            <PanelGroup direction="horizontal" className="h-full border border-gray-700 rounded-lg">
                
                {/* Left Panel - Problem Statement */}
                <Panel className="p-4 bg-gray-800 rounded-l-lg">
                    <Card>
                        <CardContent>
                            <h2 className="text-xl font-bold">Problem Statement</h2>
                            <p className="mt-2 text-gray-300">
                                Write a function `solve(input)` that processes the input and returns the result.
                            </p>
                            <ul className="mt-4 text-gray-400 list-disc list-inside">
                                <li>Input: A string</li>
                                <li>Output: A transformed string</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Panel>

                {/* Resize Handle */}
                <PanelResizeHandle className="w-2 bg-gray-600 cursor-ew-resize" />

                {/* Right Panel - Code Editor */}
                <Panel className="flex flex-col w-full rounded-r-lg">
                    <div className="flex justify-between p-2 bg-gray-700">
                        <Button onClick={handleReset} className="bg-red-500 hover:bg-red-700">
                            Reset Code
                        </Button>
                    </div>

                    <CodeMirror
                        value={code}
                        height="calc(100vh - 50px)"
                        extensions={[javascript()]}
                        theme="dark"
                        onChange={(newCode) => setCode(newCode)}
                    />
                </Panel>

            </PanelGroup>
        </div>
    );
};

export default CodeEditor;
