const skills = require('./SkillsData').skills
const _ = require('lodash')

// function _generateId(skill){
//   return skill.category.toLowerCase
// }

function _cloneMe(item){
  return JSON.parse(JSON.stringify(item))
}


const RecipeApi = {
  
  getAllRecipes: function() {
    return _cloneMe(skills)
  },
  saveSkill: function(skill){
  // Pretending to make a call to web api
    console.log('AJAXcall saved recipe to the _')
    //TODO figure out about id.

    // if (skill.id) {
    //   const existingSkillIndex = _.indexOf(
    //     skills, _.find(skills, {id : skill.id}))
    //   // This makes sure the value in the array is updated. 
    //   skills.splice(existingSkillIndex, 1, skill)
    // } else{
    //   skill.id = _generateId(skill)
    skills.push(_cloneMe({'skill': skill}))
    // }
    return skill
  },

}

module.exports = RecipeApi