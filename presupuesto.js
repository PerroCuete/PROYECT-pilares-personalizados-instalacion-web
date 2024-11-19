const formPresupuesto = document.getElementById('formPresupuesto');
const resultadoPresupuesto = document.getElementById('presupuestoCalculado');

formPresupuesto.addEventListener('submit', function(event) {
    event.preventDefault();

    const productoSelect = document.getElementById('producto');
    const cantidadInput = document.getElementById('cantidad');
    const instalacionSelect = document.getElementById('instalacion');

    // Obtenemos el precio de la opción seleccionada
    const precioUnitario = parseFloat(productoSelect.options[productoSelect.selectedIndex].dataset.precio);
    const cantidad = parseInt(cantidadInput.value);
    const incluyeInstalacion = instalacionSelect.value === 'si';

    // Cálculos
    const totalProducto = precioUnitario * cantidad;

    // Calculamos el costo de instalación por metro lineal
    const costoInstalacion = incluyeInstalacion ? (5000 * cantidad) : 0;

    const totalFinal = totalProducto + costoInstalacion;

    // Mostrar resultado
    resultadoPresupuesto.innerHTML = `
        <p><strong>Producto seleccionado:</strong> ${productoSelect.options[productoSelect.selectedIndex].text}</p>
        <p><strong>Cantidad (metros lineales):</strong> ${cantidad} m</p>
        <p><strong>Precio por metro lineal:</strong> $${precioUnitario.toLocaleString()}</p>
        <p><strong>Total del producto:</strong> $${totalProducto.toLocaleString()}</p>
        <p><strong>Instalación:</strong> ${incluyeInstalacion ? 'Sí' : 'No'}</p>
        <p><strong>Costo de instalación:</strong> $${costoInstalacion.toLocaleString()}</p>
        <p><strong>Total final:</strong> $${totalFinal.toLocaleString()}</p>
    `;
});

