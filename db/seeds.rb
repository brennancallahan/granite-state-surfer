# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
BreakGroup.create([{ name:"South Group", break_group: 2074} ])
BreakGroup.create([{ name: "North Group", break_group: 881} ])

Break.create([{ name: "Seabrook Beach", beach: "Seabrook Beach", address: "125 Atlantic Avenue, Seabrook, NH 03874", break_group_id: 1, beginner_friendly: true, onsite_parking: false, break_type: "Beach Break"}])
Break.create([{ name: "Hampton Beach", beach: "Hampton Beach", address: "160 Ocean Boulevard, Hampton, NH 03842", break_group_id: 1, beginner_friendly: true, onsite_parking: true, break_type: "Beach Break"}])
Break.create([{ name: "The Wall", beach: "North Beach", address: "920 Ocean Boulevard, Hampton, NH 03842", break_group_id: 1, beginner_friendly: true, onsite_parking: true, break_type: "Beach Break"}])
Break.create([{ name: "Costello", beach: "Plaice Cove", address: "36 Noreast Lane, Hampton, NH 03874", break_group_id: 1, beginner_friendly: false, onsite_parking: false, break_type: "Beach Break"}])
Break.create([{ name: "Linkys", beach: "N/A", address: "Fox Hill Point, North Hampton, NH 03862", break_group_id: 2, beginner_friendly: false, onsite_parking: false, break_type: "Reef Break"}])
Break.create([{ name: "Rye on the Rocks", beach: "Bass Beach", address: "190 Ocean Boulevard, Rye, NH 03870", break_group_id: 2, beginner_friendly: false, onsite_parking: true, break_type: "Reef Break"}])
Break.create([{ name: "Sewage Pipes", beach: "Sawyers Beach", address: "2380 Ocean Boulevard, Rye, NH 03870", break_group_id: 2, beginner_friendly: true, onsite_parking: false, break_type: "Beach Break"}])
Break.create([{ name: "Jenness Beach", beach: "Jenness Beach", address: "2280 Ocean Blvd Ocean Boulevard, Rye, NH 03870", break_group_id: 2, beginner_friendly: true, onsite_parking: true, break_type: "Beach Break"}])

User.create([{ first_name: "Dillon", last_name: "Jack", email: "djack@gmail.com", username: "djack5", role: "member"}])
User.create([{ first_name: "Chris", last_name: "Combs", email: "wccombs@gmail.com", username: "wccombs", role: "member"}])
User.create([{ first_name: "Aaron", last_name: "Holman", email: "aaholman@gmail.com", username: "aholman00", role: "member"}])
User.create([{ first_name: "Nate", last_name: "Holterman", email: "nholter@gmail.com", username: "holterman", role: "member"}])

Post.create([{ recommended_conditions: "You'll want to go to this spot when the surf is breaking large. Ideally, you're here with nothing smaller than waist high.", recommended_surfers: "You've got to know your stuff if you're here. The wave is tough, the locals are tougher.", additional_information: "Don't bank on parking being available- it's mostly just a driveway.", photo_path: nil, break_id: 6, user_id: 1, username: "djack5"}])
Post.create([{ recommended_conditions: "Anything larger enough to catch a longboard on. This spot will also still work when the swell is huge, but it shouldn't be your first choice for big days.", recommended_surfers: "Any skill level is going to be fine. It's a pretty forgiving beach break. Plenty of depth, too.", additional_information: "Seabrook can get really crowded in the summer. Plan accordingly!", photo_path: nil, break_id: 1, user_id: 2, username: "wccombs"}])
Post.create([{ recommended_conditions: "This is a classic summer spot. It can get crowded, but the beach is also huge, so you'll be able to catch a few on crowded days.", recommended_surfers: "Any skill level is going to be fine here. Good spot to learn.", additional_information: "This is a long beach, so take your time finding a good spot.", photo_path: nil, break_id: 2, user_id: 3, username: "aholman00"}])
Post.create([{ recommended_conditions: "This is the best spot on the seacoast because it literally always breaks. Wave size doesn't matter.", recommended_surfers: "Everyone surfs here. Just try and be respectful..", additional_information: "This is the classic seacoast spot. Check out Cinnamon Rainbows Surf Shop.", photo_path: nil, break_id: 4, user_id: 1, username: "holterman"}])
Post.create([{ recommended_conditions: "Costello breaks at all levels. If it's small, favor the southern end of the beach. If it's big, favor the northern coast.", recommended_surfers: "If it's small, anyone can surf. If it's huge, beginner's aren't recommended.", additional_information: "There's not going to be a place for you to park unless you know someone who lives there. Not a lot of availability.", photo_path: nil, break_id: 5, user_id: 1, username: "djack5"}])
Post.create([{ recommended_conditions: "Any surfer can find waves here. Try and go in between tides.", recommended_surfers: "Any surfer.", additional_information: "None!", photo_path: nil, break_id: 1, user_id: 1, username: "wccombs"}])
Post.create([{ recommended_conditions: "Hurricanes have eroded the sand bars a little, but you can still catch waves under most conditions.", recommended_surfers: "Any skill level will be fine here.", additional_information: "None.", photo_path: nil, break_id: 2, user_id: 2, username: "aholman00"}])
Post.create([{ recommended_conditions: "Any wave size, any tide (other than peak high tide).", recommended_surfers: "Literally any surfer can catch a wave here. Good place to learn.", additional_information: "This is a fun spot, especially in the winter when it's a little quieter in the water.", photo_path: nil, break_id: 3, user_id: 3, username: "holterman"}])
Post.create([{ recommended_conditions: "Ideally, bigger than knee high swell. And try to avoid going during low tide.", recommended_surfers: "Since a lot of locals live here, make sure to respect the local crew. This is a spot that folks try to keep quiet and hidden.", additional_information: "You will definitely get towed if you don't respect parking rules!", photo_path: nil, break_id: 4, user_id: 4, username: "djack5"}])
Post.create([{ recommended_conditions: "Anything above mid tide. Low tide won't really fire here.", recommended_surfers: "Linkys is a local spot. Don't go out here if you're new to surfing. Or at the very least, go with someone who knows the spot.", additional_information: "You'll be parking along 1A.", photo_path: nil, break_id: 5, user_id: 5, username: "wccombs"}])
