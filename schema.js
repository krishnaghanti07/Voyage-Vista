const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required() ,
        description: Joi.string().required() ,
        location: Joi.string().required() ,
        country: Joi.string().required() ,
        category: Joi.string().valid(
            "trending", "luxury", "treehouse", "boathouse",
            "mountains", "forest", "jungle-lodges", "desert",
            "beachfront", "island", "historical", "temple-stays",
            "monasteries", "castles", "camping", "safari",
            "haunted-houses", "floating-house", "futuristic",
            "underwater", "budget-friendly", "volcano-view",
            "skyline-view", "ice-hotel", "cave-hotel",
            "eco-lodges", "wellness", "off-grid"
        ).required(),
        price: Joi.number().required().min(0) ,
        image: Joi.string().allow("" , null) ,
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5) ,
        comment: Joi.string().required() ,
    }).required(),
});