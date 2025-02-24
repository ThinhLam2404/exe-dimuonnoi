import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { IoShirtOutline } from "react-icons/io5";
import About1 from "../assets/images/about1.jpeg";
import About2 from "../assets/images/about2.jpeg";

const About = () => {
  return (
    <div
      style={{
        padding: "2%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <section
        style={{
          width: "80%",
          margin: "20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "50px" }}>Giới Thiệu Về "Đi Muôn Nơi"</h1>
        {/* <h3 style={{ margin: "40px 0 20px 0" }}>WHY WE DO</h3> */}
      </section>
      <section
        style={{
          width: "80%",
          color: "#666",
          textAlign: "justify",
          textAlignLast: "center",
        }}
      >
        <p>
          Đi Muôn Nơi" là một nền tảng chuyên về thiết kế và cá nhân hóa sản
          phẩm, giúp khách hàng dễ dàng sáng tạo và thể hiện phong cách cá nhân
          một cách độc đáo. Chúng tôi cung cấp đa dạng các sản phẩm như áo thun,
          nón, túi tote với thiết kế theo yêu cầu, mang đến sự linh hoạt trong
          việc lựa chọn màu sắc, họa tiết và thông điệp cá nhân hóa.{" "}
        </p>
        <p style={{ margin: "15px 0" }}>
          Chất lượng vượt trội: Chúng tôi sử dụng công nghệ in ấn tiên tiến,
          chất liệu vải bền đẹp, đảm bảo hình in sắc nét, không phai màu theo
          thời gian. Sự sáng tạo không giới hạn: Mọi thiết kế đều do chính bạn
          tạo ra, giúp sản phẩm mang dấu ấn cá nhân độc nhất. Dịch vụ tận tâm:
          Chúng tôi luôn sẵn sàng hỗ trợ, tư vấn và giải đáp mọi thắc mắc để
          mang đến trải nghiệm mua sắm trực tuyến tốt nhất. Dù bạn muốn sở hữu
          một món đồ mang đậm phong cách cá nhân, thiết kế quà tặng cho người
          thân, hay đồng phục nhóm đầy cá tính, "Đi Muôn Nơi" chính là sự lựa
          chọn hoàn hảo dành cho bạn!
        </p>
        {/* <img
          src={About1}
          alt="Beach Sunset"
          style={{ width: "100%", margin: "20px 0" }}
        /> */}
      </section>
      <section
        style={{
          width: "80%",
          marginTop: "20px",
        }}
      >
        {/* <h3 style={{ color: "#333", margin: "40px 0 20px 0" }}>Who We Are</h3> */}
        <p
          style={{
            color: "#666",

            // textAlign: "justify",
            // textAlignLast: "center",
          }}
        >
          Với mong muốn trở thành người bạn đồng hành đáng tin cậy trong hành
          trình sáng tạo của bạn, "Đi Muôn Nơi" luôn cam kết:
        </p>
        <ul>
          <li>
            <p style={{ color: "#666", margin: "15px 0" }}>
              Chất lượng vượt trội: Chúng tôi sử dụng công nghệ in ấn tiên tiến,
              chất liệu vải bền đẹp, đảm bảo hình in sắc nét, không phai màu
              theo thời gian.
            </p>
          </li>
          <li>
            <p style={{ color: "#666", margin: "15px 0" }}>
              Sự sáng tạo không giới hạn: Mọi thiết kế đều do chính bạn tạo ra,
              giúp sản phẩm mang dấu ấn cá nhân độc nhất.
            </p>
          </li>
          <li>
            <p style={{ color: "#666", margin: "15px 0" }}>
              Dịch vụ tận tâm: Chúng tôi luôn sẵn sàng hỗ trợ, tư vấn và giải
              đáp mọi thắc mắc để mang đến trải nghiệm mua sắm trực tuyến tốt
              nhất. Dù bạn muốn sở hữu một món đồ mang đậm phong cách cá nhân,
              thiết kế quà tặng cho người thân, hay đồng phục nhóm đầy cá tính,
              "Đi Muôn Nơi" chính là sự lựa chọn hoàn hảo dành cho bạn!
            </p>
          </li>
        </ul>

        {/* <p style={{ color: "#666" }}>
          DOTAI values modern urban aesthetics, celebrates individuality, and
          promotes community awareness. We believe everyone has their own value
          and story. It's about loving all aspects of yourself - unique and
          ordinary.
        </p> */}
        {/* <img
          src={About2}
          alt="Beach Sunset"
          style={{ width: "100%", margin: "20px 0" }}
        /> */}
      </section>
      <section
        style={{
          width: "80%",
          textAlign: "justify",
          textAlignLast: "center",
        }}
      >
        {/* <h3 style={{ color: "#333", margin: "40px 0 20px 0" }}>
          WHAT WE WANT OUR MISSION
        </h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ margin: "20px 0", color: "#666" }}>
            <strong>Self-Expression:</strong> Empowering individuals to embrace
            their unique identities and pursue their passions without
            limitations.
          </li>
          <li style={{ margin: "20px 0", color: "#666" }}>
            <strong>Fashion:</strong> Provide high-quality fashion at affordable
            prices.
          </li>
          <li style={{ margin: "20px 0", color: "#666" }}>
            <strong>Responsibility:</strong> Build a socially responsible
            business.
          </li>
        </ul> */}
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          fontSize: "70px",
        }}
      >
        {/* <RiUserHeartLine />
        <IoShirtOutline style={{ margin: "0 40px" }} />
        <FaHandsHelping /> */}
      </div>
    </div>
  );
};

export default About;
