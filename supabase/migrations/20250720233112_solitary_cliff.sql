/*
  # Add Sample Data for Natheetorn Marketplace

  1. Sample Categories
    - Electronics
    - Gaming
    - Fashion
    - Home & Garden
    - Sports

  2. Sample Products
    - Various products across different categories
    - Realistic prices and descriptions
    - Stock quantities

  3. Sample Data
    - Ready-to-use marketplace content
    - Professional product descriptions
    - Proper categorization
*/

-- Insert sample categories
INSERT INTO categories (name, description, image_url) VALUES
('Electronics', 'Latest gadgets and electronic devices', 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'),
('Gaming', 'Gaming consoles, accessories, and games', 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'),
('Fashion', 'Trendy clothing and accessories', 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'),
('Home & Garden', 'Home improvement and garden supplies', 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'),
('Sports', 'Sports equipment and fitness gear', 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg');

-- Insert sample products
INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Wireless Bluetooth Headphones',
  'Premium quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
  299.99,
  'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
  c.id,
  25,
  4.8,
  156
FROM categories c WHERE c.name = 'Electronics';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Gaming Mechanical Keyboard',
  'RGB backlit mechanical keyboard with blue switches. Designed for gaming enthusiasts and programmers.',
  149.99,
  'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
  c.id,
  40,
  4.6,
  89
FROM categories c WHERE c.name = 'Gaming';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Smartphone 128GB',
  'Latest flagship smartphone with advanced camera system, 5G connectivity, and all-day battery life.',
  899.99,
  'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
  c.id,
  15,
  4.9,
  234
FROM categories c WHERE c.name = 'Electronics';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Designer Sneakers',
  'Limited edition designer sneakers with premium materials and comfortable fit. Perfect for casual and athletic wear.',
  199.99,
  'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
  c.id,
  30,
  4.7,
  67
FROM categories c WHERE c.name = 'Fashion';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Gaming Console',
  'Next-generation gaming console with 4K gaming, ray tracing, and exclusive game library.',
  499.99,
  'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
  c.id,
  12,
  4.9,
  312
FROM categories c WHERE c.name = 'Gaming';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Smart Watch',
  'Advanced fitness tracking smartwatch with heart rate monitoring, GPS, and 7-day battery life.',
  349.99,
  'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
  c.id,
  20,
  4.5,
  145
FROM categories c WHERE c.name = 'Electronics';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Premium Coffee Maker',
  'Professional-grade coffee maker with programmable settings and thermal carafe. Perfect for coffee enthusiasts.',
  179.99,
  'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
  c.id,
  18,
  4.4,
  78
FROM categories c WHERE c.name = 'Home & Garden';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Yoga Mat Set',
  'Premium eco-friendly yoga mat with carrying strap and alignment guides. Perfect for home workouts.',
  59.99,
  'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
  c.id,
  50,
  4.6,
  92
FROM categories c WHERE c.name = 'Sports';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Wireless Earbuds',
  'True wireless earbuds with active noise cancellation and wireless charging case.',
  129.99,
  'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg',
  c.id,
  35,
  4.3,
  156
FROM categories c WHERE c.name = 'Electronics';

INSERT INTO products (name, description, price, image_url, category_id, stock_quantity, rating, review_count) 
SELECT 
  'Casual T-Shirt',
  'Comfortable cotton t-shirt with modern fit. Available in multiple colors and sizes.',
  29.99,
  'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
  c.id,
  100,
  4.2,
  45
FROM categories c WHERE c.name = 'Fashion';