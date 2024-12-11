// script.js
const activateBtn = document.getElementById('activateBtn');
const activationKey = document.getElementById('activationKey');
const errorMsg = document.getElementById('errorMsg');
const app = document.getElementById('app');
const mainApp = document.querySelector('.main-app');
const flashcards = document.getElementById('flashcards');
const randomizerBtn = document.getElementById('randomizerBtn');
const randomBacteriaDiv = document.getElementById('randomBacteria');
const randomBacteriaName = document.getElementById('randomBacteriaName');
const randomBacteriaInfo = document.getElementById('randomBacteriaInfo');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const validKeys = ['8900-6777-0806-00-69', 'dad69'];
let isLightTheme = false;

// Bacteria data extracted from PDF
const bacteriaData = [
    { name: 'Staphylococcus aureus', info: 'Gram-positive cocci. Causes skin infections, pneumonia, toxic shock syndrome, food poisoning, and more.' },
    { name: 'Staphylococcus epidermidis', info: 'Gram-positive cocci. Part of normal skin flora. Forms biofilms and causes infections in medical devices.' },
    { name: 'Staphylococcus saprophyticus', info: 'Gram-positive cocci. Causes urinary tract infections, especially in young women.' },
    { name: 'Streptococcus pneumoniae', info: 'Gram-positive lancet-shaped diplococci. Causes pneumonia, meningitis, and otitis media.' },
    { name: 'Viridans group streptococci', info: 'Gram-positive cocci in chains. Part of oral flora. Causes dental caries and infective endocarditis.' },
    { name: 'Streptococcus pyogenes', info: 'Gram-positive cocci in chains. Causes pharyngitis, skin infections, scarlet fever, and rheumatic fever.' },
    { name: 'Streptococcus agalactiae', info: 'Gram-positive cocci. Causes neonatal sepsis, meningitis, and pneumonia.' },
    { name: 'Bacillus anthracis', info: 'Gram-positive rod. Causes anthrax with cutaneous, pulmonary, and gastrointestinal forms.' },
    { name: 'Clostridium botulinum', info: 'Gram-positive rod. Produces botulinum toxin, causing botulism.' },
    { name: 'Clostridium perfringens', info: 'Gram-positive rod. Causes gas gangrene and food poisoning.' },
    { name: 'Clostridium difficile', info: 'Gram-positive rod. Causes antibiotic-associated diarrhea and pseudomembranous colitis.' },
    { name: 'Corynebacterium diphtheriae', info: 'Gram-positive club-shaped rod. Causes diphtheria. Produces a toxin that inhibits protein synthesis.' },
    { name: 'Listeria monocytogenes', info: 'Gram-positive rod. Causes meningitis, sepsis, and gastroenteritis, especially in immunocompromised individuals.' },
    { name: 'Clostridium tetani', info: 'Gram-positive rod. Produces tetanospasmin toxin, causing tetanus.' },
    { name: 'Mycobacterium tuberculosis', info: 'Acid-fast rod. Causes tuberculosis with primary, secondary, and disseminated forms.' },
    { name: 'Neisseria meningitidis', info: 'Gram-negative diplococci. Causes meningitis and meningococcemia.' },
    { name: 'Neisseria gonorrhoeae', info: 'Gram-negative diplococci. Causes gonorrhea, septic arthritis, and neonatal conjunctivitis.' },
    { name: 'Haemophilus influenzae', info: 'Gram-negative coccobacilli. Causes epiglottitis, meningitis, otitis media, and pneumonia.' },
    { name: 'Bordetella pertussis', info: 'Gram-negative coccobacilli. Causes whooping cough (pertussis).' },
    { name: 'Legionella pneumophila', info: 'Gram-negative rod. Causes Legionnaires’ disease and Pontiac fever.' },
    { name: 'Pseudomonas aeruginosa', info: 'Gram-negative rod. Causes pneumonia, sepsis, UTIs, and skin infections, especially in immunocompromised individuals.' },
    { name: 'Salmonella species', info: 'Gram-negative rod. Causes gastroenteritis and typhoid fever.' },
    { name: 'Shigella species', info: 'Gram-negative rod. Causes dysentery with bloody diarrhea.' },
    { name: 'Escherichia coli', info: 'Gram-negative rod. Causes UTIs, gastroenteritis, and neonatal meningitis.' },
    { name: 'Campylobacter jejuni', info: 'Gram-negative curved rod. Causes gastroenteritis and is associated with Guillain-Barré syndrome.' },
    { name: 'Vibrio cholerae', info: 'Gram-negative curved rod. Causes cholera with profuse watery diarrhea.' },
    { name: 'Helicobacter pylori', info: 'Gram-negative curved rod. Causes gastritis and peptic ulcers. Risk factor for gastric cancer.' },
    { name: 'Borrelia burgdorferi', info: 'Spirochete. Causes Lyme disease with stages of erythema migrans, carditis, and arthritis.' },
    { name: 'Treponema pallidum', info: 'Spirochete. Causes syphilis with primary, secondary, and tertiary stages.' },
    { name: 'Gardnerella vaginalis', info: 'Gram-variable rod. Causes bacterial vaginosis.' },
    { name: 'Mycoplasma pneumoniae', info: 'Lacks a cell wall. Causes atypical pneumonia (walking pneumonia).' },
    { name: 'Chlamydia trachomatis', info: 'Obligate intracellular bacterium. Causes trachoma, urethritis, and pelvic inflammatory disease.' },
  ];
  

// Activation Logic
activateBtn.addEventListener('click', () => {
  if (validKeys.includes(activationKey.value)) {
    document.querySelector('.activation').classList.add('hidden');
    mainApp.classList.remove('hidden');
    generateFlashcards();
  } else {
    errorMsg.textContent = 'Invalid activation key!';
    errorMsg.style.color = 'red';
  }
});

// Generate Flashcards
function generateFlashcards() {
  flashcards.innerHTML = '';
  bacteriaData.forEach((bacteria) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.textContent = bacteria.name;

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.textContent = bacteria.info;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    flashcards.appendChild(card);
  });
}

// Randomizer
randomizerBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * bacteriaData.length);
  const bacteria = bacteriaData[randomIndex];
  randomBacteriaName.textContent = bacteria.name;
  randomBacteriaInfo.textContent = bacteria.info;
  randomBacteriaDiv.classList.remove('hidden');
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
  isLightTheme = !isLightTheme;
  body.classList.toggle('light-theme', isLightTheme);
  themeToggle.textContent = isLightTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme';
});
