JAVASCRIPT
function buscarClima() {
    const cidade = document.getElementById('cidade').value;
    const apiKey = 'fae723e39b9e50e639f85136818d81dd';
    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const temperatura = data.main.temp;
            const cidade = data.name;
            const resultado = document.getElementById('resultado');
            if (resultado) {
                resultado.textContent = `A temperatura em ${cidade} é de ${temperatura}°C`;
            } else {
                console.error('Elemento resultado não encontrado');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
            const resultado = document.getElementById('resultado');
            if (resultado) {
                resultado.textContent = 'Cidade não encontrada ou ocorreu um erro.';
            }
        });
}
