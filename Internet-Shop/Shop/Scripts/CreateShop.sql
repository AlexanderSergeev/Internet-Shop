use master;
go

/*drop database Shop;
go*/

create database Shop;
go

use Shop;
go

--������� ���������
create table Cars (
	Id int IDENTITY,
	Name text		  --��������		
);

insert into Cars values
('Audi'),
('Chevrolet'),
('Volkswagen');