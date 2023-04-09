const sequelize = require('../config/connection');
const { User, Article, Tips } = require('../models');
const userData = require ("./userData.json");
const tipsData = require("./tipsData.json");
const articleData = require("./articleData.json");



const seedDatabase = async () =>  {
    await sequelize.sync({ force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Article.bulkCreate(articleData, {
        individualHooks: true,
        returning: true,


    } );

    await Tips.bulkCreate(tipsData, {
        individualHooks: true, 
        returning: true, 


    });

process.exit(0);
};

seedDatabase();