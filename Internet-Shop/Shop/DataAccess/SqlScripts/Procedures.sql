use Shop;
go

create procedure getCart
as begin
		execute('select Cars.Id, Cars.Picture, Cars.Name, Cars.Price, Cars.VehiclePower, Cars.MaximumSpeed from Cart join Cars on (Cars.Id=Cart.CarId)')
	return
end;
go

create procedure getWishList
as begin
		execute('select Cars.Id, Cars.Picture, Cars.Name, Cars.Price, Cars.VehiclePower, Cars.MaximumSpeed from WishList join Cars on (Cars.Id=WishList.CarId)')
	return
end;

