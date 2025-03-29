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
('Dra. Maria Oliveira', 'CRM-12345', 1, '98765432100', 'maria@hospital.com', '(11) 95555-5555', '01111-111', 'SP', 'Centro', 'Av. Paulista, 1000');

INSERT INTO paciente (nome_completo, cpf, email, estado, endereco, bairro, cep, telefone, telefone_emergencia, data_nascimento, grupo_sanguineo, sexo)
VALUES 
('João da Silva', '12345678900', 'joao@email.com', 'SP', 'Rua das Flores, 123', 'Centro', '01010-000', '(11) 99999-9999', '(11) 98888-8888', '1985-06-15', 'O_POSITIVO', 'M');

INSERT INTO atendimento (data_de_atendimento, horario_de_atendimento, medico_id, paciente_id, status)
VALUES 
('2024-04-05', '14:30:00', 1, 1, 'AGENDADO');


