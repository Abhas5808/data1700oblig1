const tickets = [];


function buyTicket() {
    const movies = document.getElementById("movies");
    const amount = document.getElementById("amount");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const phonenumber = document.getElementById("phonenumber");
    const email = document.getElementById("email");


    let moviesError = document.getElementById("moviesError");
    let amountError = document.getElementById("amountError");
    let firstnameError = document.getElementById("firstnameError");
    let lastnameError = document.getElementById("lastnameError");
    let phonenumberError = document.getElementById("phonenumberError");
    let emailError = document.getElementById("emailError");

    // Validere film
    if ( movies.value === "Velg film her" || movies.value === "" ) {
        moviesError.innerHTML = "Du må velge en film!";
    }

    // Validere antall
    if ( isNaN(Number(amount.value)) || !(1 <= Number(amount.value) && Number(amount.value) <= 50) || amount.value === "" ) {
        amountError.innerHTML = "Antallet må være mellom 1 og 50!";
    }

    // Validerefornavn
    if ( firstname.value === "" || /\d/.test(firstname.value) ) {
        firstnameError.innerHTML = "Fornavn må fylles ut og være bokstaver!";
    }

    // Validere etternavn
    if ( lastname.value === "" || /\d/.test(lastname.value) ) {
        lastnameError.innerHTML = "Etternavn må fylles ut og være bokstaver!";
    }

    // Validere telefonnummer
    if ( !tlfResultat ) {
        phonenumberError.innerHTML = "Ugyldig telefonnummer!";
    }

    // Validere epost
    if ( !epostResultat ) {
        emailError.innerHTML = "Ugyldig epostadresse!";
    }
    //Stopper buyTicket() dersom ugyldige inputverdier samt gjør at flere feilmeldinger vises samtidig.
    if ( moviesError.innerHTML || amountError.innerHTML || firstnameError.innerHTML || lastnameError.innerHTML || phonenumberError.innerHTML || emailError.innerHTML ) {
        return;
    }



    // Dersom det ikke er noen error, blir billett lagt til
    else {
        tickets.push({
            movies: movies.value,
            amount: amount.value,
            firstname: firstname.value,
            lastname: lastname.value,
            phonenumber: phonenumber.value,
            email: email.value
        });

        // Oppdater tabellen med billettinformasjon
        const movieTicket = document.getElementById("alleBilletter");
        movieTicket.innerHTML = `<tr>
                                <th>Film</th>
                                <th>Antall</th>
                                <th>Fornavn</th>
                                <th>Etternavn</th>
                                <th>Telefonnummer</th>
                                <th>Epost</th>
                            </tr>`;

        for (let i = 0; i < tickets.length; i++) {
            movieTicket.innerHTML += `
                                <tr>
            <td>${tickets[i].movies}</td>
            <td>${tickets[i].amount}
            </td>
                                    <td>${tickets[i].firstname}</td>
                                    <td>${tickets[i].lastname}</td>
                                    <td>${tickets[i].phonenumber}</td>
                                    <td>${tickets[i].email}</td>
                                </tr>`;
        }
    }

    // Tilbakestiller inputfeltene
    movies.value = "Velg film her";
    amount.value = "";
    firstname.value = "";
    lastname.value = "";
    phonenumber.value = "";
    email.value = "";
}

//Sletter alt i arrayet, samt tilbakestiller verdier
function DeleteAlt() {
    tickets.length = 0;
    document.getElementById("alleBilletter").innerHTML = "";
    document.getElementById("film").value = "Velg film her";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}