import express, { request, response } from 'express'

const app = express();

app.use(express.json());

const users = ['Paulo', 'Pedro', 'João', 'Maria'];

// Find all users
app.get('/users', (request, response) => {

    const search = String(request.query.search);

    console.log('search', search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // JSON
    return response.json(filteredUsers);
});

// Find users by id
app.get('/users/:id', (request, response) => {
    console.log('user by id');
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

//
app.post('/users', (request, response) => {

    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    }
    return response.json(user);
})

app.listen(3333);