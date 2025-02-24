import { Color } from "antd/es/color-picker";
import React from "react";

const Style = {
  color: "#e67e22",
  fontStyle: "italic",
  fontWeight: "700",
};

const ExchangePolicy = () => {
  return (
    <div
      style={{
        lineHeight: "30px",
        padding: "2% 17%",
        fontFamily: '"Quicksand", sans-serif',
        color: "#grey",
        fontWeight: "500",
        textAlign: "justify",
      }}
    >
      <header>
        <h2 style={{ fontWeight: "700", lineHeight: "70px", color: "black" }}>
          Chính Sách Đổi Trả
        </h2>
        {/* <h3 style={{ color: "#e67e22", textAlign: "center" }}>
          S T R E E T W E A R E A Z Y
        </h3> */}
        <section>
          <h4 style={{ color: "#e67e22" }}>A. CHÍNH SÁCH ĐỔI TRẢ SẢN PHẨM</h4>
          <p style={Style}>1.Thời gian đổi trả:</p>
          <p>
            Sản phẩm chỉ được đổi trả trong vòng 7 ngày kể từ ngày nhận hàng.
          </p>
          <p style={Style}>2. Điều kiện áp dụng</p>
          <ul style={{ listStyle: "none" }}>
            <ul style={{ listStyle: "none" }}>
              <li>
                Chỉ hỗ trợ đổi trả đối với sản phẩm có lỗi từ nhà sản xuất (lỗi
                in ấn, chất liệu, kích thước không đúng với đơn đặt hàng) hoặc
                sản phẩm không đúng với thiết kế khách hàng đã đặt.
              </li>
            </ul>
          </ul>

          <p style={Style}>3. Yêu cầu sản phẩm đổi trả:</p>
          <p>
            Sản phẩm phải còn nguyên vẹn, chưa qua sử dụng, không bị giặt tẩy
            hoặc làm hỏng. Bao bì và phụ kiện (nếu có) phải còn đầy đủ.
          </p>
        </section>
        <section>
          <h4 style={{ color: "#e67e22" }}>4. Quy trình đổi trả:</h4>
          <p>
            Liên hệ bộ phận chăm sóc khách hàng qua hotline hoặc email, cung cấp
            thông tin đơn hàng và hình ảnh sản phẩm lỗi. Sau khi xác nhận đủ
            điều kiện đổi trả, chúng tôi sẽ hướng dẫn bạn gửi sản phẩm về kho.
            Sản phẩm mới sẽ được gửi lại cho bạn trong vòng 5 - 7 ngày làm việc.
          </p>
        </section>

        <section>
          <h4 style={{ fontStyle: "italic", marginTop: 30 }}>Lưu ý</h4>
          <p>Chúng tôi không hỗ trợ hoàn tiền, chỉ áp dụng đổi sản phẩm mới.</p>
        </section>
      </header>
    </div>
  );
};
export default ExchangePolicy;
