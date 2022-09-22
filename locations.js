var request = new XMLHttpRequest();
request.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos', true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) 
  {
    select = document.getElementById('cidade-select');
    data.forEach(localidade => {
        var opt = document.createElement('option');
        opt.value = localidade.nome;
        opt.innerHTML = localidade.nome;
        select.appendChild(opt);
    });
  }
  else 
  {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `erro`;
    app.appendChild(errorMessage);
  }
}

request.send();