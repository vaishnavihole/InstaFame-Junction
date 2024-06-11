import Message from "../../models/Message.js";
import User from "../../models/User.js";

const apiV1SendMessage = async (req, res) => {
    try {
      const { message, receiverId, senderId } = req.body;
      console.log("Message:", message);
      console.log("Sender ID:", senderId);
      console.log("Receiver ID:", receiverId);
  
      if (!message || !receiverId || !senderId) {
        return res.status(400).json({ error: "Message, senderId, and receiverId are required" });
      }
  
      const receiver = await User.findById(receiverId);
      if (!receiver) {
        return res.status(404).json({ error: "Receiver not found" });
      }
  
      const newMessage = new Message({ message, sender: senderId, receiver: receiverId });
      await newMessage.save();
      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending message:", error.message);
      if (error.name === 'ValidationError') {
        res.status(400).json({ error: "Validation Error", details: error.message });
      } else if (error.name === 'CastError') {
        res.status(400).json({ error: "Invalid Receiver ID" });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
 };


 const apiV1GetUserChat =  async (req, res) => {
    try {
      const { senderId, receiverId } = req.body;

      if (!senderId || !receiverId) {
        return res.status(400).json({ error: "senderId and receiverId are required" });
      }

      // Fetch messages between sender and receiver
      const messages = await Message.find({
        $or: [
          { sender: senderId, receiver: receiverId },
          { sender: receiverId, receiver: senderId }
        ]
      });

      res.status(200).json({ messages });
    } catch (error) {
      console.error("Error fetching user chat:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  
    export { apiV1SendMessage , apiV1GetUserChat};
  