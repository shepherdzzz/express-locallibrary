var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {type: String, require:true, min: 3, max: 100}
    }
)

//Virtual for Genre's URL
GenreSchema
.virtual('url')
.get(
    function(){
        return '/catalog/Genre/' + this._id;
    }
)

//Export model
module.exports = mongoose.model('Genre',GenreSchema)