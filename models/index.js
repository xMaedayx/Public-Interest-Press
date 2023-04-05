const User = require('./User');
const Article = require('./Article');
const Tips = require('./Tips');

User.hasMany(User, {
    foreignKey: "author_id"
});

User.hasMany(Tips, {
   foreignKey: "author_id",
   onDelete: "CASCADE"
 
});

Article.belongsTo(User, {
    foriegnKey: "author_id"

});

Tips.belongsTo(User, {
    foreignKey: "author_id"

});









module.exports = { 
    User, 
    Article, 
    Tips,
 };

// user and articles destructuring (refer index.js in mini28)
