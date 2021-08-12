const { body } = document;

const section0 = document.createElement('section');
const ul0 = document.createElement('ul');
const li0 = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const a0 = document.createElement('a');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const i0 = document.createElement('i');
const i1 = document.createElement('i');
const i2 = document.createElement('i');
const i3 = document.createElement('i');
const p0 = document.createElement('p');
const p1 = document.createElement('p');
const p2 = document.createElement('p');

function mobileMenu() {
  body.append(section0);
  section0.append(ul0);
  ul0.append(li0, li1, li2, li3);
  li0.append(i0);
  li1.append(a0);
  li2.append(a1);
  li3.append(a2);
  a0.append(p0, i1);
  a1.append(p1, i2);
  a2.append(p2, i3);

  section0.setAttribute('class', 'mobileMenu');
  i0.setAttribute('class', 'material-icons');
  i0.setAttribute('onclick', 'section0.remove()');
  a0.setAttribute('href', 'index.html');
  i1.setAttribute('class', 'material-icons');
  a1.setAttribute('href', 'about.html');
  i2.setAttribute('class', 'material-icons');
  a2.setAttribute('onclick', 'section0.remove()');
  i3.setAttribute('class', 'material-icons');

  i0.textContent = 'close';
  p0.textContent = 'Home';
  i1.textContent = 'chevron_right';
  p1.textContent = 'About';
  i2.textContent = 'chevron_right';
  p2.textContent = 'Contact';
  i3.textContent = 'chevron_right';
}

function Activity(title, description, image) {
  this.title = title;
  this.image = image;
  this.description = description;
}

const activity0 = new Activity(
  'Lecture',
  'We\'ll be going over all the kinds of protein and why it really doesn\'t matter which kind you choose.',
  'media/icons/program_icon_01.png',
);

const activity1 = new Activity(
  'CC Exhibition',
  'We gathered the most exquisite specimens from protein farms all over the colonies, don\'t miss out on this unique oportunity!',
  'media/icons/program_icon_02.png',
);

const activity2 = new Activity(
  'Forum',
  'Have the rare oportunity to share your thoughts and opinions with expert farmers and chefs!',
  'media/icons/program_icon_03.png',
);

const activity3 = new Activity(
  'Workshop',
  'Try creating your own GMO protein strand, you can even take it home!',
  'media/icons/program_icon_04.png',
);

const activity4 = new Activity(
  'CC Ignite',
  'Chat with the farmers themselves! You can ask them all your burning questions about everything protein farming.',
  'media/icons/program_icon_05.png',
);

const activities = [activity0, activity1, activity2, activity3, activity4];
const titles = [];
const images = [];
const descriptions = [];

for (let i = 0; i < activities.length; i += 1) {
  titles.push(activities[i].title);
  images.push(activities[i].image);
  descriptions.push(activities[i].description);
}

function displayActivity(title, image, description) {
  const activity = document.createElement('article');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const activities = document.getElementById('activities');

  activities.append(activity);
  activity.append(img, h3, p);

  activity.setAttribute('class', 'flexRow activity');
  img.setAttribute('src', image);
  img.setAttribute('alt', '#');

  h3.textContent = title;
  p.textContent = description;
}

function Speaker(name, position, resume, mug) {
  this.name = name;
  this.position = position;
  this.resume = resume;
  this.mug = mug;
}

const speaker0 = new Speaker(
  'A pretty chill dude',
  'Berkman Professor od Enterpreneurial Legal Studies at Wallace Law School',
  'To be honest, we don\'t really know who this guy is, but he gives grea talks, so we decided to invite him.',
  'media/speakers/speaker_01.png',
);

const speaker1 = new Speaker(
  'This guy knows cooking',
  'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
  'He\'s the only actual chef giving a talk, most of them rejected our invitation, so he\'s the best we\'ve got.',
  'media/speakers/speaker_02.png',
);

const speaker2 = new Speaker(
  'Glasses Lady',
  'Wallace Art Center Director, CC Korea Director',
  'She\'s not actually giving a talk, she is just here as a representative of the Wallace Corporation, they forced us to register her as a speaker.',
  'media/speakers/speaker_03.png',
);

const speaker3 = new Speaker(
  'Glasses Lady #2',
  'Head of the Young Pirates of Europe',
  'Well, she is a pirate, we thought that was cool so we invited her, and she actually said yes.',
  'media/speakers/speaker_04.png',
);

const speaker4 = new Speaker(
  'She\'s unconfortable smiling',
  'Secretary General of the Wallace Foundation',
  'Another Wallace Corporation representative, pleace just don\'t mess with her, she could have this event shut down if she felt like it.',
  'media/speakers/speaker_05.png',
);

const speaker5 = new Speaker(
  'He\'s terrible smiling',
  'Creative Commons CEO, Former Mozilla Foundation COO',
  'We don\'t really know who he is, one day he simply appeared in the registered speakers, we suspect he also comes from Wallace Corporation, but we\'re too afraid to ask him.',
  'media/speakers/speaker_06.png',
);

const speakers = [speaker0, speaker1, speaker2, speaker3, speaker4, speaker5];
const names = [];
const positions = [];
const resumes = [];
const mugs = [];

for (let i = 0; i < speakers.length; i += 1) {
  names.push(speakers[i].name);
  positions.push(speakers[i].position);
  resumes.push(speakers[i].resume);
  mugs.push(speakers[i].mug);
}

function displaySpeaker(name, position, resume, mug) {
  const section = document.getElementById('speakerContainer');
  const div0 = document.createElement('div');
  const article = document.createElement('article');
  const img = document.createElement('img');
  const div1 = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const p0 = document.createElement('p');

  section.append(article);
  article.append(img, div0);
  div0.append(h3, p, div1, p0);

  article.setAttribute('class', 'flexRow');
  img.setAttribute('src', mug);
  img.setAttribute('alt', 'speaker');
  p.setAttribute('id', 'speakerTitle');
  div1.setAttribute('class', 'spacer1');

  h3.textContent = name;
  p.textContent = position;
  p0.textContent = resume;
}

for (let i = 0; i < activities.length; i += 1) {
  displayActivity(
    titles[i],
    images[i],
    descriptions[i],
  );
  if (i === 999) {
    mobileMenu();
  }
}

if (window.screen.width >= 768) {
  for (let i = 0; i < speakers.length; i += 1) {
    displaySpeaker(names[i], positions[i], resumes[i], mugs[i]);
  }
} else {
  for (let i = 0; i < 2; i += 1) {
    displaySpeaker(names[i], positions[i], resumes[i], mugs[i]);
  }
}