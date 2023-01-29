fetch('https://randomuser.me/api/?nat=es&inc=name,email,phone,cell,location,picture,nat,dob')
.then(response => response.json())
.then(json => mostrarObjeto(json.results[0]))

function mostrarObjeto(jsonResults){
    document.getElementById('foto').innerHTML='<img src="' + jsonResults.picture.large + '" alt="foto de '+jsonResults.name.first + " " + jsonResults.name.last+'">';

    document.getElementById('nombre').innerText = jsonResults.name.first + " " + jsonResults.name.last;

    document.getElementById('direccion').innerHTML = '<i class="fa-solid fa-house"></i> ' + jsonResults.location.street.name + " " + jsonResults.location.street.number + " - " + jsonResults.location.city + " - España";

    document.getElementById('telefono').innerHTML = '<i class="fa-solid fa-phone"></i> ' + jsonResults.phone;

    document.getElementById('movil').innerHTML = '<i class="fa-solid fa-mobile-retro"></i> ' + jsonResults.cell;

    document.getElementById('email').innerHTML = '<i class="fa-solid fa-envelope"></i> ' + jsonResults.email;

}


