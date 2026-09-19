# Proposal

## Why

A marca atual ("Orbita") é apenas um placeholder usado para demonstração do projeto. Agora precisamos atualizar a identidade visual do sistema para a marca definitiva ("Vertex"), garantindo que ela se reflita corretamente em toda a interface e nos PDFs exportados sem alterar a arquitetura do projeto.

## What Changes

- Copiar as novas artes (`logo-full.svg`, `logo-icon.svg` e `watermark.svg`) da pasta `marca-nova` para `src/assets/brand/`, sobrescrevendo os arquivos originais.
- Atualizar a configuração central em `src/brand/brand.ts`: mudar o nome da marca para "Vertex", a tagline (ex: "TECNOLOGIA" ou o que fizer sentido), e garantir que `watermarkOpacity` permaneça menor ou igual a 0.15, respeitando o cenário da spec de PDF.
- Implementar testes end-to-end com Playwright (`tests/e2e/`) garantindo os fluxos principais (navegação da sidebar, e funcionalidade de download de PDF) com a nova marca renderizada corretamente (textos e elementos visíveis).

## Capabilities

### New Capabilities
Nenhuma.

### Modified Capabilities
Nenhuma. Esta é uma alteração de configuração e assets (dados), que atende às especificações atuais do projeto sem alterar os requisitos (as specs existentes continuam válidas e intactas).

## Impact

- **Assets Visuais:** Os arquivos de SVG em `src/assets/brand/` serão substituídos.
- **Configuração:** O arquivo `src/brand/brand.ts` será alterado.
- **Testes:** Novos cenários de teste E2E serão adicionados ou atualizados em `tests/e2e/` para validar a sidebar, navegação e download de PDFs.
- Componentes React (`BrandLogo.tsx`, `generatePdf.ts`, etc.) **não** sofrerão impacto direto em seu código, validando a arquitetura do ponto único de configuração.
