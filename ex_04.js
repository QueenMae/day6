function updateLicensePlates(agent, plates) {
    if (!agent.car || !Array.isArray(plates)) {
        console.warn('Error: Invalid input.');
        return null;
    }

    agent.car.licensePlates = plates;
    return agent;
}

function showLicensePlates(agent) {
    if (!agent.car || !Array.isArray(agent.car.licensePlates)) {
        console.warn('Error.');
        return;
    }

    const ul = document.querySelector('.plates-container');
    
    ul.innerHTML = '';
    agent.car.licensePlates.forEach(plate => {
        const li = document.createElement('li');
        li.textContent = plate;
        ul.appendChild(li);
    });
}

const agent = {
    firstName: 'James',
    lastName: 'Bond',
    age: 57,
    code: '007',
    car: {
        brand: 'Aston Martin',
        model: 'DB5',
        color: 'GREY',
        power: '282 bhp'
    }
};
updateLicensePlates(agent, ['LU 6789', '4711-EA-62', 'BMT 216A']);
showLicensePlates(agent);
