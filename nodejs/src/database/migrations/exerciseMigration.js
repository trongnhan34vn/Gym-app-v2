const ExerciseService = require("../../service/ExerciseService")
const Util = require("../../utils/utils")
const Exercise = require("./object/Exercise")

let barbellOrSmithMachineHipThrusts = `
1. Setup:
   a. Position a bench horizontally and place it on the floor.
   b. Sit on the ground with your upper back against the edge of the bench.
   c. Roll a loaded barbell over your legs until it's positioned directly above your hips.
   d. Place a padded barbell pad on your hips to reduce discomfort.

2. Foot Placement:
   a. Plant your feet flat on the ground, hip-width apart.
   b. Ensure your knees are bent at a 90-degree angle when your feet are flat.

3. Body Alignment:
   a. Engage your core and press through your heels.
   b. Lift your hips towards the ceiling, creating a straight line from your shoulders to your knees at the top.

4. Hip Extension:
   a. Squeeze your glutes at the top of the movement.
   b. Hold the position briefly to maximize glute activation.

5. Lowering the Hips:
   a. Lower your hips back down towards the ground in a controlled manner.
   b. Avoid letting your back round or losing tension in your glutes.

6. Repetitions:
   a. Perform the desired number of repetitions.
   b. Start with a weight that allows for proper form and gradually increase as you become more comfortable.
`.replace(/\n/g, "\n");

let weightedGluteBridges = `
1. Setup:
   a. Lie on your back on a mat or on the ground.
   b. Bend your knees and place your feet flat on the ground, hip-width apart.
   c. Place a weighted object (dumbbell, barbell, or weight plate) on your hips.

2. Body Position:
   a. Keep your arms relaxed by your sides with palms facing down.
   b. Ensure your head, shoulders, and upper back are firmly on the ground.

3. Hip Lift:
   a. Engage your core and press through your heels.
   b. Lift your hips towards the ceiling by squeezing your glutes.
   c. Create a straight line from your shoulders to your knees at the top.

4. Hold and Squeeze:
   a. Hold the elevated position at the top for a moment, focusing on squeezing your glutes.
   b. Ensure your knees are in line with your hips and don't let them collapse inward.

5. Lowering:
   a. Lower your hips back down to the ground in a controlled manner.
   b. Avoid completely resting your hips on the ground between repetitions to keep tension on the muscles.

6. Repetitions:
   a. Perform the desired number of repetitions.
   b. Start with a weight that challenges you but allows for proper form.

7. Sets:
   a. Aim for 3-4 sets of 10-15 repetitions, depending on your fitness level and goals.
`.replace(/\n/g, "\n");

let pullUpsAndChinUps = `
Pull-ups:
1. Setup:
   a. Grip the pull-up bar with hands slightly wider than shoulder-width apart.
2. Lift:
   a. Engage your back muscles and pull your body up towards the bar.
   b. Lower yourself back down in a controlled manner.

Chin-ups:
1. Setup:
   a. Grip the pull-up bar with hands facing you, shoulder-width apart.
2. Lift:
   a. Engage your back muscles and pull your body up towards the bar.
   b. Lower yourself back down in a controlled manner.
`.replace(/\n/g, "\n");

let cableSeatedHighRopeFacePull = `
1. Setup:
   a. Sit facing a cable machine with the rope attachment at the high setting.
   b. Grab the rope handles with an overhand grip.
2. Pull:
   a. Pull the rope towards your face, keeping your elbows high.
   b. Squeeze your shoulder blades together at the end of the movement.
`.replace(/\n/g, "\n");

let pushUps = `
1. Setup:
   a. Start in a plank position with hands placed slightly wider than shoulder-width apart.
2. Push:
   a. Lower your body towards the ground by bending your elbows.
   b. Push back up to the starting position.
`.replace(/\n/g, "\n");

