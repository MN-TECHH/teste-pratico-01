# Proposal

## Why

O sistema ainda apresenta a identidade Órbita, enquanto as artes aprovadas da Vertex já estão disponíveis no repositório. A migração deve atualizar a experiência visual e os documentos exportados de forma consistente, preservando o ponto único de configuração existente.

## What Changes

- Substituir as artes de logo completa, ícone e marca d'água pelos SVGs fornecidos em `marca-nova/`.
- Atualizar o nome configurado da marca de Órbita para Vertex, refletindo-o nos textos que já usam essa configuração, inclusive certificado e rodapé do PDF.
- Manter a seleção entre logo completa e ícone conforme o estado da barra lateral e a marca d'água centralizada, discreta e aplicada a todas as páginas do PDF.
- Preservar os componentes de interface e a rotina de geração de PDF sem referências diretas às artes da marca.

## Capabilities

### New Capabilities

- Nenhuma.

### Modified Capabilities

- `brand-identity`: especificar a identidade Vertex e as três artes que devem ser servidas pelo módulo central de marca.
- `pdf-watermark`: exigir que os PDFs exportados usem a arte de marca d'água Vertex e exibam Vertex no rodapé por meio da configuração da marca.

## Impact

- Assets em `src/assets/brand/` e valores em `src/brand/brand.ts`.
- Interface da sidebar, tela inicial e certificado, que já consomem `brand` indiretamente ou diretamente.
- PDFs gerados no navegador, incluindo sua marca d'água e rodapé.
- Sem alterações de rotas, APIs, dependências ou componentes de interface.
