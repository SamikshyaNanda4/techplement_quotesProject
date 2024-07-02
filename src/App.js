import React from 'react'
import './App.css'
import axios from 'axios';

const App = () => {

  const [quote, setQuote] = React.useState("Click for Quote")
  const [author, setAuthor] = React.useState("Author")

  const handleQuote = async() => {
const res =await axios.get("https://api.quotable.io/random");
setQuote(res.data.content);

const random =await axios.get("https://api.quotable.io/random");
setAuthor(random.data.author);
  }


  return (
    <div className="box">
      <i className="fas fa-quote-left fa2"></i>
      <div className="text">
        <i className="fas fa-quote-left fa1"></i>
        <div>
          <h3>Quote of the Day</h3>
          <p>{quote}</p>
          <p>-{author}</p>
          <button onClick={handleQuote}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default App;

