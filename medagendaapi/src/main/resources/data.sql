INSERT INTO usuario (nome_usuario, senha, email, telefone, cpf, ativo, papel)
VALUES 
('admin', '$2a$12$ik9XB33QIybr78opj2sTLuY6Hl3kyzienWHx/PsnWfaQ7YzhEKvMi', 'admin@email.com', '(11) 99999-9999', '12345678901', true, 'ROLE_ADMIN'),
('admin2', '$2a$12$IU4yMkD4B8cKVY0G7I8Ar.dKukXL8gPeB/hT2zac4FQRG7DXNTiYu', 'admin2@email.com', '(11) 99999-9999', '12345678902', true, 'ROLE_ADMIN'),
('daricelio', '$2a$12$QpqF1obzwO/PUSjQDKr9/OlYL2FpabbImda0eOF.hOl8iBNZE2cwq', 'daricelio@medicos.com', '(11) 91111-1111', '11122233344', true, 'ROLE_MEDICO'),
('claudionor', '$2a$12$QpqF1obzwO/PUSjQDKr9/OlYL2FpabbImda0eOF.hOl8iBNZE2cwq', 'claudio@clinicaviva.com', '(21) 92222-2222', '22233344455', true, 'ROLE_MEDICO'),
('catarina', '$2a$12$QpqF1obzwO/PUSjQDKr9/OlYL2FpabbImda0eOF.hOl8iBNZE2cwq', 'catarina@hospital.net', '(31) 93333-3333', '33344455566', true, 'ROLE_MEDICO'),
('luiz', '$2a$12$QpqF1obzwO/PUSjQDKr9/OlYL2FpabbImda0eOF.hOl8iBNZE2cwq', 'luiz@saudevida.com', '(41) 94444-4444', '44455566677', true, 'ROLE_MEDICO'),
('john', '$2a$12$QpqF1obzwO/PUSjQDKr9/OlYL2FpabbImda0eOF.hOl8iBNZE2cwq', 'john@clinicageral.com', '(51) 95555-5555', '55566677788', true, 'ROLE_MEDICO');

INSERT INTO usuario (nome_usuario, senha, email, telefone, cpf, ativo, papel)
VALUES ('Ana Beatriz da Silva','$2a$12$lM3WC12pRb7KwGaK6D01UeOmp9PxOgP1WSd4nFILqe2T5IBQfxhbG', 'ana.silva@example.com','(11) 91234-5678','12345678900', true,'ROLE_ATENDENTE'
);

INSERT INTO especialidade (id, nome)
VALUES (1, 'Cardiologia');

INSERT INTO especialidade (id, nome)
VALUES (2, 'Pediatria');

INSERT INTO especialidade (id, nome)
VALUES (3, 'Ortopedia');

INSERT INTO especialidade (id, nome)
VALUES (4, 'Dermatologia');

INSERT INTO especialidade (id, nome)
VALUES (5, 'Neurologia');

INSERT INTO medico (nome_completo, registro_conselho, especialidade_id, cpf, email, telefone, cep, estado, bairro, endereco)
VALUES 
('Dr. Daricélio Augustus', 'CRM-11111', 1, '11122233344', 'daricelio@medicos.com', '(11) 91111-1111', '04567-000', 'SP', 'Itaim Bibi', 'Rua João Cachoeira, 500'),
('Dr. Claudionor Ferreira', 'CRM-22222', 2, '22233344455', 'claudio@clinicaviva.com', '(21) 92222-2222', '22290-240', 'RJ', 'Botafogo', 'Rua São Clemente, 300'),
('Dra. Catarina Costa', 'CRM-33333', 3, '33344455566', 'catarina@hospital.net', '(31) 93333-3333', '30150-370', 'MG', 'Uberlândia', 'Rua Piauí, 720'),
('Dr. Luiz Matos', 'CRM-44444', 4, '44455566677', 'luiz@saudevida.com', '(41) 94444-4444', '80410-170', 'PR', 'Batel', 'Av. Vicente Machado, 1200'),
('Dr. John Alves Ferreira', 'CRM-55555', 5, '55566677788', 'john@clinicageral.com', '(51) 95555-5555', '90480-002', 'RS', 'Moinhos de Vento', 'Rua 24 de Outubro, 1000');

INSERT INTO paciente (nome_completo, cpf, email, estado, endereco, bairro, cep, telefone, telefone_emergencia, data_nascimento, grupo_sanguineo, sexo)
VALUES 
('André Santana', '10101010101', 'andre@gmail.com', 'SP', 'Rua das Acácias, 200', 'Jardins', '01423-000', '(11) 98888-1111', '(11) 97777-2222', '1993-07-10', 'O_NEGATIVO', 'M'),
('Dayan Alves', '20202020202', 'dayan@bol.com', 'RJ', 'Av. Atlântica, 50', 'Copacabana', '22010-000', '(21) 98888-3333', '(21) 97777-4444', '1980-12-01', 'A_POSITIVO', 'M'),
('Gleice Beatriz', '30303030303', 'gleice@yahoo.com', 'MG', 'Rua Timbiras, 800', 'Barro Preto', '30140-061', '(31) 98888-5555', '(31) 97777-6666', '2000-02-28', 'B_NEGATIVO', 'F'),
('Rafael Alves', '40404040404', 'rafael@outlook.com', 'PR', 'Rua XV de Novembro, 300', 'Centro', '80020-310', '(41) 98888-7777', '(41) 97777-8888', '1987-09-18', 'AB_POSITIVO', 'M'),
('Mirele Almeida', '50505050505', 'mirele@gmail.com', 'RS', 'Av. Ipiranga, 4567', 'Partenon', '90610-000', '(51) 98888-9999', '(51) 97777-0000', '1999-04-05', 'O_POSITIVO', 'F');

