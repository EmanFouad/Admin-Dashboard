import React from "react";
import { Stack, Button } from "react-bootstrap";
import { PersonCircle, BoxArrowLeft, Lock } from "react-bootstrap-icons";
import "./user.css"

const User = () => {
  return (
    <div className="userinfo-wrapper m-3">
      <div className="userinfo-container bg-light rounded px-4 py-3">
        <div className="userinfo-head mb-2">
          <Stack direction="horizontal" gap={3}>
            <PersonCircle color="#589ad2" size={30} />
            <div className="userinfo">
              <p className="fs-6">اسم المستخدم</p>
              <p className="fs-6 fw-bold">ahmedmohamed</p>
            </div>
          </Stack>
        </div>
        <div className="userinfo-btns">
          <Button bsPrefix="btn btn-main-active" className="rounded mb-2 w-100">
            <Stack direction="horizontal" gap={3}>
              <Lock color="#fff" size={20} />
              <p className="fs-6 fw-bold">تغيير كلمة السر</p>
            </Stack>
          </Button>
          <Button variant="danger" className="rounded mb-2 w-100">
            <Stack direction="horizontal" gap={3}>
              <BoxArrowLeft color="#fff" size={20} />
              <p className="fs-6 fw-bold">تسجيل الدخول</p>
            </Stack>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default User;
