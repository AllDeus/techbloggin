const { User } = require('../models');

const userData = [{
    username: 'kelly',
    password: '087'

},
{
    username: 'john',
    password: '117'
},
{
    username: 'frederic',
    password: '104'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;