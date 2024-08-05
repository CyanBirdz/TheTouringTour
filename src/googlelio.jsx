import React from 'react'

const googlelio = () => {
  return (
    <div>
    <h1>Contact ME Form</h1>
    <form className="form" onSubmit={(e) => Submit(e)}>
        <input placeholder="Your Name" name="Name" type="text" />
        <input placeholder="Your Email" name="Email" type="text" />
        <input placeholder="Your Message" name="Message" type="text" />
        <input name="Name" type="submit" />
      </form>
    <link rel="stylesheet" href="https://script.google.com/macros/s/AKfycby4p-kMnJ4ZEP3RUALmtmbZ-XoNcLtTSNKxXjZsKo1CCJZcdX6FtbMTgb9Kmsp0CJhYyQ/exec" />
  </div>
  )
}

export default googlelio
