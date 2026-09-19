# Tasks

## 1. Atualização de Assets

- [x] 1.1 Substituir `logo-full.svg`, `logo-icon.svg` e `watermark.svg` em `src/assets/brand/` pelos arquivos de `marca-nova/`.
      Critérios de aceite:
      - As proporções originais são preservadas: `logo-full.svg` e `watermark.svg` em `240×64` (razão 3,75), `logo-icon.svg` em `64×64`.
      - Os IDs de gradiente das novas artes (`vertexFull`, `vertexIcon`) não colidem com nenhum ID remanescente das artes antigas no bundle final.
      - Nenhum arquivo antigo da marca Orbita permanece em `src/assets/brand/`.

## 2. Atualização de Configuração

- [x] 2.1 Atualizar `src/brand/brand.ts`:
      - `name`: `"Vertex"`.
      - `tagline`/assinatura: `"TECNOLOGIA"` (conforme `marca-nova/README.md`).
      - `watermarkOpacity`: manter `<= 0.15` (teto definido na spec `pdf-watermark`, cenário "Opacidade baixa"). Validar visualmente no PDF gerado que a marca d'água permanece visível sem obstruir o texto sobreposto.
      - `watermarkWidthRatio` e `watermarkRotation`: mantidos, pois a razão das artes não mudou.
      Verificação: rodar `npm run typecheck` e `npm run build` sem erros.

- [x] 2.2 Confirmar que `brand.name` é lido corretamente nos três pontos exigidos pela spec e pelo sistema:
      - Tela inicial (Home).
      - Texto do Certificado.
      - Rodapé do PDF gerado (junto com data e numeração de páginas, conforme spec `pdf-watermark`, requisito "Conteudo do documento").

## 3. Testes End-to-End

- [x] 3.1 Testes de sidebar e navegação em `tests/e2e/`:
      - A sidebar recolhe e expande via `sidebar-toggle`, alternando corretamente entre `brand-logo-full` (expandida) e `brand-logo-icon` (recolhida).
      - Cada versão da logo exibida possui atributo `alt` que identifica a marca "Vertex" (spec `brand-identity`, requisito "Logo conforme o estado da barra lateral", cenário "Texto alternativo").
      - A navegação via `nav-inicio`, `nav-relatorio` e `nav-certificado` leva corretamente a `page-inicio`, `page-relatorio` e `page-certificado`.
      Verificação: `npm run test:e2e` passando.

- [x] 3.2 Testes de geração de PDF em `tests/e2e/`:
      - O botão `generate-pdf` **não** está presente na Home (spec `pdf-watermark`, requisito "Botao central de geracao de PDF").
      - Acionar `generate-pdf` em `/relatorio` dispara um download cujo nome identifica o documento e inclui a data de geração.
      - Acionar `generate-pdf` em `/certificado` dispara um download cujo nome identifica o documento e inclui a data de geração.
      Verificação: `npm run test:e2e` passando.

## 4. Checagem de Escopo

- [x] 4.1 Confirmar que a troca de marca não alterou componentes de interface nem a rotina de geração de PDF, conforme exigido pelas specs `brand-identity` e `pdf-watermark`:
```bash
      git diff --stat src/components/ src/lib/pdf/
```
      O comando deve retornar vazio (nenhuma alteração fora de assets e `src/brand/brand.ts`).