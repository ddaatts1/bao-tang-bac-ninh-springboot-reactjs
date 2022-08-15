import SideBar from "./SideBar";
import './Admin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function AddPosts() {
    let query = useQuery()
    const mystyle = {
        "paddingTop": "10px",
    };

    const [url,] = useState("/admin?category=" + query.get("category"))
    const [postsName, setPostsName] = useState('')
    const [publish, setPublish] = useState(true)
    const [postsSource, setPostsSource] = useState('')
    const [postsTitle, setPostsTitle] = useState('')
    const [postsContent, setPostsContent] = useState('')
    const [category,] = useState(query.get("category"))
    const [images, setImages] = useState([])


    const handleSubmit = () => {

        const formData = new FormData();

        formData.append("postsName", postsName)
        formData.append("publish", publish)
        formData.append("postsSource", postsSource)
        formData.append("postsTitle", postsTitle)
        formData.append("postsContent", postsContent)
        formData.append("category", category)

        for (let i = 0; i < images.length; i++) {
            formData.append("File", images[i])
        }

        axios({
            method: "post",
            url: "http://localhost:8080/adminn/add",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


    }


    const uploadImage = (event) => {

        setImages(event.target.files)

    }

    return (

        <div className="wrapper">
            <Helmet>
                <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossOrigin="anonymous"></script>
                <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossOrigin="anonymous"></script>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossOrigin="anonymous"></script>
            </Helmet>


            <SideBar />
            <div id="content">
                <form >
                    <div className="form-group">
                        <label htmlFor="name">Tên<span style={{ color: "red" }}>*</span>: </label>
                        <input name="postsName" value={postsName} onChange={(event) => setPostsName(event.target.value)} type="text" className="form-control" id="name"
                            aria-describedby="emailHelp" placeholder="Tên bài viết" />
                    </div>
                    <div className="form-group">
                        <label>Xuất bản<span style={{ color: "red" }}>*</span>: </label>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" checked={publish === true}
                                onChange={() => setPublish(true)}
                                id="1"
                                className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="1">Có</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" checked={publish === false}
                                onChange={() => setPublish(false)}
                                id="2"
                                className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="2">Không</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="source">Nguồn: </label>
                        <input type="text" className="form-control"
                            id="source" name="postsSource"
                            value={postsSource}
                            onChange={(event) => setPostsSource(event.target.value)}
                            aria-describedby="emailHelp" placeholder="Nguồn-Tác giả" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Tiêu đề<span style={{ color: "red" }}>*</span>: </label>
                        <input type="text" className="form-control"
                            id="title"
                            name="postsTitle"
                            value={postsTitle}
                            onChange={(event) => setPostsTitle(event.target.value)}
                            aria-describedby="emailHelp" placeholder="Tiêu đề" />

                    </div>
                    <div style={mystyle} className="form-group">
                        <label htmlFor="exampleFormControlFile1">Hình ảnh: </label>
                        <input name="img" type="file"
                            multiple
                            onChange={(event) => { uploadImage(event) }}
                            accept="image/*"
                            className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mytextarea">Nội dung<span style={{ color: "red" }}>*</span>: </label>
                        <textarea className="form-control"
                            id="mytextarea"
                            rows="8"
                            name="postsContent"
                            value={postsContent}
                            onChange={(event) => setPostsContent(event.target.value)}
                        ></textarea>

                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary"><a href={url}>Thêm</a>
                    </button>
                </form>

            </div>

        </div>


    )
}