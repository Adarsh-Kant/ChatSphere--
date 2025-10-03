// // import express from "express";
// // import Conversation from "../models/conversation_model.js";
// // import Message from "../models/message_model.js"; // <-- Add this line


// // export const sendMessage = async (req, res) => {
// //     // console.log("Send message controller",req.params.id,req.body.message);
// //     try {
// //         const {message}=req.body;
// //         const {id:receiverId}=req.params;
// //         const senderId=req.user._id;

// //         let conversation = await Conversation.findOne({
// //             participants: { $all: [senderId, receiverId] }  
// //         });
// //         if(!conversation){
// //             conversation=await Conversation.create({
// //                 participants:[senderId,receiverId],
// //             });
// //             const newMessage=new Message({
// //                 senderId,
// //                 receiverId,
// //                 message
// //             })

// //             if(newMessage){
// //                 conversation.messages.push(newMessage._id);
// //                 return res.status(200).json({message: "Message sent successfully", newMessage});
// //             }
// //             await Promise.all([conversation.save(), newMessage.save()]);
// //             return res.status(200).json({message: "Message sent successfully", newMessage});
// //         }
// //     }catch(error){
// //         console.log("Error in sending message "+error)
// //         res.status(500).json({message: "Internal server error"});
// //     }
// // }









import Conversation from "../models/conversation_model.js";
import Message from "../models/message_model.js";
import {io,getReceiverSocketId} from "../SocketIO/server.js"
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Create and save the message
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        //before
        // await newMessage.save();

        
        // // Add message to conversation and save
        // conversation.messages.push(newMessage._id);
        // await conversation.save();

        //after
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([conversation.save(), newMessage.save()]);

        const receiversocketId = getReceiverSocketId(receiverId);
        if (receiversocketId) {
            io.to(receiversocketId).emit("newMessage", newMessage);
        }
//before
// const senderSocketId = getReceiverSocketId(senderId);
// if (senderSocketId && senderSocketId !== receiversocketId) {
//     io.to(senderSocketId).emit("newMessage", newMessage);
// }
//after

        //before
        // return res.status(200).json({ message: "Message sent successfully", newMessage });
        //after
        res.status(200).json(newMessage);
    } catch (error) {
        console.log("Error in sending message " + error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const getMessage = async (req, res) => {
    try{
        const {id:chatUser}=req.params;
        const senderId=req.user._id;
        //before
        // const conversation=await Conversation.findOne({
        //after
        let conversation=await Conversation.findOne({
            participants: { $all: [senderId, chatUser] }
        }).populate('messages');

        if(!conversation){
    // return res.status(200).json({messages: []});before
            return res.status(201).json([]);//after
}
        const messages=conversation.messages;
        //before
        // return res.status(200).json({messages});
        res.status(201).json(messages);//after
    }catch(error){
        console.log("Error in getting message " + error);
        res.status(500).json({ message: "Internal server error" });
    }
}






// import Conversation from "../models/conversation_model.js";
// import Message from "../models/message_model.js";
// import { io, getReceiverSocketId } from "../SocketIO/server.js";

// export const sendMessage = async (req, res) => {
//     try {
//         const { message } = req.body;
//         const { id: receiverId } = req.params;
//         const senderId = req.user._id;

//         let conversation = await Conversation.findOne({
//             participants: { $all: [senderId, receiverId] }
//         });

//         if (!conversation) {
//             conversation = await Conversation.create({
//                 participants: [senderId, receiverId],
//             });
//         }

//         // Create and save the message
//         const newMessage = new Message({
//             senderId,
//             receiverId,
//             message
//         });
//         await newMessage.save();

//         // Add message to conversation and save
//         conversation.messages.push(newMessage._id);
//         await conversation.save();

//         const receiversocketId = getReceiverSocketId(receiverId);
//         if (receiversocketId) {
//             io.to(receiversocketId).emit("newMessage", newMessage);
//         }

//         return res.status(200).json({ message: "Message sent successfully", newMessage });
//     } catch (error) {
//         console.log("Error in sending message " + error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const getMessage = async (req, res) => {
//     try {
//         const { id: chatUser } = req.params;
//         const senderId = req.user._id;

//         const conversation = await Conversation.findOne({
//             participants: { $all: [senderId, chatUser] }
//         }).populate('messages');

//         if (!conversation) {
//             return res.status(200).json({ messages: [] });
//         }
//         const messages = conversation.messages;
//         res.status(200).json({ messages });
//     } catch (error) {
//         console.log("Error in getting message " + error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };