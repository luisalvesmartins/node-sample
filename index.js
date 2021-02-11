console.log("TEST 1 - entity-decode")
var decode = require('entity-decode') // node version
console.log("Should display special characters")
console.log(decode('foo &copy; bar &ne; baz &#x1D306; qux') )


console.log("\nTEST 2 - good object coding")

    function TestObject(){
        let x=0;
        let y=0;

        function getX(){
            return x;
        }
        function setX(vx){
            x=vx;
        }

        return {
            setX, getX
        }
    }

    const O= TestObject();
    O.setX(10);

    console.log("Should return 10")
    console.log(O.getX())

    console.log("Should return 0")
    const O1= TestObject();
    console.log(O1.getX())
