import sequelize from './config.js';
import User from './models/user.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Synchronize the models with the database (creates tables if they don't exist)
    await sequelize.sync();

    // // Create a new user
    // const newUser = await User.create({
    //   username: 'john_doe',
    //   email: 'john@example.com',
    //   password: 'password123',
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   age: 30,
    //   address: {
    //     street: '123 Main St',
    //     city: 'Anytown',
    //     state: 'CA',
    //     zipcode: '12345',
    //   },
    //   interests: ['Reading', 'Hiking'],
    //   isActive: true,
    // });

    // console.log('New user created:', newUser.toJSON());

    // Query all users
    const users = await User.findAll();
    console.log('All users:', users.map((user) => user.toJSON()));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
