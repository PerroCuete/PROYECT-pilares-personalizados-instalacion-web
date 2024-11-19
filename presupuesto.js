// Selección del formulario y del contenedor donde se mostrará el presupuesto
const formPresupuesto = document.getElementById('formPresupuesto');
const resultadoPresupuesto = document.getElementById('presupuestoCalculado');

// Función para calcular y mostrar el presupuesto
formPresupuesto.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const productoSelect = document.getElementById('producto');
    const cantidadInput = document.getElementById('cantidad');
    const instalacionSelect = document.getElementById('instalacion');

    // Obtener el precio del producto seleccionado
    const precioUnitario = parseFloat(productoSelect.options[productoSelect.selectedIndex].dataset.precio);
    const cantidad = parseInt(cantidadInput.value);
    const incluyeInstalacion = instalacionSelect.value === 'si';

    // Calcular el precio total
    const totalProducto = precioUnitario * cantidad;
    const costoInstalacion = incluyeInstalacion ? 5000 * cantidad : 0;  // Asumimos $5000 por instalación

    // Calcular el total final
    const totalFinal = totalProducto + costoInstalacion;

    // Mostrar el resultado en el cuadro de presupuesto
    resultadoPresupuesto.innerHTML = `
        <p><strong>Producto seleccionado:</strong> ${productoSelect.options[productoSelect.selectedIndex].text}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Precio por unidad:</strong> $${precioUnitario.toLocaleString()}</p>
        <p><strong>Total del producto:</strong> $${totalProducto.toLocaleString()}</p>
        <p><strong>Instalación:</strong> ${incluyeInstalacion ? 'Sí' : 'No'}</p>
        <p><strong>Costo de instalación:</strong> $${costoInstalacion.toLocaleString()}</p>
        <p><strong>Total final:</strong> $${totalFinal.toLocaleString()}</p>
    `;
});

