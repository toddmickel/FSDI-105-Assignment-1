function display() {
    var tmp = "";
    document.getElementById('pets').innerHTML = '';
    // travel the salon.pets array
    for (var i = 0; i < salon.pets.length; i++) {
        var aPet = salon.pets[i];

        if(aPet.service === 'Full Service') {
            aPet.price = 30;
        } else if (aPet.service === 'Bath') {
            aPet.price = 25;
        } else if (aPet.service === 'Nails Cut') {
            aPet.price = 15;
        } else if (aPet.service === 'Grooming') {
            aPet.price = 25;
        }
        // create a tmp string
        var tmp = `
        <div class="pet" id="${aPet.id}">
            <h3> ${aPet.name} </h3>
            <p> ${aPet.age} </p>
            <p> ${aPet.gender} </p>
            <p> ${aPet.type} </p>
            <p> ${aPet.breed} </p>
            <p> ${aPet.service} </p>
            <p> $${aPet.price} </p>
            <p> ${aPet.ownerName} </p>
            <p> ${aPet.contactPhone} </p>
            <p> ${aPet.ownerAddress} </p>
            <p> ${aPet.ownerCity}, ${aPet.ownerState}  ${aPet.ownerZip} </p>
            <button class="btn btn-danger" onclick="deletePet(${aPet.id})"> Delete </button>
        </div>`;
    
        document.getElementById('pets').innerHTML += tmp;
    }
    updateProfits();
    return tmp;
}

function displayTable(aPet){
    if(aPet.service === 'Full Service') {
        aPet.price = 30;
    } else if (aPet.service === 'Bath') {
        aPet.price = 25;
    } else if (aPet.service === 'Nails Cut') {
        aPet.price = 15;
    } else if (aPet.service === 'Grooming') {
        aPet.price = 25;
    }

    var icon='';
    if (aPet.type === 'Dog') {
        icon = '🐶';
    } else if (aPet.type === 'Cat') {
        icon = '🐱';
    } else if (aPet.type === 'Bird') {
        icon = '🐦';
    } else {
        icon = '🐾';
    }
/*
    var table = getElementById('pets-table');
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    var tdAge = document.createElement('td');
    var tdGender = document.createElement('td');
    var tdBreed = document.createElement('td');
    var tdService = document.createElement('td');
    var tdPrice = document.createElement('td');
    var tdOwner = document.createElement('td');
    var tdPhone = document.createElement('td');
    var tdAddress = document.createElement('td');
    var tdCity = document.createElement('td');
    var tdState = document.createElement('td');
    var tdZip = document.createElement('td');

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdGender);
    tr.appendChild(tdBreed);
    tr.appendChild(tdService);
    tr.appendChild(tdPrice);
    tr.appendChild(tdOwner);
    tr.appendChild(tdPhone);
    tr.appendChild(tdAddress);
    tr.appendChild(tdCity);
    tr.appendChild(tdState);
    tr.appendChild(tdZip);
    table.appendChild(tr);
*/
    var row=document.createElement('tr')
    row.innerHTML = `
        <td> ${aPet.name} </td>
        <td> ${aPet.age} </td>
        <td> ${aPet.gender} </td>
        <td> ${icon} </td>
        <td> ${aPet.breed} </td>
        <td> ${aPet.service} </td>
        <td> ${aPet.price} </td>
        <td> ${aPet.ownerName} </td>
        <td> ${aPet.contactPhone} </td>
        <td> ${aPet.ownerAddress}<br>
        ${aPet.ownerCity},
        ${aPet.ownerState}
        ${aPet.ownerZip} </td>`
    document.querySelector('#pets-table').appendChild(row);
    updateProfits();
}
