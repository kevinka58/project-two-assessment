const skills = [
    {skill:'', notDone: false}
]


module.exports = {
    create,
    getAll
}

function create(skill) {
skills.push(skill)
}

function getAll(){
    return skills;
}