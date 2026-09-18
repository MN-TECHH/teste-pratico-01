# Design

## Context

A implementação abrange a substituição da marca atual (Orbita) por Vertex e a criação da suíte de testes E2E em Playwright para validar os cenários descritos nos specs.

## Goals / Non-Goals

**Goals:**
- Configurar a marca "Vertex" em `src/brand/brand.ts`.
- Dividir os testes em três domínios lógicos: `brand-identity.spec.ts`, `pdf-watermark.spec.ts`, `sidebar-navigation.spec.ts`.
- Validar se os componentes e telas interagem corretamente (sem quebrar a API atual).
- Ajustar a marca d'água no PDF para alinhamento e opacidade profissionais.

**Non-Goals:**
- Criar novos componentes de UI ou alterar o fluxo geral da aplicação.
- Escrever testes E2E além dos cenários estipulados nos specs.

## Decisions

**Divisão de Testes por Spec**
A suíte será separada por arquivos espelhando os specs (1:1 com os arquivos no OpenSpec). Isso melhora a rastreabilidade entre requisitos e testes.

**Gravação com `codegen` e Limpeza**
Os testes poderão ser gerados utilizando o `playwright codegen`, mas o código será posteriormente limpo e adaptado para usar o padrão de Locator com os atributos `data-testid` existentes, a fim de garantir estabilidade contra mudanças de layout.

## Risks / Trade-offs

- **Falha de Rasterização no PDF** -> O teste de E2E validará se o PDF está sendo baixado (`download.suggestedFilename()`), porém não fará o parse/OCR do PDF no Playwright. Trata-se de uma limitação comum para testes de UI com PDF.
- **Limitação do Storage de Sidebar** -> Validar persistência via reload de página exige cuidado com o estado de testes entre cenários. Cada teste do Playwright rodará num contexto isolado, evitando vazamento de estado de localStorage.
