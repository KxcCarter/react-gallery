
-- creatdb react_gallery

CREATE TABLE gallery
(
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(240) NOT NULL,
    "likes" INT
);

INSERT INTO gallery
    ("path", "description")
VALUES
    ('images/goat_small.jpg',
        'Photo of a goat taken at Glacier National Park.');