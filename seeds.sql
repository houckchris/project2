
-- example data to populate for the .models/orgs.js
INSERT INTO Orgs (orgName, orgImage) 
VALUES ('Goodwill', "../images/habitat.png"), ('OpenHand', "../imagessalvationA.png"), ('FoodBank', "../images/goodwill.png");


-- example data to populate for the .models/events.js
INSERT INTO events (eventTitle, eventDesc, eventDate, eventTime, eventAddr, eventCity, eventState, eventZip, eventDuration, eventSlots, eventCat, orgId) 
VALUES ('Meal Delivery', 'Deliver Meals to sick and elderly', "05/01/2018", "10:00 am", "123 A Street", "Atlanta", "GA", 30319, 2, 10, "Meal Delivery", 1), ('Meal Delivery', 'Deliver Meals to sick and elderly', "05/02/2018", "10:00 am", "123 A Street", "Atlanta", "GA", 30319, 2, 10, "Meal Delivery", 2), 
('Meal Delivery', 'Deliver Meals to sick and elderly', "05/03/2018", "10:00 am", "123 A Street", "Atlanta", "GA", 30319, 2, 10, "Meal Delivery", 3);


-- example data to populate for the .models/vols.js
INSERT INTO vols (volName, volZip, volEmail, aboutMe, volImage, volSkills)
VALUES ('Mickey Mouse', '30365', 'MMouse@Dworld.com', 'I currently live near Orlando, Fl. I have an interest in spreading happiness to children of all ages. I enjoy assisting all people.', '".img/mickey.jpg', 'Assisting Others, Crafts'), 
('Donald Duck', '30366', 'DDuck@Dworld.com', 'I live in Kissimmee, Fl. My interest is simplifying life and making it easy going. I enjoy doing simple mindless tasks.', '.img/Donald.jpg', 'Food Service, Carpentry'), ('Goofy', '30367', 'Goofy@Dworld.com', 'I live in Kissimmee, Fl. My interest is simplifying life and making it easy going. I enjoy doing simple mindless tasks.', '.img/Goofy.jpg', 'Carpentry, Cleaning Up');
