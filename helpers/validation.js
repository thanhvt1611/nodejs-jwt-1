const Joi = require('joi')

const userValidate = data => {
    const userSchema = Joi.object({
        email: Joi.string().email({tlds: true}).lowercase().required(),
        password: Joi.string().min(4).max(32).required(),
    })

    return userSchema.validate(data)
}

module.exports = {
    userValidate
}