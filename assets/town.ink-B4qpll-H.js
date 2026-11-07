const o=21,e=[["ev",{"VAR?":"who"},"str","^jo","/str","==","/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"jo"},{"->":"0.8"},null]}],"nop",`
`,"ev",{"VAR?":"who"},"str","^mara","/str","==","/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"mara_garden"},{"->":"0.18"},null]}],"nop",`
`,{"->":"kit"},["done",{"#n":"g-0"}],null],"done",{kit:[["ev",{"VAR?":"kit_met"},"/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"kit_again"},{"->":"kit.0.4"},null]}],"nop",`
`,"#","^kit_met","/#","^Oh! You're the one who bought the old Harlow place. Welcome to Morrow Creek.",`
`,"^I'm Kit. I work the counter here at the Emporium, which mostly means I know where the twine is.",`
`,"^Seeds, feed and the till are inside. Same prices as the farm gate, we don't do tourist prices.",`
`,"ev","str","^What was the Harlow place like?","/str","/ev",{"*":".^.c-0",flg:4},"ev","str","^Thanks, Kit.","/str","/ev",{"*":".^.c-1",flg:4},{"c-0":[`
`,"^Before my time, honestly. Jo at the Slow Kettle would know. She knows everyone's grandparents.",`
`,{"->":"kit_bye"},null],"c-1":[`
`,{"->":"kit_bye"},null]}],null],kit_again:[["ev",{"VAR?":"rocks"},{"VAR?":"jo_told"},"!","&&","/ev",{"->":".^.b",c:!0},{b:[`
`,"^Rocks with a draught coming out? Huh. Ask Jo. That's exactly her sort of thing.",`
`,{"->":".^.^.^.4"},null]}],["ev",{"VAR?":"board"},"/ev",{"->":".^.b",c:!0},{b:[`
`,["ev","visit",2,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0",c:!0},"ev","du",1,"==","/ev",{"->":".^.s1",c:!0},"nop",{s0:["pop",`^"A.H."? There's a Tom Harlow on the old honour board up at the hall. 1890s, I think. Can't be him, though, can it?`,{"->":".^.^.17"},null],s1:["pop","^The Harlows go back a long way round here. Longer than the Emporium, and that's saying something.",{"->":".^.^.17"},null],"#f":5}],`
`,{"->":".^.^.^.4"},null]}],["ev",{"VAR?":"gardened"},"/ev",{"->":".^.b",c:!0},{b:[`
`,"^Garden's looking better for your help. Mara reckons you've got the knack.",`
`,{"->":".^.^.^.4"},null]}],[{"->":".^.b"},{b:[`
`,["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0",c:!0},"ev","du",1,"==","/ev",{"->":".^.s1",c:!0},"ev","du",2,"==","/ev",{"->":".^.s2",c:!0},"nop",{s0:["pop","^Seed swap's on Saturday, if you've got spares.",{"->":".^.^.23"},null],s1:["pop","^We've got a new batch of hessian sacks. Very exciting. For me.",{"->":".^.^.23"},null],s2:["pop",`^Mind the step, it's been "getting fixed" since spring.`,{"->":".^.^.23"},null],"#f":5}],`
`,{"->":".^.^.^.4"},null]}],"nop",`
`,{"->":"kit_bye"},null],kit_bye:["^Door's open if you need anything.",`
`,"end",null],jo:[["ev",{"VAR?":"jo_met"},"/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"jo_again"},{"->":"jo.0.4"},null]}],"nop",`
`,"#","^jo_met","/#","^You'll be the new owner up at the Harlow place. I'm Jo. I throw the cups here, and sometimes I pour what goes in them.",`
`,"^I knew old Ada Harlow when I was a girl. She was a character.",`
`,"ev","str","^What was she like?","/str","/ev",{"*":".^.c-0",flg:4},"ev","str","^Nice to meet you, Jo.","/str","/ev",{"*":".^.c-1",flg:4},{"c-0":[`
`,"^Sharp. Kind, if you didn't waste her time. She came in every Saturday with her basket.",`
`,{"->":"jo_history"},null],"c-1":[`
`,"^Likewise. Sit a while, if you like. The bench by the window's the good one.",`
`,"end",null]}],null],jo_history:["ev",{"VAR?":"rocks"},"/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"jo_tells"},{"->":".^.^.^.4"},null]}],"nop",`
`,"^Funny, I can't remember what she sold. Something from the farm. It'll come to me.",`
`,"^If you find anything odd up there, come and tell me. Old places hold on to things.",`
`,"end",null],jo_again:[["ev",{"VAR?":"rocks"},{"VAR?":"jo_told"},"!","&&","/ev",{"->":".^.b",c:!0},{b:[`
`,{"->":"jo_tells"},{"->":".^.^.^.3"},null]}],["ev",{"VAR?":"jo_told"},"/ev",{"->":".^.b",c:!0},{b:[`
`,["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0",c:!0},"ev","du",1,"==","/ev",{"->":".^.s1",c:!0},"ev","du",2,"==","/ev",{"->":".^.s2",c:!0},"nop",{s0:["pop","^Still thinking about Ada's mushrooms. Someone must have seen where she grew them.",{"->":".^.^.23"},null],s1:["pop","^If you get those rocks moving, I want to hear about it first.",{"->":".^.^.23"},null],s2:["pop","^Down the cellar, she said. Never had a cellar, that house.",{"->":".^.^.23"},null],"#f":5}],`
`,"end",{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{b:[`
`,["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0",c:!0},"ev","du",1,"==","/ev",{"->":".^.s1",c:!0},"ev","du",2,"==","/ev",{"->":".^.s2",c:!0},"nop",{s0:["pop","^Busy morning. Good busy.",{"->":".^.^.23"},null],s1:["pop","^The creek's up a bit. Frogs are pleased about it.",{"->":".^.^.23"},null],s2:["pop","^Ada Harlow would have had something to say about your rows. Something nice, probably.",{"->":".^.^.23"},null],"#f":5}],`
`,"^If you find anything odd up at the farm, come and tell me.",`
`,"end",{"->":".^.^.^.3"},null]}],"nop",`
`,null],jo_tells:["^A cold draught out of the rocks, by the west fence? That brings something back.",`
`,"^Ada sold mushrooms. Every Saturday, all year round, even through the driest summers. Nobody else could grow them in that heat.",`
`,"#","^jo_memory","/#",`^People asked where. She'd just say "down the cellar" and smile.`,`
`,"^Thing is, that house never had a cellar. I was in and out of it for years.",`
`,"ev",{"VAR?":"board"},"/ev",[{"->":".^.b",c:!0},{b:[`^ "KEEP CLEAR, A.H."? Ada Harlow. Had to be. Why she'd shut something up like that, I couldn't tell you. `,{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{b:["^ I don't know any more than that. Honestly. ",{"->":".^.^.^.16"},null]}],"nop",`
`,"end",null],mara_garden:[["ev",{"VAR?":"gardened"},"/ev",{"->":".^.b",c:!0},{b:[`
`,"^Back for more weeding? The beans have forgiven you for last time.",`
`,{"->":".^.^.^.2"},null]}],[{"->":".^.b"},{b:[`
`,"^Oh, hello. You found the garden. Grab a trowel if you like. The beds by the gate need the most love.",`
`,{"->":".^.^.^.2"},null]}],"nop",`
`,"ev",{"VAR?":"prior_choice"},"str","^quiet_corner","/str","==","/ev",[{"->":".^.b",c:!0},{b:["^ Kit's got offcuts for chimes, if your quiet corner wants a bit of noise. ",{"->":".^.^.^.13"},null]}],[{"->":".^.b"},{b:["^ One bed at a time. That's the whole trick. ",{"->":".^.^.^.13"},null]}],"nop",`
`,"end",null],"global decl":["ev","str","^kit","/str",{"VAR=":"who"},!1,{"VAR=":"kit_met"},!1,{"VAR=":"jo_met"},!1,{"VAR=":"rocks"},!1,{"VAR=":"board"},!1,{"VAR=":"jo_told"},!1,{"VAR=":"gardened"},"str","^none","/str",{"VAR=":"invite"},"str","^none","/str",{"VAR=":"prior_choice"},"/ev","end",null]}],t={},n={inkVersion:21,root:e,listDefs:t};export{n as default,o as inkVersion,t as listDefs,e as root};
