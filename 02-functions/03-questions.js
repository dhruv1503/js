function counter(){
    var _counter = 1;
    function addCounter(addition){
        _counter += addition
    }
    function retrieve(){
        console.log(_counter)
    }
    return {
        addCounter,
        retrieve,
        _counter
    }
}

// HOW??

var x = counter();

x.addCounter(5);
console.log(x._counter)
x._counter += 5
x.retrieve()
x.addCounter(10);
console.log(x._counter)
x.retrieve()