
-- creatdb react_gallery

CREATE TABLE gallery
(
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(240) NOT NULL,
    "likes" INT DEFAULT 0
);

INSERT INTO gallery
    ("path", "description")
VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
    ('images/memeCat_1.jpg', 'Sad boi.'),
    ('images/memeCat_2.jpg', 'Good boi.'),
    ('images/memeCat_3.jpg', 'Mad boi.'),
    ('images/memeCat_5.jpg', 'I am going to steal the Declaration of Independence.');