#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.blue("\t*** Welcome to Adventure Game***\t"));
class Player{
    name : string;
    fuel : number = 100;
    constructor(name:string){
        this.name=name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel =100
    }
}
class Opponent{
    name : string;
    fuel : number = 100;
    constructor(name:string){
        this.name=name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
    let player = await inquirer.prompt(
    [
        {
            name: "name",
            type: "input",
            message: (chalk.green("Enter your good name please!")),
        }
    ]
);
let opponent = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: (chalk.green("Please select your opponent!")),
            choices: ["Skeleton", "Zoombie"],
        }
    ]
);

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if(opponent.select === "Skeleton"){
        let ask = await inquirer.prompt(
            [
                {
                 name: "option",
                 type: "list",
                 message: (chalk.green("What would you like to do ??")),
                 choices: ["Attack", "Drink portion", "Run for your life"] 
                }
            ]
        )
           if(ask.option === "Attack"){
             let num = Math.floor(Math.random() * 2)
             if( num > 0){
                   p1.fuelDecrease()
                   console.log(chalk.yellow(`${p1.name} fuel is ${p1.fuel}`));
                   console.log(chalk.yellow(`${o1.name} fuel is ${o1.fuel}`));
                   if(p1.fuel <= 0){
                    console.log(chalk.red("You Loose! Better Luck next Time...:)"));
                    process.exit()
                   }
             }
             if( num < 0){
                o1.fuelDecrease()
                console.log(chalk.yellow(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellow(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.green("You Win! CONGRATULATIONS):)"));
                    process.exit()
                   }
          }
        }

           if(ask.option === "Drink portion"){
             p1.fuelIncrease()
             console.log(chalk.yellow(`You drank health portion, now your fuel is ${p1.fuel} `));
           }

           if(ask.option === "Run for your life"){
            console.log(chalk.red("You Loose ! Better luck next time!!:)"))
            process.exit()
           }

            

           
        }

            if(opponent.select === "Zoombie"){
        let ask = await inquirer.prompt(
            [
                {
                 name: "option",
                 type: "list",
                 message: (chalk.green("What would you like to do ??")),
                 choices: ["Attack", "Drink portion", "Run for your life"] 
                }
            ]
        )
           if(ask.option === "Attack"){
             let num = Math.floor(Math.random() * 2)
             if( num > 0){
                   p1.fuelDecrease()
                   console.log(chalk.yellow(`${p1.name} fuel is ${p1.fuel}`));
                   console.log(chalk.yellow(`${o1.name} fuel is ${o1.fuel}`));
                   if(p1.fuel <= 0){
                    console.log(chalk.red("You Loose! Better Luck next Time...:)"));
                    process.exit()
                   }
             }
             if( num < 0){
                o1.fuelDecrease()
                console.log(chalk.yellow(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellow(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.green("You Win! CONGRATULATIONS):)"));
                    process.exit()
                   }
          }
        }

           if(ask.option === "Drink portion"){
             p1.fuelIncrease()
             console.log(chalk.yellow(`You drank health portion, now your fuel is ${p1.fuel} `));
           }

           if(ask.option === "Run for your life"){
            console.log(chalk.red("You Loose ! Better luck next time!!:)"))
            process.exit()
           }
           
        
            }
        }
                
while(true)