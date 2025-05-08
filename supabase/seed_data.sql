-- Sample Free Events in Scotland (2024-2025)

-- Create organizer profiles first (assuming these users already exist in auth.users)
-- In a real app, you would create these users via the auth API, but for this sample we'll just insert directly
INSERT INTO public.profiles (id, full_name, email, role) VALUES
('00000000-0000-0000-0000-000000000001', 'Edinburgh Festival Society', 'info@edinburghfestivals.com', 'organizer'),
('00000000-0000-0000-0000-000000000002', 'Glasgow City Council', 'events@glasgow.gov.uk', 'organizer'),
('00000000-0000-0000-0000-000000000003', 'Highland Council Events', 'events@highland.gov.uk', 'organizer'),
('00000000-0000-0000-0000-000000000004', 'Aberdeen Arts Centre', 'info@aberdeenartscentre.com', 'organizer'),
('00000000-0000-0000-0000-000000000005', 'Scottish Heritage Trust', 'events@scottishheritage.org', 'organizer'),
('00000000-0000-0000-0000-000000000006', 'Dundee Cultural Events', 'culture@dundee.gov.uk', 'organizer'),
('00000000-0000-0000-0000-000000000007', 'Stirling Council', 'events@stirling.gov.uk', 'organizer'),
('00000000-0000-0000-0000-000000000008', 'Perth Cultural Trust', 'events@perthculture.org', 'organizer'),
('00000000-0000-0000-0000-000000000009', 'Outer Hebrides Tourism', 'events@visitouterhebrides.com', 'organizer'),
('00000000-0000-0000-0000-000000000010', 'Orkney Islands Council', 'events@orkney.gov.uk', 'organizer');

