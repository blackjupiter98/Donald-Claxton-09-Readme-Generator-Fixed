// node modules 
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions 
inquirer.prompt(
    [
        {
            type: 'input',
            message: "whats the app or project title?",
            name: 'title',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}, 
        },
        {
            type: 'input',
            message: 'how do you install it?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}} 
        },
        {
            type: 'input',
            message: "any instructions to follow?",
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}} 
        },
        {
            type: 'input',
            message: "any credits?",
            name: 'credit',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}} 
        },
        {
            type: 'input',
            message: "how do you use your app?",
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
        },
        {
            // list of license 
            type: 'list',
            message: "what license did you use?",
            name: 'license',
            choices:['The MIT License', 'The GPL License','Apache License','GNU License','N/A'], 
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}}
        },
        {
            type:'input',
            message:'GitHub username:',
            name:'git', 
            validate:(value)=>{ if(value){return true} else {return 'I need a value to continue'}}
        },
        {
            type:'input',
            message:'E-mail',
            name:'email',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type:'input',
            message:'do you have a Linkedin?',
            name:'Linkedin',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        }
        
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
})=>{

// template to be used 
const template = `# ${title}

* [Installation] (#installation)
* [Usage] (#usage)
* [Credits] (#credits)
* [License] (#license)
# Installation
${installation}
## Usage 
${usage}
### instructions 
${instructions}
## Credits 
${credit}
## License
${license}

# Contact 
* Github :${git}
* Linkedin :${linkedin}
* E-mail :${email}`;
// funcion to create readme using fs 
createNewFile(title,template);
}
);

function createNewFile(fileName,data){

fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated');  
})    
}

//INSTALL PACKAGES by using npm init -y, npm i inquirer //