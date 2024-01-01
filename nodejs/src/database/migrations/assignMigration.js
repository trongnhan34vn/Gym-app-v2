
const AssignmentService = require("../../service/AssignmentService");
const ExerciseService = require("../../service/ExerciseService");
const NutritionService = require("../../service/NutritionService");
const Util = require("../../utils/utils");
const Assignment = require("./object/Assignment");

async function migrate() {
  let exs = await new ExerciseService().findAll();
  let nuts = await new NutritionService().findAll();

  let randomExercises1 = new Util().getRandomElements(exs, 6);
  let randomExercises2 = new Util().getRandomElements(exs, 6);
  let randomExercises3 = new Util().getRandomElements(exs, 6);
  let randomExercises4 = new Util().getRandomElements(exs, 6);
  let randomNut1 = new Util().getRandomElements(nuts, 3);
  let randomNut2 = new Util().getRandomElements(nuts, 3);
  let randomNut3 = new Util().getRandomElements(nuts, 3);
  let randomNut4 = new Util().getRandomElements(nuts, 3);
  let randomNut5 = new Util().getRandomElements(nuts, 3);
  let randomNut6 = new Util().getRandomElements(nuts, 3);
  let randomNut7 = new Util().getRandomElements(nuts, 3);
  let randomNut8 = new Util().getRandomElements(nuts, 3);
  let randomNut9 = new Util().getRandomElements(nuts, 3);
  let randomNut10 = new Util().getRandomElements(nuts, 3);
  let randomNut11 = new Util().getRandomElements(nuts, 3);
  let randomNut12 = new Util().getRandomElements(nuts, 3);

  let ass1 = new Assignment(null, '6586577808464129eeda2f1c', '6586577808464129eeda2f19', randomExercises1, randomNut1, randomNut5, randomNut6, 1703350800000, 1703399400000, 1703406600000)
  let ass2 = new Assignment(null, '6586ed9301707ddfff569b65', '6586577808464129eeda2f19', randomExercises2, randomNut2, randomNut7, randomNut8, 1703350800000, 1703399400000, 1703406600000)
  let ass3 = new Assignment(null, '6586ed9301707ddfff569b64', '6586577808464129eeda2f19', randomExercises3, randomNut3, randomNut9, randomNut10, 1703350800000, 1703399400000, 1703406600000)
  let ass4 = new Assignment(null, '6586ed9301707ddfff569b66', '6586577808464129eeda2f19', randomExercises4, randomNut4, randomNut11, randomNut12, 1703350800000, 1703444400000, 1703451600000)

  let newAss = [];
  newAss.push(ass1)
  newAss.push(ass2)
  newAss.push(ass3)
  newAss.push(ass4)

  for (let i = 0; i < newAss.length; i++) {
    let assign = await new AssignmentService().findByUserAndPT(newAss[i].user, newAss[i].pt);
    if (!assign) {
      new AssignmentService().save(newAss[i])
    }
  }
  console.log('Migrate Assignment Success');
}

module.exports = migrate;