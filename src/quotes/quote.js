/*global chrome*/
import "./quote.css";
import React from "react";
import quotes from "./data.json";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Quote() {
  const result = quotes.data;
  const random = getRandom(0, result.length - 1);
  const data = result[random];
  return (
    <div className="quotes-container">
      <div className="quote">
        <q>{data.quote}</q>
      </div>
      <div className="quote-meta">
        <span className="author">{`- ${data.author}`}</span>
        <span className="author-book">
          <a href={data.bookLink} target="_blank">
            {data.book}
          </a>
        </span>
        <a
          rel="noreferrer"
          className="btn"
          target="_blank"
          href={`https://twitter.com/intent/tweet?tweet-intents&url=${encodeURI(
            "bit.ly/3odSS4B"
          )}&text=${encodeURI(data.quote)} -${data.author}`}
        >
          <i></i>
          <span className="label">Tweet</span>
        </a>
      </div>
    </div>
  );
}
