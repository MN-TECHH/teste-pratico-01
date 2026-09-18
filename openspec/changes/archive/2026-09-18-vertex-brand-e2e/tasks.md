# Tasks

## 1. Identidade Visual (Marca)

- [x] 1.1 Copiar os três SVGs da pasta `marca-nova/` substituindo os correspondentes em `src/assets/brand/`. Verificar se as imagens estão corretas na árvore do projeto.
- [x] 1.2 Atualizar as configurações da marca em `src/brand/brand.ts` alterando o nome para "Vertex" e tagline para "TECNOLOGIA", assegurando que `watermarkOpacity` fique menor ou igual a 0.15 e que as proporções originais não sejam alteradas. Verificar renderização subindo o servidor local via `npm run dev`.
- [x] 1.4 Ajustar parâmetros da marca d'água no PDF (tamanho, posição, recorte do viewBox e opacidade) para uma exibição profissional e perfeitamente centralizada.

## 2. Implementação dos Testes E2E (Gravação)

- [ ] 2.1 Gravar e criar o arquivo base `tests/e2e/sidebar-navigation.spec.ts` usando Playwright test generator (ex: via script de geração ou navegador), englobando expandir/recolher sidebar, verificar logo completa x ícone e navegação pelas 3 telas.
- [ ] 2.2 Gravar e criar o arquivo base `tests/e2e/brand-identity.spec.ts` validando a presença do nome Vertex e logos apropriadas.
- [ ] 2.3 Gravar e criar o arquivo base `tests/e2e/pdf-watermark.spec.ts` gerando o documento em Relatório e Certificado e validando que ocorre o download.

## 3. Refatoração e Uso de Test IDs

- [ ] 3.1 Refatorar `sidebar-navigation.spec.ts` limpando o código gerado para priorizar os seletores `data-testid` (ex: `sidebar`, `sidebar-toggle`, `page-inicio`, etc.) em vez de classes ou XPath, garantindo que o comportamento observável se mantenha. Verificar através de execução com `npm run test:e2e`.
- [ ] 3.2 Refatorar `brand-identity.spec.ts` utilizando testids (`brand-logo-icon`, `brand-logo-full`). Verificar através de execução com `npm run test:e2e`.
- [ ] 3.3 Refatorar `pdf-watermark.spec.ts` empregando testids correspondentes (`generate-pdf`) e lidando programaticamente com os eventos de download usando a API recomendada do Playwright (ex: `page.waitForEvent('download')`). Verificar através de execução com `npm run test:e2e`.

## 4. Validação Final

- [ ] 4.1 Executar a suíte completa de testes locais via `npm run test:e2e`. Verificar que a saída do console é 100% "passed".
- [ ] 4.2 Rodar verificação de tipo (`npm run typecheck`) e pacote (`npm run build`). Verificar ausência de erros e dependências inalcançáveis no output gerado.
