
function calculateQuote() {
    const propertyValue = parseFloat(document.getElementById('propertyValue').value);
    const coverageType = document.getElementById('coverageType').value;
    const policyDuration = parseFloat(document.getElementById('policyDuration').value);
    
    if (isNaN(propertyValue) || isNaN(policyDuration)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    let coverageMultiplier = coverageType === 'full' ? 1.5 : 1.0;
    let estimatedPrice = (propertyValue * 0.01 * coverageMultiplier * policyDuration).toFixed(2);

    document.getElementById('price').innerText = estimatedPrice;

    document.getElementById('policyInfo').innerHTML = `
        <p><strong>Valor de la propiedad:</strong> USD ${propertyValue.toFixed(2)}</p>
        <p><strong>Tipo de cobertura:</strong> ${coverageType === 'full' ? 'Completa' : 'Básica'}</p>
        <p><strong>Duración de la póliza:</strong> ${policyDuration} año(s)</p>
        <p><strong>Precio estimado:</strong> USD ${estimatedPrice}</p>
    `;

    console.log({
        propertyValue: propertyValue.toFixed(2),
        coverageType: coverageType,
        policyDuration: policyDuration,
        estimatedPrice: estimatedPrice
    });
}
