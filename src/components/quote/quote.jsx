const Quote = ({selectedQuote}) =>{
    return (
        <div>
            <p>
                {selectedQuote.quote}
            </p>
            <p>
                {selectedQuote.author}
            </p>
        </div>
    )
}

export default Quote;