# Design

## Context

O projeto centraliza os dados e os caminhos das artes em `src/brand/brand.ts`; `BrandLogo` e a geracao de PDF apenas consomem esse modulo. As artes de entrada em `marca-nova/` mantem os mesmos viewBoxes das artes atuais: 240 x 64 para logo completa e marca d'agua, e 64 x 64 para o icone. A rotina do PDF deriva a altura da marca d'agua da razao do SVG e requer recursos que possam ser rasterizados localmente em canvas.

## Goals / Non-Goals

**Goals:**

- Aplicar a identidade Vertex em todos os pontos que consomem a configuracao central de marca.
- Preservar os contratos de layout da sidebar e de posicionamento e legibilidade da marca d'agua no PDF.
- Manter a troca limitada aos assets e aos valores de configuracao da marca.

**Non-Goals:**

- Redesenhar componentes, alterar rotas ou modificar o fluxo de geracao de PDF.
- Mudar as dimensoes, a rotacao ou aumentar a opacidade da marca d'agua.
- Usar recursos externos ou editar as artes fornecidas.

## Decisions

### Substituir os tres SVGs nos destinos de assets existentes

As artes de `marca-nova/` serao copiadas para os tres nomes ja importados em `src/assets/brand/`. Essa escolha conserva os imports estaticos e faz com que sidebar e PDF recebam a nova identidade por meio do modulo existente.

Alternativa considerada: apontar os imports para `marca-nova/`. Rejeitada porque essa pasta e material de entrada, nao faz parte dos assets entregues pela aplicacao.

### Atualizar somente os valores de identidade em `brand.ts`

O nome passara a Vertex e a assinatura/tagline sera ajustada para a identidade fornecida, mantendo os parametros atuais da marca d'agua, em especial opacidade de 0,08. Assim, os textos da tela inicial, certificado e rodape do PDF atualizam-se pelo mesmo contrato.

Alternativa considerada: editar cada tela e o rodape individualmente. Rejeitada porque duplicaria a fonte de verdade e violaria a separacao existente.

### Preservar componentes e gerador de PDF

Nenhuma mudanca e necessaria em `BrandLogo.tsx` ou `generatePdf.ts`: as proporcoes fornecidas sao compativeis com o CSS e o calculo de altura ja existentes, e a marca d'agua Vertex nao usa recursos externos.

Alternativa considerada: ajustar dimensoes ou rasterizacao. Rejeitada porque nao ha incompatibilidade observada e isso ampliaria desnecessariamente o escopo.

## Risks / Trade-offs

- [Arte errada ou ausente no destino] → conferir os tres nomes e o conteudo Vertex antes da validacao visual.
- [Marca d'agua pouco legivel ou excessiva] → preservar a arte monocromatica fornecida e a opacidade atual de 0,08, abaixo do limite de 0,15.
- [Texto residual de Órbita] → validar tela inicial, certificado e rodape do PDF, que leem `brand.name`.

## Migration Plan

1. Copiar as tres artes fornecidas para `src/assets/brand/`, substituindo os arquivos homonimos.
2. Alterar a configuracao central para Vertex e atualizar a tagline de acordo com a identidade fornecida.
3. Executar verificacoes de tipos e build; inspecionar a sidebar nos dois estados e gerar PDFs de Relatorio e Certificado.
4. Em caso de regressao, restaurar os tres SVGs e os valores anteriores de `brand.ts` como uma unica reversao da identidade.
