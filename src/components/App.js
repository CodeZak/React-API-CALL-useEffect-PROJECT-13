import { useState, useEffect } from "react";

function App() {
    const [myData, setMyData] = useState({});
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then((response) => response.json())
            .then((data) => setMyData(data));
        console.log("mahi");
    }, [count]);

    function clickHandler() {
        setCount((prev) => {
            return prev + 1;
        });
    }

    return (
        <div className="container">
            <button className="btn btn-primary mt-2" onClick={clickHandler}>
                next ({count})
            </button>
            <pre>{JSON.stringify(myData, null, 2)}</pre>
        </div>
    );
}

export default App;
