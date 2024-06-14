import { participantTemplate, successTemplate } from './Templates.js';


let participantsNum = 1;


function totalFees() {

    let feeElements = document.querySelectorAll("[id^=fee]");

    feeElements = [...feeElements];

    const total = feeElements.reduce((acc, el) => acc + (parseFloat(el.value) || 0), 0);

    return total;
}

const button = document.getElementById('add');
button.addEventListener("click", function() {

    participantsNum += 1;

 
    const newParticipantHTML = participantTemplate(participantsNum);

    button.insertAdjacentHTML('beforebegin', newParticipantHTML);
});

function submitForm(event) {
    event.preventDefault();

    const totalFee = totalFees();


    const adultName = document.getElementById('adult_name').value;


    const form = document.querySelector('form');
    form.style.display = 'none';


    const summary = document.getElementById('summary');
    const summaryHTML = successTemplate({ adultName, participantsNum, totalFee });
    summary.innerHTML = summaryHTML;
    summary.style.display = 'block';
}

const form = document.querySelector('form');
form.addEventListener("submit", submitForm);
