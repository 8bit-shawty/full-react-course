
function Weather({temperature}) {
    if(temperature < 15){
        return <h1>Its cold outside!</h1>
    } else if(temperature >= 15 && temperature <= 25){
        return <h1>Its nice outside!</h1>
    }else{
        return <h1>Its hot outside!</h1>
    }
}

export default Weather