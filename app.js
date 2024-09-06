// Função principal para descobrir o signo com base na data de nascimento inserida pelo usuário
function descobrirSigno() {
    // Obtém o valor do campo de data de nascimento do usuário e converte para um objeto Date
    const dataNascimento = new Date(document.getElementById('data-nascimento').value);

    // Extrai o dia da data de nascimento (usando getUTCDate) e o mês (getUTCMonth retorna de 0 a 11, então soma-se 1)
    const dia = dataNascimento.getUTCDate();
    const mes = dataNascimento.getUTCMonth() + 1;

    // Variáveis para armazenar o nome do signo, descrição e o icone
    let signo = '';
    let descricao = '';
    let icone ="";

    // Verifica se a data corresponde ao signo de Áries
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
        signo = 'Áries';
        descricao = 'Áries é conhecido por pessoas explosivas, com fome de viver e personalidade marcante.';
        icone = '<img class="decobrir_icon" src="./assets/aries.png" alt="Símbolo de Áries">';
    } 
    // Verifica se a data corresponde ao signo de Touro
    else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
        signo = 'Touro';
        descricao = 'Touro é conservador, silencioso e ligado à família, odeia mudanças.';
        icone = '<img class="decobrir_icon" src="./assets/touro.png" alt="Símbolo de Touro">';
    } 
    // Verifica se a data corresponde ao signo de Gêmeos
    else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
        signo = 'Gêmeos';
        descricao = 'Gêmeos é conhecido por sua inteligência e facilidade em se comunicar.';
        icone ='<img class="decobrir_icon" src="./assets/gemeos.png" alt="Símbolo de Gêmeos">';
    } 
    // Verifica se a data corresponde ao signo de Câncer
    else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
        signo = 'Câncer';
        descricao = 'Câncer é emocional, leal e ligado à família, mas pode ser sensível e dramático.';
        icone = '<img class="decobrir_icon" src="./assets/cancer.png" alt="Símbolo de Câncer">';
    } 
    // Verifica se a data corresponde ao signo de Leão
    else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
        signo = 'Leão';
        descricao = 'Leão é líder nato, orgulhoso e adora estar no centro das atenções.';
        icone = '<img class="decobrir_icon" src="./assets/leao.png" alt="Símbolo de Leão">';
    } 
    // Verifica se a data corresponde ao signo de Virgem
    else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
        signo = 'Virgem';
        descricao = 'Virgem é detalhista, prático e organizado, valorizando a perfeição.';
        icone = '<img class="decobrir_icon" src="./assets/virgem.png" alt="Símbolo de Virgem">';
    } 
    // Verifica se a data corresponde ao signo de Libra
    else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
        signo = 'Libra';
        descricao = 'Libra é diplomático, busca harmonia e tem um grande senso de justiça.';
        icone = '<img class="decobrir_icon" src="./assets/libra.png" alt="Símbolo de Libra">';
    } 
    // Verifica se a data corresponde ao signo de Escorpião
    else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
        signo = 'Escorpião';
        descricao = 'Escorpião é intenso, apaixonado e misterioso, com emoções profundas.';
        icone = '<img class="decobrir_icon" src="./assets/escorpiao.png" alt="Símbolo de Escorpião">';
    } 
    // Verifica se a data corresponde ao signo de Sagitário
    else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
        signo = 'Sagitário';
        descricao = 'Sagitário é aventureiro, otimista e adora explorar o desconhecido.';
        icone = '<img class="decobrir_icon" src="./assets/sagitario.png" alt="Símbolo de Sagitário">';
    } 
    // Verifica se a data corresponde ao signo de Capricórnio
    else if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
        signo = 'Capricórnio';
        descricao = 'Capricórnio é ambicioso, disciplinado e focado em alcançar seus objetivos.';
        icone = '<img class="decobrir_icon" src="./assets/capricornio.png" alt="Símbolo de Capricórnio">';
    } 
    // Verifica se a data corresponde ao signo de Aquário
    else if ((dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)) {
        signo = 'Aquário';
        descricao = 'Aquário é visionário, independente e busca inovação em tudo que faz.';
        icone = '<img class="decobrir_icon" src="./assets/aquario.png" alt="Símbolo de Aquário">';
    } 
    // Verifica se a data corresponde ao signo de Peixes
    else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
        signo = 'Peixes';
        descricao = 'Peixes é sonhador, sensível e tem uma forte ligação com o mundo emocional.';
        icone = '<img class="decobrir_icon" src="./assets/peixes.png" alt="Símbolo de Peixes">';
    } 
    // Caso a data seja inválida ou não caia em nenhum signo
    else {
        signo = 'Data inválida';
        descricao = 'Por favor, insira uma data de nascimento válida.';
    }

    // Seleciona o elemento do DOM onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultado-signo');

    // Insere o resultado (signo e descrição) no elemento HTML escolhido
    resultadoDiv.innerHTML = `
        <h2>Seu signo é : ${signo} ${icone}</h2>
        <p>${descricao}</p>
    `;
}
