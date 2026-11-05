const t=21,e=[["ev",{"VAR?":"visit"},"str","^callback","/str","==","/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"callback"},{"->":"0.8"},null]}],"nop",`
`,"ev",{"VAR?":"prior_choice"},"str","^none","/str","==","/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"first_meeting"},{"->":"0.18"},null]}],"nop",`
`,"ev",{"VAR?":"prior_choice"},"str","^later","/str","==","/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"ask_again"},{"->":"0.28"},null]}],"nop",`
`,{"->":"returning_offer"},["done",{"#n":"g-0"}],null],"done",{first_meeting:["^That corner gets a bit of afternoon shade. Good place for a chair.",`
`,"^Sorry. I've been here ten seconds and I'm arranging your garden.",`
`,"^I'm Mara. Mara Venn. I help out at the nursery.",`
`,"^You'll be the one who bought the old Harlow place. Half of Banksia Bend's been wondering who'd take it on.",`
`,"^What are you hoping this place becomes?",`
`,{"->":"ask"},null],ask_again:["^Come round the shady side. The sunny side's being ambitious.",`
`,"^Is now a better time?",`
`,"^What are you hoping this place becomes?",`
`,{"->":"ask"},null],ask:[["ev","str","^A quiet corner sounds good.","/str","/ev",{"*":".^.c-0",flg:4},"ev","str","^I'm still finding my feet.","/str","/ev",{"*":".^.c-1",flg:4},"ev","str","^Can we talk later?","/str","/ev",{"*":".^.c-2",flg:4},{"c-0":[`
`,"#","^choice:quiet_corner","/#","ev","str","^quiet_corner","/str","/ev",{"VAR=":"prior_choice",re:!0},"^Then leave yourself room to sit in it. I keep forgetting that part.",`
`,{"->":"offer"},null],"c-1":[`
`,"#","^choice:finding_feet","/#","ev","str","^finding_feet","/str","/ev",{"VAR=":"prior_choice",re:!0},"^Fair enough. One patch at a time. The rest can wait.",`
`,{"->":"offer"},null],"c-2":[`
`,"#","^choice:later","/#","ev","str","^later","/str","/ev",{"VAR=":"prior_choice",re:!0},"^Of course. I'll leave a note. Pip's waiting, and I said I'd only stop for a minute.",`
`,"end",null]}],null],returning_offer:["^Come round the shady side. The sunny side's being ambitious.",`
`,"^That planter's still waiting for you.",`
`,{"->":"offer"},null],offer:[["ev",{"VAR?":"gift"},"str","^claimed","/str","==","/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"already_have"},{"->":".^.^.^.8"},null]}],"nop",`
`,"^I brought a spare from the nursery. This one needs a home. Put it wherever you like.",`
`,"ev","str","^Thank you, I'll take it.","/str","/ev",{"*":".^.c-0",flg:4},"ev","str","^Not right now.","/str","/ev",{"*":".^.c-1",flg:4},{"c-0":[`
`,"#","^accept_gift","/#","^Good. It's in your decoration storage.",`
`,"ev",{"VAR?":"prior_choice"},"str","^quiet_corner","/str","==","/ev",[{"->":".^.b",c:!0},{b:["^ Somewhere shady, maybe. Your call. ",{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{b:["^ No rush placing it.",{"->":".^.^.^.15"},null]}],"nop",`
`,{"->":"town_invite"},null],"c-1":[`
`,"#","^decline_gift","/#","^No trouble. I'll leave it by the gate with a note. It's yours whenever you want it.",`
`,{"->":"town_invite"},null]}],null],already_have:["^You found the planter by the gate, then. Good.",`
`,"^No rush placing it.",`
`,{"->":"town_invite"},null],town_invite:[["ev",{"VAR?":"invite"},"str","^none","/str","!=","/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"goodbye"},{"->":".^.^.^.8"},null]}],"nop",`
`,"^If you get a spare hour, come into town. Banksia Bend's just down the road, east past the pond.",`
`,"^The co-op does seed and feed, and the café does a decent cuppa. People have been asking about you.",`
`,"ev","str","^I'd like to visit.","/str","/ev",{"*":".^.c-0",flg:4},"ev","str","^Maybe another day.","/str","/ev",{"*":".^.c-1",flg:4},{"c-0":[`
`,"#","^invite:yes","/#","^Good. Follow the track past the pond. Anytime suits.",`
`,{"->":"goodbye"},null],"c-1":[`
`,"#","^invite:later","/#","^Whenever suits. It's not going anywhere. Neither am I.",`
`,{"->":"goodbye"},null]}],null],goodbye:["^Right. The nursery won't open itself. I'll let you get on.",`
`,"end",null],callback:["ev",{"VAR?":"missed"},"/ev",[{"->":".^.b",c:!0},{b:["^ Good timing. I was passing anyway. ",{"->":".^.^.^.4"},null]}],"nop",`
`,["ev",{"VAR?":"visited"},"/ev",{"->":".^.b",c:!0},{b:[`
`,"^Kit says you've been into the co-op. Told you it was close.",`
`,{"->":".^.^.^.8"},null]}],["ev",{"VAR?":"invite"},"str","^yes","/str","==","/ev",{"->":".^.b",c:!0},{b:[`
`,"^Town's still there, by the way. The kettle's always on at the Slow Kettle.",`
`,{"->":".^.^.^.8"},null]}],"nop",`
`,"ev",{"VAR?":"placed"},"/ev",[{"->":".^.b",c:!0},{b:["^ ",{"->":"callback_placed"},{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{b:["^ ",{"->":"callback_stored"},{"->":".^.^.^.15"},null]}],"nop",`
`,null],callback_placed:["^You've found a spot for it.",`
`,["ev",{"VAR?":"prior_choice"},"str","^quiet_corner","/str","==","/ev",{"->":".^.b",c:!0},{b:[`
`,"^And you left room to sit. That's the part I always forget.",`
`,{"->":".^.^.^.5"},null]}],["ev",{"VAR?":"prior_choice"},"str","^finding_feet","/str","==","/ev",{"->":".^.b",c:!0},{b:[`
`,"^One patch at a time. That's a good patch.",`
`,{"->":".^.^.^.5"},null]}],[{"->":".^.b"},{b:[`
`,"^It suits the place.",`
`,{"->":".^.^.^.5"},null]}],"nop",`
`,"#","^callback_done","/#","^I'll let you get on.",`
`,"end",null],callback_stored:["^Just a quick hello on my way to the nursery.",`
`,"#","^callback_done","/#","^The planter will keep in storage until you find the right spot. No hurry.",`
`,"end",null],"global decl":["ev","str","^intro","/str",{"VAR=":"visit"},"str","^none","/str",{"VAR=":"prior_choice"},"str","^none","/str",{"VAR=":"gift"},!1,{"VAR=":"placed"},!1,{"VAR=":"missed"},"str","^none","/str",{"VAR=":"invite"},!1,{"VAR=":"visited"},"/ev","end",null]}],n={},o={inkVersion:21,root:e,listDefs:n};export{o as default,t as inkVersion,n as listDefs,e as root};
