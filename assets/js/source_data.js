// declare global namespace
var scdGl = {};

//the currently displayed data
scdGl.current = {};


//The options currently selected 
scdGl.options = {

	date: '',
	lgreg: '',
	type: ''

};

scdGl.optionsLast = {

	date: '',
	lgreg: '',
	type: ''

};


//Text variables 
scdGl.text = {

	//Verified as needed
	blocked				: 'Blocked',
	upload 				: ' - Upload',
	screening 			: ' - Screening',
	all 				: 'All',
	hits 				: 'Hits',
	approved 			: 'Approved',
	positiveList		: 'Positive List',
	negativeList		: 'Negative List',
	vsLast				: 'vs. prev. Screening',
	vsAvg 				: 'vs. Average',
	noPrev				: 'No data in prev. Screening',
	noAverage			: 'No Average data available',
	noData				: 'No entries for this element',
	header_trl			: 'Business Partner Translation - ',
	header_reason		: 'Reason for Release',
	header_person		: 'Person Responsible for Release',
	noTrl				: 'No Translation',
	validTrl			: 'Valid Translation',
	invalidTrl			: 'Invalid Translation'
}


//DYNAMIC PART

scdGl.currentDate = '11.04.2016';

                                                               scdGl.sourceData = [
	// { date: " 11.04.16 ",
	// splData:[{lgreg: "SPLUS",
	// Vendor:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:79 ,hits:0 ,approved:0 ,posList:0 ,negList:0           ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
	// reasons: [
	// ],
	// personResponsible: [
	// ]
	// },
	// Customer:{firstName: "No            data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:3 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0                    ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
	// reasons: [
	// ],
	// personResponsible: [
	// ]
	// } }]},
	// { date: " 01.04.16 ",
	// splData:[{lgreg: "SPLUS",
	// Vendor:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName:  "No data",thirdPercentage:0,all:1 ,hits:0 ,approved:1 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113   ,
	// reasons: [
	// { text:"300:Released by manager approval",value:1 }
	// ],
	// personResponsible: [
	// { name:"Mattia Molteni",blocked:0 ,released:1 ,}
	// ]
	// } }]},
{ date: " 24.03.16 ",
	splData:[{lgreg: "SPLUS",
				Vendor:{firstName: "Afghanistan",
						firstPercentage:100.00     ,
						secondName: "Belgium",
						secondPercentage:100.00 ,
						thirdName: "Indonesia",
						thirdPercentage:100.00 ,
						all:49 ,
						hits:22 ,
						approved:2 ,
						posList:1 ,
						negList:2 ,
						hitsAvg:3.04958677685950 ,
						approvedAvg:0.03305785123967 ,
						posListAvg:0.04132231404959  ,
						negListAvg:0.03305785123967 ,
						validTranslation:192 ,
						invalidTranslation:0 ,
						noTranslation:113 ,
						reasons: [
									{ text:"100:Released due to intercompany",value:2 }
								  // , { text:"300:Released by manager approval",value:1 }
								  // , { text:"500:Confirmed as a restricted     party",value:2 }
								 ],
								 personResponsible: [
								 { name:"HANLIN XUWANG",blocked:2 ,released:3 ,}
								 ]
				},
				Customer:{firstName: "Afghanistan",
						firstPercentage:100.00     ,
						secondName: "Belgium",
						secondPercentage:80.00 ,
						thirdName: "Indonesia",
						thirdPercentage:60.00 ,
						all:30 ,
						hits:18 ,
						approved:4 ,
						posList:5 ,
						negList:5 ,
						hitsAvg:4.04958677685950 ,
						approvedAvg:1.03305785123967 ,
						posListAvg:1.04132231404959  ,
						negListAvg:1.03305785123967 ,
						validTranslation:192 ,
						invalidTranslation:0 ,
						noTranslation:113 ,
						reasons: [
									{ text:"100:Released due to intercompany",value:2 }
								  , { text:"300:Released by manager approval",value:1 }
								  , { text:"500:Confirmed as a restricted     party",value:2 }
								 ],
						personResponsible: [
								 { name:"HANLIN XUWANG",blocked:2 ,released:3 ,},
								 { name:"Mario Rossi",blocked:5 ,released:4 ,}
								 ]
			}},
			{lgreg: "PIPPA",
				Vendor:{firstName: "Afghanistan",
						firstPercentage:100.00     ,
						secondName: "Belgium",
						secondPercentage:100.00 ,
						thirdName: "Indonesia",
						thirdPercentage:100.00 ,
						all:49 ,
						hits:22 ,
						approved:2 ,
						posList:1 ,
						negList:2 ,
						hitsAvg:22 ,
						approvedAvg:2,
						posListAvg:1 ,
						negListAvg:2 ,
						validTranslation:192 ,
						invalidTranslation:0 ,
						noTranslation:113 ,
						reasons: [
									{ text:"100:Released due to intercompany",value:2 }
								  , { text:"300:Released by manager approval",value:1 }
								  , { text:"400:Confirmed as a restricted     party",value:2 }
								  , { text:"500:Confirmed as a restricted party",value:2 }
								  , { text:"600:Confirmed as a restricted party",value:2 }
								  , { text:"700:I hage hudge                      space",value:2 }
								  , { text:"700:this you dont see    party",value:2 }
								  , { text:"800:this you dont see    party",value:2 }
								  , { text:"900:this you dont see    party",value:2 }
								  , { text:"1000:this you dont see    party",value:2 }
								 
								 ],
								 personResponsible: [
								 { name:"HANLIN XUWANG",blocked:2 ,released:3 ,}
								 ]
			}}

]},

{ date: " 16.02.16 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "No                  data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:3 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959                   ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} ,
Customer:{firstName: "Afghanistan",
						firstPercentage:100.00     ,
						secondName: "Belgium",
						secondPercentage:80.00 ,
						thirdName: "Indonesia",
						thirdPercentage:60.00 ,
						all:30 ,
						hits:18 ,
						approved:4 ,
						posList:5 ,
						negList:5 ,
						hitsAvg:4.04958677685950 ,
						approvedAvg:1.03305785123967 ,
						posListAvg:1.04132231404959  ,
						negListAvg:1.03305785123967 ,
						validTranslation:192 ,
						invalidTranslation:0 ,
						noTranslation:113 ,
						reasons: [
									{ text:"100:Released due to intercompany",value:2 }
								  , { text:"300:Released by manager approval",value:1 }
								  , { text:"500:Confirmed as a restricted     party",value:2 }
								 ],
						personResponsible: [
								 { name:"HANLIN XUWANG",blocked:2 ,released:3 ,},
								 { name:"Mario Rossi",blocked:5 ,released:4 ,}
								 ]
			} }]},

