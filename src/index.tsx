import * as React from 'react';
import * as ReactDom from 'react-dom';




let root = document.getElementById('root');
let props = {className: '.t'};

let element = React.createElement("div", props, "Hi")

ReactDom.render(element,root);




