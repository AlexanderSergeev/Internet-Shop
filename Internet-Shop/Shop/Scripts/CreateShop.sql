use master;
go

/*drop database Shop;
go*/

create database Shop;
go

use Shop;
go

--Таблица машин
create table Cars (
	Id int identity,    
	Name text,			
	Price money		
);

insert into Cars values
('Audi', 120.99),
('Chevrolet', 240.787),
('Volkswagen', 360);