# Proposal

## Why

O projeto precisa adotar a nova identidade visual "Vertex" e garantir que todos os comportamentos de negócio exigidos sejam validados automaticamente. A implementação de testes end-to-end (E2E) com Playwright cobrirá os cenários existentes para garantir qualidade e evitar regressões, além da troca das logos, marca d'água e configurações associadas à marca.

## What Changes

- Troca dos ativos visuais (SVG) da marca atual pela marca Vertex.
- Atualização da configuração central da marca em `src/brand/brand.ts` (nome, tagline).
- Criação dos testes E2E do Playwright cobrindo todos os cenários das três especificações existentes (`sidebar-navigation`, `brand-identity`, `pdf-watermark`).
- Os testes serão estruturados logicamente em arquivos separados por domínio (um arquivo por spec).

## Capabilities

### New Capabilities
Nenhuma.

### Modified Capabilities
- `brand-identity`: O comportamento observável da aplicação agora deve exibir a nova marca Vertex (incluindo o nome "Vertex", tagline "TECNOLOGIA", logo completa, ícone e arte da marca d'água no PDF) através do ponto central de configuração.

## Impact

- `src/brand/brand.ts`
- `src/assets/brand/*`
- `tests/e2e/*.spec.ts` (novos arquivos)
Não há impacto na arquitetura existente ou na lógica dos componentes.
