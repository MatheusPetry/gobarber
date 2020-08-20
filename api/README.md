# Recuperação de senha
**RF**
- O usuário deve poder recuperar sua senha informando seu e-mail
- O usuário deve recever um e-mail com instruções de recuperação de senha
-O usuário deve poder resetar sua senha

**RNF**
- utilizar MailTrap para testar envios em ambiente de dev
- utilizar Amazon SE5 para envios em produção
- o envio de emails deve acontecer em segundo plano (background job)

**RN**
- o link enviado por email para resetar senha deve expirar
- O usuário precisa confirmar a nova senha ao resetar sua senha

# atualização do perfil

**RF**
- O usuário deve poder atualizar seu perfil(nome, email, senha)

**RNF**
**RN**
- O usuário não pode alterar seu email, para um email já utilizado
- para atualizar sua senha, o usuário deve informar a senha antiga
- para atualizar sua senha, o usuario precisa confirmar sua nova senha

# painel do prestador
**RF**
- o prestador deve poder listar seus agendamentos de um dia específico
- o prestaodr deve receber uma notificação sempre que houver um novo agendamento
- o prestador deve poder visualizar as notificações não lidas

**RNF**
- os agendamentos do prestador no dia devem ser amazenados em cache
- as notificações do prestador devem ser armazenadas no mongoDB
- as notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io

**RN**
- a notificação deve ter um status de lida ou não-lida para que o prestador possa controlar

# agendamento de serviços
**RF**
- O usuário deve poder listar todos prestadores de serviços cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horario disponível de um prestador
- O usuário deve poder listar horários disponíveis em um dia especifico de um prestador
- O usuário deve poder realizar um novo agendamente com um prestador

**RNF**
- a listagem de prestadores deve ser amazenada em cache


**RN**
- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar disponíveis entre 8h e ás 18h(Primeiro ás 8h e último as 17h)
- O usuário não pode agendar horário já ocupado
- O usuário não pode agendar um horário que já passou
- O usuário não pode agendar serviços consigo mesmo
-




**RequisitosFuncionais = são exatamente as funcionalidades que vamos ter**
**RequisitosNaoFuncionais = não são ligadas diretamente a regra de negocio da nossa aplicação**
**RegraNegocio = o que o usuario deve ou nao deve fazer**
