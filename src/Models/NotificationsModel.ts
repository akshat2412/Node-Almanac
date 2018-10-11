import * as mongoose from "mongoose"

const Schema = mongoose.Schema;

export const NotificationSchema = new Schema({
    UserID: {
        type: Number
    },
    NotificationContent: {
        type: String
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    DueDate: {
        type: Date
    },
    Status: {
        type: String,
        default: "Not Completed"
    }
})
