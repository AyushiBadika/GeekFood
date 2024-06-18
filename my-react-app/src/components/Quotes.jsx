import { useState, useEffect } from "react";
import axios from "axios";

export default function Quotes() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios("https://api.quotable.io/quotes/random?limit=10").then((res) => {
      setResponse(res.data);
    });
  }, []);

  return (
    <>
      <div className="quotes">
        {response.map((item, index) => (
          <div className="quoteContainer" key={index}>
            <h2>{item.content}</h2>
            <p>{item.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}
