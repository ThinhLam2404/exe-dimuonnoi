import React from "react";
import "../assets/css/footer.css";
import { Button, Col, Row } from "antd";
import {
  EnvironmentFilled,
  PhoneFilled,
  MailFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="container">
        {/* <Col span={6} className='footer-content'>
                    <div className='footer-item--title'>
                        ABOUT US
                    </div>
                    <p className='footer-item--text'>
                        Được thành lập vào cuối năm 2016 trong bối cảnh thời trang streetstyle dần nhen nhóm vào thị trường Việt Nam.
                        Sau 6 năm phát triển, SWE - Street Wear Eazy với slogan Young kids with a mission™ đã chiếm được tình cảm của
                        hầu hết các bạn trẻ yêu mến thời trang đường phố trên khắp cả nước.
                    </p>
                </Col> */}
        <Col span={8} className="footer-content">
          <div className="footer-item--title">CHÍNH SÁCH</div>
          <ul className="footer-list">
            {/* <li>
              <a href="#">Chính sách bảo mật</a>
            </li> */}
            <li>
              <a href="#">Hướng dẫn mua hàng</a>
            </li>
            <li>
              <a href="#">Phương thức thanh toán</a>
            </li>
            {/* <li>
              <a href="#">Chính sách giao nhận - vận chuyển</a>
            </li> */}
            <li>
              <a href="#">Chính sách đổi và bảo hành sản phẩm</a>
            </li>
          </ul>
        </Col>
        <Col span={8} className="footer-content">
          <div className="footer-item--title">HỆ THỐNG CỬA HÀNG</div>
          <ul className="footer-list store-system">
            <li>
              <div className="icon">
                <EnvironmentFilled />
              </div>
              <a href="/">
                Khu Vực 6, Phường An Bình, Quận Ninh Kiều, Tp Cần Thơ, Vietnam
              </a>
            </li>
            {/* <li>
              <div className="icon">
                <EnvironmentFilled />
              </div>
              <a href="/">Store 2: TNP Lý Tự Trọng, Quận 1</a>
            </li>
            <li>
              <div className="icon">
                <EnvironmentFilled />
              </div>
              <a href="/">Store 3: TNP Lê Lai, Quận 1</a>
            </li>
            <li>
              <div className="icon">
                <EnvironmentFilled />
              </div>
              <a href="/">
                Đại lý phân phối chính hãng: SN 84, Tổ 9, Hoàng Công Chất, P.
                Mường Thanh, TP Điện Biên
              </a>
            </li> */}
            <li>
              <div className="icon">
                <PhoneFilled />
              </div>
              <a href="/">0917023243</a>
            </li>
            <li>
              <div className="icon">
                <MailFilled />
              </div>
              <a href="/">dimuonoi@gmail.com</a>
            </li>
          </ul>
        </Col>
        <Col span={8} className="footer-content">
          <div className="footer-item--title">FANPAGE</div>
          <Button
            target="_blank"
            href="https://www.facebook.com/people/%C4%90i-Mu%C3%B4n-N%C6%A1i/61567367394026/"
            style={{ border: 0, backgroundColor: "#F8F8F8" }}
          >
            <FacebookFilled className="fb-icon " />
          </Button>
          {/* <InstagramFilled className="fb-icon " /> */}
        </Col>
      </Row>
      <Row className="container footer-navigate">
        {/* <a
          target="_blank"
          href="https://www.facebook.com/people/%C4%90i-Mu%C3%B4n-N%C6%A1i/61567367394026/"
        >
          facebook
        </a> */}
        {/* <a href="/">instagram</a> */}
      </Row>
      <Row className="footer-bottom">Đi Muôn Nơi</Row>
    </div>
  );
};

export default Footer;