let dips = `
1. Setup:
   a. Use parallel bars or dip station.
   b. Grip the bars with your palms facing inward.
2. Dip:
   a. Lower your body by bending your elbows.
   b. Push back up to the starting position.
`.replace(/\n/g, "\n");

let barbellOverheadPress = `
1. Setup:
   a. Stand with feet shoulder-width apart.
   b. Grip the barbell with hands slightly wider than shoulder-width.
2. Press:
   a. Press the barbell overhead, extending your arms.
   b. Lower the barbell back to the starting position.
`.replace(/\n/g, "\n");

let plateFrontRaise = `
1. Setup:
   a. Stand with feet hip-width apart, holding a weight plate with both hands in front of you.
2. Raise:
   a. Lift the weight plate to shoulder height.
   b. Lower it back down in a controlled manner.
`.replace(/\n/g, "\n");

let dumbbellOrKettlebellGobletSquat = `
1. Setup:
   a. Hold a dumbbell or kettlebell close to your chest with both hands.
2. Squat:
   a. Lower your body into a squat position.
   b. Push back up to the starting position.
`.replace(/\n/g, "\n");

let legPress = `
1. Setup:
   a. Sit on the leg press machine with feet shoulder-width apart on the platform.
2. Press:
   a. Push the platform away by extending your knees.
   b. Bend your knees to lower the platform back down.
`.replace(/\n/g, "\n");

let stiffLegBarbellDeadlift = `
1. Setup:
   a. Stand with feet hip-width apart, holding a barbell in front of you with an overhand grip.
2. Deadlift:
   a. Hinge at the hips, lowering the barbell towards the ground.
   b. Stand back up, extending your hips and straightening your back.
`.replace(/\n/g, "\n");

let gluteHamRaise = `
1. Setup:
   a. Position yourself on a glute-ham raise machine with your ankles secured.
2. Lower:
   a. Lower your upper body towards the ground by bending at the hips.
   b. Engage your hamstrings and glutes to lift your upper body back up.
`.replace(/\n/g, "\n");

let kneeAngleBentLegSeatedMachine = `
1. Setup:
   a. Adjust the machine to set the knee angle.
   b. Sit on the machine with your knees bent.
2. Press:
   a. Press the weight by extending your knees.
   b. Bend your knees to return to the starting position.
`.replace(/\n/g, "\n");

let thirtyDegreeKneeAngleBentLeg = `
1. Setup:
   a. Adjust the machine to set a 30-degree knee angle.
   b. Sit on the machine with your knees bent.
2. Press:
   a. Press the weight by extending your knees.
   b. Bend your knees to return to the starting position.
`.replace(/\n/g, "\n");

let barbellFloorPress = `
1. Setup:
   a. Lie on your back on the floor with a barbell at chest height.
   b. Grip the barbell with hands slightly wider than shoulder-width.
2. Press:
   a. Press the barbell upward until your arms are fully extended.
   b. Lower the barbell back down to the floor.
`.replace(/\n/g, "\n");

let reverseGripBarbellBenchPress = `
1. Setup:
   a. Lie on your back on a bench.
   b. Grip the barbell with hands in a reverse (supinated) position.
2. Press:
   a. Press the barbell upward until your arms are fully extended.
   b. Lower the barbell back down to the chest.
`.replace(/\n/g, "\n");

let narrowGripChinUps = `
1. Setup:
   a. Grip the pull-up bar with hands close together, palms facing you.
2. Lift:
   a. Engage your back muscles and pull your body up towards the bar.
   b. Lower yourself back down in a controlled manner.
`.replace(/\n/g, "\n");

let standingBarbellCurls = `
1. Setup:
   a. Stand with feet shoulder-width apart, holding a barbell with an underhand grip.
2. Curl:
   a. Curl the barbell towards your shoulders by bending your elbows.
   b. Lower the barbell back down to the starting position.
`.replace(/\n/g, "\n");

