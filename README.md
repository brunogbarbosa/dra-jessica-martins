# Dra. Jéssica Martins

Site editorial em Next.js, React e TypeScript para a Dra. Jéssica Martins. A identidade combina marfim, terracota e chocolate, com fotografias e resultados reais fornecidos pela profissional.

## Vercel

Importe este repositório na Vercel usando o preset **Next.js**. A raiz do repositório é a raiz do projeto. Instalação: `npm ci`. Build: `npm run build`. Não há variáveis obrigatórias.

O endereço de produção informado pela Vercel é utilizado nos metadados. Para um domínio próprio, atualize `seo.url` em `data/site.ts`.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```bash
npm ci
npm run dev
```

## Conteúdo

Os dados de marca, textos, contatos e registros estão centralizados em `data/site.ts`. O botão de agendamento utiliza o link direto de WhatsApp informado no perfil da profissional. Telefone e depoimentos permanecem ocultos por não terem sido fornecidos.

As imagens foram otimizadas em WebP. A galeria amplia os registros e oferece comparação interativa quando o arquivo contém antes e depois. As animações respeitam `prefers-reduced-motion`.
