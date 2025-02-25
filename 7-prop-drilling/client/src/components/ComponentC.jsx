import { Data, Data2 } from "../App"

import { useContext } from "react"


function ComponentC() {
    const userName = useContext(Data)
    const age = useContext(Data2)
  return (
    <>
        {/* Here we are consuming the data - needs a callback fn
        <Data.Consumer>
            {(name) => {
                // return <h1>{name}</h1>;
                return(
                    <Data2.Consumer>
                        {(age) => {
                            return <h1>My name is {name} and I am {age} years old.</h1>
                        }}
                    </Data2.Consumer>
                )
            }}
        </Data.Consumer> */}

        {/*useContext allows us to use the data without the struggle from above */}
        <h1>My name is {userName} and I am {age} years old</h1>
    </>
  );
};

export default ComponentC