const verbalQuizData = [
	{
		id: 18001,
		question: "The following are examples of Palindrome, except.",
		answer: "same",
		choices: [
			"level",
			"deified",
			"noon",
			"murdrum"
		],
		guide: "a palindrome is a word, phrase, number or sequence of words that reads the same backward as forward"
	},
	{
		id: 18002,
		question: "That perfume always \"evokes\" pleasant memories.",
		answer: "calls up",
		choices: [
			"angers",
			"erases",
			"restricts",
			"confuses"
		],
		guide: ""
	},
	{
		id: 18003,
		question: "The attorney wanted to \"expedite\" the process because her client was becoming impatient.",
		answer: "accelerate",
		choices: [
			"stop",
			"evaluate",
			"reverse",
			"justify"
		],
		guide: ""
	},
	{
		id: 18004,
		question: "The suspect gave a \"plausible\" explanation for his presence at the scene, so the police decided to look elsewhere for the perpetrator of the crime.",
		answer: "credible",
		choices: [
			"unbelievable",
			"careless",
			"insufficient",
			"apologetic"
		],
		guide: ""
	},
	{
		id: 18005,
		question: "He based his conclusion on what he \"inferred\" from the evidence, not on what he actually observed.",
		answer: "surmised",
		choices: [
			"predicted",
			"imagined",
			"expected",
			"implied"
		],
		guide: ""
	},
	{
		id: 18006,
		question: "Sila ay nagdadamayan sa hirap at ginhawa. Sila ay totoong “naghihiramang suklay”",
		answer: "magkaibigan",
		choices: [
			"mag asawa",
			"magkapatid",
			"magkaaway",
			"magkaanak"
		],
		guide: ""
	},
	{
		id: 18007,
		question: "There is no PANACEA that will solve our financial difficulty.",
		answer: "cure-all",
		choices: [
			"problem",
			"answer",
			"paradox",
			"criteria"
		],
		guide: ""
	},
	{
		id: 18008,
		question: "A multifarious task would ____",
		answer: "have many different components",
		choices: [
			"have simple components.",
			"have very few components.",
			"be very complex.",
			"be impossible to complete."
		],
		guide: " Multifarious means having many different aspects or components."
	},
	{
		id: 18009,
		question: "Plaintive cries would be ____",
		answer: "sorrowful, mournful.",
		choices: [
			"musical, soothing.",
			"plain, uninteresting.",
			"loud, jarring.",
			"joyful, happy."
		],
		guide: "Plaintive means expressing sorrow; mournful, melancholy"
	},
	{
		id: 180010,
		question: "People with inveterate beliefs ____",
		answer: "hold their beliefs deeply and passionately.",
		choices: [
			"can be easily manipulated.",
			"have adopted their beliefs from another.",
			"respect other's beliefs.",
			"change their beliefs frequently."
		],
		guide: "Inveterate beliefs are deep-rooted or firmly established."
	},
	{
		id: 180011,
		question: "If you were involved in an altercation, you ____",
		answer: "had a heated argument.",
		choices: [
			"had an accident.",
			"had an agreement.",
			"served in a war.",
			"were part of a conspiracy."
		],
		guide: "An altercation is a heated dispute or quarrel"
	},
	{
		id: 180012,
		question: "If you are a contentious person, you ____",
		answer: "are very competitive and quarrelsome.",
		choices: [
			"are usually right.",
			"believe in \"an eye for an eye.\"",
			"always try to keep the peace.",
			"are secretive."
		],
		guide: "A contentious person is quarrelsome, competitive, quick to fight. Contentious also means controversial, causing contention"
	},
	{
		id: 180013,
		question: "If you are part of a cabal, you ____",
		answer: "are involved in a secret plot.",
		choices: [
			"are a against the minorities.",
			"are participating in a protest.",
			"belong to the majority.",
			"are figthing against the enemy."
		],
		guide: "A cabal is a scheme or conspiracy; a small group joined in a secret plot"
	},
	{
		id: 180014,
		question: "If you are a bellicose leader, you ____",
		answer: "are eager to wage war.",
		choices: [
			"do everything in your power to avoid war",
			"respect other leaders.",
			"remain neutral during international conflicts.",
			"treat all citizens equally"
		],
		guide: "A bellicose person is belligerent, quarrelsome; eager to wage war"
	},
	{
		id: 180015,
		question: "If an apocalypse is near, you can expect ____",
		answer: "total devastation and destruction.",
		choices: [
			"a period of extended peace.",
			"a time of anarchy.",
			"a grand celebration",
			"an invasion."
		],
		guide: "An apocalypse is a cataclysmic event that brings total devastation or the end of the world."
	},
	{
		id: 180016,
		question: "If your country suffers an incursion, your territory ____",
		answer: "has been invaded.",
		choices: [
			"has been invaded.",
			"is in a depression.",
			"has seceded to form a new state.",
			"has had a natural disaster."
		],
		guide: "An incursion is a raid or temporary invasion of someone else’s territory."
	},
	{
		id: 180017,
		question: "If you meet your nemesis, you meet ____",
		answer: "the cause of your misfortunes.",
		choices: [
			"the leader of your country.",
			"your guardian angel.",
			"your death.",
			"the person who decides your fate."
		],
		guide: "A nemesis is a source of harm or ruin; the cause of one’s misery or downfall, bane; agent of retribution or vengeance"
	},
	{
		id: 180018,
		question: "If you pillage a village, you ____",
		answer: "ransack it and steal as much as you can.",
		choices: [
			"set it on fire.",
			"destroy it with bombs.",
			"negotiate peace between warring tribes.",
			"clean up the environment."
		],
		guide: "To pillage means to forcibly rob of goods; to plunder"
	},
	{
		id: 180019,
		question: "If you are a placid person, you ____",
		answer: "are usually calm and peaceful.",
		choices: [
			"are happy.",
			"are always trying to pick a fight.",
			"are disloyal.",
			"are not to be trusted."
		],
		guide: "Placid means calm and peaceful; free from disturbance"
	},
	{
		id: 180020,
		question: "If you plan a reprisal, you ____",
		answer: "plan to retaliate.",
		choices: [
			"plan to surrender.",
			"plan to fight.",
			"hope to negotiate a cease-fire.",
			"plan to desert the army."
		],
		guide: "A reprisal is an act of retaliation for an injury. It is also the practice of using political or military force without actually resorting to war"
	}
]

export default verbalQuizData;