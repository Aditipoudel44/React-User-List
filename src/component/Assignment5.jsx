import { useState } from "react";

export default function Assignment5() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" />
        <button type="submit">Submit</button>
      </form>

      <h3>Preview:</h3>
      <p>{form.name}</p>
      <p>{form.email}</p>
      <p>{form.message}</p>
    </div>
  );
}