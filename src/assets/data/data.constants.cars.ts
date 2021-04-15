export const CARS = [
  {
    id: '0308202883',
    brand: 'CHEVROLET',
    model: 'Camaro Z/28',
    year: 1967,
    color: 'red',
    class: 'muscle car',
    category: 'coupe',
    image: './assets/images/z28-camaro.jpg',
    liked: false,
    newItem: false,
    transmission: 'Tremec TR6060 six-speed manual',
    description:
      'The legendary Z/28 returns but forget the 80s: This one takes its inspiration from the original Z/28 of 1967. It’s a serious track car—more than 300 pounds lighter than a ZL1—powered by a 505-hp 7.0-liter V-8 mated to a six-speed manual. With a unique suspension and 19-inch wheels, it hugs the track like a lover, pulling more than 1.0 g on the skidpad and lapping the Nürburgring faster than a new Porsche 911. It’s not designed for the street—even A/C is optional—and availability is limited.',
  },
  {
    id: '0127594376',
    brand: 'PAGANI',
    model: 'Huayra BC',
    year: null,
    color: 'white',
    class: 'sport car',
    category: 'coupe',
    image: './assets/images/pagani-huayra.jpg',
    liked: false,
    newItem: false,
    transmission: 'Xtrac 7-speed sequential manual',
    description:
      "Pagani has a reputation for creating some of the world's rarest, most valuable, and most extreme hypercars. The company's Huayra that replaced the wildly successful Zonda was the first turbocharged hypercar it made, and as incredibly impressive as that machine still is, years on from its 2012 debut, Horacio Pagani is not known for leaving well enough alone - the numerous iterations of the Zonda are a testament to that. However, the new Huayra BC is more than just a more extreme Huayra with more power and less weight. It is also a tribute to Benny Caiola, Mr. Pagani's late friend and the first-ever Pagani customer. With a revised version of the Huayra's 6.0-liter twin-turbo V12 powerplant putting out 745 horsepower and 738 lb-ft of torque, we think Mr. Caiola would have loved this, and would certainly have wanted to own one of the 20 units built.",
  },
  {
    id: '4728482911',
    brand: 'MCL',
    model: 'P1',
    year: null,
    color: 'white',
    class: 'sport',
    category: 'coupe',
    image: './assets/images/mclaren-p1.jpg',
    liked: true,
    newItem: false,
    transmission: '7-speed dual clutch',
    description:
      'The McLaren P1 is a limited-production mid-engine plug-in hybrid sports car produced by British automobile manufacturer McLaren Automotive. Debuted at the 2012 Paris Motor Show, sales of the P1 began in the United Kingdom in October 2013 and all 375 units were sold out by November. Production ended in early December 2015. The United States accounted for 34% of the units and Europe for 26%.',
  },
  {
    id: '4242867698',
    brand: 'TOYOTA',
    model: 'Celica',
    year: null,
    color: 'black',
    class: 'sport',
    category: 'coupe',
    image: './assets/images/toyota-celica.jpg',
    liked: false,
    newItem: false,
    transmission:
      '4-speed W40 manual, 5-speed W50 manual, 3-speed A40 automatic',
    description:
      'The Toyota Celica is an automobile produced by Toyota from 1970 to 2006. The Celica name derives from the Latin word coelica meaning "heavenly" or "celestial". In Japan, the Celica was exclusive to the Toyota Corolla Store dealer chain.',
  },
  {
    id: '9285516267',
    brand: 'FORD',
    model: 'GT',
    year: 2006,
    color: 'white',
    class: 'sport',
    category: 'roadster',
    image: './assets/images/ford-gt.jpg',
    liked: false,
    newItem: false,
    transmission: 'a seven-speed dual-clutch automatic',
    description:
      "The Ford GT is a mid-engine two-seater supercar manufactured and marketed by American automobile manufacturer Ford for the 2005 model year in conjunction with the company's 2003 centenary. The second generation Ford GT became available for the 2017 model year.",
  },
  {
    id: '8665532184',
    brand: 'AUDI',
    model: 'A6',
    year: 2015,
    color: 'silver',
    class: 'executive car',
    category: 'sedan',
    image: './assets/images/audi-a6.jpg',
    liked: false,
    newItem: false,
    transmission: '8-speed tiptronic',
    description:
      "The Audi A6 is an executive car made by the German automaker Audi. Now in its fifth generation, the successor to the Audi 100 is manufactured in Neckarsulm, Germany, and is available in saloon and estate configurations, the latter marketed by Audi as the Avant. Audi's internal numbering treats the A6 as a continuation of the Audi 100 lineage, with the initial A6 designated as a member of the C4-series, followed by the C5, C6, C7, and the C8. The related Audi A7 is essentially a Sportback (liftback) version of the C7-series and C8-series A6 but is marketed under its own separate identity and model designation.",
  },
  {
    id: '8992876242',
    brand: 'JEEP',
    model: 'Wrangler',
    year: 2011,
    color: 'yellow',
    category: 'offroader',
    image: './assets/images/jeep-wrangler.jpg',
    liked: true,
    newItem: false,
    transmission:
      '4-speed Ultradrive 42RLE automatic, 5-speed Mercedes-Benz W5A580 automatic, 5-speed Chrysler 545RFE automatic, 6-speed Chrysler NSG370 manual',
    description:
      "The Jeep Wrangler is a series of compact and mid-size (2-door Wrangler, and a longer wheelbase / 4-door Wrangler Unlimited) four-wheel drive off-road SUVs, manufactured by Jeep since 1986, and currently in its fourth generation. The Wrangler JL, the most recent generation, was unveiled in late 2017 and is produced at Jeep's Toledo Complex.",
  },
  {
    id: '8440038264',
    brand: 'TOYOTA',
    model: 'FJ Cruiser',
    year: 2006,
    color: 'aquamarine',
    category: 'offroader',
    class: 'crossover',
    image: './assets/images/toyota-fj-cruiser.jpg',
    liked: false,
    newItem: false,
    transmission: '6-speed manual (4WD only), 5-speed automatic',
    description:
      'The Toyota FJ Cruiser is a retro style, mid-size SUV. Introduced as a concept car at the January 2003 North American International Auto Show, the FJ Cruiser was approved for production after positive consumer response and debuted at the January 2005 North American International Auto Show in final production form.',
  },
  {
    id: '0474584043',
    brand: 'TOYOTA',
    model: 'Rav4',
    year: 2019,
    color: 'white',
    category: 'offroader',
    class: 'crossover',
    image: './assets/images/toyota-rav4.jpg',
    liked: false,
    newItem: false,
    transmission: 'four-speed automatic',
    description:
      'The Toyota RAV4 (Japanese: トヨタ・RAV4 (ラヴフォー), Hepburn: Toyota Ravufō) is a compact crossover SUV (sport utility vehicle) produced by the Japanese automobile manufacturer Toyota. This was the first compact crossover SUV; it made its debut in Japan and Europe in 1994, and in North America in 1995, being launched in January 1996. The vehicle was designed for consumers wanting a vehicle that had most of the benefits of SUVs, such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with the maneuverability and fuel economy of a compact car.',
  },
  {
    id: '8480304426',
    brand: 'PORSCHE',
    model: '911 GT2 RS',
    year: null,
    color: 'red',
    class: 'sport',
    category: 'coupe',
    image: './assets/images/porsche-911-gt2.jpg',
    liked: false,
    newItem: false,
    transmission:
      'Rigidly mounted performance-based 7-speed PDK-gearbox (DCT, dual clutch transmission) with short, succinct gearshifts',
    description:
      'The engineers took the serial coupe Porsche 911 Turbo S as a basis, but the amount of modifications is very significant, and the power unit is not in the first place here. The 3.8 has larger turbochargers, a new titanium exhaust system, and an improved cooling system. Power has been increased from 580 to 700 hp, although the peak torque remains the same - 750 Nm at 2500 rpm. And so that the engine can deliver the declared output for a long time, an intercooler sprinkler system is installed with water: there is a five-liter tank in the front trunk, and in case of strong heating, the nozzles spray liquid onto the surface of the radiator.',
  },
  {
    id: '0776681260',
    brand: 'KENWORTH',
    model: 'T700',
    year: null,
    color: 'black',
    image: './assets/images/kenworth-t700.jpg',
    liked: false,
    newItem: false,
    transmission: 'EATON-FULLER',
    description:
      'The new Kenworth T700 long-haul tractor will be an absolute assistant in your business step by step. you can move on it with great hope and confidence that it will not let you down. Optimum Fuel Efficiency: Just a glance at the aerodynamic appearance of the Kenworth T700 makes it clear that fuel consumption will be kept to a minimum.',
  },
  {
    id: '8730522046',
    brand: 'PORSCHE',
    model: 'Boxster S',
    year: null,
    color: 'blue',
    class: 'sport',
    category: 'roadster',
    image: './assets/images/porsche-boxter.jpg',
    liked: false,
    newItem: false,
    transmission:
      '5-speed automatic, 5-speed manual, 6-speed manual, 7-speed PDK',
    description:
      'The name Boxster is formed from two words - boxer (boxer engine) and roadster (open 2-seater sports body). The car has been produced since 1996, almost immediately gaining recognition.',
  },
  {
    id: '5087979074',
    brand: 'BMW',
    model: 'X5',
    year: null,
    color: 'blue',
    category: 'offroader',
    image: './assets/images/bmw_x5.jpg',
    liked: false,
    newItem: false,
    transmission:
      '5-speed manual, 6-speed manual, 5-speed automatic, 6-speed automatic',
    description:
      'The BMW E53 is the first generation BMW X5 mid-size luxury crossover SUV. The vehicle was the first SUV ever produced by BMW. It was produced between 1999 and 2006 and was replaced by the E70 X5.',
  },
  {
    id: '2825286862',
    brand: 'HONDA',
    model: 'Integra Type R',
    year: null,
    color: 'black',
    category: 'sedan',
    image: './assets/images/Honda_Integra_Type_R.jpg',
    liked: false,
    newItem: false,
    transmission: '5-speed manual, 6-speed manual, 5-speed automatic',
    description:
      'The Honda Integra, marketed in North America as the Acura Integra, is an automobile produced by Japanese automobile manufacturer Honda from 1986 to 2006. It succeeded the Honda Quint as a more luxurious and sport-oriented derivative of the Civic. The Integra was one of the launch models for Acura in the US in 1986 alongside Acura Legend. Throughout its life, the Integra was highly regarded for its handling and performance. The Integra Type R is widely regarded as one of the best front-wheel-drive cars of all time.',
  },
  {
    id: '6693123606',
    brand: 'BMW',
    model: 'Z8',
    year: null,
    color: 'red',
    category: 'roadster',
    image: './assets/images/bmw-z8.jpg',
    liked: false,
    newItem: false,
    transmission: '6-speed manual, 5-speed automatic (Alpina version)',
    description:
      'The BMW Z8 is a roadster produced by German automotive manufacturer BMW from 2000 to 2003. The Z8 was developed under the codename "E52" between 1993 and 1999, through the efforts of a design team led by Chris Bangle from 1993 to 1995.[2] The exterior was designed by Henrik Fisker and the interior by Scott Lempert.',
  },
  {
    id: '0279543552',
    brand: 'SUBARU',
    model: 'Impreza',
    year: null,
    color: 'blue',
    class: 'sport',
    category: 'sedan',
    image: './assets/images/subaru-impreza.jpg',
    liked: false,
    newItem: false,
    transmission: '4-speed automatic, 5-speed manual',
    description:
      "The Subaru Impreza is a compact car that has been manufactured by Subaru since 1992. It was introduced as a replacement for the Leone, with the predecessor's EA series engines replaced by the new EJ series. It is now in its fifth generation.",
  },
  {
    id: '0183253615',
    brand: 'BMW',
    model: 'M3',
    year: null,
    color: 'white',
    category: 'coupe',
    image: './assets/images/bmw-m3.jpg',
    liked: false,
    newItem: false,
    transmission: '5-speed manual',
    description:
      "The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division, BMW M GmbH. M3 models have been produced for every generation of 3 Series since the E30 M3 was introduced in 1986.",
  },
  {
    id: '7464518654',
    brand: 'AM',
    model: 'DB5',
    year: null,
    color: 'green',
    category: 'coupe',
    image: './assets/images/aston-martin_DB5.jpg',
    liked: false,
    newItem: false,
    transmission: '5-speed ZF box or optional BorgWarner 3-speed automatic',
    description:
      'The Aston Martin DB5 is a British luxury grand tourer (GT) that was made by Aston Martin and designed by the Italian coachbuilder Carrozzeria Touring Superleggera. Released in 1963, it was an evolution of the final series of DB4.',
  },
  {
    id: '8198524721',
    brand: 'JAGUAR',
    model: 'XK',
    year: null,
    color: 'red',
    category: 'coupe',
    image: './assets/images/jaguar_XK.jpg',
    liked: false,
    newItem: false,
    transmission: '5-speed automatic, 6-speed automatic',
    description:
      'The Jaguar XK is a two-door 2+2 grand tourer manufactured and marketed by British automobile manufacturer Jaguar Cars from 1996–2014 in coupé and convertible bodystyles, across two generations. The XK was introduced at the Geneva Motor Show in March 1996 and was discontinued in July 2014.',
  },
  {
    id: '0776779607',
    brand: 'VW',
    model: 'Classical Bus',
    year: 1962,
    color: 'yellow',
    image: './assets/images/VW_ClassicBus.jpg',
    liked: false,
    newItem: false,
    transmission: '4-speed manual, 3-speed automatic',
    description:
      'Volkswagen T1 is a car of the Volkswagen concern, produced from 1950 to 1967 (to 1975 in Brazil). One of the first civilian minivans. The car also became the face of an era and, along with its successor, the T2, was very popular with hippies. Also known as "hippiemobile" or "splitty".',
  },
  {
    id: '7885466312',
    brand: 'CHEVROLET',
    model: 'Corvette',
    year: 1957,
    color: 'red',
    class: 'retro',
    category: 'coupe',
    image: './assets/images/chevrolet-corvette.jpg',
    liked: false,
    newItem: false,
    transmission:
      '6-speed T-56 manual, 6-speed TR-6060 manual, 4-speed 4L65-E automatic (only for 2005, and 2006-07 Z06 on special request), 6-speed 6L80 automatic',
    description:
      "The Chevrolet Corvette, colloquially known as the 'Vette, is a two-door, two-passenger sports car manufactured and marketed by Chevrolet across more than 60 years of production and eight design generations.[2][3] From 1953 to 2019, it was front-engined, and since 2020, it is mid-engined.[4] With its generations noted sequentially from C1 to C8, the Corvette serves as Chevrolet's halo vehicle and is widely noted for its performance and distinctive plastic—either fiberglass or composite—bodywork.",
  },
  {
    id: '4619734159',
    brand: 'FORD',
    model: 'Model B',
    year: 1932,
    color: 'yellow',
    category: 'coupe',
    image: './assets/images/ford_modle_B.jpg',
    liked: false,
    newItem: false,
    transmission: '2-speed planetary',
    description:
      "The Ford Model B is an upscale touring car (with polished wood and brass trim) that was introduced in 1904 by Ford. It was built at the Ford Piquette Avenue Plant. It was Ford's first car to use the front-engine layout, with a large 24 hp 4-cylinder engine positioned at the front behind a conventional radiator. The smaller Model A-derived Model C positioned its flat 2-cylinder motor under the seat.",
  },
  {
    id: '4249123539',
    brand: 'BMW',
    model: 'Z4',
    year: null,
    color: 'black',
    category: 'roadster',
    image: './assets/images/bmw_z4.jpg',
    liked: false,
    newItem: false,
    transmission:
      '5-speed manual, 6-speed manual, 5-speed automatic, 6-speed SMG-II',
    description:
      'The BMW Z models are a line of roadsters manufactured by German automaker BMW. The Z stands for zukunft (German for future), and has been produced in four different series with six generations consisting of roadster, coupé, sports car, and concept variants.',
  },
  {
    id: '6046771395',
    brand: 'TOYOTA',
    model: 'Corolla',
    year: null,
    color: 'black',
    category: 'sedan',
    image: './assets/images/toyota_corolla.jpg',
    liked: false,
    newItem: false,
    transmission:
      '5-speed manual, 6-speed manual, 7-Speed CVT-i, 4-speed U140E Super ECT automatic, 6-speed MMT (Multi Mode Transmission) Semi automatic, 5-speed U150E automatic',
    description:
      'The Toyota Corolla (Japanese: トヨタ・カローラ, Toyota Karōra) is a line of subcompact and compact cars manufactured and marketed globally by Toyota. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then. In 1997, the Corolla became the best selling nameplate in the world, surpassing the Volkswagen Beetle. Toyota reached the milestone of 44 million Corollas sold over twelve generations in 2016. The series has undergone several major redesigns.',
  },
  {
    id: '5244394239',
    brand: 'BENTLEY',
    model: 'Continental GT',
    year: 2010,
    color: 'red',
    category: 'coupe',
    image: './assets/images/bentley_continental_GT.jpg',
    liked: false,
    newItem: false,
    transmission:
      '8-speed ZF transmission with Quickshift and steering column mounted gearshift paddles',
    description:
      "The Bentley Continental GT is a grand tourer manufactured and marketed by British automaker Bentley Motors since 2003. It was the first car released by Bentley under Volkswagen AG management, after the company's acquisition in 1998, and the first Bentley to employ mass production manufacturing techniques.",
  },
  {
    id: '3495135933',
    brand: 'FORD',
    model: 'Mustang',
    year: 1964,
    color: 'white',
    category: 'coupe',
    image: './assets/images/ford_mustang.jpg',
    liked: false,
    newItem: false,
    transmission:
      '6-Speed manual (Tremec TR-3160), Getrag / Ford MT82) (2015-2017), Getrag / Ford MT82-D4) (2018-), Ford 6-Speed (6R80) automatic (2015-2017), Ford 10-speed automatic (10R80) (2018-)',
    description:
      'The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate. The namesake of the "pony car" automobile segment, the Mustang was developed as a highly styled line of sporty coupes and convertibles derived from existing model lines, initially distinguished by "long hood, short deck" proportions.',
  },
  {
    id: '6289616465',
    brand: 'DODGE',
    model: 'Ram',
    year: null,
    color: 'black',
    category: 'pickup truck',
    image: './assets/images/dodge-ram.jpg',
    liked: false,
    newItem: false,
    transmission: '46RE',
    description:
      'The Ram pickup (Dodge Ram until 2010) is a full-size pickup truck manufactured by Stellantis North America (formerly Chrysler Group LLC and FCA US LLC) and marketed from 2010 onwards under the Ram Trucks brand. The current fifth-generation Ram debuted at the 2018 North American International Auto Show in Detroit, Michigan, in January of that year.',
  },
  {
    id: '5787095042',
    brand: 'CHEVROLET',
    model: '3100 Wrecker',
    year: 1953,
    color: 'black',
    image: './assets/images/chevrolet_3100_wrecker.jpg',
    liked: false,
    newItem: false,
    transmission: '-',
    description:
      'The Chevrolet 3100 Wrecker truck model from the well-known Kinsmart company will be an interesting addition to an existing collection or help to create a new one! Your child will love to play with this funny toy, because it has opening doors and a movable tap, which will be very interesting while playing with your friends!',
  },
  {
    id: '8149093713',
    brand: 'MB',
    model: 'SLS AMG',
    year: null,
    color: 'red',
    category: 'coupe',
    image: './assets/images/mercedes-amg.jpg',
    liked: true,
    newItem: false,
    transmission: '7-speed dual-clutch automatic',
    description:
      'The Mercedes-Benz SLS AMG (C197 / R197) is a front mid-engine, 2-seater, limited production grand tourer developed by the Mercedes-AMG division of German automotive manufacturer Mercedes-Benz, with the assistance of David Coulthard.[4] The car, which is the successor to the Mercedes-Benz SLR McLaren and was described by Mercedes-Benz as a spiritual successor to the Mercedes-Benz 300SL Gullwing, mainly because it was inspired by the latter. SLS stands for "Super Leicht Sport" (Super Light Sport).',
  },
  {
    id: '1964343303',
    brand: 'MITSUBISHI',
    model: 'Lancer Evolution VII WRC',
    year: null,
    color: 'red',
    category: 'sedan',
    image: './assets/images/mitsubishi_lancer_evolution_7_WRC.jpg',
    liked: false,
    newItem: false,
    transmission:
      '6-speed TC-SST (2007–2015), 5-speed automatic (2002, 2006–2007), 5-speed manual (1992–2016 (final edition)), 6-speed manual (2003–2008)',
    description:
      "The Mitsubishi Lancer Evolution, commonly referred to as 'Evo', is a sports sedan based on the Lancer that was manufactured by Japanese manufacturer Mitsubishi Motors from 1992 until 2016. There have been ten official versions to date, and the designation of each model is most commonly a Roman numeral. All use two litre turbocharged inline four-cylinder engines and all-wheel drive systems.",
  },
  {
    id: '1977927518',
    brand: 'AUDI',
    model: 'A1',
    year: 2010,
    color: 'blue',
    category: 'sedan',
    image: './assets/images/audi_a1.jpg',
    liked: false,
    newItem: false,
    transmission:
      'manual transmission or the S tronic dual-clutch transmission',
    description:
      'The Audi A1 (internally designated Typ 8X) is a supermini car launched by Audi at the 2010 Geneva Motor Show. Sales of the initial three-door A1 model started in Germany in August 2010, with the United Kingdom following in November 2010. A five-door version, called Sportback, was launched in November 2011, with sales starting in export markets during spring 2012.',
  },
  {
    id: '8418804731',
    brand: 'CADILLAC',
    model: 'Series 62',
    year: 1953,
    color: 'pink',
    category: 'coupe',
    image: './assets/images/1568cadilac_series_62.jpg',
    liked: false,
    newItem: false,
    transmission:
      '3-speed selective synchromesh manual, 4-speed Hydra-Matic automatic',
    description:
      'The Cadillac Series 62 is a series of cars which was produced by Cadillac from 1940 through 1964. Originally designed to complement the entry level Series 65, it became the Cadillac Series 6200 in 1959, and remained that until it was renamed to Cadillac Calais for the 1965 model year. The Series 62 was also marketed as the Sixty-Two and the Series Sixty-Two.',
  },
  {
    id: '9335674445',
    brand: 'FORD',
    model: 'Thunderbird',
    year: 1955,
    color: 'red',
    category: 'coupe',
    image: './assets/images/ford-thunderbird.jpg',
    liked: false,
    newItem: false,
    transmission: 'AOD 4-speed automatic transmission',
    description:
      'Ford Thunderbird (colloquially called the T-Bird) is a personal luxury car produced by Ford from model years 1955 to 1997 and 2002 to 2005 throughout eleven distinct generations. Introduced as a two-seat convertible, the Thunderbird was produced in a variety of body configurations. These included a four-seat hardtop coupe, four-seat convertible, five-seat convertible and hardtop, four-door pillared hardtop sedan, six-passenger hardtop coupe, and five-passenger pillared coupe, with the final generation designed again as a two-seat convertible.',
  },
  {
    id: '6948076871',
    brand: 'SHELBY',
    model: 'Cobra 427 S/C',
    year: 1965,
    color: 'white',
    class: 'sport',
    category: 'roadster',
    image: './assets/images/shelby-cobra.jfif',
    liked: false,
    newItem: false,
    transmission: '4-Speed Top-Loader Manual',
    description:
      'The AC Cobra, sold in the United States as the Shelby Cobra and AC Shelby Cobra, is a British-American sports car with a Ford V8 engine, produced intermittently in both the UK and the US since 1962.',
  },
  {
    id: '5359105976',
    brand: 'LR',
    model: 'Range Rover sport',
    year: null,
    color: 'red',
    category: 'offroader',
    image: './assets/images/land-rover-range.jpg',
    liked: false,
    newItem: false,
    transmission:
      '8-speed automatic, 6-speed ZF automatic, 6-speed ZF HP28 automatic',
    description:
      'The Range Rover Sport is a British luxury mid-size SUV made by Land Rover. The first generation (codename: L320) started production in 2005, and was replaced by the second generation Sport (codename: L494) in 2013.',
  },
  {
    id: '6522434240',
    brand: 'FORD',
    model: 'Raptor SuperCrew',
    year: null,
    color: 'blue',
    category: 'pickup truck',
    image: './assets/images/ford-raptor.jpg',
    liked: false,
    newItem: false,
    transmission: '10-speed 10R80 automatic',
    description:
      "The extreme pickup Ford F-150 Raptor debuted in 2009 and became a hit. It turned out that in the States there are a lot of people who want to buy a truck on which they can recklessly bludgeon across the steppes, sands and broken primers. Ford is proud that the Raptor has sold better in the local market over the past four years than the Chevrolet Corvette or all of Porsche's sports cars combined. Therefore, the new generation super pickup is presented just six months after the base F-series.",
  },
  {
    id: '2948198567',
    brand: 'MB',
    model: 'X-Class',
    year: null,
    color: 'red',
    category: 'pickup truck',
    image: './assets/images/mercedes-x-class.jpg',
    liked: false,
    newItem: false,
    transmission: '6-speed manual, 7-speed automatic',
    description:
      'The Mercedes-Benz X-Class (W470) was a luxury pickup truck sold by the German automaker Mercedes-Benz, a division of German company Daimler AG. Unveiled at a world premiere in Cape Town in July 2017, the Mercedes-Benz pickup took its chassis from the Nissan Navara and employed many Mercedes-specific features and technologies (including some engines not shared with the Navara). It went on sale in late 2017.',
  },
];
