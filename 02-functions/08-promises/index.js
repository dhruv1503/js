// console.log("let's do promises");
// setTimeout(() => {
//     console.log("We'll do it.")
// }, 0)
// function planSprint(sprintTask) {
//     setTimeout(() => {
//         return `${sprintTask} has been added to sprint`
//     }, 0)
// }
// function planTaskBetter(task, callback) {
//     setTimeout(() => {
//         callback(task)
//     }, 0)
// }
// function implementTheTask(task, callback) {
//     setTimeout(() => {
//         callback(`Task process initiated => ${task}`)
//     }, 0)
// }
// function finishTheTask(task, callback, timer = 0) {
//     setTimeout(() => {
//         callback(`Task process finished => ${task} and took ${timer} units of time`)
//     }, 2000)
// }
// function markTaskComplete(task, callback) {
//     setTimeout(() => {
//         callback(`${task} is done`)
//     }, 2000)
// }
// const task = planSprint("Monday planning");
// console.log("task => ", task)
// const betterTask = planTaskBetter("Prepare for interview", function(message) {
//     console.log(message)
//     implementTheTask("Preperation for interview", function(message) {
//         console.log(message)
//         finishTheTask("Preperation for interview", (message) => {
//             console.log(message)
//             markTaskComplete("Preperation for interview", (message) => {
//                 console.log(message)
//             })
//         }, 2000)
//     })
// });
// console.log("betterTask => ", betterTask)
// console.log("I've done it")
// Alot of these tasks are making our code bloated and a right shifting pyramid is getting formed. Right? Therefore, to improve code readability as well as add modularity to code,Promises came to picture from callbacks
// const preperationPromise = new Promise((resolve, reject) => {
//     const consistency = false
//     if (consistency) resolve("Good to go for interviews");
//     else reject("Go back home")
// })
// console.log("start")
// preperationPromise.then((response) => {
//     console.log(response)
// }).catch((error) => (console.log(error)))
// console.log(preperationPromise)
// console.log("stop")
// Let's try and solve above problem with promises
function planSprint(sprintTask) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${sprintTask} has been added to sprint`)
        }, 0)
    })
}

function planTaskBetter(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(task)
        }, 0)
    })
}

function implementTheTask(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task process initiated => ${task}`)
        }, 0)
    })
}

function finishTheTask(task, timer = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task process finished => ${task} and took ${timer} units of time`)
        }, timer)
    })
}

function markTaskComplete(task, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${task} is done`)
        }, 0)
    })
}

function didNotMarkTask(){
	return new Promise((reslove, reject) => {
		reject("Task not marked end")
	})
}
// const task = planSprint("Monday planning").then((response) => (console.log(response)));
// console.log("task => ", task)
// const betterTask = planTaskBetter("Prepare for interview", function(message) {
//     console.log(message)
//     implementTheTask("Preperation for interview", function(message) {
//         console.log(message)
//         finishTheTask("Preperation for interview", (message) => {
//             console.log(message)
//             markTaskComplete("Preperation for interview", (message) => {
//                 console.log(message)
//             })
//         }, 2000)
//     })
// });


// const betterTask = planTaskBetter("Prepare for interview").then((response) => {
//     console.log(response)
//     implementTheTask("Preperation for interview").then((response2) => {
//         console.log(response2)
//         finishTheTask("Preperation for interview", 2000).then((response3) => {
//             console.log(response3)
//             markTaskComplete("Preperation for interview").then((reponse4) => {
//                 console.log(reponse4)
//             }).catch((error4) => (console.log(error4)))
//         }).catch((error3) => (console.log(error3)))
//     }).catch((error2) => (console.log(error2)))
// }).catch((error) => (console.log(error)))


// It is an improved code as we don't have to deal with callbacks anymore, but still we can observe right shifing pyramind structure, how can we avoid that? Let's try promise chaining


// Promise chaining is a process of liniking promises by one promise returning other promise


// const betterTask = planTaskBetter("Prepare for interview").then((response) => {
//     console.log(response)
//     return implementTheTask("Preperation for interview")
// }).then((response) => {
//     console.log(response)
//     return finishTheTask("Preperation for interview", 2000)
// }).then((response) => {
//     console.log(response)
//     return markTaskComplete("Preperation for interview")
// }).then((response) => {
//     console.log(response)
// }).catch((error) => (console.log(error)))


// It is still a long way to a task, 


// for the same JS has some promise methods knows are promise combinators
// promise combinators help us process more than one promise;


// 1. Promise.all()
// Prmise.all returns all promise responses in an array, but a small isuues with Promise.all is, if one promise gets rejected all promises get rejected. 
// const taskFlow = Promise.all([planTaskBetter("Prepare for interview"), implementTheTask("Preperation for interview"), finishTheTask("Preperation for interview", 2000), markTaskComplete("Preperation for interview")])