-- Sample Events
INSERT INTO public.events (title, slug, description, image_url, location, start_date, end_date, status, organizer_id, category_id, is_featured) VALUES
(
  'Edinburgh Hogmanay Street Party 2024', 
  'edinburgh-hogmanay-street-party-2024',
  'Join us for Edinburgh''s world-famous Hogmanay celebrations! This free street party will feature live music, performances, and the iconic midnight fireworks display over Edinburgh Castle. Bring in 2025 with thousands of revelers from around the world in the heart of Scotland''s capital.',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
  'Princes Street, Edinburgh, EH1 2AB',
  '2024-12-31 19:00:00+00',
  '2025-01-01 01:00:00+00',
  'published',
  '00000000-0000-0000-0000-000000000001',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  TRUE
),
(
  'Glasgow Christmas Lights Switch-On', 
  'glasgow-christmas-lights-switch-on-2024',
  'The annual Glasgow Christmas Lights Switch-On is back! Enjoy this free family-friendly event in George Square with live entertainment, music, and the magical moment when the city''s festive illuminations come to life. A perfect way to start the holiday season.',
  'https://images.unsplash.com/photo-1482350325005-eda5e677279b',
  'George Square, Glasgow, G2 1DU',
  '2024-11-17 16:30:00+00',
  '2024-11-17 20:00:00+00',
  'published',
  '00000000-0000-0000-0000-000000000002',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  TRUE
),
(
  'Highland Games 2024 - Inverness', 
  'highland-games-2024-inverness',
  'Experience the tradition and spectacle of the Highland Games in Inverness. This free event showcases traditional Scottish athletic competitions including the caber toss, hammer throw, and tug o'' war, alongside Highland dancing, bagpipe music, and local food stalls.',
  'https://images.unsplash.com/photo-1528219089976-98405f05d861',
  'Bught Park, Inverness, IV3 5SR',
  '2024-07-20 10:00:00+01',
  '2024-07-20 18:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000003',
  (SELECT id FROM public.categories WHERE slug = 'sports'),
  FALSE
),
(
  'Aberdeen International Youth Festival', 
  'aberdeen-international-youth-festival-2024',
  'The Aberdeen International Youth Festival brings together young performers from around the world. This free cultural celebration includes dance, theater, music, and art from diverse global traditions. Come experience the talent of the next generation of performers!',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
  'Various venues across Aberdeen City Centre',
  '2024-07-26 09:00:00+01',
  '2024-08-03 22:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000004',
  (SELECT id FROM public.categories WHERE slug = 'arts-theatre'),
  TRUE
),
(
  'Scottish Storytelling Festival - Edinburgh', 
  'scottish-storytelling-festival-edinburgh-2024',
  'Immerse yourself in the rich oral tradition of Scotland at this free storytelling festival. Listen to tales of myth, legend, and history told by master storytellers. Perfect for all ages, this event celebrates Scotland''s narrative heritage in the cozy setting of the Scottish Storytelling Centre.',
  'https://images.unsplash.com/photo-1551818176-60579e574b91',
  'Scottish Storytelling Centre, 43-45 High St, Edinburgh, EH1 1SR',
  '2024-10-17 10:00:00+01',
  '2024-10-30 21:00:00+00',
  'published',
  '00000000-0000-0000-0000-000000000005',
  (SELECT id FROM public.categories WHERE slug = 'arts-theatre'),
  FALSE
),
(
  'Dundee Design Festival', 
  'dundee-design-festival-2024',
  'Celebrate Dundee''s status as a UNESCO City of Design at this free festival. Explore exhibitions, workshops, and talks from local and international designers across multiple disciplines including fashion, graphic design, architecture, and digital innovation.',
  'https://images.unsplash.com/photo-1534777367038-9404f45b869a',
  'West Ward Works, Guthrie Street, Dundee, DD1 5BR',
  '2024-05-20 10:00:00+01',
  '2024-05-26 18:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000006',
  (SELECT id FROM public.categories WHERE slug = 'arts-theatre'),
  TRUE
),
(
  'Stirling Fringe Festival', 
  'stirling-fringe-festival-2024',
  'The Stirling Fringe Festival offers a platform for emerging artists and performers with free performances across the city. Enjoy comedy, music, theater, and spoken word in historic venues throughout Stirling. Discover your new favorite artist at this celebration of creative talent.',
  'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
  'Various venues across Stirling City Centre',
  '2024-09-13 12:00:00+01',
  '2024-09-22 23:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000007',
  (SELECT id FROM public.categories WHERE slug = 'arts-theatre'),
  FALSE
),
(
  'Perth Winter Festival', 
  'perth-winter-festival-2024',
  'Perth''s Winter Festival transforms the city into a winter wonderland with free activities for all ages. Enjoy ice skating, winter markets, light displays, and family entertainment. The festival culminates in a spectacular Hogmanay celebration to welcome the New Year.',
  'https://images.unsplash.com/photo-1512389142860-9c449e58a543',
  'Perth City Centre, PH1 5XA',
  '2024-11-22 10:00:00+00',
  '2025-01-02 20:00:00+00',
  'published',
  '00000000-0000-0000-0000-000000000008',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  TRUE
),
(
  'Hebridean Celtic Festival - Stornoway', 
  'hebridean-celtic-festival-stornoway-2024',
  'Experience the unique Celtic culture of the Outer Hebrides at this community festival. This free event features traditional music, Gaelic language workshops, craft demonstrations, and local food. Set against the stunning backdrop of Lewis, it''s a true celebration of island heritage.',
  'https://images.unsplash.com/photo-1505816014357-96b5ff457e9a',
  'Castle Grounds, Stornoway, Isle of Lewis, HS1 2BW',
  '2024-07-12 11:00:00+01',
  '2024-07-15 23:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000009',
  (SELECT id FROM public.categories WHERE slug = 'music'),
  FALSE
),
(
  'Orkney Science Festival', 
  'orkney-science-festival-2024',
  'The Orkney Science Festival brings science to life with free interactive exhibitions, talks from leading researchers, and hands-on demonstrations. This year''s theme focuses on marine conservation and renewable energy - topics close to the heart of island communities.',
  'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
  'Various venues in Kirkwall and Stromness, Orkney',
  '2024-09-05 09:30:00+01',
  '2024-09-11 17:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000010',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  FALSE
),
(
  'Edinburgh Book Festival Free Events', 
  'edinburgh-book-festival-free-events-2024',
  'The world''s largest literature festival offers a selection of free events for book lovers of all ages. From author readings to panel discussions, these accessible events make literature available to everyone. Located in the beautiful Charlotte Square Gardens in the heart of Edinburgh.',
  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0',
  'Charlotte Square Gardens, Edinburgh, EH2 4DR',
  '2024-08-10 10:00:00+01',
  '2024-08-26 21:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000001',
  (SELECT id FROM public.categories WHERE slug = 'arts-theatre'),
  TRUE
),
(
  'Glasgow Film Festival Free Screenings', 
  'glasgow-film-festival-free-screenings-2024',
  'The Glasgow Film Festival presents a selection of free screenings showcasing Scottish filmmaking talent. From documentaries to short films, these screenings offer a platform for emerging directors and a chance for audiences to experience unique Scottish cinema.',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728',
  'Glasgow Film Theatre, 12 Rose Street, Glasgow, G3 6RB',
  '2024-02-26 12:00:00+00',
  '2024-03-08 23:30:00+00',
  'published',
  '00000000-0000-0000-0000-000000000002',
  (SELECT id FROM public.categories WHERE slug = 'arts-theatre'),
  FALSE
),
(
  'Inverness Highland Music Festival', 
  'inverness-highland-music-festival-2024',
  'This free music festival celebrates the rich musical traditions of the Highlands. Enjoy performances of traditional Scottish folk music, Gaelic singing, and contemporary Celtic fusion. Workshops on traditional instruments are available for beginners wanting to learn the basics.',
  'https://images.unsplash.com/photo-1511192336575-5a79af67a629',
  'Eden Court Theatre, Bishops Road, Inverness, IV3 5SA',
  '2024-06-14 10:00:00+01',
  '2024-06-16 22:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000003',
  (SELECT id FROM public.categories WHERE slug = 'music'),
  TRUE
),
(
  'Aberdeen Maritime Festival', 
  'aberdeen-maritime-festival-2024',
  'Celebrate Aberdeen''s rich maritime heritage at this free festival on the harbor front. See historic vessels, enjoy sea shanties, watch sailing demonstrations, and learn about the city''s deep connection to the North Sea through interactive exhibits and storytelling.',
  'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0',
  'Aberdeen Harbour, Regent Quay, Aberdeen, AB11 5SS',
  '2024-08-24 10:00:00+01',
  '2024-08-25 17:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000004',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  FALSE
),
(
  'Stargazing in the Cairngorms', 
  'stargazing-in-the-cairngorms-2024',
  'Take advantage of the Cairngorms Dark Sky status with this free guided stargazing event. Astronomers will help you identify constellations, planets, and other celestial phenomena. Telescopes provided, but bring warm clothes regardless of season - it gets cold in the mountains!',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
  'Glenmore Visitor Centre, Aviemore, PH22 1QU',
  '2024-10-12 20:00:00+01',
  '2024-10-12 23:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000005',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  FALSE
),
(
  'Dundee Comic Festival', 
  'dundee-comic-festival-2024',
  'The home of The Beano and The Dandy hosts this free comic festival celebrating cartoon art and storytelling. Meet artists, attend workshops, browse comic stalls, and enjoy family-friendly activities celebrating Dundee''s unique contribution to comic book history.',
  'https://images.unsplash.com/photo-1588497859490-85d1c17db96d',
  'V&A Dundee, 1 Riverside Esplanade, Dundee, DD1 4EZ',
  '2024-04-13 10:00:00+01',
  '2024-04-14 17:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000006',
  (SELECT id FROM public.categories WHERE slug = 'arts-theatre'),
  TRUE
),
(
  'Stirling Castle Living History Day', 
  'stirling-castle-living-history-day-2024',
  'Step back in time at Stirling Castle with this free living history event. Historical reenactors bring the medieval and Renaissance periods to life with demonstrations of crafts, cooking, weaponry, and daily life in one of Scotland''s most important historical fortresses.',
  'https://images.unsplash.com/photo-1533852496380-5d2536b5ad14',
  'Stirling Castle, Castle Esplanade, Stirling, FK8 1EJ',
  '2024-07-06 10:00:00+01',
  '2024-07-06 16:30:00+01',
  'published',
  '00000000-0000-0000-0000-000000000007',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  FALSE
),
(
  'Perth Riverside Light Nights', 
  'perth-riverside-light-nights-2024',
  'Perth''s riverside comes alive with this free light installation festival. Follow the illuminated trail along the River Tay to discover artistic light displays, projections, and interactive installations that transform the city''s landmarks and natural features after dark.',
  'https://images.unsplash.com/photo-1545579133-99bb5ab189bd',
  'River Tay Walkway, Perth, PH1 5PW',
  '2024-01-25 17:00:00+00',
  '2024-02-03 22:00:00+00',
  'published',
  '00000000-0000-0000-0000-000000000008',
  (SELECT id FROM public.categories WHERE slug = 'arts-theatre'),
  TRUE
),
(
  'Lewis Gaelic Festival', 
  'lewis-gaelic-festival-2024',
  'Immerse yourself in Gaelic language and culture at this free community festival on the Isle of Lewis. Featuring language workshops, traditional music, storytelling, and craft demonstrations, this event celebrates the living heritage of Scotland''s oldest indigenous language.',
  'https://images.unsplash.com/photo-1519331379826-f10be5486c6f',
  'An Lanntair Arts Centre, Kenneth Street, Stornoway, HS1 2DS',
  '2024-05-24 10:00:00+01',
  '2024-05-27 16:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000009',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  FALSE
),
(
  'Orkney Archaeology Open Days', 
  'orkney-archaeology-open-days-2024',
  'Explore Orkney''s remarkable archaeological heritage with free access to excavation sites and expert-guided tours. This annual event provides rare opportunities to see archaeologists at work at some of Europe''s most significant Neolithic sites, including parts of the Heart of Neolithic Orkney World Heritage Site.',
  'https://images.unsplash.com/photo-1464317442159-671a4983a8e6',
  'Various archaeological sites across Orkney',
  '2024-06-29 09:00:00+01',
  '2024-07-01 17:00:00+01',
  'published',
  '00000000-0000-0000-0000-000000000010',
  (SELECT id FROM public.categories WHERE slug = 'community'),
  FALSE
);

-- Create free tickets for each event
INSERT INTO public.tickets (event_id, name, description, price, ticket_type, quantity)
SELECT 
  id, 
  'Free General Admission', 
  'Free entry to the event. Registration required.', 
  0.00, 
  'free', 
  500
FROM public.events;

-- Add tags to events
INSERT INTO public.event_tags (event_id, tag_id)
SELECT 
  e.id,
  t.id
FROM public.events e
CROSS JOIN public.tags t
WHERE t.name = 'Free';

-- Add more specific tags to events
INSERT INTO public.event_tags (event_id, tag_id)
SELECT 
  e.id,
  t.id
FROM public.events e
JOIN public.tags t ON t.name IN ('Outdoor', 'Weekend', 'Festival')
WHERE e.title LIKE '%Festival%';

INSERT INTO public.event_tags (event_id, tag_id)
SELECT 
  e.id,
  t.id
FROM public.events e
JOIN public.tags t ON t.name IN ('Family-friendly', 'Scottish Culture')
WHERE e.title LIKE '%Highland%' OR e.title LIKE '%Celtic%' OR e.title LIKE '%Gaelic%'; 