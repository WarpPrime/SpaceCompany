Game.starData = (function(){

	var instance = {};

	instance._201 = {
		name: "Alpha Centauri",
		distance: 4.3,
		planets: 1,
		faction: "Hyacinite Congregation",
		factionId: "hyacinite",
		desc: "Our Sun's nearest neighbor.",
		resource1: "Ice",
		resource2: "Hydrogen",
		stats: {
			"power": 30,
			"defense": 20,
			"speed": 5,
		},
	};

	instance._301 = {
		name: "Barnard's Star",
		distance: 5.94,
		planets: 0,
		faction: "Carnelian Resistance",
		factionId: "carnelian",
		desc: "The star with highest proper motion.",
		resource1: "Hydrogen",
		resource2: "Helium",
		stats: {
			"power": 52,
			"defense": 49,
			"speed": 6,
		},
	};

	instance._401 = {
		name: "CN Leonis",
		distance: 7.8,
		planets: 1,
		faction: "Prasnian Empire",
		factionId: "prasnian",
		desc: "Also known as Wolf 359.",
		resource1: "Lunarite",
		resource2: "Gem",
		stats: {
			"power": 86,
			"defense": 71,
			"speed": 8,
		},
	};

	instance._501 = {
		name: "Lalande 21185",
		distance: 8.31,
		planets: 1,
		faction: "Kitrinos Corporation",
		factionId: "kitrinos",
		desc: "The brightest red dwarf in Earth's northern hemisphere.",
		resource1: "Titanium",
		resource2: "Silicon",
		stats: {
			"power": 132,
			"defense": 117,
			"speed": 8,
		},
	};

	instance._701 = {
		name: "Gliese 65",
		distance: 8.55,
		planets: 1,
		faction: "Moviton Syndicate",
		factionId: "moviton",
		desc: "Also known as UV Ceti or Luyten 726-8.",
		resource1: "Charcoal",
		resource2: "Methane",
		stats: {
			"power": 146,
			"defense": 131,
			"speed": 10,
		},
	};

	instance._601 = {
		name: "Sirius",
		distance: 8.6,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "An A1V star, the brightest star in the night sky.",
		resource1: "Silicon",
		resource2: "Methane",
		stats: {
			"power": 110,
			"defense": 129,
			"speed": 8,
		},
	};

	instance._220901 = {
		name: "Luyten 726-8",
		distance: 9.69,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "The binary pair to Gliese 65, part of the same star system.",
		resource1: "Ice",
		resource2: "Metal",
		stats: {
			"power": 124,
			"defense": 299,
			"speed": 13,
		},
	};

	instance._130601 = {
		name: "V1216 Sagittarii",
		distance: 9.69,
		planets: 2,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "A young flare star.",
		resource1: "Gold",
		resource2: "Lava",
		stats: {
			"power": 144,
			"defense": 229,
			"speed": 12,
		},
	};

	instance._163901 = {
		name: "Ross 248",
		distance: 10.33,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A star that is quickly approaching the Sun, making an encounter of 3 light years in 30,000 years.",
		resource1: "Uranium",
		resource2: "Methane",
		stats: {
			"power": 273,
			"defense": 226,
			"speed": 15,
		},
	};

	instance._25101 = {
		name: "Epsilon Eridani",
		distance: 10.5,
		planets: 5,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "Also known as Ran, has a strong stellar wind.",
		resource1: "Hydrogen",
		resource2: "Metal",
		stats: {
			"power": 293,
			"defense": 112,
			"speed": 13,
		},
	};

	instance._158101 = {
		name: "Lacaille 9352",
		distance: 10.73,
		planets: 5,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "One of the brightest red dwarfs in the night sky.",
		resource1: "Oil",
		resource2: "Lava",
		stats: {
			"power": 443,
			"defense": 147,
			"speed": 7,
		},
	};

	instance._80101 = {
		name: "FI Virginis",
		distance: 10.89,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "Just another flare star...",
		resource1: "Hydrogen",
		resource2: "Helium",
		stats: {
			"power": 125,
			"defense": 198,
			"speed": 11,
		},
	};

	instance._217101 = {
		name: "EZ Aquarii",
		distance: 11.08,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A triple red dwarf system.",
		resource1: "Silver",
		resource2: "Metal",
		stats: {
			"power": 420,
			"defense": 143,
			"speed": 12,
		},
	};

	instance._181901 = {
		name: "Procyon",
		distance: 11.41,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A borderline F5 subgiant with a white dwarf companion.",
		resource1: "Gem",
		resource2: "Charcoal",
		stats: {
			"power": 397,
			"defense": 381,
			"speed": 5,
		},
	};

	instance._213301 = {
		name: "61 Cygni",
		distance: 11.43,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A binary K type system.",
		resource1: "Uranium",
		resource2: "Ice",
		stats: {
			"power": 289,
			"defense": 177,
			"speed": 11,
		},
	};

	instance._207601 = {
		name: "Struve 2398",
		distance: 11.64,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "Two red dwarfs orbiting each other.",
		resource1: "Helium",
		resource2: "Lunarite",
		stats: {
			"power": 203,
			"defense": 238,
			"speed": 7,
		},
	};

	instance._166701 = {
		name: "Groombridge 34",
		distance: 11.64,
		planets: 5,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "Just another pair of flare stars.",
		resource1: "Meteorite",
		resource2: "Silver",
		stats: {
			"power": 331,
			"defense": 286,
			"speed": 6,
		},
	};

	instance._224601 = {
		name: "SIPS 1259-4336",
		distance: 25.27,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "Just another red dwarf, making up 75% of the population of stars.",
		resource1: "Methane",
		resource2: "Gold",
		stats: {
			"power": 513,
			"defense": 164,
			"speed": 9,
		},
	};

	instance._58601 = {
		name: "DX Cancri",
		distance: 11.83,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "More red dwarfs?!",
		resource1: "Helium",
		resource2: "Methane",
		stats: {
			"power": 427,
			"defense": 184,
			"speed": 11,
		},
	};

	instance._151801 = {
		name: "Epsilon Indi",
		distance: 11.83,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "An orange K dwarf accompanied by two brown dwarfs.",
		resource1: "Gem",
		resource2: "Oil",
		stats: {
			"power": 317,
			"defense": 202,
			"speed": 8,
		},
	};

	instance._13601 = {
		name: "Tau Ceti",
		distance: 11.9,
		planets: 6,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A G8V solar analog 12 light years away.",
		resource1: "Silicon",
		resource2: "Silicon",
		stats: {
			"power": 491,
			"defense": 413,
			"speed": 6,
		},
	};

	instance._25401 = {
		name: "Gliese 1061",
		distance: 11.94,
		planets: 4,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "Stop with the red dwarfs!",
		resource1: "Uranium",
		resource2: "Gem",
		stats: {
			"power": 207,
			"defense": 372,
			"speed": 11,
		},
	};

	instance._10101 = {
		name: "YZ Ceti",
		distance: 12.2,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "Another flare star! Now with 4 planets.",
		resource1: "Gold",
		resource2: "Hydrogen",
		stats: {
			"power": 506,
			"defense": 334,
			"speed": 15,
		},
	};

	instance._51801 = {
		name: "Luyten's Star",
		distance: 12.39,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A stable nonvariable red dwarf.",
		resource1: "Uranium",
		resource2: "Titanium",
		stats: {
			"power": 320,
			"defense": 355,
			"speed": 7,
		},
	};

	instance._223901 = {
		name: "Teegarden's Star",
		distance: 12.4,
		planets: 4,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "An old red dwarf.",
		resource1: "Silver",
		resource2: "Meteorite",
		stats: {
			"power": 530,
			"defense": 337,
			"speed": 14,
		},
	};

	instance._35801 = {
		name: "Kapteyn's Star",
		distance: 12.78,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "An old M-type subdwarf three times the size of Jupiter, but with one-fifth the mass of the Sun.",
		resource1: "Lava",
		resource2: "Silver",
		stats: {
			"power": 468,
			"defense": 285,
			"speed": 10,
		},
	};

	instance._146301 = {
		name: "AX Microscopii",
		distance: 12.87,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "The brightest red dwarf in the night sky.",
		resource1: "Meteorite",
		resource2: "Silver",
		stats: {
			"power": 311,
			"defense": 466,
			"speed": 6,
		},
	};

	instance._216801 = {
		name: "DO Cephei",
		distance: 13.07,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A pair of red dwarfs, thought to be the origin of comet Borisov.",
		resource1: "Lunarite",
		resource2: "Ice",
		stats: {
			"power": 526,
			"defense": 490,
			"speed": 9,
		},
	};

	instance._224101 = {
		name: "DENIS 1048-3956",
		distance: 13.16,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A brown dwarf or ultra-low mass red dwarf.",
		resource1: "Wood",
		resource2: "Metal",
		stats: {
			"power": 587,
			"defense": 285,
			"speed": 12,
		},
	};

	instance._179501 = {
		name: "V577 Monocerotis",
		distance: 13.47,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A UV Ceti red dwarf variable.",
		resource1: "Charcoal",
		resource2: "Lava",
		stats: {
			"power": 430,
			"defense": 411,
			"speed": 7,
		},
	};

	instance._114001 = {
		name: "Wolf 1061",
		distance: 13.91,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A BY Draconis variable, hosting several super-Earths.",
		resource1: "Metal",
		resource2: "Meteorite",
		stats: {
			"power": 705,
			"defense": 479,
			"speed": 11,
		},
	};

	instance._194201 = {
		name: "Gliese 473",
		distance: 14.05,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "The 473rd entry in the Gliese catalog.",
		resource1: "Silver",
		resource2: "Lava",
		stats: {
			"power": 460,
			"defense": 465,
			"speed": 10,
		},
	};

	instance._6501 = {
		name: "van Maanen's Star",
		distance: 14.13,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "The nearest single white dwarf to us.",
		resource1: "Gold",
		resource2: "Silicon",
		stats: {
			"power": 588,
			"defense": 522,
			"speed": 8,
		},
	};

	instance._1101 = {
		name: "Gliese 1",
		distance: 14.22,
		planets: 3,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "A very young red dwarf.",
		resource1: "Silicon",
		resource2: "Methane",
		stats: {
			"power": 779,
			"defense": 410,
			"speed": 10,
		},
	};

	instance._15301 = {
		name: "WISE 1639-6847",
		distance: 14.57,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "An ultra-cool brown dwarf.",
		resource1: "Metal",
		resource2: "Hydrogen",
		stats: {
			"power": 568,
			"defense": 229,
			"speed": 15,
		},
	};

	instance._222401 = {
		name: "Luyten 143-23",
		distance: 15.75,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "Another red dwarf, but with a Super-Jupiter orbiting it.",
		resource1: "Lava",
		resource2: "Methane",
		stats: {
			"power": 527,
			"defense": 239,
			"speed": 6,
		},
	};

	instance._72501 = {
		name: "LP 731-58",
		distance: 14.76,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "Too many flare stars!",
		resource1: "Uranium",
		resource2: "Lava",
		stats: {
			"power": 620,
			"defense": 612,
			"speed": 15,
		},
	};

	instance._122601 = {
		name: "Gliese 687",
		distance: 14.77,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A red dwarf with a great business in harvesting Lunarite.",
		resource1: "Lunarite",
		resource2: "Lunarite",
		stats: {
			"power": 426,
			"defense": 317,
			"speed": 12,
		},
	};

	instance._121101 = {
		name: "Gliese 674",
		distance: 14.8,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "That one star coming after Gliese 673.",
		resource1: "Methane",
		resource2: "Hydrogen",
		stats: {
			"power": 750,
			"defense": 567,
			"speed": 14,
		},
	};

	instance._79501 = {
		name: "CC 658",
		distance: 15.07,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A white dwarf, fourth closest to the Sun.",
		resource1: "Lunarite",
		resource2: "Silver",
		stats: {
			"power": 675,
			"defense": 565,
			"speed": 8,
		},
	};

	instance._1501 = {
		name: "Gliese 1002",
		distance: 15.33,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A quiet red dwarf star.",
		resource1: "Gold",
		resource2: "Gold",
		stats: {
			"power": 410,
			"defense": 321,
			"speed": 6,
		},
	};

	instance._210501 = {
		name: "V1581 Cygni",
		distance: 15.39,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "A triple star system made of three red dwarfs.",
		resource1: "Meteorite",
		resource2: "Meteorite",
		stats: {
			"power": 479,
			"defense": 563,
			"speed": 14,
		},
	};

	instance._189701 = {
		name: "Gliese 1245",
		distance: 15.76,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "Add a three and get 12345.",
		resource1: "Helium",
		resource2: "Gold",
		stats: {
			"power": 708,
			"defense": 278,
			"speed": 10,
		},
	};

	instance._69601 = {
		name: "AD Leonis",
		distance: 16,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "Er, are there more red dwarfs?",
		resource1: "Gem",
		resource2: "Titanium",
		stats: {
			"power": 657,
			"defense": 767,
			"speed": 10,
		},
	};

	instance._148501 = {
		name: "Gliese 832",
		distance: 16.1,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "The (64 × 13)th entry in the Gliese catalog.",
		resource1: "Oil",
		resource2: "Methane",
		stats: {
			"power": 443,
			"defense": 384,
			"speed": 15,
		},
	};

	instance._175601 = {
		name: "Keid",
		distance: 16.45,
		planets: 4,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "AKA 40 Eridani, a triple star system consisting of an orange and red dwarf, and a white dwarf star.",
		resource1: "Wood",
		resource2: "Meteorite",
		stats: {
			"power": 411,
			"defense": 544,
			"speed": 15,
		},
	};

	instance._155801 = {
		name: "EV Lacertae",
		distance: 16.47,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A star that released a MASSIVE flare in 2008.",
		resource1: "Ice",
		resource2: "Meteorite",
		stats: {
			"power": 633,
			"defense": 589,
			"speed": 5,
		},
	};

	instance._206902 = {
		name: "70 Ophiuchi",
		distance: 16.59,
		planets: 5,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "A binary of two orange dwarfs.",
		resource1: "Hydrogen",
		resource2: "Charcoal",
		stats: {
			"power": 602,
			"defense": 555,
			"speed": 11,
		},
	};

	instance._136701 = {
		name: "Altair",
		distance: 16.77,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "An A7V star, the brightest in Aquila, the Eagle.",
		resource1: "Methane",
		resource2: "Metal",
		stats: {
			"power": 559,
			"defense": 388,
			"speed": 6,
		},
	};

	instance._166402 = {
		name: "Gliese 1005",
		distance: 17,
		planets: 3,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "Another binary of red dwarfs.",
		resource1: "Helium",
		resource2: "Methane",
		stats: {
			"power": 539,
			"defense": 511,
			"speed": 10,
		},
	};

	instance._185101 = {
		name: "Gliese 1116",
		distance: 17.05,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "Another Gliese system.",
		resource1: "Gold",
		resource2: "Gold",
		stats: {
			"power": 802,
			"defense": 792,
			"speed": 10,
		},
	};

	instance._79901 = {
		name: "Gliese 445",
		distance: 17.58,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "Three Gliese's in a row?!.",
		resource1: "Charcoal",
		resource2: "Gold",
		stats: {
			"power": 956,
			"defense": 615,
			"speed": 6,
		},
	};

	instance._95001 = {
		name: "BD +15°262",
		distance: 17.71,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "A G5 star of which little is known about.",
		resource1: "Titanium",
		resource2: "Meteorite",
		stats: {
			"power": 595,
			"defense": 664,
			"speed": 8,
		},
	};

	instance._175901 = {
		name: "LP 816-60",
		distance: 17.98,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "An M4 red dwarf.",
		resource1: "Helium",
		resource2: "Meteorite",
		stats: {
			"power": 540,
			"defense": 332,
			"speed": 12,
		},
	};

	instance._175902 = {
		name: "Stein 2051",
		distance: 17.98,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "A binary of a red dwarf and a white dwarf.",
		resource1: "Hydrogen",
		resource2: "Wood",
		stats: {
			"power": 1247,
			"defense": 589,
			"speed": 9,
		},
	};

	instance._37601 = {
		name: "Gliese 205",
		distance: 18.56,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "An early-type M dwarf with two planets.",
		resource1: "Ice",
		resource2: "Meteorite",
		stats: {
			"power": 706,
			"defense": 729,
			"speed": 14,
		},
	};

	instance._133601 = {
		name: "Luyten 347-14",
		distance: 18.56,
		planets: 3,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "Yet another red dwarf.",
		resource1: "Titanium",
		resource2: "Methane",
		stats: {
			"power": 471,
			"defense": 749,
			"speed": 8,
		},
	};

	instance._203902 = {
		name: "V1054 Ophiuchi",
		distance: 18.72,
		planets: 5,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A quintuple star system, containing A, Ba, Bb, Gliese 643, and C. All of these are red dwarfs.",
		resource1: "Wood",
		resource2: "Uranium",
		stats: {
			"power": 873,
			"defense": 1048,
			"speed": 11,
		},
	};

	instance._135801 = {
		name: "Sigma Draconis",
		distance: 18.81,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "A K0 orange dwarf with a planet.",
		resource1: "Uranium",
		resource2: "Meteorite",
		stats: {
			"power": 635,
			"defense": 664,
			"speed": 12,
		},
	};

	instance._39101 = {
		name: "Ross 47",
		distance: 18.88,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "The 99999999th red dwarf in this star list.",
		resource1: "Ice",
		resource2: "Lunarite",
		stats: {
			"power": 1396,
			"defense": 698,
			"speed": 14,
		},
	};

	instance._123401 = {
		name: "Luyten 205-128",
		distance: 18.95,
		planets: 5,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "The 5000th flare star in our star list.",
		resource1: "Charcoal",
		resource2: "Silicon",
		stats: {
			"power": 1415,
			"defense": 525,
			"speed": 13,
		},
	};

	instance._56501 = {
		name: "Luyten 674-15",
		distance: 19.19,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "Yet another red dwarf variable.",
		resource1: "Oil",
		resource2: "Gem",
		stats: {
			"power": 370,
			"defense": 507,
			"speed": 14,
		},
	};

	instance._200001 = {
		name: "Gliese 570",
		distance: 19.26,
		planets: 4,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "The 570th entry in the Gliese catalog.",
		resource1: "Gold",
		resource2: "Meteorite",
		stats: {
			"power": 1176,
			"defense": 612,
			"speed": 10,
		},
	};

	instance._107001 = {
		name: "CD -40°9712",
		distance: 19.35,
		planets: 2,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "Another red dwarf with 2 planets.",
		resource1: "Gold",
		resource2: "Hydrogen",
		stats: {
			"power": 805,
			"defense": 587,
			"speed": 11,
		},
	};

	instance._167801 = {
		name: "Eta Cassiopeiae",
		distance: 19.42,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "A sun-like G0V star accompanied by a K7V star.",
		resource1: "Oil",
		resource2: "Metal",
		stats: {
			"power": 762,
			"defense": 511,
			"speed": 15,
		},
	};

	instance._204801 = {
		name: "36 Ophiuchi",
		distance: 19.47,
		planets: 2,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A triple system of three K type dwarfs.",
		resource1: "Silicon",
		resource2: "Gem",
		stats: {
			"power": 1496,
			"defense": 1070,
			"speed": 13,
		},
	};

	instance._164301 = {
		name: "BD +1°4774",
		distance: 19.47,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A red dwarf that is also known as Gliese 908.",
		resource1: "Gem",
		resource2: "Silver",
		stats: {
			"power": 497,
			"defense": 424,
			"speed": 7,
		},
	};

	instance._211202 = {
		name: "HR 7703",
		distance: 19.74,
		planets: 3,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A binary of a K type star with a red dwarf.",
		resource1: "Methane",
		resource2: "Silver",
		stats: {
			"power": 1331,
			"defense": 554,
			"speed": 14,
		},
	};

	instance._24201 = {
		name: "82 Eridani",
		distance: 19.77,
		planets: 6,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A G6V solar analog with 6 planets, as well as two dust disks rich with Gold, Silver, and Lunarite.",
		resource1: "Gold",
		resource2: "Lunarite",
		stats: {
			"power": 595,
			"defense": 956,
			"speed": 14,
		},
	};

	instance._100801 = {
		name: "BD -11°375",
		distance: 19.95,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A BY Draconis variable red dwarf.",
		resource1: "Metal",
		resource2: "Titanium",
		stats: {
			"power": 1095,
			"defense": 685,
			"speed": 8,
		},
	};

	instance._124101 = {
		name: "EG 372",
		distance: 20.03,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "An little-known star rich in icy comets.",
		resource1: "Hydrogen",
		resource2: "Ice",
		stats: {
			"power": 863,
			"defense": 583,
			"speed": 6,
		},
	};

	instance._139701 = {
		name: "Gliese 784",
		distance: 20.24,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A K9V star with one super-Earth planet.",
		resource1: "Methane",
		resource2: "Silicon",
		stats: {
			"power": 1624,
			"defense": 1208,
			"speed": 12,
		},
	};

	instance._103201 = {
		name: "Gliese 581",
		distance: 20.26,
		planets: 1,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "An old red dwarf one-third the size and radius of the sun.",
		resource1: "Hydrogen",
		resource2: "Methane",
		stats: {
			"power": 857,
			"defense": 927,
			"speed": 5,
		},
	};

	instance._219102 = {
		name: "EQ Pegasi",
		distance: 20.38,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A binary of flare stars.",
		resource1: "Wood",
		resource2: "Meteorite",
		stats: {
			"power": 1232,
			"defense": 921,
			"speed": 11,
		},
	};

	instance._105801 = {
		name: "HN Librae",
		distance: 20.45,
		planets: 3,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "Also known as Gliese 555.",
		resource1: "Lunarite",
		resource2: "Hydrogen",
		stats: {
			"power": 1478,
			"defense": 1182,
			"speed": 7,
		},
	};

	instance._204702 = {
		name: "Gliese 3877",
		distance: 20.62,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A cool M7 red dwarf.",
		resource1: "Ice",
		resource2: "Helium",
		stats: {
			"power": 550,
			"defense": 863,
			"speed": 15,
		},
	};

	instance._50401 = {
		name: "QY Aurigae",
		distance: 20.74,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A binary of almost identical red dwarfs.",
		resource1: "Lava",
		resource2: "Gem",
		stats: {
			"power": 1439,
			"defense": 863,
			"speed": 12,
		},
	};

	instance._116901 = {
		name: "Wolf 629",
		distance: 21.18,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "An M3.5V red dwarf.",
		resource1: "Oil",
		resource2: "Lunarite",
		stats: {
			"power": 1570,
			"defense": 577,
			"speed": 10,
		},
	};

	instance._159101 = {
		name: "Gliese 1128",
		distance: 21.28,
		planets: 4,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A red dwarf in the constellation Carina.",
		resource1: "Helium",
		resource2: "Lunarite",
		stats: {
			"power": 830,
			"defense": 652,
			"speed": 6,
		},
	};

	instance._113301 = {
		name: "Gliese 625",
		distance: 21.47,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "Another red dwarf with 2 planets.",
		resource1: "Hydrogen",
		resource2: "Metal",
		stats: {
			"power": 1769,
			"defense": 631,
			"speed": 14,
		},
	};

	instance._300101 = {
		name: "Gliese 299",
		distance: 22.0,
		planets: 0,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A red dwarf 15% the mass of the Sun, and one-fifth the size.",
		resource1: "Ice",
		resource2: "Helium",
		stats: {
			"power": 2069,
			"defense": 1151,
			"speed": 9,
		},
	};

	instance._300201 = {
		name: "EE Leonis",
		distance: 22.04,
		planets: 1,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "Also known as Gliese 402, EE Leonis is a red dwarf.",
		resource1: "Lava",
		resource2: "Gems",
		stats: {
			"power": 2021,
			"defense": 1412,
			"speed": 11,
		},
	};

	instance._300301 = {
		name: "Gliese 880",
		distance: 22.31,
		planets: 2,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "ANOTHER RED DWARF?!",
		resource1: "Silicon",
		resource2: "Lunarite",
		stats: {
			"power": 2321,
			"defense": 1612,
			"speed": 14,
		},
	};

	instance._300401 = {
		name: "BD-17 588",
		distance: 22.7,
		planets: 4,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "A triple system of red dwarfs.",
		resource1: "Hydrogen",
		resource2: "Ice",
		stats: {
			"power": 2421,
			"defense": 1812,
			"speed": 7,
		},
	};

	instance._300501 = {
		name: "Gliese 1068",
		distance: 22.81,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "An M4.5 red dwarf 23 light years away.",
		resource1: "Lava",
		resource2: "Titanium",
		stats: {
			"power": 2001,
			"defense": 2123,
			"speed": 14,
		},
	};

	instance._300601 = {
		name: "HD 199305",
		distance: 23,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A pair of identical red dwarfs.",
		resource1: "Methane",
		resource2: "Silver",
		stats: {
			"power": 2400,
			"defense": 1899,
			"speed": 10,
		},
	};

	instance._300701 = {
		name: "Gliese 393",
		distance: 23.2,
		planets: 2,
		factionId: "carnelian",
		faction: "Carnelian Resistance",
		desc: "Now comes with planets.",
		resource1: "Silicon",
		resource2: "Ice",
		stats: {
			"power": 2501,
			"defense": 1732,
			"speed": 13,
		},
	};

	instance._300801 = {
		name: "GJ 3991",
		distance: 24.27,
		planets: 0,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "Now missing planets.",
		resource1: "Metal",
		resource2: "Wood",
		stats: {
			"power": 2501,
			"defense": 1732,
			"speed": 13,
		},
	};

	instance._300901 = {
		name: "HD 4628",
		distance: 24.3,
		planets: 6,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A K2.5V star, one of the first in several.",
		resource1: "Wood",
		resource2: "Uranium",
		stats: {
			"power": 2801,
			"defense": 2002,
			"speed": 14,
		},
	};

	instance._301001 = {
		name: "Beta Hydri",
		distance: 24.32,
		planets: 2,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A G2 subgiant, the brightest star in the constellation Hydrus.",
		resource1: "Methane",
		resource2: "Meteorite",
		stats: {
			"power": 2900,
			"defense": 2351,
			"speed": 10,
		},
	};

	instance._301101 = {
		name: "Mu Cassiopeiae",
		distance: 24.7,
		planets: 0,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "A G5V star with an M5 companion.",
		resource1: "Metal",
		resource2: "Metal",
		stats: {
			"power": 3000,
			"defense": 2562,
			"speed": 12,
		},
	};

	instance._301201 = {
		name: "Vega",
		distance: 25.04,
		planets: 11,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A young A0V star, the standard 0 magnitude star. Has many small planetesimals orbiting it, a good source of Meteorite and Gems.",
		resource1: "Gems",
		resource2: "Meteorite",
		stats: {
			"power": 3207,
			"defense": 2429,
			"speed": 14,
		},
	};

	instance._301301 = {
		name: "Gliese 673",
		distance: 25.12,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "An orange K7V dwarf, 25 light years away.",
		resource1: "Gems",
		resource2: "Meteorite",
		stats: {
			"power": 3365,
			"defense": 2627,
			"speed": 11,
		},
	};

	instance._301401 = {
		name: "Fomalhaut",
		distance: 25.2,
		planets: 2,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "A triple star system, formed by an A3V star, and two red dwarfs. The large amount of dust here is a good source of Ice and Methane.",
		resource1: "Methane",
		resource2: "Ice",
		stats: {
			"power": 3500,
			"defense": 2500,
			"speed": 8,
		},
	};

	instance._301501 = {
		name: "LHS 1070",
		distance: 25.02,
		planets: 0,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A triple system of ultra cool M-dwarfs. Hosts three defunct Dyson spheres, allowing for the harvest of Uranium and Titanium.",
		resource1: "Uranium",
		resource2: "Titanium",
		stats: {
			"power": 2982,
			"defense": 3013,
			"speed": 14,
		},
	};

	instance._301601 = {
		name: "Chi Draconis",
		distance: 26.32,
		planets: 1,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A late F7V star, rich in Helium. The planet orbiting it is covered in forests, allowing for the harvest Wood.",
		resource1: "Wood",
		resource2: "Helium",
		stats: {
			"power": 3461,
			"defense": 2618,
			"speed": 12,
		},
	};

	instance._301701 = {
		name: "Pi³ Orionis",
		distance: 26.4,
		planets: 0,
		factionId: "prasnian",
		faction: "Prasnian Empire",
		desc: "The nearest star to the Sun in the Orion constellation.",
		resource1: "Titanium",
		resource2: "Hydrogen",
		stats: {
			"power": 3524,
			"defense": 2746,
			"speed": 14,
		},
	};

	instance._301801 = {
		name: "WD 2359-434",
		distance: 26.87,
		planets: 1,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "A white dwarf that is the closest star in the constallation Phoenix.",
		resource1: "Lava",
		resource2: "Oil",
		stats: {
			"power": 3677,
			"defense": 2813,
			"speed": 12,
		},
	};

	instance._301901 = {
		name: "Mu Herculis",
		distance: 27.11,
		planets: 2,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "A G5 subgiant with a few red dwarfs orbiting it.",
		resource1: "Charcoal",
		resource2: "Wood",
		stats: {
			"power": 3704,
			"defense": 2947,
			"speed": 14,
		},
	};

	instance._302001 = {
		name: "Xi Ursae Majoris",
		distance: 27.3,
		planets: 2,
		factionId: "kitrinos",
		faction: "Kitrinos Corporation",
		desc: "A quadruple star consisting of an F8V star, two red dwarfs, and a G2V Sun-like star.",
		resource1: "Charcoal",
		resource2: "Wood",
		stats: {
			"power": 3793,
			"defense": 3000,
			"speed": 13,
		},
	};

	instance._302101 = {
		name: "Beta Canum Venaticorum",
		distance: 27.51,
		planets: 0,
		factionId: "hyacinite",
		faction: "Hyacinite Congregation",
		desc: "A single Sun-like star of spectral type G0V.",
		resource1: "Helium",
		resource2: "Hydrogen",
		stats: {
			"power": 4000,
			"defense": 3200,
			"speed": 12,
		},
	};

// stuff goes here



	instance._69 = {
		name: "Tabby's Star",
		distance: 1470,
		planets: 1,
		factionId: "moviton",
		faction: "Moviton Syndicate",
		desc: "An F3V star with an unusual dust disk around it. It is nicknamed the WTF Star due to its strange light curve. The dust disk is a good source for Ice and Meteorite.",
		resource1: "Ice",
		resource2: "Meteorite",
		stats: {
			"power": 20000,
			"defense": 19000,
			"speed": 12,
		},
	};

	return instance;

}());


