document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addEmployee();
});

function addEmployee() {
    const employeeId = document.getElementById('employeeId').value;
    const name = document.getElementById('name').value;
    const mobNumber = document.getElementById('mobNumber').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    const table = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${employeeId}</td>
        <td>${name}</td>
        <td>${mobNumber}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>
            <button onclick="editEmployee(this)">Edit</button>
            <button onclick="deleteEmployee(this)">Delete</button>
        </td>
    `;

    document.getElementById('employeeForm').reset();
}

function editEmployee(button) {
    const row = button.parentElement.parentElement;
    document.getElementById('employeeId').value = row.cells[0].innerText;
    document.getElementById('name').value = row.cells[1].innerText;
    document.getElementById('mobNumber').value = row.cells[2].innerText;
    document.getElementById('email').value = row.cells[3].innerText;
    document.getElementById('address').value = row.cells[4].innerText;

    row.remove();
}

function deleteEmployee(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
