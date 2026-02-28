import { useState } from "react";
export default function Assignment6() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (form.password.length < 6)
      newErrors.password = "Password must be 6 characters";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" />
        {errors.name && <p>{errors.name}</p>}

        <input name="email" onChange={handleChange} placeholder="Email" />
        {errors.email && <p>{errors.email}</p>}

        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        {errors.password && <p>{errors.password}</p>}

        <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}