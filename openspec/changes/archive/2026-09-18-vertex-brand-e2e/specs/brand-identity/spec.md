# brand-identity

## MODIFIED Requirements

### Requirement: Ponto unico de configuracao da marca

O sistema SHALL concentrar nome, logo completa, icone e arte da marca d'agua em um unico modulo de configuracao, adotando a identidade visual da marca "Vertex" e a assinatura "TECNOLOGIA". Componentes de interface e a geracao de PDF MUST ler a marca desse modulo e MUST NOT referenciar arquivos de imagem de marca diretamente.

#### Scenario: Troca da marca

- **WHEN** as artes e os valores do modulo de configuracao da marca sao substituidos
- **THEN** a nova marca passa a ser exibida na barra lateral e na marca d'agua do PDF sem alteracao em componentes de interface ou na rotina de geracao do PDF
