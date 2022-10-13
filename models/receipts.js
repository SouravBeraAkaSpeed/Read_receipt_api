import mongoose from 'mongoose';

const receiptSchema = mongoose.Schema({
    email: String,

    createdAt: {
        type: Date,
        default: new Date()
    }
})

const receipt = mongoose.model('receipt', receiptSchema);

export default receipt;