let pushupPositionPlank = `
1. Setup:
   a. Start in a plank position with arms fully extended.
2. Hold:
   a. Maintain a straight line from head to heels.
   b. Hold the position for the desired duration.
`.replace(/\n/g, "\n");

let reverseCrunchOnASlantBoard = `
1. Setup:
   a. Lie on a slant board with your head higher than your feet.
   b. Grip the sides of the board for stability.
2. Crunch:
   a. Lift your legs towards your chest, curling your hips off the board.
   b. Lower your legs back down in a controlled manner.
`.replace(/\n/g, "\n");

let grippers = `
1. Setup:
   a. Hold a hand gripper in one hand.
2. Squeeze:
   a. Squeeze the gripper, bringing the handles together with your fingers.
   b. Release the grip and repeat for the desired number of repetitions.
`.replace(/\n/g, "\n");

let wristCurlsAndReverseWristCurls = `
Wrist Curls:
1. Setup:
   a. Sit on a bench with a dumbbell in one hand, palm facing up.
2. Curl:
   a. Curl the dumbbell upward by flexing your wrist.
   b. Lower the dumbbell back down.

Reverse Wrist Curls:
1. Setup:
   a. Sit on a bench with a dumbbell in one hand, palm facing down.
2. Curl:
   a. Curl the dumbbell upward by extending your wrist.
   b. Lower the dumbbell back down.
`.replace(/\n/g, "\n");

