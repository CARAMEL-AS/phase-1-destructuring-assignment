const farmAnimals = 'cow horse sheep pig chicken';
// console.log(farmAnimals.split(' '))

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};


const moo = farmAnimals.split(' ')[0];
const neigh = farmAnimals.split(' ')[1];
const baa = farmAnimals.split(' ')[2];
const oink = farmAnimals.split(' ')[3];
const cluck = farmAnimals.split(' ')[4];

const bessie = farmAnimals.split(' ')[0];
const dolly = farmAnimals.split(' ')[2];
const babe = farmAnimals.split(' ')[3];
const little = farmAnimals.split(' ')[4];

const blackAndWhite = farmAnimals.split(' ')[0];
const black = farmAnimals.split(' ')[2];
const pink = farmAnimals.split(' ')[3];

let red, orange, yellow, green, blue, indigo, violet;

red = colors[0];
orange = colors[1];
yellow = colors[2];
green = colors[3];
blue = colors[4];
indigo = colors[5];
violet = colors[6]

let r, o, y, g, b, v;

r = colors[0];
o = colors[1];
y = colors[2];
g = colors[3];
b = colors[4];
v = colors[6];

let indg;

indg = colors[5];

let muppetName, color, song, job, partner;

muppetName = muppet.muppetName
color = muppet.color
song = muppet.song
job = muppet.job
partner = muppet.partner

let song2, song4, nestedJob, nestedPartner;

song2 = nestedMuppet.album.theMuppetMovie.song2
song4 = nestedMuppet.album.theMuppetMovie.song4
nestedJob = nestedMuppet.nestedJob
nestedPartner = nestedMuppet.nestedPartner