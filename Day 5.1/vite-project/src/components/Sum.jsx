import React from "react";

const Sum = React.memo(({ number }) => {

    function calculateSum(n) {
        return (n * (n + 1)) / 2;
    }

    const total = calculateSum(number);

    console.log("sum rendered");

    return (
        <>
            <p>This is our Math Library</p>
            <p>Our sum is {total}</p>
        </>
    );

})

export default Sum;
