import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';

export default class CodeEditor extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }
    onChange(newValue, e) {
        // console.log(newValue, e);

        const editor = this.ace.editor; // The editor object is from Ace's API
        console.log(editor.getValue()); // Outputs the value of the editor
    }
    render() {
        return (
            <ReactAce
                mode="javascript"
                theme="chaos"
                setReadOnly={false}
                onChange={this.onChange}
                style={{ height: '400px' }}
                ref={instance => { this.ace = instance; }} // Let's put things into scope
            />
        );
    }
}