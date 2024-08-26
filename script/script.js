
const labelDay = document.querySelector("#labelDay");
const labelMonth = document.querySelector("#labelMonth");
const labelYear = document.querySelector("#labelYear");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");
const yourYear = document.querySelector(".youryear");
const yourMonth = document.querySelector(".yourmonth");
const yourDay = document.querySelector(".yourday");

const yearInput = document.getElementById("year");
yearInput.max = new Date().getFullYear();

// Agregar evento de entrada para limitar el número de caracteres
day.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 2); // Limita a 2 caracteres
});

month.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 2); // Limita a 2 caracteres
});

year.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 4); // Limita a 4 caracteres
});

function ValidateAge() {
    const currentYear = new Date().getFullYear();

    if (day.value === "" || month.value === "" || year.value === "") {
        errorDay.style.display = "block";
        errorMonth.style.display = "block";
        errorYear.style.display = "block";

        errorDay.style.color = "hsl(0, 100%, 67%)";
        errorMonth.style.color = "hsl(0, 100%, 67%)";
        errorYear.style.color = "hsl(0, 100%, 67%)";

        errorDay.innerHTML = "This field is required";
        errorMonth.innerHTML = "This field is required";
        errorYear.innerHTML = "This field is required";

        labelDay.style.color = "hsl(0, 100%, 67%)";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        labelYear.style.color = "hsl(0, 100%, 67%)";

        yourYear.innerHTML = "--";
        yourMonth.innerHTML = "--";
        yourDay.innerHTML = "--";
    } else {
        // Validar que el año no sea mayor que el año actual
        if (parseInt(year.value) > currentYear) {
            errorYear.style.display = "block";
            errorYear.style.color = "hsl(0, 100%, 67%)";
            errorYear.innerHTML = "Year cannot be in the future";

            errorDay.style.display = "none";
            errorMonth.style.display = "none";
            errorDay.style.display = "none";

            labelDay.style.color = "";
            labelMonth.style.color = "";
            labelYear.style.color = "hsl(0, 100%, 67%)";
            
            yourYear.innerHTML = "--";
            yourMonth.innerHTML = "--";
            yourDay.innerHTML = "--";
            return;
        }

        const isValidDate = validateDate(day.value, month.value, year.value);

        if (!isValidDate) {
            errorDay.style.display = "block";
            errorMonth.style.display = "block";
            errorYear.style.display = "block";

            errorDay.style.color = "hsl(0, 100%, 67%)";
            errorMonth.style.color = "hsl(0, 100%, 67%)";
            errorYear.style.color = "hsl(0, 100%, 67%)";

            errorDay.innerHTML = "Must be a valid day";
            errorMonth.innerHTML = "Must be a valid month";
            errorYear.innerHTML = "Must be a valid year";

            labelDay.style.color = "hsl(0, 100%, 67%)";
            labelMonth.style.color = "hsl(0, 100%, 67%)";
            labelYear.style.color = "hsl(0, 100%, 67%)";
            return;
        }

        errorDay.style.display = "none";
        errorMonth.style.display = "none";
        errorYear.style.display = "none";

        labelDay.style.color = "";
        labelMonth.style.color = "";
        labelYear.style.color = "";

        const birthDate = new Date(year.value, month.value - 1, day.value);
        const currentDate = new Date();

        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        // Ajuste para el caso en que aún no ha cumplido el aniversario de este mes
        if (days < 0) {
            const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, birthDate.getDate());
            const daysInLastMonth = (currentDate - lastMonth) / (1000 * 60 * 60 * 24);
            months--;
            days = daysInLastMonth;
        }

        // Ajuste para el caso en que aún no ha cumplido el aniversario de este año
        if (months < 0) {
            months += 12;
            years--;
        }

        // Mostrar la edad en los campos de resultado
        yourYear.innerHTML = Math.round(years);
        yourMonth.innerHTML = Math.round(months);
        yourDay.innerHTML = Math.round(days);
    }
}

function validateDate(day, month, year) {
    const inputDate = new Date(year, month - 1, day);
    return (
        inputDate.getDate() == day &&
        inputDate.getMonth() + 1 == month &&
        inputDate.getFullYear() == year
    );
}







// function ValidateAge (){
//     const day = parseInt(document.querySelector("#day").value);
//     const month = parseInt(document.querySelector("#month").value);
//     const year = parseInt(document.querySelector("#year").value);

//     if (day === "" || month === "" || year === "") {
//         document.getElementsByClassName(".error-day").textContent = "Dato no ingresado";
//         document.getElementsByClassName(".error-month").textContent = "Dato no ingresado";
//         document.getElementsByClassName(".error-year").textContent = "Dato no ingresado";
//         return;
   
//     }

//     const CurrentDate = new Date ();

//     const BirthDay = new Date(year, month-1, day);

//     const VarianceDate = CurrentDate - BirthDay;

//     const AgeinYear = Math.floor(ValidateAge/(365.25 * 24* 60* 60* 1000))

//     const Remainder = VarianceDate % (365.25 * 24 * 60 * 60 * 1000);

//     const AgeinDays = Math.floor(Remainder/(24 * 60 * 60 * 1000));

//     const AgeinMonths = Math.floor(AgeinDays/30.44);


//     document.querySelector(".youryear").textContent = year;
//     document.querySelector(".yourmonth").textContent = month;
//     document.querySelector(".yourday").textContent = day;




// }
