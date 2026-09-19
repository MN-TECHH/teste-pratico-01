# Tasks

## 1. Assets e configuracao da marca

- [x] 1.1 Copiar `logo-full.svg`, `logo-icon.svg` e `watermark.svg` de `marca-nova/` para `src/assets/brand/` e verificar que os tres SVGs Vertex preservam os viewBoxes esperados (240x64, 64x64 e 240x64).
- [x] 1.2 Atualizar `src/brand/brand.ts` para configurar o nome Vertex e uma tagline correspondente, mantendo os imports centralizados e `watermarkOpacity` em 0,08 (e no maximo 0,15); verificar que nao ha referencias residuais a Orbita nesse modulo.

## 2. Validacao da experiencia

- [x] 2.1 Executar `npm run typecheck` e `npm run build` e verificar que ambos concluem sem erros.
- [x] 2.2 Iniciar a aplicacao e verificar que a sidebar expandida exibe a logo completa Vertex e a recolhida exibe apenas o icone Vertex, preservando os `data-testid` existentes.
- [x] 2.3 Gerar PDFs das paginas Relatorio e Certificado e verificar que ambos exibem Vertex no rodape e a marca d'agua Vertex centralizada, monocromatica e discreta em todas as paginas.
