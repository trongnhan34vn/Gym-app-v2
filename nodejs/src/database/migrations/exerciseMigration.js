const ExerciseService = require("../../service/ExerciseService")
const Util = require("../../utils/utils")
const Exercise = require("./object/Exercise")

let ex1 = new Exercise(null, 'Barbell or Smith machine hip thrusts', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-1.gif?alt=media&token=1465f109-456d-497f-aefa-be44fcdb67bd', 4, 3, 2, 2, '658695a1a0148008aeaa438b')
let ex2 = new Exercise(null, 'Weighted glute bridges', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-2.gif?alt=media&token=40e95a5e-e647-4522-b41f-832163060c4f', 4, 3, 2, 2, '658695a1a0148008aeaa438b')
let ex3 = new Exercise(null, 'Pull-ups and chin-ups', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-3.gif?alt=media&token=de2d8249-0aa5-412f-a832-02947411ee6d', 5, 3, 2, 2, '658695a1a0148008aeaa438c')
let ex4 = new Exercise(null, 'Cable seated high rope face pull', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-4.gif?alt=media&token=1b741675-ebb6-469e-a50a-cc6f631c6b70', 3, 3, 2, 2,'658695a1a0148008aeaa438c')
let ex5 = new Exercise(null, 'Push ups', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-5.gif?alt=media&token=fa81f98e-339d-40be-943d-7294b5ed8eca', 2, 3, 2, 2,'658695a1a0148008aeaa438d')
let ex6 = new Exercise(null, 'Dips', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-6.gif?alt=media&token=715d7833-7130-4d98-bd92-1f0335074813', 3, 3, 2, 2,'658695a1a0148008aeaa438d')
let ex7 = new Exercise(null, 'Barbell overhead', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-7.gif?alt=media&token=e7add53f-fbe2-4640-bcef-4f993450da44', 4, 3, 2, 2,'658695a1a0148008aeaa438e')
let ex8 = new Exercise(null, 'Plate front raise', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-8.gif?alt=media&token=2927ba0b-98d5-4889-b3bb-9e93596707e6', 3, 3, 2, 2,'658695a1a0148008aeaa438e')
let ex9 = new Exercise(null, 'Dumbbell or kettlebell goblet squat', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-9.gif?alt=media&token=db924946-b6ff-44ac-b1aa-119021d9490d', 2, 3, 2, 2,'658695a1a0148008aeaa438f')
let ex10 = new Exercise(null, 'Leg Press', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-10.gif?alt=media&token=93f11f4e-d899-425e-a411-ad298956776d', 3, 3, 2, 2,'658695a1a0148008aeaa438f')
let ex11 = new Exercise(null, 'Stiff-leg barbell deadlift', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-11.gif?alt=media&token=4bffe005-b75a-45d1-b0fd-f2a8e093aa72', 3, 3, 2, 2,'658695a1a0148008aeaa4390')
let ex12 = new Exercise(null, 'Glute-ham raise', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-12.gif?alt=media&token=e522adc1-0a56-4912-9542-3e913dbf38f0', 5, 3, 2, 2,'658695a1a0148008aeaa4390')
let ex13 = new Exercise(null, 'Knee angle bent-leg seated machine', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-13.gif?alt=media&token=979e4831-b326-47ea-85bd-35f41d2abce2', 4, 3, 2, 2,'658695a1a0148008aeaa4391')
let ex14 = new Exercise(null, '30-degree knee angle bent-leg', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-14.gif?alt=media&token=9af739a3-08f3-4818-a38d-620653542cff', 4, 3, 2, 2,'658695a1a0148008aeaa4391')
let ex15 = new Exercise(null, 'Barbell floor press','https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-15.gif?alt=media&token=6f03ae7b-6c27-4e9b-b938-e1fbb2d1d087', 3, 2, 2, 2,'658695a1a0148008aeaa4392')
let ex16 = new Exercise(null, 'Reverse-grip barbell bench press','https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-16.gif?alt=media&token=f55f11c9-155d-499c-abba-198616c0034e', 4, 3, 2, 2,'658695a1a0148008aeaa4392')
let ex17 = new Exercise(null, 'Narrow-grip chin-ups','https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-17.gif?alt=media&token=8f687067-e51e-4ae4-a806-735ab2e9f8a9', 5, 3, 2, 2,'658695a1a0148008aeaa4393')
let ex18 = new Exercise(null, 'Standing barbell curls','https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-18.gif?alt=media&token=2fd08fa4-7092-4635-90c5-a7a7ee950740', 4, 3, 2, 2,'658695a1a0148008aeaa4393')
let ex19 = new Exercise(null, 'Pushup-position plank','https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-19.gif?alt=media&token=4fedeffc-22cb-49cf-a6a9-17b50e1090b5', 4, 3, 2, 2,'658695a1a0148008aeaa4394')
let ex20 = new Exercise(null, 'Reverse crunch on a slant board','https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-20.gif?alt=media&token=303cc717-986c-4aa1-9b9a-139a8c7b59c3', 3, 2, 2, 2,'658695a1a0148008aeaa4394')
let ex21 = new Exercise(null, 'Grippers', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-21.gif?alt=media&token=2fc72675-b4af-4437-9304-1f6cbd51dca9', 2, 2, 2, 2,'658695a1a0148008aeaa4395')
let ex22 = new Exercise(null, 'Wrist curls and reverse wrist curls' ,'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-22.gif?alt=media&token=4ed97182-bab2-4e68-99b8-16205734d2bd', 3, 3, 2, 2, '658695a1a0148008aeaa4395')


let newExercises = [];
newExercises.push(ex1);
newExercises.push(ex2);
newExercises.push(ex3);
newExercises.push(ex4);
newExercises.push(ex5);
newExercises.push(ex6);
newExercises.push(ex7);
newExercises.push(ex8);
newExercises.push(ex9);
newExercises.push(ex10);
newExercises.push(ex11);
newExercises.push(ex12);
newExercises.push(ex13);
newExercises.push(ex14);
newExercises.push(ex15);
newExercises.push(ex16);
newExercises.push(ex17);
newExercises.push(ex18);
newExercises.push(ex19);
newExercises.push(ex20);
newExercises.push(ex21);
newExercises.push(ex22);

async function migrate () {
  let exercises = await new ExerciseService().findAll();
  newExercises.forEach(element => {
    if (!new Util().checkExistByName(element.name, exercises)) {
      new ExerciseService().save(element);
    }
  });
  console.log('Migrated Exercise Success');
}

module.exports = migrate
