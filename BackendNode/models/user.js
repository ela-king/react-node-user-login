let mongoose = require('mongoose');
const GUID = require('mongoose-guid');
let UserSchema = new mongoose.Schema({
    userObj: {
        type: Object,
        properties: {
            id: {
                type: GUID.type,
                default: GUID.value,
                required: true
            },
            userName: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            givenName: {
                type: String,
                required: false
            },
            surName: {
                type: String,
                required: false
            },
            DOB: {
                type: String,
                required: false
            }
        }
    }
});

module.exports = mongoose.model('user', UserSchema)