INSERT INTO atendimento (data_de_atendimento, horario_de_atendimento, medico_id, paciente_id, status, id_pai, tipo_de_atendimento)
VALUES
('2025-04-05', '09:00:00', 1, 1, 'CHEGADA', NULL, 'CONSULTA'),
('2025-04-06', '10:30:00', 2, 2, 'AGENDADO', NULL, 'EXAME'),
('2025-04-06', '13:00:00', 3, 3, 'ENCERRADO', NULL, 'RETORNO'),
('2025-04-07', '15:15:00', 4, 4, 'AGENDADO', NULL, 'CONSULTA'),
('2025-04-07', '16:45:00', 5, 5, 'CANCELADO', NULL, 'PERICIA'),
('2025-04-08', '08:00:00', 1, 3, 'AGENDADO', NULL, 'EXAME'),
('2025-04-09', '10:00:00', 2, 5, 'ENCERRADO', NULL, 'CONSULTA'),
('2025-04-10', '14:30:00', 3, 1, 'CHEGADA', NULL, 'RETORNO'),
('2025-04-10', '16:00:00', 4, 2, 'AGENDADO', NULL, 'PERICIA'),
('2025-04-11', '11:15:00', 5, 3, 'AGENDADO', NULL, 'EXAME');


INSERT INTO prontuario 
(atendimento_id, problema_relatado, descricao, prescricao, 
 tem_alergia, qual_alergia, 
 tem_remedio, qual_remedio, 
 tem_doenca_cognitiva, qual_doenca_cognitiva) 
VALUES 
(1, 'Dores de cabeça frequentes.', 'Paciente relatou cefaleias tensionais. Sem sinais de enxaqueca.', 'Prescrito paracetamol e hidratação.', TRUE, 'Dipirona', TRUE, 'Paracetamol', FALSE, NULL),
(2, 'Check-up anual.', 'Exames laboratoriais solicitados.', 'Nenhuma prescrição. Aguardando resultados.', FALSE, NULL, FALSE, NULL, FALSE, NULL),
(3, 'Retorno após tratamento de gastrite.', 'Paciente melhorou após uso de omeprazol.', 'Manter alimentação leve por 30 dias.', FALSE, NULL, TRUE, 'Omeprazol', FALSE, NULL),
(4, 'Tosse persistente há 10 dias.', 'Suspeita de bronquite leve. Ausência de febre.', 'Prescrito xarope expectorante.', TRUE, 'Lactose', FALSE, NULL, FALSE, NULL),
(5, 'Consulta cancelada pelo paciente.', 'Atendimento não realizado.', NULL, FALSE, NULL, FALSE, NULL, FALSE, NULL);

INSERT INTO atendente (nome_completo, cpf, telefone, especialidade_atendente, email, cep, bairro, estado, endereco)
VALUES ('Ana Beatriz da Silva', '123.456.789-00', '(11) 91234-5678', 'SECRETARIO', 'ana.silva@example.com', '01234-567', 'Centro', 'SP', 'Rua das Flores, 123');

-- Prontuário para atendimento 6
INSERT INTO prontuario 
(atendimento_id, problema_relatado, descricao, prescricao, 
 tem_alergia, qual_alergia, tem_remedio, qual_remedio, 
 tem_doenca_cognitiva, qual_doenca_cognitiva) 
VALUES 
(6, 'Exame de rotina solicitado pela escola.', 'Paciente assintomático. Sem histórico clínico relevante.', 'Nenhuma prescrição.', FALSE, NULL, FALSE, NULL, FALSE, NULL);

-- Prontuário para atendimento 7
INSERT INTO prontuario 
(atendimento_id, problema_relatado, descricao, prescricao, 
 tem_alergia, qual_alergia, tem_remedio, qual_remedio, 
 tem_doenca_cognitiva, qual_doenca_cognitiva) 
VALUES 
(7, 'Dores nas costas após queda.', 'Exame de raio-X não identificou fraturas.', 'Recomendado repouso e analgésico.', FALSE, NULL, TRUE, 'Ibuprofeno', FALSE, NULL);

-- Prontuário para atendimento 8
INSERT INTO prontuario 
(atendimento_id, problema_relatado, descricao, prescricao, 
 tem_alergia, qual_alergia, tem_remedio, qual_remedio, 
 tem_doenca_cognitiva, qual_doenca_cognitiva) 
VALUES 
(8, 'Revisão pós cirurgia de joelho.', 'Recuperação dentro do esperado. Sem dor.', 'Iniciar fisioterapia.', FALSE, NULL, FALSE, NULL, FALSE, NULL);

-- Prontuário para atendimento 9
INSERT INTO prontuario 
(atendimento_id, problema_relatado, descricao, prescricao, 
 tem_alergia, qual_alergia, tem_remedio, qual_remedio, 
 tem_doenca_cognitiva, qual_doenca_cognitiva) 
VALUES 
(9, 'Avaliação médica solicitada pela empresa.', 'Paciente saudável, sem restrições.', 'Laudo emitido: Apto para trabalho.', FALSE, NULL, FALSE, NULL, FALSE, NULL);

-- Prontuário para atendimento 10
INSERT INTO prontuario 
(atendimento_id, problema_relatado, descricao, prescricao, 
 tem_alergia, qual_alergia, tem_remedio, qual_remedio, 
 tem_doenca_cognitiva, qual_doenca_cognitiva) 
VALUES 
(10, 'Exames pré-operatórios.', 'Coleta de sangue, ECG e raio-X realizados.', 'Aguardar resultados laboratoriais.', FALSE, NULL, FALSE, NULL, FALSE, NULL);
