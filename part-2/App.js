function App(){
    return(
        <div>
            <Tweet
            name="Megan Buglio"
            username="bugsy"
            date={new Date().toDateString()}
            message="This is my first tweeeeeeeet!"/>
            <Tweet
            name="Denji"
            username="TheChainsawMan"
            date={new Date().toDateString()}
            message="Give me food!"/>
            <Tweet
            name="Jeff Spicoli"
            username="surferdude123"
            date={new Date().toDateString()}
            message="There's no birthday party in here"/>
        </div>
    )
}