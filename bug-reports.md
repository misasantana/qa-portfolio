# Bug Reports - OrangeHRM

## [BUG-001] Erro 504 (Gateway Time-out) ao solicitar redefinição de senha

- **Ambiente:** OrangeHRM Demo (Navegador Google Chrome)
- **Gravidade:** Alta
- **Prioridade:** Alta

### Passos para Reproduzir:
1. Na tela de login, clicar no link "Forgot your password?".
2. No campo Username, preencher com um usuário válido (ex: `Admin`).
3. Clicar no botão "Reset Password".

### Resultado Esperado:
O sistema deve processar a solicitação e exibir a mensagem de sucesso: "Reset Password link sent successfully".

### Resultado Obtido:
O sistema demora para responder e exibe a tela de erro do servidor: `504 Gateway Time-out - nginx/1.18.0 (Ubuntu)`.
