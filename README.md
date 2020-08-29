# Lifter - Requisitos do sistema

### Requisitos Funcionais
- O usuário deve ter a possibilidade de cadastrar um novo plano de matrícula, contendo nome e custo;
- O usuário deve ter a possibilidade de cadastrar um novo atleta, contendo nome, número de telefone, data de nascimento, data de início, e observações, indicando o plano relacionado à matrícula;
- O usuário deve ter a possibilidade de dividir os atletas em grupos (adultos e crianças);
- O usuário deve ter a possibilidade de consultar uma listagem contendo todos os atletas;
- O usuário deve ter possiblidade de filtrar a lista de atletas de acordo com nome, grupo e plano de matrícula;
- O usuário deve ter a possiblidade de alterar dados de um atleta específico;
- O usuário deve ter a possibilidade de consultar as datas de vencimento do pagamento periódico de cada atleta;
- O usuário deve ter a possibilidade de consultar as datas de pagamento realizado por cada atleta;
- O usuário deve ter a possibilidade de cadastrar um novo pagamento referente a um atleta, contendo valor, data de pagamento, data de referência e próximo vencimento;
- O usuário deve ter a possibilidade de adicionar a indicação de um atleta já matriculado no ato da matrícula de um novo atleta;
- O usuário deve ter a possibilidade de registrar a presença de um atleta em uma determinada data;
- O usuário deve ter a possibilidade de indicar se a matrícula de um aluno está ativa ou não;


### Requisitos Não-Funcionais
- O sistema deve aceitar um máximo de dez requisições por segundo;
- O sistema deve exigir a autenticação do usuário;
- O registro de presenças deve ser persistido utilizando um paradigma orientado a documentos;
- O registro de presenças, por padrão, deve utilizar a data atual;

### Regras de negócio
- Valores do pagamento periódico não devem ser fixos, pois o cliente realiza acordos específicos para cada atleta;
- O atleta existente que indicar mais atletas a serem matriculados deve receber descontos em sua mensalidade, seguindo a regra:
  - Uma indicação: 10% de desconto;
  - Duas indicações: 15% de desconto;
  - Três ou mais indicações: 20% de desconto;
