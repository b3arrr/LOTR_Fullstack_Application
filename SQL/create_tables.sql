
DROP TABLE IF EXISTS public."character" CASCADE;
DROP TABLE IF EXISTS public."equipment" CASCADE;

CREATE TABLE character
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    race VARCHAR(50),
    one_liner TEXT
    );

-- INSERT CHARACTER VALUES --
INSERT INTO public."character" (name, age, race, one_liner)
VALUES
    ('Legolas', 2000, 'Elf', 'You have my bow'),
    ('Gimli', 50, 'Dwarf', 'You have my axe'),
    ('Aragorn', 80, 'Human', 'I will be with you, until the end'),
    ('Frodo Baggins', 50, 'Hobbit', 'I will take the ring, though I do not know the way.'),
    ('Samwise Gamgee', 38, 'Hobbit', 'There’s some good in this world, Mr. Frodo, and it’s worth fighting for.'),
    ('Gandalf', 2019, 'Maia', 'A wizard is never late, nor is he early. He arrives precisely when he means to.'),
    ('Saruman', 2500, 'Maia', 'Against the power of Mordor, there can be no victory.'),
    ('Boromir', 41, 'Human', 'One does not simply walk into Mordor.'),
    ('Éowyn', 24, 'Human', 'I am no man.'),
    ('Bilbo Baggins', 111, 'Hobbit', 'I think I’m quite ready for another adventure.'),
    ('Thranduil', 3000, 'Elf', 'I will not risk open war.'),
    ('Sauron', 2000, 'Maia', 'You cannot hide. I see you.'),
    ('Gollum', 500, 'Hobbit (formerly)', 'We wants it, we needs it. Must have the precious!');



-- Equipment table --
CREATE TABLE equipment(
    id SERIAL PRIMARY KEY,
    name varchar(50),
    weight int,
    description TEXT,
    character_id INT REFERENCES character(id) ON DELETE CASCADE
);


-- INSERT VALUES --
INSERT INTO equipment (name, weight, description, character_id)
VALUES
    ('Anduril', 2, 'Flame of the West, reforged from the shards of Narsil', 3), 		-- Aragorn
    ('Sting', 1, 'Elvish short sword that glows blue near orcs', 4), 					-- Frodo Baggins
    ('Glamdring', 3, 'Ancient blade wielded by Gandalf, foe-hammer', 6),				-- Gandalf
    ('Mithril Shirt', 1, 'Lightweight armor of incredible strength', 4), 				-- Frodo Baggins
    ('Bow of Galadhrim', 2, 'Elven bow gifted to Legolas, unmatched in accuracy', 1), -- Legolas
    ('Axe of Durin', 4, 'Heirloom of the Dwarves, cleaves through stone', 2),			-- Gimli
    ('Staff of the Istari', 2, 'Wooden staff imbued with wizardly power', 6),			-- Gandalf
    ('Horn of Gondor', 1, 'Summons aid with a resounding call', 8),					-- Boromir
    ('Shield of Rohan', 5, 'Sturdy oaken shield with horse emblem', 9), 				-- Éowyn
    ('Cloak of Lorien', 1, 'Elven cloak that blends into nature', 5), 					-- Samwise Gamgee
    ('Narsil Shard', 1, 'Broken remnant of the ancient blade', 3), 					-- Aragorn
    ('Phial of Galadriel', 0, 'Star-glass that shines in darkness', 4); 				-- Frodo Baggins