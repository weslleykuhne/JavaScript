create database agencia_viagens;
use agencia_viagens;

create table destinos(
id int primary key auto_increment,
nome varchar(100) not null,
pais varchar(100) not null
);

create table clientes(
idCli int primary key auto_increment,
nomeCLi varchar(100) not null,
Email varchar(100),
telefone varchar(100)
);

create table reservas(
idRes int primary key auto_increment,
idCliente int not null,
idDestino int not null,
foreign key(IdCliente) references clientes(idCli),
foreign key(IdDestino) references destinos(id),
dataRe date not null
);

insert into destinos(nome, pais)
values ('Paris', 'França'),
('Madrid', 'Espanha'),
('Rio de Janeiro', 'Brasil');

insert into clientes(nomeCLi, Email, telefone)
values('Gedian', 'gediangabrielf@gmail.com', '47992165428'),
('Kauã', 'kauamiguel@gmail.com', '47992180654'),
('Weslley', 'weslleykuhne@gmail.com', '992544034');

INSERT INTO reservas (idCliente, idDestino, dataRe)
VALUES (1, 1, '2026-07-15'),
(2, 3, '2026-08-20'), 
(3, 2, '2026-09-10'), 
(1, 3, '2026-10-05');

select * from destinos;