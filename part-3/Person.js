const MAX_LENGTH = 6;

function Person({age, hobbies, name}){
    const voteAge = age >= 18 ? "Get out there and vote you adult!" : "Go study some more wittle baby!";

    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>);

    return(
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies: {hobbiesList}
                </ul>
            </ul>
            <h3>{voteAge}</h3>
        </div>
    );
}