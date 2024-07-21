const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')


app.use(express.json())
app.use(cors())

// let us run the server

app.listen(3003, () => {
    console.log('server is running port 3003')
})



// let us create our database(mysql)

const db = mysql.createConnection({
    user : 'root',
    host: "localhost",
    password: " ",
    database: "burgerbliss"

})



// let us create a route to the server that will register a user

app.post('/', (req, res) => {
    
    //we need to get variable set to from the form
    
    const setInput = req.body.Username
    const setEmail = req.body.Email
    const setPass1 = req.body.Pass1
    const setPass2 = req.body.Pass2

    // let us create an SQL statement to insert the user data to database table

    const SQL = 'INSERT INTO signup (username, email, pass1	, pass2) VALUES (?,?,?)'

    // we are goinn to enter the values through a variable

    const value = [setInput, setEmail, setPass1, setPass2]

    db.query(SQL, value, (err) => {
        if(err){
            res.send(err)
        }

        else{
            console.log('User created successfully')
            res.send({message: 'User added'})

            // lets try
            // user has not been submitted, we need to use express and cors
        }
    })

})