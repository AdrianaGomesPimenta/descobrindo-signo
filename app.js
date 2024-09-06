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
        descricao = 'Áries é conhecido por ser uma pessoa explosiva, com fome de viver e personalidade marcante, icônicas e que são bem decididas no que fazem em sua vida.';
        icone = '<img class="decobrir_icon" src="./assets/aries.png" alt="Símbolo de Áries">';
    } 
    // Verifica se a data corresponde ao signo de Touro
    else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
        signo = 'Touro';
        descricao = 'São conservadores, silenciosos, calmos e amorosos somente com aqueles que mais amam, ligado à família, as raízes e odeia mudanças em qualquer área de sua vida.';
        icone = '<img class="decobrir_icon" src="./assets/touro.png" alt="Símbolo de Touro">';
    } 
    // Verifica se a data corresponde ao signo de Gêmeos
    else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
        signo = 'Gêmeos';
        descricao = 'São pessoas que mudam de opinião muito fácil, não costumam se fixar ou criar raízes, tem dificuldades na hora de tomar decisões importantes, são inteligentes, comunicativos e muito sociáveis.';
        icone ='<img class="decobrir_icon" src="./assets/gemeos.png" alt="Símbolo de Gêmeos">';
    } 
    // Verifica se a data corresponde ao signo de Câncer
    else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
        signo = 'Câncer';
        descricao = 'São pessoas amorosas, carinhosas e leais, no romance esperam aquele amor típico de novela, o que pode decepcionar com constância seu coração visto que nem tudo são flores.';
        icone = '<img class="decobrir_icon" src="./assets/cancer.png" alt="Símbolo de Câncer">';
    } 
    // Verifica se a data corresponde ao signo de Leão
    else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
        signo = 'Leão';
        descricao = 'Leão é líder nato, orgulhoso e adora estar no centro das atenções, protegem aqueles que amam e estão constantemente apaixonadas, cheia de pretendentes. ';
        icone = '<img class="decobrir_icon" src="./assets/leao.png" alt="Símbolo de Leão">';
    } 
    // Verifica se a data corresponde ao signo de Virgem
    else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
        signo = 'Virgem';
        descricao = 'Quem é de Virgem possui uma calma e serenidade inspiradora. São pessoas inteligentes e analíticas, possue uma enorme facilidade de analisar com precisão a personalidade de seus amigos.';
        icone = '<img class="decobrir_icon" src="./assets/virgem.png" alt="Símbolo de Virgem">';
    } 
    // Verifica se a data corresponde ao signo de Libra
    else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
        signo = 'Libra';
        descricao = 'Librianos conseguem fazer amizades com pessoas de todos os tipos e estão sempre à procura de novas aventuras e amizades. Cooperativo, romântico, gracioso, simpático e encantador.';
        icone = '<img class="decobrir_icon" src="./assets/libra.png" alt="Símbolo de Libra">';
    } 
    // Verifica se a data corresponde ao signo de Escorpião
    else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
        signo = 'Escorpião';
        descricao = 'São pessoas intensas, apaixonados, misteriosos, tem seus sentimentos a flor da pele, são dedicados e leais até o fim. Donos de uma memória excelente e de uma personalidade muito forte.';
        icone = '<img class="decobrir_icon" src="./assets/escorpiao.png" alt="Símbolo de Escorpião">';
    } 
    // Verifica se a data corresponde ao signo de Sagitário
    else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
        signo = 'Sagitário';
        descricao = 'Sagitário é lembrado por ser amigo, ser engraçado, precisa constantemente de ter liberdade e mudanças na vida. No romance quando se apaixonam, costumam fazer de tudo pela pessoa, porém, não suportam ciúmes.';
        icone = '<img class="decobrir_icon" src="./assets/sagitario.png" alt="Símbolo de Sagitário">';
    } 
    // Verifica se a data corresponde ao signo de Capricórnio
    else if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
        signo = 'Capricórnio';
        descricao = 'Capricórnio é lembrado por ser um dos signos mais conservadores, cuidadosos e constantes. São pessoas que no romance podem ser frias, porém se dedicam ao parceiro.';
        icone = '<img class="decobrir_icon" src="./assets/capricornio.png" alt="Símbolo de Capricórnio">';
    } 
    // Verifica se a data corresponde ao signo de Aquário
    else if ((dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)) {
        signo = 'Aquário';
        descricao = 'Uma pessoa de aquário sempre deixa o ambiente mais divertido, já que gostam de fazer as pessoas rirem. Leal, inventivo, lógico, independente, determinado, os aquarianos são conhecidos por sua personalidade forte.';
        icone = '<img class="decobrir_icon" src="./assets/aquario.png" alt="Símbolo de Aquário">';
    } 
    // Verifica se a data corresponde ao signo de Peixes
    else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
        signo = 'Peixes';
        descricao = 'Românticos, curiosos, sonhadores, compreensivos, esses são os piscianos. Eles adoram viajar nos próprios pensamentos. Estão constantemente apaixonadas, adoram namorar e sempre acham que a relação irá durar para sempre.';
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
