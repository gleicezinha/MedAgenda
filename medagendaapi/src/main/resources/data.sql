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

-- Inserir Pacientes
INSERT INTO usuario (nome_usuario, senha, email, telefone, cpf, ativo, papel, data_nascimento, grupo_sanguineo, sexo, cep, endereco, cidade, estado)
VALUES
('Joao Silva', 'senha123', 'joao.silva@email.com', '11987654321', '12345678901', TRUE, 'PACIENTE', '1990-01-15', 'O+', 'MASCULINO', '12345-678', 'Rua A, 123', 'São Paulo', 'SP'),
('Maria Oliveira', 'senha123', 'maria.oliveira@email.com', '11987654322', '22345678902', TRUE, 'PACIENTE', '1985-05-25', 'A-', 'FEMININO', '23456-789', 'Rua B, 456', 'São Paulo', 'SP'),
('Carlos Pereira', 'senha123', 'carlos.pereira@email.com', '11987654323', '32345678903', TRUE, 'PACIENTE', '1992-07-10', 'B+', 'MASCULINO', '34567-890', 'Rua C, 789', 'São Paulo', 'SP'),
('Ana Santos', 'senha123', 'ana.santos@email.com', '11987654324', '42345678904', TRUE, 'PACIENTE', '1998-03-30', 'O-', 'FEMININO', '45678-901', 'Rua D, 101', 'São Paulo', 'SP'),
('Ricardo Costa', 'senha123', 'ricardo.costa@email.com', '11987654325', '52345678905', TRUE, 'PACIENTE', '1980-11-05', 'AB+', 'MASCULINO', '56789-012', 'Rua E, 202', 'São Paulo', 'SP'),
('Juliana Lima', 'senha123', 'juliana.lima@email.com', '11987654326', '62345678906', TRUE, 'PACIENTE', '1995-09-12', 'A+', 'FEMININO', '67890-123', 'Rua F, 303', 'São Paulo', 'SP');

-- Inserir Atendentes
INSERT INTO usuario (nome_usuario, senha, email, telefone, cpf, ativo, papel, setor, cep, endereco, cidade, estado)
VALUES
('Lucas Souza', 'senha123', 'lucas.souza@email.com', '11987654327', '72345678907', TRUE, 'ATENDENTE', 'Recepção', '78901-234', 'Rua G, 404', 'São Paulo', 'SP'),
('Carla Almeida', 'senha123', 'carla.almeida@email.com', '11987654328', '82345678908', TRUE, 'ATENDENTE', 'Urgência', '89012-345', 'Rua H, 505', 'São Paulo', 'SP');

-- Inserir Médicos
INSERT INTO usuario (nome_usuario, senha, email, telefone, cpf, ativo, papel, registro_conselho, especialidade_id, cep, endereco, cidade, estado)
VALUES
('Dr. Paulo Oliveira', 'senha123', 'paulo.oliveira@email.com', '11987654329', '92345678909', TRUE, 'MEDICO', '12345-SP', 1, '90123-456', 'Rua I, 606', 'São Paulo', 'SP'),
('Dra. Fernanda Costa', 'senha123', 'fernanda.costa@email.com', '11987654330', '10234567890', TRUE, 'MEDICO', '67890-SP', 2, '01234-567', 'Rua J, 707', 'São Paulo', 'SP');
