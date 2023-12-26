const NutritionService = require("../../service/NutritionService");
const Util = require("../../utils/utils");
const Nutrition = require("./object/Nutrition");

let nut1 = new Nutrition(null, 'Phở', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fpho.webp?alt=media&token=590e6192-8a90-46bf-bab8-c9fc74a3220f', 367, 24, 51, 6)
let nut2 = new Nutrition(null, 'Pizza', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fpizza.webp?alt=media&token=81358460-1cc8-4bcf-aaea-f485894d541e', 488, 28, 72, 12)
let nut3 = new Nutrition(null, 'Cơm tấm sườn', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fcom%20tam.webp?alt=media&token=6e844f16-6c0e-4b65-9287-7bd1c218c50e', 527, 20.7, 81.6, 13.3)
let nut4 = new Nutrition(null, 'Bún bó Huế', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fbun%20bo%20hue.webp?alt=media&token=9dc8510a-1401-4c33-a819-882fa91e1a59', 622, 30, 56, 31)
let nut5 = new Nutrition(null, 'Sushi', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fsushi.jpeg?alt=media&token=31395da4-8719-407f-a6dc-a21c42a7774c', 410, 8, 57, 15)
let nut6 = new Nutrition(null, 'Cơm rang thập cẩm', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fcom-rang-thap-cam.jpg?alt=media&token=d22b2ded-eed0-4495-a5da-734de5038032', 541, 20, 60, 25)
let nut7 = new Nutrition(null, 'Bún chả', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fbun%20cha.jpeg?alt=media&token=0f2bbce4-314a-4c2e-84bf-794518c0996a', 364, 15, 30, 17)
let nut8 = new Nutrition(null, 'Bánh mì', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fba%CC%81nh%20mi%CC%80.jpeg?alt=media&token=43358954-bed2-4fec-934d-33e86a06cc3e', 600, 49.7, 46.7, 22.9)
let nut9 = new Nutrition(null, 'Salad', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fsalad.jpeg?alt=media&token=4d080149-c838-4a73-9d4c-3e5bd00d2325', 160, 3, 13, 12)
let nut10 = new Nutrition(null, 'Bún đậu', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/nutrition%2Fbu%CC%81n%20%C4%91a%CC%A3%CC%82u.jpeg?alt=media&token=11c70122-cf90-4208-89b9-baf66b30bd90', 530, 15, 50, 30)

let newNut = []
newNut.push(nut1)
newNut.push(nut2)
newNut.push(nut3)
newNut.push(nut4)
newNut.push(nut5)
newNut.push(nut6)
newNut.push(nut7)
newNut.push(nut8)
newNut.push(nut9)
newNut.push(nut10)

async function migrate () {
  let nutritions = await new NutritionService().findAll();
  newNut.forEach((nut) => {
    if(!new Util().checkExistByName(nut.name, nutritions)) {
      new NutritionService().save(nut)
    }
  })
  console.log('Migrated Nutrition Success');
}

module.exports = migrate
