# Sistema de Separação de Compras - Estabelecimentos com Pix

## Descrição

Este projeto tem como objetivo resolver o problema de compras feitas em dois estabelecimentos diferentes, onde apenas um aceita o pagamento via PIX. Quando um cliente realiza uma compra em ambos os estabelecimentos, o sistema vai automaticamente separar os valores dos itens de cada um, considerando qual deles aceita PIX e qual não aceita.

A solução inclui uma funcionalidade para registrar os valores das compras, gerar uma tabela de registros e gerar um PDF das compras do dia. A ideia é facilitar o controle financeiro, sem que o cliente precise fazer múltiplos pagamentos ou separações manuais entre os estabelecimentos.

### Funcionalidades

- **Isolamento de valores**: O sistema isola automaticamente o valor dos itens do estabelecimento que não aceita PIX.
- **Registro de compras**: Todos os valores e transações são registrados em uma tabela para futura consulta.
- **Geração de PDF**: Através de uma função, é possível gerar um PDF com todas as compras realizadas no dia.

## Tecnologias Utilizadas

- **JavaScript (Node.js)**: Linguagem de programação principal.
- **Biblioteca de manipulação de PDF (Ex: pdf-lib ou jsPDF)**: Para gerar o PDF das compras.
- **Biblioteca para manipulação de tabelas (Ex: Table-to-Excel ou alguma biblioteca de tabelas em HTML)**.


## imagem
<img width="518" height="626" alt="image" src="https://github.com/user-attachments/assets/9a91b839-1a21-49f2-9c4a-a03f0ccdb1d7" />


