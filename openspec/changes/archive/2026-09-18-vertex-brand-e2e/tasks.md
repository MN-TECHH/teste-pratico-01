# Tasks

## 1. Identidade Visual (Marca)

- [x] 1.1 Copiar os três SVGs da pasta `marca-nova/` substituindo os correspondentes em `src/assets/brand/`.
- [x] 1.2 Atualizar as configurações da marca em `src/brand/brand.ts` alterando o nome para "Vertex" e tagline para "TECNOLOGIA", ajustando `watermarkOpacity` para `0.15`. Preservar integralmente o `viewBox` original da Vertex (`0 0 240 64`).

## 2. Implementação dos Testes E2E (Gravação)

- [x] 2.1 Criar `tests/e2e/sidebar-navigation.spec.ts` englobando testes de identidade de marca (logo completa x ícone) e navegação.
- [x] 2.2 Criar `tests/e2e/pdf-watermark.spec.ts` para testar o download do PDF.

## 3. Refatoração e Uso de Test IDs

- [x] 3.1 Refatorar `sidebar-navigation.spec.ts` priorizando `data-testid`.
- [x] 3.2 Refatorar `pdf-watermark.spec.ts` priorizando `data-testid` e lidando programaticamente com eventos de download.

## 4. Validação Final

- [x] 4.1 Executar a suíte completa de testes locais via `npm run test:e2e`. Verificar que a saída do console é 100% "passed".
- [x] 4.2 Rodar verificação de tipo (`npm run typecheck`) e pacote (`npm run build`). Verificar ausência de erros e dependências inalcançáveis no output gerado.
