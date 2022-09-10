/* eslint-disable jsx-a11y/no-distracting-elements */
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPosts from './ListPosts';
import { Route, Routes } from 'react-router-dom';


export default function PublicNav() {


    return (
        <div className='Layout'>
            <div className="header" fragment="publicNav">
                <div fragment="textRunner" className="runtext-container">
                    <div className="main-runtext">
                        <span id="time"></span>
                        <marquee>
                            <div className="holder">
                                <div className="text-container">
                                    <a href='sd'>Chào mừng đến với Bắc Ninh</a>
                                </div>
                            </div>

                        </marquee>
                    </div>
                </div>
                <img src='http://localhost:8080/image/banner.png' alt="banner" />
                <nav className="navbar navbar-expand-lg navbar-dark" id="topNav">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="dropdown"><a href="d" className="dropbtn">Giới thiệu </a>
                                <ul className="dropdown-content">
                                    <li><a className='aTag' href="/Gioi_Thieu_Chung">Giới thiệu chung</a></li>
                                    <li><a className='aTag' href="/Co_Cau">Cơ cấu tổ chức - sơ đồ CCTC</a></li>
                                    <li><a className='aTag' href="/Chuc_Nang_Nhiem_Vu">Chức năng, nhiệm vụ</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="d" className="dropbtn">Tin tức - Sự kiện<i
                                className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-content">
                                    <li><a className='aTag' href="/Tin_Noi_Bat">Tin nổi bật</a></li>
                                    <li><a className='aTag' href="/Su_Kien_Sap_Dien_Ra">Sự kiện sắp diễn
                                        ra</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="d" className="dropbtn">Trưng bày <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-content">
                                    <li><a className='aTag' href="/Trung_Bay_Thuong_Xuyen">Trưng bày thường
                                        xuyên</a></li>
                                    <li><a className='aTag' href="/Trung_bay_CHuyen_De">Trưng bày chuyên
                                        đề</a></li>
                                    <li><a className='aTag' href="/Trung_Bay_Luu_Dong">Trưng bày lưu
                                        động</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="d" className="dropbtn">Nghiên cứu- Sưu tầm<i
                                className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-content">
                                    <li><a className='aTag' href="/Khai_Quat_Khao_Co_Hoc">Khai quật khảo cổ
                                        học</a></li>
                                    <li><a className='aTag' href="/Cong_Tac_Suu_Tam">Công tác sưu tầm</a>
                                    </li>
                                    <li><a className='aTag' href="/De_Tai_Khoa_Hoc_An_Pham">Đề tài khoa học
                                        - Ấn phẩm</a></li>
                                    <li><a className='aTag' href="/Kien_Thuc_Lich_Su_Van_Hoa">Kiến thức lịch
                                        sử - Văn hóa</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="d" className="dropbtn">Hiện vật <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-content">
                                    <li><a className='aTag' href="/Bao_Vat_Quoc_Gia">Bảo vật quốc gia</a>
                                    </li>
                                    <li><a className='aTag' href="/Cac_Bo_Suu_Tap_Hien_vat">Các bộ sưu tập hiện
                                        vật</a></li>
                                    <li><a className='aTag' href="/ Hien_Vat_Tieu_Bieu">Hiện vật tiêu
                                        biểu</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="d" className="dropbtn">Giáo dục <i className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-content">
                                    <li><a className='aTag' href="/ Huong_Dan_Tham_Quan">Hướng dẫn tham
                                        quan</a></li>
                                    <li><a className='aTag' href="/ Hoat_Dong_Giao_Duc">Hoạt động giáo
                                        dục</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="s" className="dropbtn">Thông tin hữu ích <i
                                className="fa fa-angle-down"></i></a>
                                <ul className="dropdown-content">
                                    <li><a className='aTag' href="/ Tin_Noi_Bat">Thời gian mở cửa</a></li>
                                    <li><a className='aTag' href="/ Tin_Noi_Bat">Nội quy tham quan</a></li>
                                    <li><a className='aTag' href="/ Tin_Noi_Bat">Chỉ dẫn</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    )

}