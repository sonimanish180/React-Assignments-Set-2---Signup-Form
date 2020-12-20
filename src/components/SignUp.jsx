import React from "react";

export default function SignUp() {
  const { name, email, gender, phoneNumber, password } = [
    "Manish",
    "manish@gmail.com",
    "male",
    8960072136,
    "manu123"
  ];
  return (
    <>
      <div>Name</div>
      <input type="text" data-testid="name" name="name" value={name}></input>
      <div>Email</div>
      <input type="text" data-testid="email" name="email" value={email}></input>
      <div>Gender</div>
      <input
        type="text"
        data-testid="gender"
        name="gender"
        value={gender}
      ></input>
      <div>Phone Number</div>
      <input
        type="number"
        data-testid="phoneNumber"
        name="phoneNumber"
        value={phoneNumber}
      ></input>
      <div>Password</div>
      <input
        type="password"
        name="password"
        data-testid="password"
        value={password}
      ></input>
      <button data-testid="submit">Submit</button>
    </>
  );
}
