# Guia de Deploy para GitHub Pages

## Passo a Passo

### 1. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New repository" (ou acesse https://github.com/new)
3. Nome do repositório: `semicolon-website` (ou o nome que preferir)
4. Escolha se será público ou privado
5. **NÃO** marque "Initialize with README" (já temos arquivos)
6. Clique em "Create repository"

### 2. Configurar o Base Path

**IMPORTANTE:** Ajuste o `base` no arquivo `vite.config.ts` para o nome do seu repositório:

```typescript
base: process.env.NODE_ENV === 'production' 
  ? '/NOME-DO-SEU-REPOSITORIO/' // Ex: '/semicolon-website/'
  : '/',
```

Se o repositório for `semicolon-website`, já está correto. Se for outro nome, ajuste!

### 3. Fazer Push do Código

No terminal, execute:

```bash
# Inicializar git (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Semicolon website"

# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/semicolon-website.git

# Fazer push para o branch main
git branch -M main
git push -u origin main
```

### 4. Habilitar GitHub Pages

1. No repositório do GitHub, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - **Source**: `GitHub Actions`
4. Salve as configurações

### 5. Deploy Automático

O GitHub Actions já está configurado! Após fazer o push:

1. Vá na aba **Actions** do seu repositório
2. Você verá o workflow "Deploy to GitHub Pages" rodando
3. Aguarde alguns minutos para o build e deploy
4. Quando terminar, você verá um link verde com a URL do site

### 6. Acessar o Site

O site estará disponível em:
```
https://SEU-USUARIO.github.io/semicolon-website/
```

## Deploy Manual (Alternativa)

Se preferir fazer deploy manual:

```bash
# Instalar dependências
npm install

# Fazer build
npm run build

# Deploy usando gh-pages
npm run deploy
```

## Troubleshooting

### Erro 404 no site
- Verifique se o `base` no `vite.config.ts` está correto
- Certifique-se de que o nome do repositório está correto

### Build falha
- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente para testar

### GitHub Actions não roda
- Verifique se habilitou GitHub Pages nas Settings
- Verifique se o workflow está no branch `main`

## Atualizar o Site

Para atualizar o site, basta fazer push para o branch `main`:

```bash
git add .
git commit -m "Update: descrição das mudanças"
git push origin main
```

O GitHub Actions fará o deploy automaticamente!

