# JavaScript-Slot-Machine

Este é um jogo simples de caça-níqueis implementado em JavaScript no terminal, onde o usuário pode depositar dinheiro, apostar em fileiras e tentar ganhar prêmios com base nos símbolos sorteados nos carretéis.
Funcionalidades

    Depósito: O jogador começa o jogo com um valor de dinheiro, que pode ser depositado a qualquer momento.
    Apostas: O jogador pode escolher em quantas fileiras deseja apostar, e a quantia apostada por fileira.
    Sorteio dos Carretéis: O sistema gera um sorteio aleatório de símbolos, criando um carretel de 3 colunas e 3 linhas.
    Verificação de Ganhos: O jogador ganha dinheiro se acertar símbolos iguais em uma fileira apostada.
    Jogar novamente: O jogador pode escolher se deseja jogar novamente ou encerrar o jogo.

Requisitos

    Node.js instalado em sua máquina.
    prompt-sync para entrada de dados no terminal.

Instalação

    Clone o repositório ou baixe os arquivos para seu computador.

    Instale as dependências:

npm install prompt-sync

Execute o jogo:

    node project.js

Como jogar

    O jogo solicita que o jogador insira um valor para depositar na carteira.
    O jogador escolhe em quantas fileiras deseja apostar (1 a 3).
    O jogador faz sua aposta por fileira.
    O sistema gera um sorteio de símbolos nos carretéis e imprime as fileiras.
    O jogador ganha dinheiro se acertar símbolos iguais em uma fileira.
    O jogador pode jogar novamente até que o saldo chegue a 0 ou ele escolha sair.

Exemplo de Execução

Digite a quantia a ser depositada: 100
Você tem R$: 100 na carteira
Em quantas fileiras deseja apostar (1-3): 2
Quanto deseja apostar por fileira: 20
Aposta: 20 por fileira em 2 fileiras.
Aguardando sorteio...
Você Ganhou R$: 40
Você quer jogar novamente? (s/n)

Como o jogo funciona

    Sorteio: O sistema utiliza uma distribuição de símbolos de acordo com a quantidade configurada para cada um. O sorteio é feito aleatoriamente.
    Ganho: Se os símbolos de uma fileira forem todos iguais, o jogador ganha um valor baseado no símbolo da fileira (ex: A vale 5, B vale 4, etc).

Contribuição

Sinta-se à vontade para fazer contribuições! Se encontrar algum bug ou quiser adicionar novas funcionalidades, basta criar um pull request.
