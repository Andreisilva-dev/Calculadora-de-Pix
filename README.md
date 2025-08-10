# Sistema de Separação de Compras - Estabelecimentos com Pix

## 1. Problema que o Projeto Resolve (e por que é importante)

O problema central abordado por este projeto surge quando um cliente realiza compras em dois estabelecimentos diferentes, sendo que apenas um deles aceita pagamento via **PIX**. Em situações como essas, o cliente enfrenta dificuldades em separar os valores de cada compra para realizar o pagamento de forma prática e sem erros. 

Com a popularização do **PIX** e a adaptação dos comércios a este método de pagamento, muitos estabelecimentos ainda não possuem suporte total para esse sistema, dificultando a experiência de compra. A solução proposta visa **automatizar a separação dos valores**, facilitando o pagamento para o cliente e evitando que ele tenha que fazer esse processo manualmente. Este problema é importante porque promove **agilidade** e **eficiência** nas transações financeiras de múltiplos estabelecimentos.

## 2. Solução Proposta

A solução consiste em um sistema que automaticamente separa os valores das compras realizadas em dois estabelecimentos, levando em consideração quais aceitam PIX e quais não aceitam. O processo é simplificado para o usuário final e envolve as seguintes funcionalidades:

- **Isolamento de valores**: O sistema identifica e separa os valores dos itens de cada estabelecimento com base nas formas de pagamento aceitas (PIX ou outro).
- **Registro de compras**: Cada transação é registrada em uma tabela, criando um histórico fácil de consultar.
- **Geração de PDF**: Ao final de um dia de compras, o sistema pode gerar um **relatório em PDF** com todos os registros de compras realizadas, facilitando o controle financeiro.

<img width="518" height="626" alt="image" src="https://github.com/user-attachments/assets/9a91b839-1a21-49f2-9c4a-a03f0ccdb1d7" />

*Exemplo de como a interface do sistema pode apresentar os dados separados por estabelecimento e método de pagamento.*

### Fluxo do Sistema

1. O cliente realiza compras em dois estabelecimentos (um aceita PIX, o outro não).
2. O sistema detecta automaticamente os valores e os separa conforme o método de pagamento.
3. Um PDF detalhado da transação é gerado no final do dia para fácil consulta.

## 3. Desafios Enfrentados e Como Foram Superados

### Desafio 1: Identificação Automática do Estabelecimento que Aceita PIX
Detectar automaticamente qual estabelecimento aceita PIX e qual não aceita foi um dos maiores desafios. Para resolver isso, implementamos um sistema de configuração simples onde cada estabelecimento é pré-cadastrado com a informação sobre o pagamento via PIX. Com isso, a separação dos valores foi simplificada.

### Desafio 2: Geração do PDF com Formatação Correta
A geração do PDF com todos os detalhes das compras em um formato legível e organizado foi outro obstáculo. Utilizamos a biblioteca **pdf-lib** para manipular e gerar o PDF. Ajustes nas margens e tabelas foram feitos manualmente para garantir que o arquivo fosse limpo e bem formatado.

### Desafio 3: Integração com Diferentes Sistemas de Pagamento
Alguns estabelecimentos utilizam diferentes plataformas para o processamento de pagamento via PIX. Desenvolver uma interface que pudesse se comunicar com essas diferentes plataformas foi um desafio técnico significativo, mas conseguimos integrá-las por meio de APIs específicas.

## 4. Decisões Técnicas e Seus Trade-offs

- **Uso de Node.js**: Optamos por usar **Node.js** por ser uma plataforma eficiente para manipulação de dados e integração com APIs externas. A escolha foi importante por facilitar a comunicação com o banco de dados e permitir uma arquitetura escalável. O trade-off foi a necessidade de conhecimentos específicos sobre o ambiente Node.js e suas dependências.
  
- **Biblioteca pdf-lib para geração de PDF**: A escolha dessa biblioteca foi devido à sua flexibilidade e capacidade de gerar PDFs dinâmicos. Embora existam alternativas como o **jsPDF**, o pdf-lib foi mais adequado devido à sua facilidade de personalização e integração com o restante do sistema. O trade-off aqui é que o pdf-lib tem uma curva de aprendizado um pouco maior.

- **Manutenção da Tabela de Registros em HTML/JS**: Optamos por usar **Table-to-Excel** para a exportação de dados, o que facilita a exportação para planilhas Excel. A principal vantagem foi a simplicidade de implementação. No entanto, isso limitou um pouco a personalização da tabela e da exportação, exigindo ajustes no front-end para garantir que os dados fossem apresentados corretamente.

## 5. Aprendizados e Próximos Passos

### Aprendizados

- A importância de **automatizar** processos financeiros para minimizar erros humanos e aumentar a eficiência do cliente.
- Como **integrar diferentes sistemas de pagamento** (PIX e não PIX) de maneira eficaz e com o mínimo de intervenção manual.
- A experiência de trabalhar com bibliotecas externas e como lidar com limitações e trade-offs, especialmente quando se trabalha com geração de arquivos PDF dinâmicos.

### Próximos Passos

- **Suporte a mais métodos de pagamento**: Implementar o suporte a outros métodos de pagamento, como **Cartão de Crédito** e **Boleto**, para tornar o sistema mais robusto e aplicável a mais estabelecimentos.
- **Melhoria na interface do usuário (UI)**: Tornar a interface mais amigável e intuitiva, com foco em melhorar a experiência do cliente, especialmente em dispositivos móveis.
- **Monitoramento e relatórios**: Adicionar funcionalidades de monitoramento em tempo real e gerar relatórios financeiros semanais ou mensais.
