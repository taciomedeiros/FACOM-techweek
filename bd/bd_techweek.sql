
CREATE TABLE pessoa(
	NOME VARCHAR(50),
	CPF VARCHAR(10),
	EMAIL VARCHAR(50),
	
	CHECK_TIPO_PAGAMENTO BOOLEAN, /* 0 - ESTUDANTE, 1 - EXTERNO */
	CHECK_CAMISA BOOLEAN, /* 0 - NÃO QUER A CAMISA, 1 - QUER A CAMISA */
	TAMANHO_CAMISA VARCHAR(2) CHECK('PP','P','M','G','GG','XG')),
	TIPO_CADASTRO VARCHAR(15) CHECK(TIPO_CADASTRO IN ('Estudante','Professor','Profissional')),
	TIPO_ESTUDANTE VARCHAR(12) CHECK(TIPO_ESTUDANTE IN ('Graduacao','Posgraduacao')),
	
	LOGRADOURO VARCHAR(),
	NOME_LOGRADOURO VARCHAR(),
	BAIRRO VARCHAR(),
	NUMERO INT,
	COMPLEMENTO VARCHAR(),

	PRIMARY KEY(CPF)
);

CREATE TABLE cursos_pessoa(
	CPF char(10),
	CURSO char(50),

	PRIMARY KEY(CPF, CURSO),
	FOREIGN KEY (CPF) REFERENCES pessoa (CPF)
);