let balance = 100; 

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => { section.classList.add('hidden'); });
    document.getElementById(sectionId).classList.remove('hidden');
}

function create_account() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('account_message').textContent=`Successfully created account ! Welcome ${username} !`;
    } else {
        document.getElementById('account_message').textContent='Please enter your user name ! ';
    }
}


function purchase_NFT(price, item) {
    if (balance >= price) {
        balance -= price;
        document.getElementById('balance').textContent=balance;
        document.getElementById('education_balance').textContent=balance;
        alert(`Purchase successfully ! You got ${item} ! `);
    } else {
        alert('Insufficient Balance ! You can earn more virtual coins from Financial Education Center');
        
    }
}

function answerQuestion(answer, reward) {
    if (reward > 0) {
        balance += reward;
        document.getElementById('balance').textContent=balance;
        document.getElementById('education_balance').textContent=balance;
        alert(`Corrcet ! You get ${reward} virtual coins ! `);
    } else {
        document.getElementById('balance').textContent=balance;
        document.getElementById('education_balance').textContent=balance;
        alert('Wrong ! Please try again ! ');


    }
}

function chatbot_respond() {
    const responses = [
        'You can start your journey by going to "Sign up" area !',
        'Want to buy NFT assets ? You can go to the NFT exchange market !',
        'Fincancial Education centre can help you to earn morevirtual coins !'
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    document.querySelector('#chat_bot p').textContent=`AI chatbot : ${randomResponse}`;
}