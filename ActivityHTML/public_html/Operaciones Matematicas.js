setTimeout(function(){
    window.alert("Bienvenido a nuestro sitio web, distribuimos instrumentos al por mayor y al detal");
    setTimeout(function(){
        var ofertas = window.confirm("¿Desea registrar su correo para recibir ofertas?");
        if (ofertas) {
            // var mail = prompt("Por favor, ingrese su correo", "Correo");
            // window.alert("Gracias! Su correo " + mail + " fue guardado, pronto recibirá ofertas");
            
            toastr.options = {
                "positionClass" : "toast-bottom-right"
            }
            do {
                var mail = prompt("Por favor, ingrese su correo", "Correo");
                var isValid = validateEmail(mail);
                if (!isValid) window.alert("'" + mail + "' no es un correo válido");
            } while(!isValid)
            toastr.success('Correo registrado');
        }
    }, 500);
}, 500);

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var instrument = {
    name: "Guitar",
    price: 700000,
    height: 90,
    width: 50,
    alert: function () {
        alert("Intrumento: " + instrument.name + "\nPrecio: " + instrument.price)
    }
}

var instruments = [
    {
        name: "Guitar",
        price: 700000,
        height: 90,
        width: 50
    },
    {
        name: "Bass",
        price: 650000,
        height: 100,
        width: 50
    },
    {
        name: "Ukelele",
        price: 210000,
        height: 60,
        width: 30
    },
    {
        name: "Drums",
        price: 1200000,
        height: 200,
        width: 150
    },
];

function instrumentoRandom() {
    var number = Math.floor(Math.random() * 4);
    if (instruments[number] !== undefined) {
        alert("Intrumento: " + instruments[number].name + "\nPrecio: " + instruments[number].price)
    }
}