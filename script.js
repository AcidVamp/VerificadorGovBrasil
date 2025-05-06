function abrirMenu() {
  document.getElementById('sideMenu').style.left = '0';
}

function fecharMenu() {
  document.getElementById('sideMenu').style.left = '-300px';
}

function verificarPaciente() {
  const busca = document.getElementById('busca').value.trim();
  const resultado = document.getElementById('resultado');

  // Mostra o loading
  resultado.innerHTML = `
    <div id="loading" style="text-align: center; margin-top: 20px;">
      <img src="https://i.gifer.com/ZZ5H.gif" alt="Carregando..." style="height: 40px;">
      <p>Carregando informações...</p>
    </div>
  `;

  setTimeout(() => {
    const baseDados = [
  { nome: 'Kevin Cruz Lima', cpf: '080.373.035-78', codigo: '8OP2JA1', dias: 01 , cid: 'R10', unidade: 'UPA 24h CABULA' },
  { nome: 'Leticia Machado Bastos', cpf: '777.777.777-77', codigo: '7K7K7K', dias: 0, cid: 'B34.9', unidade: 'Caps' },
  { nome: 'Ramon Rodrigues Lima', cpf: '064.292.854-13' , codigo: '07/05/2025', dias: 3, cid: 'H92', unidade: 'Clínica Amor Saúde - Fortaleza' } // Novo cadastro
];

    const encontrado = baseDados.find(p =>
      p.nome.toLowerCase() === busca.toLowerCase() ||
      p.cpf === busca ||
      p.codigo.toLowerCase() === busca.toLowerCase()
    );

    if (!busca) {
      resultado.innerHTML = '<p style="color:red">Por favor, informe um nome, CPF ou código válido.</p>';
    } else if (encontrado) {
      resultado.innerHTML = `
        <p><strong>Nome:</strong> ${encontrado.nome}</p>
        <p><strong>CPF:</strong> ${encontrado.cpf}</p>
        <p><strong>Código:</strong> ${encontrado.codigo}</p>
        <p><strong>Dias de Afastamento:</strong> ${encontrado.dias}</p>
        <p><strong>CID:</strong> ${encontrado.cid}</p>
        <p><strong>Unidade Atendida:</strong> ${encontrado.unidade}</p>
      `;
    } else {
      resultado.innerHTML = '<p style="color:red">Paciente não encontrado.</p>';
    }
  }, 1000); // Simula 1 segundo de carregamento
}
