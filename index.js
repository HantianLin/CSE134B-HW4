const canineBtn = document.getElementById('canineBtn');
const canineDialog = document.getElementById('canineDialog');
const felineBtn = document.getElementById('felineBtn');
const felineDialog = document.getElementById('felineDialog');
const otterBtn = document.getElementById('otterBtn');
const otterDialog = document.getElementById('otterDialog');
const favAnimal = document.getElementById('favAnimal');
const voteBtn = document.getElementById('voteBtn');
const animals = document.getElementById('animals');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');
const voteResult = document.getElementById('voteResult');

canineBtn.addEventListener('click', () => {
    canineDialog.showModal();
});

felineBtn.addEventListener('click', () => {
    felineDialog.showModal();
});

otterBtn.addEventListener('click', () => {
    otterDialog.showModal();
});

voteBtn.addEventListener('click', () => {
    favAnimal.showModal();
});

animals.addEventListener('change', (event) => {
    submitBtn.value = animals.value;
});

submitBtn.addEventListener('click', () => {
    favAnimal.close();
});

cancelBtn.addEventListener('click', () => {
    favAnimal.close();
    voteResult.value = `You voted for: ${favAnimal.returnValue}`;
});