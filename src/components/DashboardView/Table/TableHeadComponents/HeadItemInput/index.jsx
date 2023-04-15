import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { SortDown, X } from "react-bootstrap-icons";
import "./headInput.css";

const HeadItemInput = ({ inputType, title, placeholder, inputSearchTerm, setInputSearchTerm }) => {
  const handleChange = (e) => {
    setInputSearchTerm(e.target.value);
  };
  const handleRemove = () => {
    setInputSearchTerm("");
  };
  return (
    <div className="head-input-wrapper">
      <div className="head-input-container">
        <div className="title-wrapper d-flex justify-content-between align-items-center mb-2">
          <h5 className="fs-6">{title}</h5>
          <SortDown size={20} />
        </div>
        <div className="input-wrapper">
          <InputGroup>
            <Form.Control
              size="md"
              type={inputType}
              placeholder={placeholder}
              value={inputSearchTerm}
              onChange={handleChange}
            />
            <Button
              className="border p-2 bg-transparent"
              id="button-addon2"
              onClick={handleRemove}
            >
              <X
                size={20}
                color="#bcbcbc"
                style={{ visibility: inputSearchTerm ? "initial" : "hidden" }}
              />
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default HeadItemInput;
