var biodata = {
    name: "Faishal",
    age: 23,
    hobbies : ["futsal", "lari"],
    isMaried : false,
    schoolList : [{SD: "Angkasa",
                    yearIn: 2008, 
                    yearOut: 2009,
                    major: null},
                {SMP: "SMPN 40 Bandung",
                    yearIn:2009,
                    yearOut: 2012,
                    major: null},
                {SMA: "SMA NFBS",
                    yearIn:2012,
                    yearOut: 2015,
                    major: "IPA"},
                {Kuliah: "Universitas Telkom",
                    yearIn:2015,
                    yearOut: 2020,
                    major: "Teknik Elektro"}],
    skills : [{skillName: "HTML", level: "advanced"},
            {skillName: "CSS", level: "advanced"},
            {skillName: "javaScript", level : "beginner"}],
    interestingInCoding : true
}

console.log(biodata.schoolList);