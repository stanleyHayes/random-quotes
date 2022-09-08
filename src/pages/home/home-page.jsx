import Quote from '../../components/quote/quote'
import {useEffect, useState} from 'react'
import axios from 'axios'
import "../../components/quote/quote.css"


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
          <body className='bg-dark'>
          {selectedQuote ? 
              (<Quote selectedQuote={selectedQuote} />): 
              (<div>
                <div className="p-3"></div>
                <section className="bg-white text-dark p-4 fs-2 mx-5 mb-5 border text-center" id="quote-box">
                  No quote selected
                </section>
              </div>)}
              
            <div className='text-white'>
                {quotes.length === 0 && (<div>
                  <section className="bg-white text-dark p-4 fs-2 m-5 border text-center" id="quote-box">
                  No quote Available
                </section>

                </div>)}
                {quotes.map((q, i) => <div key={i} onClick={() => setSelectedQuote(q)}>
                  <p className='text-center p-3 border m-3'>{q.quote}</p>
                </div>)}
            </div>

          </body>            
        </div>
    )
}

export default HomePage;