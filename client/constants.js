const collegeList = [
  'Abilene Christian University',
  'Air Force',
  'Akron',
  'Alabama',
  'Alabama A&M University',
  'Alabama Birmingham',
  'Alabama State University',
  'Albany',
  'Alcorn State University',
  'American University',
  'Appalachian State University',
  'Arizona',
  'Arizona State University',
  'Arkansas Fayetteville',
  'Arkansas Little Rock',
  'Arkansas Pine Bluff',
  'Arkansas State University',
  'Army',
  'Auburn University',
  'Austin Peay State University',
  'Ball State University',
  'Baylor University',
  'Belmont University',
  'Bethune-Cookman University',
  'Binghamton University',
  'Boise State University',
  'Boston College',
  'Boston University',
  'Bowling Green State University',
  'Bradley University',
  'Brigham Young University',
  'Brown University',
  'Bryant University',
  'Bucknell University',
  'Buffalo',
  'Butler University',
  'California Berkeley',
  'California Davis',
  'California Irvine',
  'California Polytechnic State University',
  'California Riverside',
  'California Santa Barbara',
  'California State University Bakersfield',
  'California State University Fresno',
  'California State University Fullerton',
  'California State University Northridge',
  'California State University Sacramento',
  'Campbell University',
  'Canisius College',
  'Central Arkansas',
  'Central Connecticut State University',
  'Central Florida',
  'Central Michigan University',
  'Charleston Southern University',
  'Chicago State University',
  'Cincinnati',
  'Citadel',
  'Clemson University',
  'Cleveland State University',
  'Coastal Carolina University',
  'Colgate University',
  'College of Charleston (South Carolina)',
  'College of the Holy Cross',
  'College of William & Mary',
  'Colorado Boulder',
  'Colorado State University',
  'Columbia University',
  'Connecticut',
  'Coppin State University',
  'Cornell University',
  'Creighton University',
  'Dartmouth College',
  'Davidson College',
  'Dayton',
  'Delaware',
  'Delaware State University',
  'Denver',
  'DePaul University',
  'Detroit Mercy',
  'Drake University',
  'Drexel University',
  'Duke University',
  'Duquesne University',
  'East Carolina University',
  'East Tennessee State University',
  'Eastern Illinois University',
  'Eastern Kentucky University',
  'Eastern Michigan University',
  'Eastern Washington University',
  'Elon University',
  'Evansville',
  'Fairfield University',
  'Fairleigh Dickinson University',
  'Florida',
  'Florida A&M University',
  'Florida Atlantic University',
  'Florida Gulf Coast University',
  'Florida International University',
  'Florida State University',
  'Fordham University',
  'Furman University',
  'Gardner-Webb University',
  'George Mason University',
  'George Washington University',
  'Georgetown University',
  'Georgia',
  'Georgia Southern University',
  'Georgia State University',
  'Georgia Technology',
  'Gonzaga University',
  'Grambling State University',
  'Grand Canyon University',
  'Hampton University',
  'Hartford',
  'Harvard University',
  'Hawaii Manoa',
  'High Point University',
  'Hofstra University',
  'Houston',
  'Houston Baptist University',
  'Howard University',
  'Idaho',
  'Idaho State University',
  'Illinois Chicago',
  'Illinois State University',
  'Illinois Urbana–Champaign',
  'Incarnate Word',
  'Indiana State University',
  'Indiana University',
  'Iona College',
  'Iowa',
  'Iowa State University',
  'IUPUFW',
  'IUPUI',
  'Jackson State University',
  'Jacksonville State University',
  'Jacksonville University',
  'James Madison University',
  'Kansas',
  'Kansas State University',
  'Kennesaw State University',
  'Kent State University',
  'Kentucky',
  'La Salle University',
  'Lafayette College',
  'Lamar University',
  'Lehigh University',
  'Liberty University',
  'Lipscomb University',
  'Long Beach State University',
  'Long Island University–Brooklyn',
  'Longwood University',
  'Louisiana Lafayette',
  'Louisiana Monroe',
  'Louisiana State University',
  'Louisiana Tech University',
  'Louisville',
  'Loyola Marymount University',
  'Loyola University Chicago',
  'Loyola University Maryland',
  'Maine',
  'Manhattan College',
  'Marist College',
  'Marquette University',
  'Marshall University',
  'Maryland Baltimore County',
  'Maryland College Park',
  'Maryland Eastern Shore',
  'Massachusetts Amherst',
  'Massachusetts Lowell',
  'McNeese State University',
  'Memphis',
  'Mercer University',
  'Miami (Florida)',
  'Miami University (Ohio)',
  'Michigan',
  'Michigan State University',
  'Middle Tennessee State University',
  'Minnesota',
  'Mississippi',
  'Mississippi State University',
  'Mississippi Valley State University',
  'Missouri Columbia',
  'Missouri State University',
  'Missouri-Kansas City',
  'Monmouth University',
  'Montana',
  'Montana State University',
  'Morehead State University',
  'Morgan State University',
  "Mount St. Mary's University",
  'Murray State University',
  'Navy',
  'Nebraska Lincoln',
  'Nebraska Omaha',
  'Nevada Reno',
  'New Hampshire',
  'New Jersey Institute of Technology',
  'New Mexico',
  'New Mexico State University',
  'New Orleans',
  'Niagara University',
  'Nicholls State University',
  'Norfolk State University',
  'North Carolina A&T',
  'North Carolina Asheville',
  'North Carolina Central University',
  'North Carolina Chapel Hill',
  'North Carolina Charlotte',
  'North Carolina Greensboro',
  'North Carolina State University',
  'North Carolina Wilmington',
  'North Dakota',
  'North Dakota State University',
  'North Florida',
  'North Texas',
  'Northeastern University',
  'Northern Arizona University',
  'Northern Colorado',
  'Northern Illinois University',
  'Northern Iowa',
  'Northern Kentucky University',
  'Northwestern State University',
  'Northwestern University',
  'Notre Dame',
  'Oakland University',
  'Ohio State University',
  'Ohio University',
  'Oklahoma',
  'Oklahoma State University',
  'Old Dominion University',
  'Oral Roberts University',
  'Oregon',
  'Oregon State University',
  'Pacific',
  'Pennsylvania',
  'Pennsylvania State University',
  'Pepperdine University',
  'Pittsburgh',
  'Portland',
  'Portland State University',
  'Prairie View A&M University',
  'Presbyterian College',
  'Princeton University',
  'Providence College',
  'Purdue University',
  'Quinnipiac University',
  'Radford University',
  'Rhode Island',
  'Rice University',
  'Richmond',
  'Rider University',
  'Robert Morris University',
  'Rutgers University',
  'Sacred Heart University',
  'Saint Francis University',
  "Saint Joseph's University",
  'Saint Louis University',
  "Saint Mary's College of California",
  "Saint Peter's University",
  'Sam Houston State University',
  'Samford University',
  'San Diego',
  'San Diego State University',
  'San Francisco',
  'San Jose State University',
  'Santa Clara University',
  'Savannah State University',
  'Seattle University',
  'Seton Hall University',
  'Siena College',
  'South Alabama',
  'South Carolina',
  'South Carolina State University',
  'South Carolina Upstate',
  'South Dakota',
  'South Dakota State University',
  'South Florida',
  'Southeast Missouri State University',
  'Southeastern Louisiana University',
  'Southern Illinois University Carbondale',
  'Southern Illinois University Edwardsville',
  'Southern Methodist University',
  'Southern Mississippi',
  'Southern University',
  'Southern Utah University',
  'St. Bonaventure University',
  'St. Francis College',
  "St. John's University",
  'Stanford University',
  'Stephen F. Austin State University',
  'Stetson University',
  'Stony Brook University',
  'Syracuse University',
  'Temple University',
  'Tennessee',
  'Tennessee Chattanooga',
  'Tennessee Martin',
  'Tennessee State University',
  'Tennessee Technological University',
  'Texas A&M University',
  'Texas A&M University–Corpus Christi',
  'Texas Arlington',
  'Texas Austin',
  'Texas Christian University',
  'Texas El Paso',
  'Texas Rio Grande Valley',
  'Texas San Antonio',
  'Texas Southern University',
  'Texas State University',
  'Texas Tech University',
  'Toledo',
  'Towson University',
  'Troy University',
  'Tulane University',
  'Tulsa',
  'UCLA',
  'UNLV',
  'USC',
  'Utah',
  'Utah State University',
  'Utah Valley University',
  'Valparaiso University',
  'Vanderbilt University',
  'Vermont',
  'Villanova University',
  'Virginia',
  'Virginia Commonwealth University',
  'Virginia Military Institute',
  'Virginia Tech',
  'Wagner College',
  'Wake Forest University',
  'Washington',
  'Washington State University',
  'Weber State University',
  'West Virginia University',
  'Western Carolina University',
  'Western Illinois University',
  'Western Kentucky University',
  'Western Michigan University',
  'Wichita State University',
  'Winthrop University',
  'Wisconsin Green Bay',
  'Wisconsin Madison',
  'Wisconsin Milwaukee',
  'Wofford College',
  'Wright State University',
  'Wyoming',
  'Xavier University',
  'Yale University',
  'Youngstown State University'
]

