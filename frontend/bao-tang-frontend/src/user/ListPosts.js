import axios from "axios"
import { useEffect, useState } from "react"
import parse from 'html-react-parser';
import { Link, useParams } from "react-router-dom";



function ListPosts() {

    const [pageContent, setPageContent] = useState()
    const [page, setPage] = useState(1)
    const [empty, setEmpty] = useState(false)
    const [totalPage, setTotalPage] = useState()
    let { category } = useParams();

    const defaultImgURL = "http://localhost:8080/image/";
    const parse = require('html-react-parser');


    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:8080/api/public/${category}?page=${page}`
        }).then((response) => {

            setEmpty(true)
            setPageContent(response.data)
            setTotalPage(response.data.totalPages)
            console.log(response)

        }).catch(function (response) {
            //handle error
            console.log(response);
        });

    }, [page])

    return (
        <div style={{
            "width": "80%", "marginLeft": "20px"
        }}>
            {empty && pageContent.content.map((c, index) => {
                return (
                    <div key={index} style={{ "marginTop": "10px", "width": "100%", "display": "flex", "height": "200px" }}>
                        <Link to={c.id.toString()}><img style={{ "float": "left", "minWidth": "200px" }} key={index} src={c.imageList.length !== 0 ? defaultImgURL + c.imageList[0].imageName : "http://localhost:8080/image/bear%20-%20Copy.png"} alt="simage"></img></Link>
                        <span style={{
                            "width": "700px",
                            "height": "95%",
                            "marginLeft": "10px",
                            "overflow": "hidden",
                            "display": "-webkit-box",
                            "WebkitLineClamp": "3",
                            "WebkitBoxOrient": "vertical",
                            "textOverflow": "ellipsis",
                            "wordWrap": "break-word",
                        }}>
                            <div style={{ "marginBottom": "0px" }}>{c.postsTitle}</div>
                            <div style={{ "fontSize": "small", "marginBottom": "0px" }}>{c.date}</div>
                            <div>{parse(c.postsContent)}</div>
                        </span>
                    </div>
                )

            })}

            {[...Array(totalPage)].map((i, index) => {
                return (
                    <button style={{ "width": "20px", "marginTop": "40px" }} key={index} onClick={() => setPage(index + 1)}>{index + 1}</button>
                )
            })}
        </div >


    )
}

export default ListPosts