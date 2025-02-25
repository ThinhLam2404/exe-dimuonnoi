import React, { useEffect, useState } from "react";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons"; // Thêm MenuOutlined
import { Col, Image, List, Menu, Row, Typography } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/header.css";
import LogoExe from "../assets/images/logo_exe.png";
import { API_PATH, PATH } from "../config/api.config";
import { CART_URL, PAYMENT_URL } from "../config/url.config";
import { getSearchList } from "../services/product/search.service";
import { useAuth } from "./context/AuthContext";

const { Text } = Typography;

const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false); // Trạng thái hiển thị menu mobile
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const { isAuthenticated, username, user } = useAuth();
  const [initialValues, setInitialValues] = useState({
    userId: "",
    username: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        await axios
          .get(`${PATH.profile}/${user.username}`)
          .then((res) => {
            setInitialValues({
              userId: res.data.user._id,
              username: res?.data?.user?.username,
              email: res?.data?.user?.email,
              phone: res?.data?.user?.phone,
              address: res?.data?.user?.address,
            });
          })
          .catch((error) => console.error("Error fetching data:", error));
      }
    };
    fetchData();
  }, [isAuthenticated]);

  const items = [
    { label: <Link to="/customer">HOME</Link>, key: "HOME" },
    { label: <Link to="/customer/tshirt">T-SHIRT</Link>, key: "T-SHIRT" },
    {
      label: <Link to="/customer/accessory">ACCESSORIES</Link>,
      key: "ACCESSORIES",
    },
    {
      label: (
        <Link to="https://dimuonnoi.github.io/site/design.html">CUSTOM</Link>
      ),
      key: "CUSTOM",
    },
    { label: <Link to="/customer/about">ABOUT</Link>, key: "ABOUT" },
    {
      label: <Link to="/customer/exchange-policy">EXCHANGE POLICY</Link>,
      key: "EXCHANGE POLICY",
    },
    { label: <Link to="/customer/contact">CONTACT</Link>, key: "CONTACT" },
  ];

  const toggleMenu = () => setMenuVisible(!menuVisible); // Toggle menu mobile

  return (
    <div className="header">
      <Row className="top-bar">
        <p className="container">
          Miễn phí vận chuyển với đơn hàng trên 500K. Hàng pre-order còn được
          giảm thêm 5%.
        </p>
      </Row>
      <Row className="container header-middle flex-center">
        <Col xs={12} md={4} className="logo-col">
          <img src={LogoExe} alt="logo" className="logo" />
        </Col>
        <Col xs={0} md={9} className="search-col">
          <div className="flex-center">
            <input
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setTimeout(() => setSearchFocus(false), 100)}
              onChange={(e) => {
                let text = e.target.value.trimStart();
                if (!text) setSearchList([]);
                else getSearchList(text, setSearchList);
              }}
              pattern="^[^\s].*"
              name="search"
              placeholder="Tìm kiếm sản phẩm..."
              className="search-input"
              autoComplete="off"
            />
            <div className="search-btn">
              <SearchOutlined />
            </div>
          </div>
          {searchFocus && (
            <div className="search-item">
              {searchList?.tshirts?.length > 0 && (
                <List
                  itemLayout="horizontal"
                  dataSource={searchList.tshirts}
                  renderItem={(item) => (
                    <List.Item
                      onClick={() =>
                        navigate(`/customer/tshirt/${item.tshirtId}`)
                      }
                    >
                      <List.Item.Meta
                        avatar={
                          <img
                            src={`https://dimuonnoi-be.onrender.com${item.tshirtImg}`}
                            alt=""
                          />
                        }
                        title={<p>{item.tshirtName}</p>}
                        description={
                          item.tshirtDiscountPercent ? (
                            <p>
                              {(
                                item.tshirtPrice -
                                (item.tshirtPrice *
                                  item.tshirtDiscountPercent) /
                                  100
                              ).toLocaleString("vi-VN")}
                              ₫{" "}
                              <del>
                                {item.tshirtPrice.toLocaleString("vi-VN")}₫
                              </del>
                            </p>
                          ) : (
                            <p>{item.tshirtPrice.toLocaleString("vi-VN")}₫</p>
                          )
                        }
                      />
                    </List.Item>
                  )}
                />
              )}
            </div>
          )}
        </Col>
        <Col xs={12} md={0} className="hamburger-col">
          <MenuOutlined className="hamburger-icon" onClick={toggleMenu} />
        </Col>
      </Row>
      <Row className="container header-menu">
        <Menu mode="horizontal" items={items} className="desktop-menu" />
      </Row>
      {menuVisible && (
        <Row className="mobile-menu">
          <Menu mode="vertical" items={items} />
        </Row>
      )}
    </div>
  );
};

export default Header;
