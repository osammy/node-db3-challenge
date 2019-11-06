# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
`SELECT p.ProductName, c.CategoryName 
FROM  Products as p
JOIN Categories as c
ON p.categoryid = c.categoryid`

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
`SELECT o.OrderID, s.ShipperName
FROM Orders as o
JOIN Shippers as s
ON o.ShipperId = s.ShipperId
WHERE o.OrderDate < '1997-01-09';`

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
`SELECT p.ProductName, o.quantity
FROM OrderDetails as o
JOIN Products as p
ON o.ProductID = p.ProductID
WHERE OrderID = 10251
ORDER BY p.ProductName;`

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
`SELECT o.OrderID, c.CustomerName, e.LastName
FROM Orders AS o
JOIN Customers AS c
JOIN Employees AS e
ON (o.CustomerID =  c.CustomerID ) AND (o.EmployeeID = e.EmployeeID);`

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
`SELECT c.CategoryName, COUNT(c.CategoryName) as Count
FROM Categories as c
JOIN Products AS p
Group by c.CategoryName`

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
`SELECT o.OrderID, COUNT(o.OrderID) AS ItemCount
FROM ORDERS AS o
GROUP BY o.OrderID`