import Quote from '../../components/quote/quote'
import {useEffect, useState} from 'react'
import axios from 'axios'


const HomePage = () =>{
    const [selectedQuote, setSelectedQuote] = useState(null);
    const [quotes, setQuotes] = useState([]);    
    useEffect(() => {
        const getQuotes = async () => {
          const response = await axios({
            method: 'get',
            url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
          });
          setQuotes(response.data.quotes)
          console.log(response.data.quotes)
        }
        try {
          getQuotes();
        }catch (e) {
          console.log(e.message);
        }
      }, []);

    return (
        <div>
            {selectedQuote ? (<Quote selectedQuote={selectedQuote} />): (<div>No quote selected</div>)}
            <div>
                {quotes.length === 0 && (<div>No quotes available</div>)}
                {quotes.map((q, i) => <div key={i} onClick={() => setSelectedQuote(q)}>{q.quote}</div>)}
            </div>
        </div>
    )
}

export default HomePage;