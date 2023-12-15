/*
const info = [

    {
        firstName: "Jhon",
        lastName: "Doe",
        hobby: "soccer"
    },
    {
        firstName: "Jan",
        lastName: "Peter",
        hobby: "Tennis"
    },
]

const container = document.querySelector('.container');
for (let i = 0; i < info.length; i++) {
    const element = info[i];
    container.innerHTML += `
    <div class="card">
        <ul>
            <li>${element.firstName}</li>
            <li>${element.lastName}</li>
            <li>${element.hobby}</li>
        </ul>
    </div> `;
}

const cars = [
    {
        brand: "Mercedes",
        model: "C-klasse",
        year: "2021",
        price: 80000
    },
    {
        brand: "Audi",
        model: "Q8",
        year: "2022",
        price: 90000
    },
]

let total = 0

const container1 = document.querySelector('.container1');
for (let x = 0; x < cars.length; x++) {
    const car = cars[x];
    container1.innerHTML += `
    <div class= "card">
        <ul>
            <li>${car.brand}</li>
            <li>${car.model}</li>
            <li>${car.year}</li>
            <li>${car.price}</li>
        </ul>
    </div> `;
    total += car.price
}

container1.innerHTML += `
<div>
    <b>Totaal is: ${total} euro</b>
</div> `;


//opdracht 3*/

function students() {
    return [
    {
        firstName: 'Yannick',
        lastName: 'Daantje',
        course: 'Mbo 4'
    },
    {
        firstName: 'Sibren',
        lastName: 'Boode',
        course: 'Mbo 4'
    },
    {
        firstName: 'Sunny',
        lastName: 'Pooran',
        course: 'Mbo 4'
    }
]
}

console.log(students());