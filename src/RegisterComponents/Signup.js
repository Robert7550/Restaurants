import axios from "axios";
import React, {useState} from "react";




const Signup = () => {


    const [input, setInput] = useState('');
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');

    const createUser = () => {
        axios.post('http://localhost:3003/', {
            Username: input,
            Email: email,
            Pass1: pass1,
            Pass2: pass2
        }).then(() => {
            console.log("New user has been created");
        
        }).catch(error => {
            console.error("There was an error creating the user!", error);
        });
    };

    return(
        <>
            <form action=" ">
            <br/> <br/>
                <input type="text" placeholder="username" onChange={(event) => {
                    setInput(event.target.value)
                }} /> <br/> <br/>
                <input type="email" placeholder="email"  onChange={(event) => {
                    setEmail(event.target.value)
                }} /> <br/> <br/>
                <input type="password" placeholder="pass1"  onChange={(event) => {
                    setPass1(event.target.value)
                }} />  <br/> <br/>
                <input type="password" placeholder="pass2"  onChange={(event) => {
                    setPass2(event.target.value)
                }} />  <br/> <br/>

                <button type="submit" onClick={createUser} >Submit</button>
            </form>
        </>
    )
}

export default Signup;