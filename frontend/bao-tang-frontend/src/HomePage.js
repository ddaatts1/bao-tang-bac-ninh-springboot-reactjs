import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Introdution from "./user/Introdution";
import ListPosts from "./user/ListPosts";
import PostsDetail from "./user/PostsDetail";
import PublicNav from "./user/PublicNav";


export default function HomePage() {
    let { category } = useParams();
    let { id } = useParams();

    const style = {
        "display": "flex",

    }

    return (
        <div >
            <Helmet>
                <script>
                    var toDay = new Date();
                    var date = 'Ngày ' + toDay.getDate() + ' Tháng ' + (toDay.getMonth() + 1) + ' Năm ' + toDay.getFullYear();
                    document.getElementById('time').innerHTML = date;
                </script>
            </Helmet>
            <PublicNav />
            <div style={style} >
                {category && id ? <PostsDetail /> : category ? <ListPosts /> : <Introdution />}
                <div style={{
                    "marginLeft": "20px",
                    "marginRight": "10px",
                    "backgroundColor": "#dedede",
                    "width": "20%",
                    "height": "400px"
                }}  >d</div>

            </div>
        </div>

    )
}