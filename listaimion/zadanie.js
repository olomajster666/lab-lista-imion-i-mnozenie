const firstNames = ['Johnny', 'Jack', 'Jim', 'Jotaro', 'Joseph', 'Josuke', 'Giorno', 'Jean Pierre'];
const lastNames = ['Joestar', 'Sins', 'Daniels', 'Bim', 'Kujo', 'Higishikata', 'Giovanni', 'Polnareff'];

// Funkcja do generowania losowego numeru telefonu
function generatePhoneNumber() {
  return Math.floor(Math.random() * (8000000 - 5000000 + 1)) + 5000000;
}

// Funkcja do generowania wieku
function generateAge() {
  return Math.floor(Math.random() * (80 - 18 + 1)) + 18;
}
//Funkcja do generowania imiona i nazwiska
function generateRandomName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}
function generateData(numberOfGeneratedData) {
  const generatedData = [];
  for (let i = 0; i < numberOfGeneratedData; i++) {
    generatedData.push({
      name: generateRandomName(),
      phoneNumber: generatePhoneNumber(),
	  age: generateAge()
    });
  }
  return generatedData;
}

function createTable(data) {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const tableHeadRow = document.createElement('tr');
    const tableHeadName = document.createElement('th');
    const tableHeadPhoneNumber = document.createElement('th');
	const tableHeadAge = document.createElement('th');
    tableHeadName.innerText = 'Name';
    tableHeadPhoneNumber.innerText = 'Phone Number';
	tableHeadAge.innerText = 'Age';
    tableHeadRow.appendChild(tableHeadName);
    tableHeadRow.appendChild(tableHeadPhoneNumber);
	tableHeadRow.appendChild(tableHeadAge);
    tableHead.appendChild(tableHeadRow);
    table.appendChild(tableHead);
    data.forEach((item) => {
        const tableBodyRow = document.createElement('tr');
        const tableBodyName = document.createElement('td');
        const tableBodyPhoneNumber = document.createElement('td');
		const tableBodyAge = document.createElement('td');
        tableBodyName.innerText = item.name;
        tableBodyPhoneNumber.innerText = item.phoneNumber;
		tableBodyAge.innerText = item.age;
        tableBodyRow.appendChild(tableBodyName);
        tableBodyRow.appendChild(tableBodyPhoneNumber);
		tableBodyRow.appendChild(tableBodyAge);
        tableBody.appendChild(tableBodyRow);
    });
    table.appendChild(tableBody);
    return table;
}

window.onload = () => {
    document.getElementById("numberOfData").addEventListener("change", () => {
        const view = document.getElementById("output");
        const lastTable = view.firstChild;
        if (lastTable) {
            view.removeChild(lastTable);
        }
        const numberOfData = document.getElementById("numberOfData").value;
        const table = createTable(generateData(numberOfData));
        document.getElementById("output").appendChild(table);
    });
}