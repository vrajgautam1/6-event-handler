import React, { useState } from "react";

function App() {
    const [eventmsg, setEventmsg] = useState("");
    const [eventmsgArr, setEventMsgArr] = useState([]);

    function handleMouseEnter() {
        const message = "Mouse is entering the h2";
        setEventmsg(message);
        setEventMsgArr([...eventmsgArr, message]);
    }

    function handleMouseLeave() {
        const message = "Mouse is leaving the h2";
        setEventmsg(message);
        setEventMsgArr([...eventmsgArr, message]);
    }

    function handleClick() {
        const message = "The button is being clicked";
        setEventmsg(message);
        setEventMsgArr([...eventmsgArr, message]);
    }

    function handleChange(e) {
        setEventmsg(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEventMsgArr([...eventmsgArr, eventmsg]);
        setEventmsg(""); 
    }

    return (
        <div className="container py-4">
            <h1 className="mb-4">React Event Demo</h1>

           
            <h2
                className="p-3 bg-light border rounded text-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: "pointer" }}
            >
                Hover Over Me
            </h2>

           
            <div className="my-3 text-center">
                <button onClick={handleClick} className="btn btn-secondary">
                    Click Me
                </button>
            </div>

            
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="msg" className="form-label">
                        Enter text
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="msg"
                        name="msg"
                        value={eventmsg}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

            
            <div className="border-top pt-3">
                <h4>Event Messages:</h4>
                {eventmsgArr.map((msg, index) => (
                    <h6 key={index} className="text-muted">
                        • {msg}
                    </h6>
                ))}
            </div>
        </div>
    );
}

export default App;
