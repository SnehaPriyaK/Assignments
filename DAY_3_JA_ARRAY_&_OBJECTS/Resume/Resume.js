var resumeData = {
    name:"SNEHA PRIYA K",
    address:`No.18, Sivandi Adithanar Street, Sri Lakshmi Nagar, Maduravoyal, Chennai-600095.`,
    mobile:6381123264,
    emailID:"ksnehapriyait@gmail.com",
    Objective:`Recent Information Technology graduate seeking an entry level role in Software Development. Organised and motivated graduate, able to apply time management and organizational skills in various environments.`,
    "Educational Profile":[
        {
            Institute:"Panimalar Engineering College",
            Class:"B.Tech IT",
            Year:2017,
            Percentage:77.4
        },
        {
            Institute:"KV MEG & CENTRE",
            Class:"HSC",
            Year:2013,
            Percentage:67.7
        },
        {
            Institute:"KV MEG & CENTRE",
            Class:"SSLC",
            Year:2011,
            Percentage:76
        }
    ],
    "Project Details":{
        Title:"3SP-Searching the Symptoms and Suggestions about Prolotherapy",
        Description:`This work, Searching the Symptoms and Suggestion about Prolotherapy is the android application which is a useful app for the users to know about Prolotherapy. Also, nearby hospitals and doctors are provided, so treatment can be given easily to avoid severe problems.`,
        Technology : "Android" 
    },
    Achievements:[
        `● Published a journal on “3SP-Searching the Symptoms and Suggestions about Prolotherapy” in the International Journal of Scientific Engineering and Research(IJSER).`,
        `● Cleared Business English Certificate Preliminary with 70% aggregate.`
    ],
    Interest:[
        "● Core java ",
        "● Oops concepts",
    ],
    Traits:[
        "● Motivation & Determination." ,
        "● Adaptable to any environment.",
        "● Excellent verbal and written communication skills.",
        "● Ability to deal with people diplomatically and hard worker.",
        "● Eager to learn new technology." 
    ],
    Declaration:"I hereby declare that the information furnished above is true to the best of my knowledge."

};

displayResume= (resumeData)=>{
console.log(`
${resumeData.name}
${resumeData.address}
Mobile:${resumeData.mobile}
Email ID:${resumeData.emailID}\n
Career Objective 
    ${resumeData.Objective}\n`);
//console.log(typeof resumeData["Educational Profile"]==="object")
if(typeof resumeData["Educational Profile"]==="object"){
    console.log("Educational Profile")
    console.table(resumeData["Educational Profile"])
}
console.log("Project Details");
for(let element in resumeData["Project Details"]){
    console.log(`\t${element} : ${resumeData["Project Details"][element]}`)
}
console.log("Achievements")
for(let element of resumeData.Achievements)
{
    console.log(`\t${element}`)
}
console.log("Area of Interest")
for(let element of resumeData.Interest)
{
    console.log(`\t${element}`)
}
console.log("Personal Traits")
for(let element of resumeData.Traits)
{
    console.log(`\t${element}`)
}
console.log(`Declaration \n\t${resumeData.Declaration}`)

}
displayResume(resumeData);
