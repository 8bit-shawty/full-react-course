
function UserStatus({loggedIn, isAdmin}) {
    if(loggedIn){
        return (
            <>
                {isAdmin ?<h1>Welcome ADMIN</h1>:<h1>Welcome user!</h1>}
            </>
        )
    }else{
        return <h1>Sign in here</h1>
    }
}

export default UserStatus