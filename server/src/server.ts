import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários')

    response.json([
        'Débora',
        'Yago',
        'Picole',
        'Sakura',
        'Kiara'
    ])
});

app.listen(3333);