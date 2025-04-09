import React, {useState, useEffect} from "react";

const Form = () =>{
    const [search, setSearch] = useState('')
    const [urld , setUrld] = useState('')
    const [urlr, setUrlr] = useState('')
    const [data, setData] = useState([])
    const [repo, setRepo] = useState([])

    useEffect(()=>{
        setUrld(`https://api.github.com/users/${search}`)
        setUrlr(`https://api.github.com/users/${search}/repos`)
    },[search])
    const formAction = (event)=>{
        event.preventDefault()
        console.log(search)
        const searching = search
        console.log(searching)
        // setUrld(`https://api.github.com/users/${searching}`)

       

        fetch(urld)
        .then(response => response.json())
        .then(dat => setData(dat))

        fetch(urlr)
        .then(response => response.json())
        .then(repos => setRepo(repos))

        console.log(repo)
        console.log(data)

        
    }

    return(
        <>
        
            <div>
                <form onSubmit={(event)=> {
                    formAction(event)
                }}>
                    <input placeholder="Username for github" 
                    onChange={(event)=>{
                        setSearch(event.target.value)
                    }} />
                    <button type="submit">submit</button>
                </form>
            </div>
            {
                
            <div>
                <h1>Candidate infor</h1>
                
                
                
                <ul>
                    <li> <strong>Avatar image:</strong> <img src={data.avatar_url}/></li>
                    <li> <struon>Name:</struon>: {data.name}</li>
                    <li><strong>Username</strong>: {data.login}</li>
                    <li>Location: {data.location}</li>
                    <li>Bio: {data.bio}</li>
                    <li>Follower: {data.followers}</li>
                    <li>Link: {data.url}</li>
                </ul>
                

            </div>
            }

            <div>
                <h1>
                    Repository list
                </h1>                
                {
                    
                    repo.map((rep) => (        
                <div>
                    <h2>Another repo {rep.index}</h2>
                    <ul>
                        <li><strong>Repo name</strong>: {rep.name}</li>
                        <li><strong>Description</strong>: {rep.description}</li>
                        <li><strong>Star count</strong>: {rep.stargazers_count}</li>
                        <li>Forks: {rep.forks_count}</li>
                        <li>Primary language: {rep.language}</li>
                    </ul>
                </div>
                )
                )
                
                
                }
            </div>


        </>
    )

}
export default Form