let ex1 = new Exercise(null, 'Barbell or Smith machine hip thrusts', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-1.gif?alt=media&token=1465f109-456d-497f-aefa-be44fcdb67bd', barbellOrSmithMachineHipThrusts, 4, 3, 2, 60, '658695a1a0148008aeaa438b')
let ex2 = new Exercise(null, 'Weighted glute bridges', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-2.gif?alt=media&token=40e95a5e-e647-4522-b41f-832163060c4f', weightedGluteBridges, 4, 3, 2, 60, '658695a1a0148008aeaa438b')
let ex3 = new Exercise(null, 'Pull-ups and chin-ups', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-3.gif?alt=media&token=de2d8249-0aa5-412f-a832-02947411ee6d', pullUpsAndChinUps, 5, 3, 2, 60, '658695a1a0148008aeaa438c')
let ex4 = new Exercise(null, 'Cable seated high rope face pull', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-4.gif?alt=media&token=1b741675-ebb6-469e-a50a-cc6f631c6b70', cableSeatedHighRopeFacePull, 3, 3, 2, 60, '658695a1a0148008aeaa438c')
let ex5 = new Exercise(null, 'Push ups', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-5.gif?alt=media&token=fa81f98e-339d-40be-943d-7294b5ed8eca', pushUps, 2, 3, 2, 60, '658695a1a0148008aeaa438d')
let ex6 = new Exercise(null, 'Dips', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-6.gif?alt=media&token=715d7833-7130-4d98-bd92-1f0335074813', dips, 3, 3, 2, 60, '658695a1a0148008aeaa438d')
let ex7 = new Exercise(null, 'Barbell overhead', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-7.gif?alt=media&token=e7add53f-fbe2-4640-bcef-4f993450da44',barbellOverheadPress, 4, 3, 2, 60, '658695a1a0148008aeaa438e')
let ex8 = new Exercise(null, 'Plate front raise', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-8.gif?alt=media&token=2927ba0b-98d5-4889-b3bb-9e93596707e6',plateFrontRaise, 3, 3, 2, 60, '658695a1a0148008aeaa438e')
let ex9 = new Exercise(null, 'Dumbbell or kettlebell goblet squat', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-9.gif?alt=media&token=db924946-b6ff-44ac-b1aa-119021d9490d',dumbbellOrKettlebellGobletSquat, 2, 3, 2, 60, '658695a1a0148008aeaa438f')
let ex10 = new Exercise(null, 'Leg Press', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-10.gif?alt=media&token=93f11f4e-d899-425e-a411-ad298956776d',legPress, 3, 3, 2, 60, '658695a1a0148008aeaa438f')
let ex11 = new Exercise(null, 'Stiff-leg barbell deadlift', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-11.gif?alt=media&token=4bffe005-b75a-45d1-b0fd-f2a8e093aa72',stiffLegBarbellDeadlift, 3, 3, 2, 60, '658695a1a0148008aeaa4390')
let ex12 = new Exercise(null, 'Glute-ham raise', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-12.gif?alt=media&token=e522adc1-0a56-4912-9542-3e913dbf38f0',gluteHamRaise  , 5, 3, 2, 60, '658695a1a0148008aeaa4390')
let ex13 = new Exercise(null, 'Knee angle bent-leg seated machine', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-13.gif?alt=media&token=979e4831-b326-47ea-85bd-35f41d2abce2', kneeAngleBentLegSeatedMachine, 4, 3, 2, 60, '658695a1a0148008aeaa4391')
let ex14 = new Exercise(null, '30-degree knee angle bent-leg', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-14.gif?alt=media&token=9af739a3-08f3-4818-a38d-620653542cff',thirtyDegreeKneeAngleBentLeg, 4, 3, 2, 60, '658695a1a0148008aeaa4391')
let ex15 = new Exercise(null, 'Barbell floor press', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-15.gif?alt=media&token=6f03ae7b-6c27-4e9b-b938-e1fbb2d1d087',barbellFloorPress, 3, 2, 2, 60, '658695a1a0148008aeaa4392')
let ex16 = new Exercise(null, 'Reverse-grip barbell bench press', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-16.gif?alt=media&token=f55f11c9-155d-499c-abba-198616c0034e',reverseGripBarbellBenchPress, 4, 3, 2, 60, '658695a1a0148008aeaa4392')
let ex17 = new Exercise(null, 'Narrow-grip chin-ups', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-17.gif?alt=media&token=8f687067-e51e-4ae4-a806-735ab2e9f8a9',narrowGripChinUps, 5, 3, 2, 60, '658695a1a0148008aeaa4393')
let ex18 = new Exercise(null, 'Standing barbell curls', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-18.gif?alt=media&token=2fd08fa4-7092-4635-90c5-a7a7ee950740',standingBarbellCurls, 4, 3, 2, 60, '658695a1a0148008aeaa4393')
let ex19 = new Exercise(null, 'Pushup-position plank', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-19.gif?alt=media&token=4fedeffc-22cb-49cf-a6a9-17b50e1090b5',pushupPositionPlank, 4, 3, 2, 60, '658695a1a0148008aeaa4394')
let ex20 = new Exercise(null, 'Reverse crunch on a slant board', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-20.gif?alt=media&token=303cc717-986c-4aa1-9b9a-139a8c7b59c3',reverseCrunchOnASlantBoard, 3, 2, 2, 60, '658695a1a0148008aeaa4394')
let ex21 = new Exercise(null, 'Grippers', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-21.gif?alt=media&token=2fc72675-b4af-4437-9304-1f6cbd51dca9',grippers, 2, 2, 2, 60, '658695a1a0148008aeaa4395')
let ex22 = new Exercise(null, 'Wrist curls and reverse wrist curls', 'https://firebasestorage.googleapis.com/v0/b/gym-app-8dbfe.appspot.com/o/exercise%2Fex-22.gif?alt=media&token=4ed97182-bab2-4e68-99b8-16205734d2bd',wristCurlsAndReverseWristCurls, 3, 3, 2, 60, '658695a1a0148008aeaa4395')


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

async function migrate() {
  let exercises = await new ExerciseService().findAll();
  newExercises.forEach(element => {
    if (!new Util().checkExistByName(element.name, exercises)) {
      new ExerciseService().save(element);
    }
  });
  console.log('Migrated Exercise Success');
}

module.exports = migrate
