use master;
go

/*drop database Shop;
go*/

create database Shop;
go

use Shop;
go

create table Cars (
	Id int identity primary key,    
	Name text,			
	Price money,
	VehiclePower int,
	MaximumSpeed int		
);

create table Cart (
	IdCartElem int identity primary key,    
	IdCar int,	
	
	foreign key (IdCar) references Cars(Id) on update cascade	
);

create table WishList (
	IdWishListElem int identity primary key,    
	IdCar int,
	
	foreign key (IdCar) references Cars(Id) on update cascade		
);

insert into Cars values
('Audi', 1020.99, 300, 440),
('Chevrolet', 999.787, 250, 300),
('Volkswagen', 3600, 300, 500);

insert into Cart values
(1);

insert into WishList values
(2);