// const taskFlow2 = Promise.all([planTaskBetter("Prepare for interview"), implementTheTask("Preperation for interview"), finishTheTask("Preperation for interview", "abcd"), didNotMarkTask()])

// console.log(taskFlow)
// console.log(taskFlow2)
// taskFlow.then((response) => (console.log(response))).catch((error) => (console.log(error)))
// taskFlow2.then((response) => (console.log(response))).catch((error) => (console.log(error)))

// 2. Promise.race(), 
// Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.


// const leastTimeTakingTask = Promise.race([planTaskBetter("Prepare for interview"), implementTheTask("Preperation for interview"), finishTheTask("Preperation for interview", 2000), markTaskComplete("Preperation for interview")]);
// const leastTimeTakingTask2 = Promise.race([planTaskBetter("Prepare for interview"), implementTheTask("Preperation for interview"), finishTheTask("Preperation for interview", "abcd"), didNotMarkTask()])
// console.log(leastTimeTakingTask)
// console.log(leastTimeTakingTask2) // rejects on 1 message

// leastTimeTakingTask.then((resp) => (console.log("resp =>", resp))).catch((error) => (console.log("error => ", error)))
// leastTimeTakingTask2.then((resp) => (console.log("resp =>", resp))).catch((error) => (console.log("error => ", error)))

// 3. Promise.any()
// Fulfills when any of the promises fulfills; rejects when all of the promises reject.

// const getFastestTask = Promise.any([planTaskBetter("Prepare for interview"), implementTheTask("Preperation for interview"), finishTheTask("Preperation for interview", 2000), markTaskComplete("Preperation for interview")]);

// const getFastestTask2 = Promise.any([planTaskBetter("Prepare for interview"), implementTheTask("Preperation for interview"), finishTheTask("Preperation for interview", "abcd"), didNotMarkTask()])

// console.log(getFastestTask);
// console.log(getFastestTask2);

// 4. Promise.allSetled()
// Waits till all tasks are settled and sends all response / errors along with status

// const getTaskStaus = Promise.allSettled([planTaskBetter("Prepare for interview"), implementTheTask("Preperation for interview"), finishTheTask("Preperation for interview", 2000), markTaskComplete("Preperation for interview")]);

// const getTaskSettled2 = Promise.allSettled([planTaskBetter("Prepare for interview"), implementTheTask("Preperation for interview"), finishTheTask("Preperation for interview", "abcd"), didNotMarkTask()]);
// const getTaskSettled3 = Promise.allSettled([didNotMarkTask(), didNotMarkTask(), didNotMarkTask()])

// console.log(getTaskStaus);
// console.log(getTaskSettled2);
// console.log(getTaskSettled3);
// getTaskSettled3.then((resp) => (console.log(resp))).catch((error) => (console.log(error)))


// Still our api call / Promise is async in nature, what is solution to get line by line work

// const taskCycle = async() => {
// 	try{
// 		const planTask = await planTaskBetter("Prepare for interview");
// 		const startTask = await implementTheTask("Preperation for interview");
// 		const finishTask = await finishTheTask("Preperation for interview", 2000);
// 		const markTask = await markTaskComplete("Preperation for interview");
// 		console.log({planTask, startTask, finishTask, markTask})
// 	}
// 	catch(error){
// 		console.log(error)
// 	}
// }
// const report = taskCycle()
// console.log(report)

// Problems based on promises 

// console.log("start");
// const prom = () => {
//  return new Promise((resolve, reject) => {
//  	console.log("Hello");
//  	resolve(100);
//  	console.log("Bye")
//  })
// } 
// prom().then((res) => (console.log(res)))

// console.log("end");

// Output 
// start
// hello 
// bye
// end
// 100

// Why so?, because when JS goes inside promise, it executed all sync code, and then returns all async call to callback queue

function jobState(status){
	return new Promise((resolve, reject) => {
      if(true){
      	resolve("sucess")
      }
      else{
      	reject("error")
      }
	})
}
const jobStatus = jobState(true);

jobStatus.then((response) => {
	console.log(response)
	return jobState(true)
}).then(function(data){
	if(data !== "victory"){
		throw "defeat"
	}
	return jobState(true)
}).then(function(data){
	console.log(data)
}).catch(function(error){
	console.log(error);
	return jobState(false)
}).then(function(data){
	console.log(data)
	return jobState(true)
}).catch(function(error){
	console.log(error)
	return "Error Caught"
}).then(function(data){
	console.log(data)
	throw Error("error")
}).then(function(data){
   console.log(data.message)
}).catch(function(error){
	console.log(error.message)
})

// My answer





