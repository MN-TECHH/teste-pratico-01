# Spec Delta

## MODIFIED Requirements

### Requirement: Marca d'agua do projeto no PDF

Todo PDF gerado SHALL receber a arte de marca d'agua definida na configuracao da marca, centralizada na pagina, com opacidade baixa que nao prejudique a leitura do conteudo. Apos a migracao, essa arte SHALL ser a marca d'agua monocromatica da Vertex e a opacidade MUST permanecer no maximo em 0,15.

#### Scenario: Marca d'agua em todas as paginas

- **WHEN** o documento gerado possui mais de uma pagina
- **THEN** a marca d'agua aparece em todas as paginas do documento

#### Scenario: Opacidade baixa

- **WHEN** a marca d'agua e aplicada
- **THEN** sua opacidade e no maximo 0,15, permanecendo visivel sem obstruir o texto sobreposto

#### Scenario: Marca d'agua acompanha a marca configurada

- **WHEN** a arte de marca d'agua definida na configuracao da marca e substituida
- **THEN** os PDFs passam a ser gerados com a nova arte, sem alteracao na rotina de geracao

#### Scenario: Marca d'agua Vertex no PDF

- **WHEN** o usuario gera um PDF apos a migracao de marca
- **THEN** o documento recebe a arte de marca d'agua da Vertex em opacidade baixa
