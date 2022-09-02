import React, { useState } from 'react';
import './blog.css';
import BlogList from './BlogList';

const Blog = () => {

    const [blogs, setBlogs] = useState([{
        title: 'My New Blog',
        body: `about my new blog <b>great blog</b>`,
        author: 'BeeTech',
        id: 1
    },
        {
            title: 'My New Blog',
            body: `about my new blog <b>great blog</b>`,
            author: 'Favour',
            id: 2
        },
        {
            title: 'My New Blog',
            body: `about my new blog <b>great blog</b>`,
            author: 'Lizzy',
            id: 3
        },
        {
            title: 'My New Blog',
            body: 'Let me tell you all about html',
            author: 'Bash',
            id: 4
        }])
    return (
        <div className='blog'>
            <BlogList blogs={blogs} title='All Blogs'/>
        </div>
    )
}

export default Blog