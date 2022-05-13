import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import AddPost from "./AddPost";
import Footer from "./components/Footer";
import Header from './components/Header';


export default () => {
    const [posts, getPosts] = useState([]);
    const user = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            fetch("https://api.react-learning.ru/posts", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            .then(o => o.json())
            .then(data => {
                console.log(data);
                data.forEach(d => {
                    console.log(d.tags);
                })
                getPosts(data.reverse());
            })
        }
    }, []);

    const deletePost = (e) => {
        let id = e.target.id;
        console.log(id);
        fetch(`https://api.react-learning.ru/posts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res => res.json()).then(ans => {
            console.log(ans);
            getPosts(prev => prev.filter(post => post._id !== id));
        })
    }
    return <>
        <BrowserRouter>
        <Header/>
            <nav>
                <Link to="/">Все посты</Link>
                <Link to="/add">Добавить пост</Link>
            </nav>
            <Routes>
                <Route path="/" element={<div>
                    <h1>Мои посты</h1>
                    {posts.map((post, i) => <div key={i} className="post">
                        <img src={post.image}/>
                        {post.title}
                        {post.author._id === user && <span className="delete" onClick={deletePost} id={post._id}>x</span>}
                    </div>)
                    }
                </div>}/>
                <Route path="/add" element={<AddPost update={getPosts}/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
}
