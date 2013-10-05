module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user',
	{
	    firstName: {type: DataTypes.STRING},
	    lastName: {type: DataTypes.STRING},
	    password: {type: DataTypes.STRING},
	    numberOfPets: {type: DataTypes.INTEGER},
	}
    );
};
