# Design

## Context

A implementação abrange a substituição da marca atual (Orbita) por Vertex e a criação da suíte de testes E2E em Playwright para validar os cenários descritos nos specs.

## Goals / Non-Goals

**Goals:**
- Configurar a marca "Vertex" em `src/brand/brand.ts` sem alterar as proporções originais do SVG.
- Criar os testes em dois domínios: `sidebar-navigation.spec.ts` (incluindo testes de identidade) e `pdf-watermark.spec.ts`.
- Validar se os componentes e telas interagem corretamente (sem quebrar a API atual).
- Garantir que nenhum componente (`BrandLogo.tsx`, `Sidebar.tsx`) ou o gerador de PDF (`generatePdf.ts`) sejam alterados.

**Non-Goals:**
- Criar novos componentes de UI ou alterar o fluxo geral da aplicação.
- Escrever testes E2E além dos cenários estipulados nos specs.

## Decisions

**Integração de Testes de Identidade**
A cobertura de identidade da marca foi integrada ao teste `sidebar-navigation.spec.ts`, reduzindo a redundância e mantendo a verificação do fluxo principal junta.

**Gravação com `codegen` e Limpeza**
Os testes poderão ser gerados utilizando o `playwright codegen`, mas o código será posteriormente limpo e adaptado para usar o padrão de Locator com os atributos `data-testid` existentes, a fim de garantir estabilidade contra mudanças de layout.

## Risks / Trade-offs

- **Falha de Rasterização no PDF** -> O teste de E2E validará se o PDF está sendo baixado (`download.suggestedFilename()`), porém não fará o parse/OCR do PDF no Playwright. Trata-se de uma limitação comum para testes de UI com PDF.
- **Limitação do Storage de Sidebar** -> Validar persistência via reload de página exige cuidado com o estado de testes entre cenários. Cada teste do Playwright rodará num contexto isolado, evitando vazamento de estado de localStorage.
