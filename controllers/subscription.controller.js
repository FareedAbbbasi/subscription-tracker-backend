import Subscription from "../models/subscription.model.js"

export const createSubscription = async ( req, res, next ) => {
    try {
        const subscription = await Subscription.create({ 
            ...req.body,
            user: req.user._id,
        })

        

        res.status(201).json({ success: true, data: subscription })
    } catch (e) {
        next(e);
    }
}


export const getUserSubscription = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            const error = new Error("You are not owner of this account")
            error.status = 401;
            throw error;
        }

        const subscription = await Subscription.find({user: req.params.id});

        res.status(200).json({ success: true, data: subscription });
    } catch (e) {
        next(e);
    }
}


export const getAllSubscriptions = async ( req, res, next ) => {
    try { 
        const subscription = await Subscription.find();

        if (!subscription) {
            const error = new Error("No subscription is found");
            error.status = 404;
            throw error;
        }

        res.status(200).json({success: true, data: subscription})
    } catch (e) {
        next(e)
    }
}


export const getSubscriptionDetails = async ( req, res, next ) => {
    try {
        const _id = req.params.id;
        const subscriptionDetails = await Subscription.find({_id})

        res.status(200).json({ success: true, data: subscriptionDetails})
    } catch (e) {
        next(e)
    }
}

