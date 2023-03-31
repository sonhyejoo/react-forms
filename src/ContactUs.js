import { useState, useEffect } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  useEffect(() => {
    let errors = [];
    if (!(name.length > 0)) errors.push("Please enter your Name");
    if (!email.split().includes("@")) {
      errors.push("Please provide a valid email");
    }
    setValidationErrors(errors);
  }, [name, email]);
  const onSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (validationErrors.length > 0) {
      alert("Cannot Submit");
      return;
    }
    const contactUsInfo = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };
    console.log(contactUsInfo);
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setComments("");
    setHasSubmitted(false);
  };

  return (
    <div>
      <h2>Contact us</h2>
      <form onSubmit={onSubmit}>
        {hasSubmitted && validationErrors.length > 0 && (
          <div>
            The following errors were found:
            <ul>
              {validationErrors.map((error) => {
                return <li key={error}>{error}</li>;
              })}
            </ul>
          </div>
        )}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments">Comments: </label>
          <textarea
            id="comments"
            name="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
