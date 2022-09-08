import "./quote.css"

const Quote = ({selectedQuote}) =>{
    return (
        <div>
            {/* <p>
                {selectedQuote.quote}
            </p>
            <p>
                {selectedQuote.author}
            </p> */}
            <div className="p-3"></div>
            <section className="bg-white text-dark p-4 fs-2 mx-5 mb-5 border" id="quote-box">
                <section id="text">
                    <i className="bi bi-quote"></i> {selectedQuote.quote}
                </section>
                <section id="author" className="text-end fw-lighter fs-4 pt-1">
                    <p> - {selectedQuote.author}</p>
                </section>
                {/* <section className="d-flex justify-content-between pt-2 fs-6">
                    <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">
                        <i className="bi bi-twitter text-white bg-dark p-2"></i>
                    </a>
                    <button id="new-quote" className="text-white bg-dark fw-lighter p-2">
                        New quote
                    </button>
                </section> */}
            </section>
        </div>
    )
}

export default Quote;