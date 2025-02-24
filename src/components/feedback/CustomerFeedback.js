import {
  Button,
  Col,
  Dropdown,
  Form,
  List,
  Menu,
  Modal,
  Row,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import "../../assets/css/feedback.css";
import {
  createFeedback,
  getFeedBack,
  getListFeedback,
  likeFeedback,
  updateFeedback,
} from "../../services/feedback.service";
import { API_PATH } from "../../config/api.config";
import { showDeleteConfirm } from "../../utils/helper";
import { LikeFilled, LikeOutlined, MoreOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { useAuth } from "../context/AuthContext";

const CustomerFeedback = ({
  accessory_id,
  pant_id,
  tshirt_id,
  shoes_id,
  userId,
  feedbackId,
  setInitialValues,
  initialValues,
}) => {
  const [feedback, setFeedback] = useState([]);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [currentFeedback, setCurrentFeedback] = useState(false);
  const [like, setLike] = useState(false);
  const [id, setId] = useState("");
  const { isAuthenticated, user } = useAuth();

  const selectId = accessory_id || pant_id || tshirt_id || shoes_id;
  const onFinish = (values) => {
    console.log("Success:", values.content);
    console.log(userId);

    const feedbackData = {
      content: values.content,
      account_id: userId,
      accessory_id: accessory_id,
      pant_id: pant_id,
      tshirt_id: tshirt_id,
      shoes_id: shoes_id,
    };
    if (currentFeedback) {
      updateFeedback(id, feedbackData);
      getListFeedback(selectId, setFeedback);
    } else {
      createFeedback(feedbackData);
      getListFeedback(selectId, setFeedback);
    }
    form.resetFields();
    setIsModalOpen(false);
  };
  const editFeedback = (feedbackItem, id) => {
    setCurrentFeedback(true);
    setId(id);
    console.log(id);
    form.setFieldsValue({ content: feedbackItem.content });
    setIsModalOpen(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getListFeedback(selectId, setFeedback);
  }, [selectId]);

  const handleMenuClick = (item, id) => (e) => {
    console.log(feedbackId);

    if (e.key === "edit") {
      editFeedback(item, id);
    } else if (e.key === "delete") {
      showDeleteConfirm(
        id,
        messageApi,
        () => getListFeedback(selectId, setFeedback),
        setFeedback,
        API_PATH.feedback
      );
    }
  };

  const likeButton = async (feedback_id, account_id) => {
    let data = [];
    console.log(feedback);

    data = await likeFeedback(feedback_id, account_id);
    console.log(initialValues.feedback_id);

    setInitialValues((prev) => ({
      ...prev,
      feedback_id: data,
    }));
  };
  return (
    <div style={{ width: 900, margin: "auto", marginTop: 100 }}>
      <Row style={{ justifyContent: "space-between", paddingBottom: 40 }}>
        <p style={{ fontSize: 25, fontWeight: "bold" }}>Feedback</p>
        <Button
          style={{ backgroundColor: "black", borderRadius: 0 }}
          type="primary"
          onClick={showModal}
        >
          Write Feedback
        </Button>
      </Row>
      <Modal
        title="Write new feedback"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          className="customer-feedback"
          name="basic"
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="content"
            rules={[
              {
                min: 3,
                max: 200,
                message: "Content length must be between 3 and 200 characters.",
              },
            ]}
          >
            <TextArea
              autoSize={{
                minRows: 4,
                maxRows: 5,
              }}
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 20 }}>
            <Button
              color="default"
              variant="solid"
              htmlType="submit"
              style={{ marginRight: 15 }}
            >
              Send feedback
            </Button>
            <Button
              color="default"
              variant="outlined"
              onClick={() => form.resetFields()}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <List
        style={{
          padding: "30px 0",
          borderTop: "1px solid gray",
          borderBottom: "1px solid gray",
        }}
        itemLayout="horizontal"
        dataSource={feedback}
        split={false}
        renderItem={(item, index) => {
          const menu = (
            <Menu onClick={handleMenuClick(item, item._id)}>
              <Menu.Item key="edit">Edit</Menu.Item>
              <Menu.Item key="delete">Remove</Menu.Item>
            </Menu>
          );
          return (
            <List.Item style={{ marginBottom: 15, display: "block" }}>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={6}>
                  <b>{item.account_id.username}</b>
                </Col>
                <Col span={4} offset={13}>
                  <p>{new Date(item.createdAt).toDateString()}</p>
                </Col>
                {userId === item.account_id._id && (
                  <Col span={1}>
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <Button
                        style={{ borderColor: "white" }}
                        icon={<MoreOutlined />}
                      />
                    </Dropdown>
                  </Col>
                )}
              </Row>
              <div
                style={{
                  marginLeft: 20,
                  backgroundColor: "#F3F4F6",
                  height: 70,
                  marginTop: 10,
                  padding: 15,
                  paddingRight: 0,
                }}
              >
                <Row>
                  <Col span={2}>
                    <p>
                      <b>Đánh giá: </b>
                    </p>
                  </Col>
                  <Col>
                    <Rate allowHalf disabled defaultValue={5} />
                  </Col>
                </Row>
                <Row>
                  <Col span={2}>
                    <p>
                      <b>Nhận xét: </b>
                    </p>
                  </Col>
                  <Col>
                    <p>{item.content}</p>
                  </Col>
                </Row>
              </div>

              <Row>
                {initialValues.feedback_id.some((e) => e === item._id) ? (
                  <Button
                    style={{ borderColor: "white" }}
                    icon={<LikeFilled />}
                    onClick={() => likeButton(item._id, user.id)}
                  />
                ) : (
                  <Button
                    style={{ borderColor: "white" }}
                    icon={<LikeOutlined />}
                    onClick={() => {
                      likeButton(item._id, user.id);
                    }}
                  />
                )}
              </Row>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default CustomerFeedback;
