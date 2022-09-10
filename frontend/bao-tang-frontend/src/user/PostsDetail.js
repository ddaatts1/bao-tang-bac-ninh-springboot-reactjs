
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function PostsDetail() {

    let { id } = useParams();
    const [postsDetail, setPostsDetail] = useState()
    const parse = require('html-react-parser');


    useEffect(() => {

        axios.get(`http://localhost:8080/api/public/posts/${id}`).then((response) => {
            setPostsDetail(response.data)
            console.log(response.data)

        })
    }, [id])

    return (
        <div style={{ "width": "80%", "marginLeft": "20px" }}>
            {
                postsDetail && <div>{parse(postsDetail.postsContent)}</div>
            }
        </div >


    )
}