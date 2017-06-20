use master;
go

/*drop database Shop;
go*/

create database Shop;
go

use Shop;
go

create table Cars (
	Id int identity,    
	Name text,			
	Price money,
	VehiclePower int,
	MaximumSpeed int		
);

insert into Cars values
('Audi', 1020.99, 300, 440),
('Chevrolet', 999.787, 250, 300),
('Volkswagen', 3600, 300, 500);