AOS.init({ once: true });

function getNextBirthday() {
    const now = new Date();
    const year = now.getFullYear();
    let bday = new Date(year, 3, 26); // mês 3 = abril 

    if (now >= bday) bday = new Date(year + 1, 3, 26);
    return bday;
}

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
    const diff = getNextBirthday() - new Date();
    document.getElementById('days').textContent  = pad(Math.floor(diff / 86400000));
    document.getElementById('hours').textContent = pad(Math.floor((diff % 86400000) / 3600000));
    document.getElementById('mins').textContent  = pad(Math.floor((diff % 3600000) / 60000));
    document.getElementById('secs').textContent  = pad(Math.floor((diff % 60000) / 1000));
}

tick();
setInterval(tick, 1000);