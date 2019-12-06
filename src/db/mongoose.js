const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false, // added this in after to address the deprecation warning coming from mongodb native driver, that mongoose is using behind the scene - this takes mongoose a little time to get up to speed, so the warning is not valid
    useUnifiedTopology: true // same as above
})