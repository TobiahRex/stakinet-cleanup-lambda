const Schema = require('mongoose').Schema;

const complaintSchema = new Schema({
  emails: {
    email: { type: String, required: true },
    created: { type: Date, default: Date.now },
    messageId: { type: String, required: true },
  },
});
export default complaintSchema;