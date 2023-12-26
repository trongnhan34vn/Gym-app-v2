const MuscleService = require("../../service/MuscleService");
const Util = require("../../utils/utils");
const Muscle = require("./object/Muscle");

let muscle1 = new Muscle(null, 'Mông', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FMo%CC%82ng.webp?alt=media&token=cfb7f70a-b41e-4f24-a43a-9765012043f9')
let muscle2 = new Muscle(null, 'Lưng', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FLu%CC%9Bng.webp?alt=media&token=5e50b5d3-8e60-4be1-abb0-9d11fef71db0')
let muscle3 = new Muscle(null, 'Ngực', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FNgu%CC%9B%CC%A3c.webp?alt=media&token=0efb7d2b-931e-4dca-9dda-6967980cf6af')
let muscle4 = new Muscle(null, 'Vai', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FVai.webp?alt=media&token=e0b19a22-7737-4b46-9eba-bc75c5356342')
let muscle5 = new Muscle(null, 'Bắp đùi trước', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FBa%CC%86%CC%81p%20%C4%91u%CC%80i%20tru%CC%9Bo%CC%9B%CC%81c.webp?alt=media&token=67b36916-d283-4012-8568-36d6fdb08fef')
let muscle6 = new Muscle(null, 'Bắp đùi sau', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FBa%CC%86%CC%81p%20%C4%91u%CC%80i%20sau.webp?alt=media&token=8dbba535-6c00-47be-9229-e538cf4b9f41')
let muscle7 = new Muscle(null, 'Bắp chân', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FBa%CC%86%CC%81p%20cha%CC%82n.webp?alt=media&token=510ea6df-d020-471b-99d0-d2a9ed63396a')
let muscle8 = new Muscle(null, 'Bắp tay sau', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FBa%CC%86%CC%81p%20tay%20sau.webp?alt=media&token=d477e623-3598-4205-bf6f-8b9a9dee9d59')
let muscle9 = new Muscle(null, 'Bắp tay trước', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FBa%CC%86%CC%81p%20tay%20tru%CC%9Bo%CC%9B%CC%81c.webp?alt=media&token=f7709ebb-b31b-4926-bf2a-08d0dfa83960')
let muscle10 = new Muscle(null, 'Bụng', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FBu%CC%A3ng.webp?alt=media&token=c161c0e8-1f45-4a01-97d5-e8dc4555302d')
let muscle11 = new Muscle(null, 'Cẳng tay', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/muscle%2FCa%CC%86%CC%89ng%20tay.webp?alt=media&token=66bb128b-3cc5-436a-81d1-b27bb2b59858')

let newMuscles = [];
newMuscles.push(muscle1);
newMuscles.push(muscle2);
newMuscles.push(muscle3);
newMuscles.push(muscle4);
newMuscles.push(muscle5);
newMuscles.push(muscle6);
newMuscles.push(muscle7);
newMuscles.push(muscle8);
newMuscles.push(muscle9);
newMuscles.push(muscle10);
newMuscles.push(muscle11);

async function migrate() {
  let muscles = await new MuscleService().findAll();
  
  newMuscles.forEach(element => {
    if (!new Util().checkExistByName(element.name, muscles)) {
      new MuscleService().save(element);
    }
  });
  console.log('Migrated Muscle Success');
}

module.exports = migrate;