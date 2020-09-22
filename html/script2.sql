
-- uuid generados con UUID_TO_BIN(UUID())
-- datos para testing
-- user_id      0x0be8add0fc6f11eab8920242ac120008
-- cart_id      0x5b456bc2fc6f11eab8920242ac120008
-- order_id     0x98e91635fc7011eab8920242ac120008
-- payment_id   0x7e4ee616fc7111eab8920242ac120008
-- products
--    0xd7651958fc7111eab8920242ac120008
--    0xe621216bfc7111eab8920242ac120008
-- cart_items
--    0x324c2998fc7211eab8920242ac120008
--    0x37be4a4ffc7211eab8920242ac120008



-- DB 1
-- CREATE DATABASE db1;

CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(30) NOT NULL,
    created_at timestamp NULL,
    updated_at timestamp NULL,
    deleted_at timestamp NULL
);

INSERT INTO users (id, username, email, created_at, updated_at, deleted_at)
VALUES 
    ('0x0be8add0fc6f11eab8920242ac120008', 'Brian', 'brayad@gmail.com', NOW(), NOW(), NOW())
;


-- DB 2
-- CREATE DATABASE db2

CREATE TABLE orders (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36),
    cart_id VARCHAR(36),
    total_amount SERIAL,
    create_at TIMESTAMP NULL,
    update_at TIMESTAMP NULL,
    delete_at TIMESTAMP NULL
);

INSERT INTO orders 
VALUES
    ('0x98e91635fc7011eab8920242ac120008', '0x0be8add0fc6f11eab8920242ac120008', '0x5b456bc2fc6f11eab8920242ac120008', 100000, NOW(), NOW(), NOW())
;



-- DB 3
-- CREATE DATABASE db3

CREATE TABLE products (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(50),
    sku VARCHAR(255),
    description TEXT,
    price INT,
    create_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    delete_at TIMESTAMP NULL
);

INSERT INTO products
VALUES 
    ('0xd7651958fc7111eab8920242ac120008', "Bolso Playero", "BOLPLA001", "Bolso grandioso para dama y caballero", 30000, NOW(), NOW(), NOW()),
    ('0xe621216bfc7111eab8920242ac120008', "MacBook Pro 16 i9 32 GB RAM", "MACPRO001", "Macbook 2020 con pantalla retina", 2500000, NOW(), NOW(), NOW())
;



-- DB 4
-- CREATE DATABASE db4

CREATE TABLE payments (
    id VARCHAR(36) PRIMARY KEY,
    order_id VARCHAR(50),
    kind VARCHAR(255),
    method VARCHAR(255),
    external_reference_id TEXT,
    status VARCHAR(255),
    create_at TIMESTAMP NULL,
    update_at TIMESTAMP NULL,
    delete_at TIMESTAMP NULL
);

INSERT INTO payments
VALUES 
    ('0x7e4ee616fc7111eab8920242ac120008', '0x98e91635fc7011eab8920242ac120008', 'KIND A', 'CREDIT CARD', 'EXTERNAL_ID_001', 'Approved', NOW(), NOW(), NOW())
;


-- DB 5
-- CREATE DATABASE db5

CREATE TABLE carts (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36),
    order_id VARCHAR(36),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE cart_items (
    id VARCHAR(36) PRIMARY KEY,
    cart_id VARCHAR(36),
    product_id VARCHAR(36),
    quantity INT,
    create_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

ALTER TABLE cart_items
ADD CONSTRAINT FK_carts_with_cart_items
FOREIGN KEY (cart_id)
REFERENCES carts(id);



INSERT INTO carts
VALUES 
    ('0x5b456bc2fc6f11eab8920242ac120008', '0x0be8add0fc6f11eab8920242ac120008', '0x98e91635fc7011eab8920242ac120008', NOW(), NOW(), NOW())
;


INSERT INTO cart_items
VALUES 
    ('0x324c2998fc7211eab8920242ac120008', '0x5b456bc2fc6f11eab8920242ac120008', '0xd7651958fc7111eab8920242ac120008', 2, NOW(), NOW(), NOW()),
    ('0x37be4a4ffc7211eab8920242ac120008', '0x5b456bc2fc6f11eab8920242ac120008', '0xe621216bfc7111eab8920242ac120008', 1, NOW(), NOW(), NOW())
;






