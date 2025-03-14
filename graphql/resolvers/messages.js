const Message = require('../../models/Message');

module.exports = {
    Mutation: {
        async createMessage(_, {messageInput: {text, username} }) {
            const newMessage = new Message({
                text: text,
                createdBy: username,
                createdAt: new Date().toISOString()
            });

            const res = await newMessage.save();
            console.log(res);
            return {
                id: res.id,
                ...res._doc
            };
        }
    },
    Query: {
        message: (_, {ID}) => Message.findById(ID)
    }
}

// Expected output for mutation
// {
//     "id": "60d21b4667d0d8992e610c85",
//     "text": "Hello, world!",
//     "createdBy": "JohnDoe",
//     "createdAt": "2024-07-01T12:00:00Z"
//   }
  