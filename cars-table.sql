create database carhub;
use carhub;
CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(255),
    model VARCHAR(255),
    year INT,
    fuel VARCHAR(255),
    gearbox VARCHAR(255),
    rental_charge DECIMAL(10, 2),
    engine_size INT,
    image_url VARCHAR(255)
);

INSERT INTO cars (make, model, year, fuel, gearbox, rental_charge, engine_size, image_url) VALUES
('Renault', 'Duster', 2016, 'Petrol / Diesel', 'Manual', 7999.00, 1500, 'images/duster.jpg'),
('Ford', 'Ecosport', 2015, 'Petrol / Diesel', 'Manual', 5999.00, 1500, 'images/ecosport.jpg'),
('Maruti', 'Baleno', 2018, 'Petrol', 'Manual', 4499.00, 1200, 'images/baleno.jpg'),
('Maruti', 'Brezza', 2018, 'Diesel', 'Manual / Automatic', 5999.00, 1500, 'images/brezza.jpg'),
('Tata', 'Nexon', 2017, 'Petrol / Diesel', 'Manual', 4999.00, 1500, 'images/nexon.jpg'),
('Mahindra', 'XUV500', 2018, 'Diesel', 'Manual / Automatic', 11999.00, 2200, 'images/xuv500.jpg'),
('Tata', 'Altroz', 2019, 'Petrol / Diesel', 'Manual', 4499.00, 1500, 'images/altroz.jpg'), -- Adjust rental_charge and engine_size
('Toyota', 'Innova', 2017, 'Diesel', 'Manual / Automatic', 11999.00, 2400, 'images/innova.jpg'), -- Adjust rental_charge and engine_size
('Hyundai', 'i20', 2016, 'Petrol', 'Manual', 4499.00, 1200, 'images/i20.jpg'), -- Adjust rental_charge and engine_size
('Maruti', 'Dzire', 2019, 'Petrol / Diesel', 'Manual', 5999.00, 1200, 'images/dzire.jpg'), -- Adjust rental_charge and engine_size
('Maruti', 'Ertiga', 2019, 'Petrol / Diesel', 'Manual', 8999.00, 1500, 'images/ertiga.jpg'), -- Adjust rental_charge and engine_size
('Hyundai', 'Creta', 2016, 'Petrol', 'Manual / Automatic', 5999.00, 1600, 'images/creta.jpg'); -- Adjust rental_charge and engine_size
