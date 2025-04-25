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
  { nome: 'Cleverton Alves Santos', cpf: '840.802.055-20', codigo: '8w7ej', dias: 2, cid: 'M54.4', unidade: 'UPA 24h CABULA' },
  { nome: 'Leticia Machado Bastos', cpf: '777.777.777-77', codigo: '7K7K7K', dias: 0, cid: 'B34.9', unidade: 'Caps' },
  { nome: 'João Silva', cpf: '789123', codigo: 'JOA2025', dias: 5, cid: 'C10', unidade: 'Clínica Sul' } // Novo cadastro
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
