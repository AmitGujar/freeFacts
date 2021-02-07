const mongoose = require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
const mongoosePaginate = require("mongoose-paginate-v2");


const factSchema = mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

factSchema.plugin(aggregatePaginate);
factSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Fact", factSchema);