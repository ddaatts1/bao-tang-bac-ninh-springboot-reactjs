import 'bootstrap/dist/css/bootstrap.min.css';



export default function SideBar() {

    return (
        <nav id="sidebar">


            <div className="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Dummy Heading</p>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Tin tức</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="/admin?category=Tin_Noi_Bat">Tin nổi bật</a>
                        </li>
                        <li>
                            <a href="/admin?category=Su_Kien_Sap_Dien_Ra">Sự kiện sắp diễn</a>
                        </li>

                    </ul>
                </li>

                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Trưng bày</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="/admin?category=Trung_Bay_Thuong_Xuyen">Trưng bày thường xuyên</a>
                        </li>
                        <li>
                            <a href="/admin?category=Trung_Bay_Chuyen_De">Trưng bày chuyên đề</a>
                        </li>
                        <li>
                            <a href="/admin?category=Trung_Bay_Luu_Dong">Trưng bày lưu động</a>
                        </li>
                    </ul>
                </li>


            </ul>

        </nav>
    )
}