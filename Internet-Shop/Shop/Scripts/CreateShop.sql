use master;
go

/*drop database Shop;
go*/

create database Shop;
go

use Shop;
go

--Таблица сообщений
create table Cars (
	Id int IDENTITY,
	Name text		  --название		
);

insert into Cars values
('Audi'),
('Chevrolet'),
('Volkswagen');