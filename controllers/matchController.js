const db = require('./../models');

module.exports = {
    getMatch : async (req, res) =>{
        console.log(req.body)
        try {
            const matched = await db.User.find({'lat' : req.body.lat, 'lng' : req.body.lng})
            console.log(matched);
            res.json({ matched });
        } catch (e) {
            res.json(e)
        }
    }
}