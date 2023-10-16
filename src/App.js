import './App.css';
import React, {useState} from 'react';
import ShareOnSocial from "react-share-on-social";
import favicon from "./favicon.png";



const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <ShareOnSocial
      textToShare={quote.content}
      link={url}
      linkTitle={quote.author}
      // linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
      linkFavicon={favicon}
      noReferer
    >
      
      <button className='share'>Share this qoute </button>
    </ShareOnSocial> 
      </div>
    </>
  )
}


export default App;
