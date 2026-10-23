# Casos de Teste - Redefinição de Senha (OrangeHRM)

## CT-001: Redefinição de senha com sucesso
- **Dado** que o usuário está na tela de "Forgot your password?"
- **Quando** digita um Username válido no campo "Username"
- **E** clica no botão "Reset Password"
- **Então** o sistema deve exibir a mensagem "Reset Password link sent successfully"

## CT-002: Redefinir senha sem preencher o usuário
- **Dado** que o usuário está na tela de "Forgot your password?"
- **E** deixa o campo "Username" em branco
- **Quando** clica no botão "Reset Password"
- **Então** o sistema deve exibir a mensagem de erro "Required" abaixo do campo
- **E** não deve enviar o link de redefinição

## CT-003: Cancelar a redefinição de senha
- **Dado** que o usuário está na tela de "Forgot your password?"
- **Quando** clica no botão "Cancel"
- **Então** o sistema deve redirecionar o usuário de volta para a tela de Login
