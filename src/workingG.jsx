import React from 'react';

const WorkingG = () => {
  function submit(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyizDsoUZxZQ66xie5soBrgc79Pzeqmq1SZSVWc6_A1ZcfrpjEg4eyDsJDoolCIe_HZkg/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to a Google sheet
        in React or Vanilla JS
      </h2>
      <div>
        <form className="form" onSubmit={submit}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <input placeholder="Your Age" name="Age" type="text" />
          <input placeholder="Your Country" name="Country" type="text" />
          <input placeholder="Your Number" name="PhoneNumber" type="text" />
          <input placeholder="Your ShirtSize" name="ShirtSize" type="text" />
          <input placeholder="Early Fee" name="EarlyFee" type="text" />
          <input placeholder="Late Fee" name="LateFee" type="text" />
          <input placeholder="Result" name="Result" type="text" />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default WorkingG;
