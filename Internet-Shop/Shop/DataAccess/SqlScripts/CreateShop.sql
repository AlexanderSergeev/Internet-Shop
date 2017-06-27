use master;
go

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
	Id int identity primary key,    
	CarId int,	
	
	foreign key (CarId) references Cars(Id) on update cascade	
);

create table WishList (
	Id int identity primary key,    
	CarId int,
	
	foreign key (CarId) references Cars(Id) on update cascade		
);
