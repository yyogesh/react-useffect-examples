import React, { useEffect, useState } from 'react'

const HookDataFatch = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState<any>({});
    const [id, setId] = useState('1')
    const [idFromButtonClick, setIdFromButtonClick] = useState('1')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setPosts(data))
    }, [])


    // const fetchPostById = async () => {
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //     const response = await res.json();
    //     setPost(response);
    // }

    // useEffect(() => {
    //     fetchPostById();
    // }, [idFromButtonClick])

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const response = await res.json();
            setPost(response);
        })();
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <ul>
                {
                    posts.slice(0, 7).map((post: any) => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default HookDataFatch