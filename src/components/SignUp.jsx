import React from "react";

export default function SignUp() {
  // const { name, email, gender, phoneNumber, password } = [
  //   "Manish",
  //   "manish@gmail.com",
  //   "male",
  //   8960072136,
  //   "manu123"
  // ];
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleName = (e) => {
    setName(e.target.value);
    // console.log(name.charAt(2));
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
    // console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const isAlphanumeric = (str) => {
    let alphaNumbers = "qwertyuiopasdfghjklzxcvbnm0123456789 ";
    for (let i = 0; i < str.length; i++) {
      if (!alphaNumbers.includes("" + str.charAt(i))) {
        return false;
      }
    }
    return true;
  };

  const getUsername = (str) => {
    let username = "";
    for (let i = 0; i < str.length; i++) {
      if ("" + str.charAt(i) !== "@") {
        username += str.charAt(i);
      } else {
        break;
      }
    }
    return username;
  };

  const handleClick = () => {
    if (!email || !password || !phoneNumber || !name) {
      setMessage("All fields are mandatory");
      return;
    }
    if (!isAlphanumeric(name.toLowerCase())) {
      setMessage("Name is not alphanumeric");
      return;
    }
    if (!email.includes("@")) {
      setMessage("Email must contain @");
      return;
    }
    if (isNaN(phoneNumber)) {
      setMessage("Phone Number must contain only numbers");
      return;
    }
    if (password.length < 6) {
      setMessage("Password must contain atleast 6 lettersk");
      return;
    }
    setMessage(`hello ${getUsername(email)}`);
    return;
  };
  return (
    <>
      <div>Name</div>
      <input
        type="text"
        onChange={handleName}
        data-testid="name"
        name="name"
        // value={name}
      ></input>
      <div>Email</div>
      <input
        type="text"
        onChange={handleEmail}
        data-testid="email"
        name="email"
      ></input>
      <div>Gender</div>
      <select name="gender" onChange={handleGender} data-testid="gender">
        <option value="male" selected>
          male
        </option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
      <div>Phone Number</div>
      <input
        type="text"
        onChange={handlePhoneNumber}
        data-testid="phoneNumber"
        name="phoneNumber"
      ></input>
      <div>Password</div>
      <input
        type="password"
        name="password"
        onChange={handlePassword}
        data-testid="password"
      ></input>
      <button onClick={handleClick} data-testid="submit">
        Submit
      </button>
      <div>
        <p>{message}</p>
      </div>
    </>
  );
}
