const Profile = require('../models/Profile')



exports.renderAddWeight = (req,res) => {
    
   
        res.render('addweight')
    

}

exports.addProfile = (req,res,next) =>{
    const profile = new Profile({
        initialWeight: req.body.initialWeight,
        weightLostPerWeek: req.body.weightLostPerWeek,
        goalWeight: req.body.goalWeight
      })
      profile.save((err) => {
        if (err) { return next(err) }
        
        res.redirect(req.session.returnTo || '/')

        
      })
}