const collegeArray = [
  {college: 'Abilene Christian University', mascot: 'Wildcats'},
  {college: 'Akron', mascot: 'Zips'},
  {college: 'Alabama', mascot: 'Crimson Tide'},
  {college: 'Alabama A&M University', mascot: 'Bulldogs'},
  {college: 'Alabama Birmingham', mascot: 'Blazers'},
  {college: 'Alabama State University', mascot: 'Hornets'},
  {college: 'Albany', mascot: 'Great Danes'},
  {college: 'Alcorn State University', mascot: 'Braves'},
  {college: 'American University', mascot: 'Eagles'},
  {college: 'Appalachian State University', mascot: 'Mountaineers'},
  {college: 'Arizona', mascot: 'Wildcats'},
  {college: 'Arizona State University', mascot: 'Sun Devils'},
  {college: 'Arkansas Fayetteville', mascot: 'Razorbacks'},
  {college: 'Arkansas Little Rock', mascot: 'Trojans'},
  {college: 'Arkansas Pine Bluff', mascot: 'Golden Lions'},
  {college: 'Arkansas State University', mascot: 'Red Wolves'},
  {college: 'Auburn University', mascot: 'Tigers'},
  {college: 'Austin Peay State University', mascot: 'Governors'},
  {college: 'Ball State University', mascot: 'Cardinals'},
  {college: 'Baylor University', mascot: 'Bears'},
  {college: 'Belmont University', mascot: 'Bruins'},
  {college: 'Bethune-Cookman University', mascot: 'Wildcats'},
  {college: 'Binghamton University', mascot: 'Bearcats'},
  {college: 'Boise State University', mascot: 'Broncos'},
  {college: 'Boston College', mascot: 'Eagles'},
  {college: 'Boston University', mascot: 'Terriers'},
  {college: 'Bowling Green State University', mascot: 'Falcons'},
  {college: 'Bradley University', mascot: 'Braves'},
  {college: 'Brigham Young University', mascot: 'Cougars'},
  {college: 'Brown University', mascot: 'Bears'},
  {college: 'Bryant University', mascot: 'Bulldogs'},
  {college: 'Bucknell University', mascot: 'Bison'},
  {college: 'Buffalo', mascot: 'Bulls'},
  {college: 'Butler University', mascot: 'Bulldogs'},
  {college: 'California Berkeley', mascot: 'Golden Bears'},
  {college: 'California Davis', mascot: 'Aggies'},
  {college: 'California Irvine', mascot: 'Anteaters'},
  {college: 'California Polytechnic State University', mascot: 'Mustangs'},
  {college: 'California Riverside', mascot: 'Highlanders'},
  {college: 'California Santa Barbara', mascot: 'Gauchos'},
  {college: 'California State University Bakersfield', mascot: 'Roadrunners'},
  {college: 'California State University Fresno', mascot: 'Bulldogs'},
  {college: 'California State University Fullerton', mascot: 'Titans'},
  {college: 'California State University Northridge', mascot: 'Matadors'},
  {college: 'California State University Sacramento', mascot: 'Hornets'},
  {college: 'Campbell University', mascot: 'Fighting Camels'},
  {college: 'Canisius College', mascot: 'Golden Griffins'},
  {college: 'Central Arkansas', mascot: 'Bears'},
  {college: 'Central Connecticut State University', mascot: 'Blue Devils'},
  {college: 'Central Florida', mascot: 'Knights'},
  {college: 'Central Michigan University', mascot: 'Chippewas'},
  {college: 'Charleston Southern University', mascot: 'Buccaneers'},
  {college: 'Chicago State University', mascot: 'Cougars'},
  {college: 'Cincinnati', mascot: 'Bearcats'},
  {college: 'Citadel', mascot: 'Bulldogs'},
  {college: 'Clemson University', mascot: 'Tigers'},
  {college: 'Cleveland State University', mascot: 'Vikings'},
  {college: 'Coastal Carolina University', mascot: 'Chanticleers'},
  {college: 'Colgate University', mascot: 'Raiders'},
  {college: 'College of Charleston (South Carolina)', mascot: 'Cougars'},
  {college: 'College of the Holy Cross', mascot: 'Crusaders'},
  {college: 'College of William & Mary', mascot: 'Tribe'},
  {college: 'Colorado Boulder', mascot: 'Buffaloes'},
  {college: 'Colorado State University', mascot: 'Rams'},
  {college: 'Columbia University', mascot: 'Lions'},
  {college: 'Connecticut', mascot: 'Huskies'},
  {college: 'Coppin State University', mascot: 'Eagles'},
  {college: 'Cornell University', mascot: 'Big Red'},
  {college: 'Creighton University', mascot: 'Bluejays'},
  {college: 'Dartmouth College', mascot: 'Big Green'},
  {college: 'Davidson College', mascot: 'Wildcats'},
  {college: 'Dayton', mascot: 'Flyers'},
  {college: 'Delaware', mascot: "Fightin' Blue Hens"},
  {college: 'Delaware State University', mascot: 'Hornets'},
  {college: 'Denver', mascot: 'Pioneers'},
  {college: 'DePaul University', mascot: 'Blue Demons'},
  {college: 'Detroit Mercy', mascot: 'Titans'},
  {college: 'Drake University', mascot: 'Bulldogs'},
  {college: 'Drexel University', mascot: 'Dragons'},
  {college: 'Duke University', mascot: 'Blue Devils'},
  {college: 'Duquesne University', mascot: 'Dukes'},
  {college: 'East Carolina University', mascot: 'Pirates'},
  {college: 'East Tennessee State University', mascot: 'Buccaneers'},
  {college: 'Eastern Illinois University', mascot: 'Panthers'},
  {college: 'Eastern Kentucky University', mascot: 'Colonels'},
  {college: 'Eastern Michigan University', mascot: 'Eagles'},
  {college: 'Eastern Washington University', mascot: 'Eagles'},
  {college: 'Elon University', mascot: 'Phoenix'},
  {college: 'Evansville', mascot: 'Purple Aces'},
  {college: 'Fairfield University', mascot: 'Stags'},
  {college: 'Fairleigh Dickinson University', mascot: 'Knights'},
  {college: 'Florida', mascot: 'Gators'},
  {college: 'Florida A&M University', mascot: 'Rattlers'},
  {college: 'Florida Atlantic University', mascot: 'Owls'},
  {college: 'Florida Gulf Coast University', mascot: 'Eagles'},
  {college: 'Florida International University', mascot: 'Panthers'},
  {college: 'Florida State University', mascot: 'Seminoles'},
  {college: 'Fordham University', mascot: 'Rams'},
  {college: 'Furman University', mascot: 'Paladins'},
  {college: 'Gardner-Webb University', mascot: "Runnin' Bulldogs"},
  {college: 'George Mason University', mascot: 'Patriots'},
  {college: 'George Washington University', mascot: 'Colonials'},
  {college: 'Georgetown University', mascot: 'Hoyas'},
  {college: 'Georgia', mascot: 'Bulldogs'},
  {college: 'Georgia Southern University', mascot: 'Eagles'},
  {college: 'Georgia State University', mascot: 'Panthers'},
  {college: 'Georgia Technology', mascot: 'Yellow Jackets'},
  {college: 'Gonzaga University', mascot: 'Bulldogs'},
  {college: 'Grambling State University', mascot: 'Tigers'},
  {college: 'Grand Canyon University', mascot: 'Antelopes'},
  {college: 'Hampton University', mascot: 'Pirates'},
  {college: 'Hartford', mascot: 'Hawks'},
  {college: 'Harvard University', mascot: 'Crimson'},
  {college: 'Hawaii Manoa', mascot: 'Rainbow Warriors'},
  {college: 'High Point University', mascot: 'Panthers'},
  {college: 'Hofstra University', mascot: 'Pride'},
  {college: 'Houston', mascot: 'Cougars'},
  {college: 'Houston Baptist University', mascot: 'Huskies'},
  {college: 'Howard University', mascot: 'Bison'},
  {college: 'Idaho', mascot: 'Vandals'},
  {college: 'Idaho State University', mascot: 'Bengals'},
  {college: 'Illinois Chicago', mascot: 'Flames'},
  {college: 'Illinois State University', mascot: 'Redbirds'},
  {college: 'Illinois Urbana–Champaign', mascot: 'Fighting Illini'},
  {college: 'Incarnate Word', mascot: 'Cardinals'},
  {college: 'Indiana State University', mascot: 'Sycamores'},
  {college: 'Indiana University', mascot: 'Hoosiers'},
  {college: 'Iona College', mascot: 'Gaels'},
  {college: 'Iowa', mascot: 'Hawkeyes'},
  {college: 'Iowa State University', mascot: 'Cyclones'},
  {college: 'IUPUFW', mascot: 'Mastodons'},
  {college: 'IUPUI', mascot: 'Jaguars'},
  {college: 'Jackson State University', mascot: 'Tigers'},
  {college: 'Jacksonville State University', mascot: 'Gamecocks'},
  {college: 'Jacksonville University', mascot: 'Dolphins'},
  {college: 'James Madison University', mascot: 'Dukes'},
  {college: 'Kansas', mascot: 'Jayhawks'},
  {college: 'Kansas State University', mascot: 'Wildcats'},
  {college: 'Kennesaw State University', mascot: 'Owls'},
  {college: 'Kent State University', mascot: 'Golden Flashes'},
  {college: 'Kentucky', mascot: 'Wildcats'},
  {college: 'La Salle University', mascot: 'Explorers'},
  {college: 'Lafayette College', mascot: 'Leopards'},
  {college: 'Lamar University', mascot: 'Cardinals'},
  {college: 'Lehigh University', mascot: 'Mountain Hawks'},
  {college: 'Liberty University', mascot: 'Flames'},
  {college: 'Lipscomb University', mascot: 'Bisons'},
  {college: 'Long Beach State University', mascot: '49ers'},
  {college: 'Long Island University–Brooklyn', mascot: 'Blackbirds'},
  {college: 'Longwood University', mascot: 'Lancers'},
  {college: 'Louisiana Lafayette', mascot: "Ragin' Cajuns"},
  {college: 'Louisiana Monroe', mascot: 'Warhawks'},
  {college: 'Louisiana State University', mascot: 'Tigers'},
  {college: 'Louisiana Tech University', mascot: 'Bulldogs'},
  {college: 'Louisville', mascot: 'Cardinals'},
  {college: 'Loyola Marymount University', mascot: 'Lions'},
  {college: 'Loyola University Chicago', mascot: 'Ramblers'},
  {college: 'Loyola University Maryland', mascot: 'Greyhounds'},
  {college: 'Maine', mascot: 'Black Bears'},
  {college: 'Manhattan College', mascot: 'Jaspers'},
  {college: 'Marist College', mascot: 'Red Foxes'},
  {college: 'Marquette University', mascot: 'Golden Eagles'},
  {college: 'Marshall University', mascot: 'Thundering Herd'},
  {college: 'Maryland Baltimore County', mascot: 'Retrievers'},
  {college: 'Maryland College Park', mascot: 'Terrapins'},
  {college: 'Maryland Eastern Shore', mascot: 'Hawks'},
  {college: 'Massachusetts Amherst', mascot: 'Minutemen'},
  {college: 'Massachusetts Lowell', mascot: 'River Hawks'},
  {college: 'McNeese State University', mascot: 'Cowboys'},
  {college: 'Memphis', mascot: 'Tigers'},
  {college: 'Mercer University', mascot: 'Bears'},
  {college: 'Miami (Florida)', mascot: 'Hurricanes'},
  {college: 'Miami University (Ohio)', mascot: 'Redhawks'},
  {college: 'Michigan', mascot: 'Wolverines'},
  {college: 'Michigan State University', mascot: 'Spartans'},
  {college: 'Middle Tennessee State University', mascot: 'Blue Raiders'},
  {college: 'Minnesota', mascot: 'Golden Gophers'},
  {college: 'Mississippi', mascot: 'Rebels'},
  {college: 'Mississippi State University', mascot: 'Bulldogs'},
  {college: 'Mississippi Valley State University', mascot: 'Delta Devils'},
  {college: 'Missouri Columbia', mascot: 'Tigers'},
  {college: 'Missouri State University', mascot: 'Bears'},
  {college: 'Missouri-Kansas City', mascot: 'Kangaroos'},
  {college: 'Monmouth University', mascot: 'Hawks'},
  {college: 'Montana', mascot: 'Grizzlies'},
  {college: 'Montana State University', mascot: 'Bobcats'},
  {college: 'Morehead State University', mascot: 'Eagles'},
  {college: 'Morgan State University', mascot: 'Bears'},
  {college: "Mount St. Mary's University", mascot: 'Mountaineers'},
  {college: 'Murray State University', mascot: 'Racers'},
  {college: 'Nebraska Lincoln', mascot: 'Cornhuskers'},
  {college: 'Nebraska Omaha', mascot: 'Mavericks'},
  {college: 'Nevada Reno', mascot: 'Wolf Pack'},
  {college: 'New Hampshire', mascot: 'Wildcats'},
  {college: 'New Jersey Institute of Technology', mascot: 'Highlanders'},
  {college: 'New Mexico', mascot: 'Lobos'},
  {college: 'New Mexico State University', mascot: 'Aggies'},
  {college: 'New Orleans', mascot: 'Privateers'},
  {college: 'Niagara University', mascot: 'Purple Eagles'},
  {college: 'Nicholls State University', mascot: 'Colonels'},
  {college: 'Norfolk State University', mascot: 'Spartans'},
  {college: 'North Carolina A&T', mascot: 'Aggies'},
  {college: 'North Carolina Asheville', mascot: 'Bulldogs'},
  {college: 'North Carolina Central University', mascot: 'Eagles'},
  {college: 'North Carolina Chapel Hill', mascot: 'Tar Heels'},
  {college: 'North Carolina Charlotte', mascot: '49ers'},
  {college: 'North Carolina Greensboro', mascot: 'Spartans'},
  {college: 'North Carolina State University', mascot: 'Wolfpack'},
  {college: 'North Carolina Wilmington', mascot: 'Seahawks'},
  {college: 'North Dakota', mascot: 'Fighting Hawks'},
  {college: 'North Dakota State University', mascot: 'Bison'},
  {college: 'North Florida', mascot: 'Ospreys'},
  {college: 'North Texas', mascot: 'Mean Green'},
  {college: 'Northeastern University', mascot: 'Huskies'},
  {college: 'Northern Arizona University', mascot: 'Lumberjacks'},
  {college: 'Northern Colorado', mascot: 'Bears'},
  {college: 'Northern Illinois University', mascot: 'Huskies'},
  {college: 'Northern Iowa', mascot: 'Panthers'},
  {college: 'Northern Kentucky University', mascot: 'Norse'},
  {college: 'Northwestern State University', mascot: 'Demons'},
  {college: 'Northwestern University', mascot: 'Wildcats'},
  {college: 'Notre Dame', mascot: 'Fighting Irish'},
  {college: 'Oakland University', mascot: 'Golden Grizzlies'},
  {college: 'Ohio State University', mascot: 'Buckeyes'},
  {college: 'Ohio University', mascot: 'Bobcats'},
  {college: 'Oklahoma', mascot: 'Sooners'},
  {college: 'Oklahoma State University', mascot: 'Cowboys'},
  {college: 'Old Dominion University', mascot: 'Monarchs'},
  {college: 'Oral Roberts University', mascot: 'Golden Eagles'},
  {college: 'Oregon', mascot: 'Ducks'},
  {college: 'Oregon State University', mascot: 'Beavers'},
  {college: 'Pacific', mascot: 'Tigers'},
  {college: 'Pennsylvania', mascot: 'Quakers'},
  {college: 'Pennsylvania State University', mascot: 'Nittany Lions'},
  {college: 'Pepperdine University', mascot: 'Waves'},
  {college: 'Pittsburgh', mascot: 'Panthers'},
  {college: 'Portland', mascot: 'Pilots'},
  {college: 'Portland State University', mascot: 'Vikings'},
  {college: 'Prairie View A&M University', mascot: 'Panthers'},
  {college: 'Presbyterian College', mascot: 'Blue Hose'},
  {college: 'Princeton University', mascot: 'Tigers'},
  {college: 'Providence College', mascot: 'Friars'},
  {college: 'Purdue University', mascot: 'Boilermakers'},
  {college: 'Quinnipiac University', mascot: 'Bobcats'},
  {college: 'Radford University', mascot: 'Highlanders'},
  {college: 'Rhode Island', mascot: 'Rams'},
  {college: 'Rice University', mascot: 'Owls'},
  {college: 'Richmond', mascot: 'Spiders'},
  {college: 'Rider University', mascot: 'Broncs'},
  {college: 'Robert Morris University', mascot: 'Colonials'},
  {college: 'Rutgers University', mascot: 'Scarlet Knights'},
  {college: 'Sacred Heart University', mascot: 'Pioneers'},
  {college: 'Saint Francis University', mascot: 'Red Flash'},
  {college: "Saint Joseph's University", mascot: 'Hawks'},
  {college: 'Saint Louis University', mascot: 'Billikens'},
  {college: "Saint Mary's College of California", mascot: 'Gaels'},
  {college: "Saint Peter's University", mascot: 'Peacocks'},
  {college: 'Sam Houston State University', mascot: 'Bearkats'},
  {college: 'Samford University', mascot: 'Bulldogs'},
  {college: 'San Diego', mascot: 'Toreros'},
  {college: 'San Diego State University', mascot: 'Aztecs'},
  {college: 'San Francisco', mascot: 'Dons'},
  {college: 'San Jose State University', mascot: 'Spartans'},
  {college: 'Santa Clara University', mascot: 'Broncos'},
  {college: 'Savannah State University', mascot: 'Tigers'},
  {college: 'Seattle University', mascot: 'Redhawks'},
  {college: 'Seton Hall University', mascot: 'Pirates'},
  {college: 'Siena College', mascot: 'Saints'},
  {college: 'South Alabama', mascot: 'Jaguars'},
  {college: 'South Carolina', mascot: 'Gamecocks'},
  {college: 'South Carolina State University', mascot: 'Bulldogs'},
  {college: 'South Carolina Upstate', mascot: 'Spartans'},
  {college: 'South Dakota', mascot: 'Coyotes'},
  {college: 'South Dakota State University', mascot: 'Jackrabbits'},
  {college: 'South Florida', mascot: 'Bulls'},
  {college: 'Southeast Missouri State University', mascot: 'Redhawks'},
  {college: 'Southeastern Louisiana University', mascot: 'Lions'},
  {college: 'Southern Illinois University Carbondale', mascot: 'Salukis'},
  {college: 'Southern Illinois University Edwardsville', mascot: 'Cougars'},
  {college: 'Southern Methodist University', mascot: 'Mustangs'},
  {college: 'Southern Mississippi', mascot: 'Golden Eagles'},
  {college: 'Southern University', mascot: 'Jaguars'},
  {college: 'Southern Utah University', mascot: 'Thunderbirds'},
  {college: 'St. Bonaventure University', mascot: 'Bonnies'},
  {college: 'St. Francis College', mascot: 'Terriers'},
  {college: "St. John's University", mascot: 'Red Storm'},
  {college: 'Stanford University', mascot: 'Cardinal'},
  {college: 'Stephen F. Austin State University', mascot: 'Lumberjacks'},
  {college: 'Stetson University', mascot: 'Hatters'},
  {college: 'Stony Brook University', mascot: 'Seawolves'},
  {college: 'Syracuse University', mascot: 'Orange'},
  {college: 'Temple University', mascot: 'Owls'},
  {college: 'Tennessee', mascot: 'Volunteers'},
  {college: 'Tennessee Chattanooga', mascot: 'Mocs'},
  {college: 'Tennessee Martin', mascot: 'Skyhawks'},
  {college: 'Tennessee State University', mascot: 'Tigers'},
  {college: 'Tennessee Technological University', mascot: 'Golden Eagles'},
  {college: 'Texas A&M University', mascot: 'Aggies'},
  {college: 'Texas A&M University–Corpus Christi', mascot: 'Islanders'},
  {college: 'Texas Arlington', mascot: 'Mavericks'},
  {college: 'Texas Austin', mascot: 'Longhorns'},
  {college: 'Texas Christian University', mascot: 'Horned Frogs'},
  {college: 'Texas El Paso', mascot: 'Miners'},
  {college: 'Texas Rio Grande Valley', mascot: 'Vaqueros'},
  {college: 'Texas San Antonio', mascot: 'Roadrunners'},
  {college: 'Texas Southern University', mascot: 'Tigers'},
  {college: 'Texas State University', mascot: 'Bobcats'},
  {college: 'Texas Tech University', mascot: 'Red Raiders'},
  {college: 'Toledo', mascot: 'Rockets'},
  {college: 'Towson University', mascot: 'Tigers'},
  {college: 'Troy University', mascot: 'Trojans'},
  {college: 'Tulane University', mascot: 'Green Wave'},
  {college: 'Tulsa', mascot: 'Golden Hurricane'},
  {college: 'U.S. Air Force Academy', mascot: 'Falcons'},
  {college: 'U.S. Military Academy', mascot: 'Black Knights'},
  {college: 'U.S. Naval Academy', mascot: 'Midshipmen'},
  {college: 'UCLA', mascot: 'Bruins'},
  {college: 'UNLV', mascot: 'Rebels'},
  {college: 'USC', mascot: 'Trojans'},
  {college: 'Utah', mascot: 'Utes'},
  {college: 'Utah State University', mascot: 'Aggies'},
  {college: 'Utah Valley University', mascot: 'Wolverines'},
  {college: 'Valparaiso University', mascot: 'Crusaders'},
  {college: 'Vanderbilt University', mascot: 'Commodores'},
  {college: 'Vermont', mascot: 'Catamounts'},
  {college: 'Villanova University', mascot: 'Wildcats'},
  {college: 'Virginia', mascot: 'Cavaliers'},
  {college: 'Virginia Commonwealth University', mascot: 'Rams'},
  {college: 'Virginia Military Institute', mascot: 'Keydets'},
  {college: 'Virginia Tech', mascot: 'Hokies'},
  {college: 'Wagner College', mascot: 'Seahawks'},
  {college: 'Wake Forest University', mascot: 'Demon Deacons'},
  {college: 'Washington', mascot: 'Huskies'},
  {college: 'Washington State University', mascot: 'Cougars'},
  {college: 'Weber State University', mascot: 'Wildcats'},
  {college: 'West Virginia University', mascot: 'Mountaineers'},
  {college: 'Western Carolina University', mascot: 'Catamounts'},
  {college: 'Western Illinois University', mascot: 'Leathernecks'},
  {college: 'Western Kentucky University', mascot: 'Hilltoppers'},
  {college: 'Western Michigan University', mascot: 'Broncos'},
  {college: 'Wichita State University', mascot: 'Shockers'},
  {college: 'Winthrop University', mascot: 'Eagles'},
  {college: 'Wisconsin Green Bay', mascot: 'Phoenix'},
  {college: 'Wisconsin Madison', mascot: 'Badgers'},
  {college: 'Wisconsin Milwaukee', mascot: 'Panthers'},
  {college: 'Wofford College', mascot: 'Terriers'},
  {college: 'Wright State University', mascot: 'Raiders'},
  {college: 'Wyoming', mascot: 'Cowboys'},
  {college: 'Xavier University', mascot: 'Musketeers'},
  {college: 'Yale University', mascot: 'Bulldogs'},
  {college: 'Youngstown State University', mascot: 'Penguins'}
]

const rivalsDB = {
  2019: 3557,
  2020: 3566,
  2021: 3572
}
const rivalsUrl = year =>
  `https://n.rivals.com/api/v1/ranks/${
    rivalsDB[year]
  }/prospects?start=0&position=ALL%20POSITIONS&pageSize=150`

module.exports = {
  collegeList,
  collegeArray,
  rivalsUrl
}
