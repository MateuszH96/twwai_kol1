const users = [
    {
        id: 1,
        name: 'Mateusz',
        email: 'mateusz@wp.pl',
        password: 'admin1'
    },
    {
        id: 2,
        name: 'admin',
        email: 'admin@wp.pl',
        password: 'admin1'
    },
    {
        id: 3,
        name: 'Jasiu',
        email: 'jan@wp.pl',
        password: 'admin1'
    },
    {
        id: 4,
        name: 'Kaziu',
        email: 'Kaziu@wp.pl',
        password: 'admin1'
    },
    
];


const dataEndpoint = (router) => {
    router.get('/api/users', async (request, response, next) => {
        response.status(200).send({ users: users });
    });
    router.post('/api/users', async (request, response, next) => {
        users.push(request.body.newPost);
        response.status(200).send({post: users[users.length - 1]});
    });
    router.get('/api/user/:id', async (request, response, next) => {
        console.log(request.params.id);
        response.status(200).send(users[request.params.id]);
     });
};

export default dataEndpoint;
