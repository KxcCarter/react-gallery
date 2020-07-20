
-- creatdb react_gallery

CREATE TABLE gallery
(
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "title" VARCHAR(70) NOT NULL DEFAULT 'Nothing to say!',
    "description" VARCHAR(240) NOT NULL,
    "likes" INT DEFAULT 0
);

INSERT INTO gallery
    ("path", "title", "description")
VALUES
    ('images/goat_small.jpg', 'I am goat.', 'Photo of a goat taken at Glacier National Park.'),
    ('images/memeCat_1.jpg', 'I am cat', 'Sad boi.'),
    ('images/memeCat_2.jpg', 'memeCat 2!', 'Good boi.'),
    ('images/memeCat_3.jpg', 'memeCat 3!', 'Mad boi.'),
    ('images/memeCat_5.jpg', 'NiCATless Cage', 'I am going to steal the Declaration of Independence.');