{ date: " 02.02.16 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "No data",firstPercentage:0,secondName: "No       data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:6 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192        ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 20.01.16 ",
splData:[{lgreg: "SPLUS",
Customer:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No                data",thirdPercentage:0,all:2 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible:    [
]
} }]},
{ date: " 14.01.16 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:3 ,hits:0 ,approved:0 ,posList:0 ,negList:0                      ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 13.01.16              ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:1 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950                          ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 18.11.15 ",
splData:[{lgreg:                    "SPLUS",
Vendor:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:1 ,hits:0 ,approved:1 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967                ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 19.10.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName:                      "Philippines",firstPercentage:100.00 ,secondName: "Austria",secondPercentage:100.00 ,thirdName: "Pakistan",thirdPercentage:57.14 ,all:166 ,hits:40 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967                   ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "Algeria",firstPercentage:100.00 ,secondName:                          "Italy",secondPercentage:100.00 ,thirdName: "Pakistan",thirdPercentage:100.00 ,all:231 ,hits:10 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138                    ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 02.10.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "Austria",firstPercentage:100.00 ,secondName: "Switzerland",secondPercentage:100.00 ,thirdName:        "Mali",thirdPercentage:100.00 ,all:7 ,hits:4 ,approved:0 ,posList:1 ,negList:2 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0                   ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "China",firstPercentage:100.00 ,secondName: "USA",secondPercentage:100.00 ,thirdName: "No data",thirdPercentage:0,all:51 ,hits:51 ,approved:0 ,posList:27 ,negList:0         ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 30.09.15 ",
splData:[{lgreg:                          "SPLUS",
Vendor:{firstName: "Philippines",firstPercentage:100.00 ,secondName: "Mali",secondPercentage:66.67 ,thirdName: "Pakistan",thirdPercentage:66.67 ,all:120 ,hits:44 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950                         ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "Algeria",firstPercentage:100.00         ,secondName: "Italy",secondPercentage:100.00 ,thirdName: "Pakistan",thirdPercentage:100.00 ,all:160 ,hits:16 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138       ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 29.09.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "Philippines",firstPercentage:100.00 ,secondName: "Mali",secondPercentage:60.00 ,thirdName:            "Somalia",thirdPercentage:55.56 ,all:211 ,hits:63 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0              ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "Australia",firstPercentage:50.00 ,secondName: "China",secondPercentage:31.25 ,thirdName: "Switzerland",thirdPercentage:11.11 ,all:305 ,hits:21 ,approved:0 ,posList:0       ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 28.09.15 ",
splData:[{lgreg:               "SPLUS",
Vendor:{firstName: "Iraq",firstPercentage:20.00 ,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:5 ,hits:1 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967              ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 25.09.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName:                      "Germany",firstPercentage:100.00 ,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:1 ,hits:1 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959         ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 24.09.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "Austria",firstPercentage:66.67 ,secondName: "No  data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:3 ,hits:2 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192        ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 22.09.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "Iraq",firstPercentage:100.00 ,secondName: "No data",secondPercentage:0,thirdName: "No               data",thirdPercentage:0,all:1 ,hits:1 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113       ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:1 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081           ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 21.09.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "No                    data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:2 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959                   ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 18.09.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "No data",firstPercentage:0,secondName: "No       data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:1 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192        ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 11.09.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "Pakistan",firstPercentage:100.00 ,secondName: "Indonesia",secondPercentage:100.00 ,thirdName:       "Austria",thirdPercentage:100.00 ,all:45 ,hits:30 ,approved:0 ,posList:1 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0              ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "Cuba",firstPercentage:100.00 ,secondName: "Portugal",secondPercentage:100.00 ,thirdName: "Japan",thirdPercentage:100.00 ,all:76 ,hits:14 ,approved:0 ,posList:0 ,negList:0  ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 10.09.15 ",
splData:[{lgreg:                          "SPLUS",
Vendor:{firstName: "Indonesia",firstPercentage:100.00 ,secondName: "Austria",secondPercentage:100.00 ,thirdName: "Somalia",thirdPercentage:100.00 ,all:82 ,hits:53 ,approved:0 ,posList:2 ,negList:0 ,hitsAvg:3.04958677685950                        ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "Cuba",firstPercentage:100.00            ,secondName: "Japan",secondPercentage:100.00 ,thirdName: "Portugal",thirdPercentage:100.00 ,all:176 ,hits:52 ,approved:0 ,posList:24 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138      ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 09.09.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "Afghanistan",firstPercentage:100.00 ,secondName: "USA",secondPercentage:100.00 ,thirdName:            "Austria",thirdPercentage:100.00 ,all:42 ,hits:22 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0              ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "Portugal",firstPercentage:100.00 ,secondName: "Cuba",secondPercentage:100.00 ,thirdName: "Japan",thirdPercentage:100.00 ,all:200 ,hits:78 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 08.09.15 ",
splData:[{lgreg:                          "SPLUS",
Vendor:{firstName: "Poland",firstPercentage:100.00 ,secondName: "China",secondPercentage:100.00 ,thirdName: "Switzerland",thirdPercentage:100.00 ,all:22 ,hits:16 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950                         ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "Portugal",firstPercentage:100.00        ,secondName: "Argentina",secondPercentage:100.00 ,thirdName: "Japan",thirdPercentage:100.00 ,all:100 ,hits:42 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138      ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 31.08.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "Italy",firstPercentage:100.00 ,secondName: "Germany",secondPercentage:100.00 ,thirdName:              "Norway",thirdPercentage:100.00 ,all:37 ,hits:35 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0               ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "Portugal",firstPercentage:100.00 ,secondName: "Japan",secondPercentage:100.00 ,thirdName: "India",thirdPercentage:100.00 ,all:122 ,hits:96 ,approved:0 ,posList:0           ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 27.08.15 ",
splData:[{lgreg:               "SPLUS",
Vendor:{firstName: "Austria",firstPercentage:100.00 ,secondName: "USA",secondPercentage:100.00 ,thirdName: "Switzerland",thirdPercentage:100.00 ,all:36 ,hits:34 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950                          ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "USA",firstPercentage:100.00             ,secondName: "Portugal",secondPercentage:100.00 ,thirdName: "Japan",thirdPercentage:100.00 ,all:44 ,hits:42 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138        ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 24.07.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No                    data",thirdPercentage:0,all:73 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959 ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113      ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "China",firstPercentage:5.56 ,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:90 ,hits:1 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081        ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]},
{ date: " 23.07.15 ",
splData:[{lgreg: "SPLUS",
Vendor:{firstName: "No                    data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:18 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.04958677685950 ,approvedAvg:0.03305785123967 ,posListAvg:0.04132231404959                  ,negListAvg:0.03305785123967 ,validTranslation:192 ,invalidTranslation:0 ,noTranslation:113 ,
reasons: [
],
personResponsible: [
]
},
Customer:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No                 data",thirdPercentage:0,all:22 ,hits:0 ,approved:0 ,posList:0 ,negList:0 ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible:   [
]
} }]},
{ date: " 08.07.15 ",
splData:[{lgreg: "SPLUS",
Customer:{firstName: "No data",firstPercentage:0,secondName: "No data",secondPercentage:0,thirdName: "No data",thirdPercentage:0,all:1 ,hits:0 ,approved:0 ,posList:0 ,negList:0                    ,hitsAvg:3.81081081081081 ,approvedAvg:0 ,posListAvg:0.45945945945946 ,negListAvg:0 ,validTranslation:138 ,invalidTranslation:0 ,noTranslation:6 ,
reasons: [
],
personResponsible: [
]
} }]}];


console.log(scdGl.sourceData);



