document.getElementById('formPresupuesto').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    // Obtener los valores del formulario
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const instalacion = document.getElementById('instalacion').value;
    
    // Definir los precios de los productos
    let precioUnitario;
    switch(producto) {
        case 'modelo1':
            precioUnitario = 15000;
            break;
        case 'modelo2':
            precioUnitario = 17000;
            break;
        case 'modelo3':
            precioUnitario = 20000;
            break;
        default:
            precioUnitario = 0;
    }
    
    // Calcular el costo de la instalación (si aplica)
    let costoInstalacion = 0;
    if (instalacion === 'si') {
        costoInstalacion = 5000; // Ejemplo de costo de instalación
    }
    
    // Calcular el costo total
    const totalProducto = precioUnitario * cantidad;
    const totalPresupuesto = totalProducto + costoInstalacion;

    // Mostrar el resultado en el div
    const resultadoDiv = document.getElementById('resultadoPresupuesto');
    resultadoDiv.innerHTML = `
        <h3>Tu presupuesto</h3>
        <p><strong>Producto seleccionado:</strong> ${producto}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Precio por unidad:</strong> $${precioUnitario.toLocaleString()}</p>
        <p><strong>Total de productos:</strong> $${totalProducto.toLocaleString()}</p>
        <p><strong>Instalación:</strong> ${instalacion === 'si' ? 'Sí' : 'No'}</p>
        <p><strong>Costo de instalación:</strong> $${costoInstalacion.toLocaleString()}</p>
        <p><strong>Total del presupuesto:</strong> $${totalPresupuesto.toLocaleString()}</p>
    `;
});
