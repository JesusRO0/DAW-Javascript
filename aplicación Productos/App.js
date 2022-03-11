//Clase productos con us campos.
class Product {
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//Clase de Interfaz.
class UI{
    addProduct(product){
        //Almacenamos la lista de productos.
        const listaProductos = document.getElementById('product-list');
        //Creamos los elementos que vamos a introducir.
        const elemento = document.createElement('div');
        //El contenido de ese elemento, los campos de producto.
        elemento.innerHTML = `
        <div class="card text-center mb-3">
            <div class="card-body">
                <strong>Nombre del Producto: </strong>${product.name} <br>
                <strong>Precio del Producto: </strong>${product.price} <br>
                <strong>Año del Producto: </strong>${product.year} <br>
                <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
            </div>
        </div>`;

        //Añadimos un producto nuevo.
        listaProductos.appendChild(elemento);
        //Reseteamos los campos.
        this.resetForm();
    }

    //Metodo que resetea los campos del formulario.
    resetForm(){
        document.getElementById('product-form').reset();
    }
    //Metodo que elimina el producto.
    deleteProduct(elemento){
        //Si el elemento contiene el name delete se elimina.
        if(elemento.name === 'delete'){
            //Esto es porque queremos eliminar el div que creamos entero
            elemento.parentElement.parentElement.parentElement.remove();
            this.showMessage("Producto elimnado.", "info");
        }
    }
    //Metodo que mostrará un mesaje y una clase del boostrap para el estilo.
    showMessage(mensaje, cssClass){
        //Creamos un div que contendra este mensaje con su estilo.
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        //Dentro del dic le metemos el texto.
        div.appendChild(document.createTextNode(mensaje));
        //Mostramos un mensaje.
        //Se mostrará encima de container que es el div que lo contiene todo.
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        //Metodo de esperar 3s para eliminar el mensaje.
        setTimeout(function(){
            document.querySelector('.alert').remove();
            
        }, 3000);
    }
}

//DOM + eventos

//Capturamos el evento que se produce en los poructos.
document.getElementById('product-form').addEventListener('submit', function(ev){
    
    //Almacenamos el valor de los campos.
    const name = document.getElementById('name').value;

    const price =  document.getElementById('price').value;

    const year =  document.getElementById('year').value;

    const product = new Product(name, price, year);

    //Creamos un objeto de UI.
    const ui = new UI();

    //Si los campos estan vacios damos un mensaje de error.
    if(name == "" || price == "" || year == ""){
        return ui.showMessage("Completa todos los campos.", "danger");
    }

    //Usamos el objeto con los metedos que hemos definido.
    ui.addProduct(product);
    ui.resetForm();

    ui.showMessage("Produto agregado!", 'success');

    //Eliminar la recarga de por defecto.
    ev.preventDefault();
});

//Evento de eliminar producto.
document.getElementById('product-list').addEventListener('click', function(ev){

    const ui = new UI();
    ui.deleteProduct(ev.target);
});