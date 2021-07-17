const Skill = require('../models/skill')

module.exports = {
    create,
    index
}

function create(req, res){
req.body.notDone = false;
Skill.create(req.body);
res.redirect('/skills')
}

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}
