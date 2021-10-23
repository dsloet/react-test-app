

import React, { useState } from 'react';

function MyForm() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );
    const [postId, setPostId] = useState(null);

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    function sendText() {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: textarea })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.text));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    };

    return (
        <div className="card text-center m-3">
            <form>
                <textarea value={textarea} onChange={handleChange} />
                <button
                    type="button"
                    onClick={() => sendText()}
                >Submit
                </button>
            </form>
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Will post: {textarea}
            </div>
            <div className="card-body">
                Returned Id: {postId}
            </div>
        </div>
    );
}

export default MyForm;

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

// function MyForm() {
//     const [textarea, setTextarea] = useState(
//         "The content of a textarea goes in the value attribute"
//     );

//     const handleChange = (event) => {
//         setTextarea(event.target.value)
//     }

//     return (
//         <form>
//             <textarea value={textarea} onChange={handleChange} />
//             {/* <input type="submit" /> */}
//             <button
//                 type="button"
//                 onClick={() => doStuff()}
//             >Submit
//             </button>
//         </form>
//     )
// }

// function doStuff() {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('https://reqres.in/api/posts', requestOptions)
//         .then(response => response.json())
//         .then(data => console.log(data)); //this.setState({ postId: data.id }));
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));
// export default MyForm


// import { useState } from "react";

// import ReactDOM from 'react-dom';

// function Form() {
//     const [text, setText] = useState("");

//     return (
//         <>
//             <h1>My text is {text}!</h1>
//             <button
//                 type="button"
//                 onClick={() => setText("blue")}
//             >Blue</button>
//         </>
//     )
// }





// ReactDOM.render(<Form />, document.getElementById('root'));

// export default Form