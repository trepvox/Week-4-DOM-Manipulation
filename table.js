let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
  //  let x = document.getElementById('monthly-subsctriontion').value;
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('item-purchased').value;
    row.insertCell(1).innerHTML = document.getElementById('amount-spent').value;
   // row.insertCell(2).innerHTML = x;
    row.insertCell(2).innerHTML = document.getElementById('date-purchased').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('item-purchased').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}


/* function isMonthlySubscription() {
    if ($(this).find('td[monthly-subscription="checkbox"] input:checked').length) {
        $(this).find('td[monthly-subscription="checkbox"] i')
    }
}
*/