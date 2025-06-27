import React, { useRef } from 'react';

export const UncontrolledComponents = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userName: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);
  };

  return (
    <div className='sideContainer'>
      <h1 className="heading">Uncontrolled Components</h1>
      <p className="definition">
        <b>Definition:</b> An uncontrolled component in React refers to a component where the form element's state is not directly controlled by React. Instead, the form element maintains its own state, and React only interacts with it via <code>refs</code>.
      </p>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="username"
          placeholder="Username"
          ref={usernameRef}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
