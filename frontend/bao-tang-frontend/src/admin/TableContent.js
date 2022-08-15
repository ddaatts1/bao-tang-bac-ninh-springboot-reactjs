import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TableContent({ category }) {

    const [url, setUrl] = useState(`/admin/add?category=${category}`)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()


    useEffect(() => {
        axios.get(`http://localhost:8080/adminn/show?category=${category}&page=${page}`)
            .then((response) => {
                setTotalPage(response.data.totalPages)
                setPosts(response.data.content)
            })


    }, [page])


    return (
        <div id="content">
            <Button><Link to={url}>Thêm</Link></Button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">title</th>
                        <th scope="col">publish</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((posts, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{posts.id}</th>
                                <td>{posts.postsName}</td>
                                <td>{posts.postsTitle}</td>
                                <td>{posts.publish ? "Có" : "Không"}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
            {[...Array(totalPage)].map((i, index) => {
                return (
                    <button key={index} onClick={() => setPage(index + 1)}>{index + 1}</button>
                )
            })}
        </div>
    )
}