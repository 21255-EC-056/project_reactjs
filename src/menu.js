import{Link} from "react-router-dom";
//Arrow Function E56 Format
    let sc ={
        background:'yellow',
    }
function Menu(){
    return(
        <div style={sc}>
            <Link to ="/home"><button>Home</button></Link>&emsp;
            <Link to ="/about"><button>About</button></Link>&emsp;
            {/* <Link to ="/Calculator"><button>Calculator</button></Link>&emsp; */}
            <Link to ="/AgeCalculator"><button>Age Calculator</button></Link>&emsp;
            <Link to ="/RootCalculator"><button>SquareRoot Calculator</button></Link>&emsp;
            <Link to ="/PercentageCalculator"><button>Percentage Calculator</button></Link>&emsp;
            <Link to ="/RandomNumberGenerator"><button>RandomNumberGenerator</button></Link>&emsp;
            <Link to ="/SquareCalculator"><button>SquareCalculator</button></Link>&emsp;
            <Link to ="/contact"><button>Contact</button></Link>&emsp;
            <Link to ="/services"><button>Services</button></Link>&emsp;
            <Link to ="/product1"><button>Product1</button></Link>&emsp;
            <Link to ="/newproduct"><button>New product</button></Link>&emsp;
            

        
        </div>
    )
}
 export default Menu