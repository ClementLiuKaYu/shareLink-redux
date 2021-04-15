import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLinkThunk } from "../actions/action";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const AddLink = (props) => {
  const [modal, setModal] = useState(false);
  const [addLinkInput, setAddLinkInput] = useState({
    name: "",
    tags: [""],
    url: "",
  });

  const toggle = () => {
    setModal(!modal);
  };

  const inputChange = (event) => {
    let updatedInput = { ...addLinkInput };
    switch (event.target.name) {
      case "tags":
        updatedInput["tags"][event.target.id] = event.target.value;
        break;
      default:
        updatedInput[event.target.name] = event.target.value;
        break;
    }
    setAddLinkInput(updatedInput);
  };

  const addTagBox = () => {
    let updatedInput = { ...addLinkInput };
    updatedInput["tags"].push("");
    setAddLinkInput(updatedInput);
  };

  const deleteTagBox = () => {
    let updatedInput = { ...addLinkInput };
    updatedInput["tags"].pop();
    setAddLinkInput(updatedInput);
  };
  const dispatch = useDispatch();
  const addLink = (event) => {
    event.preventDefault();
    dispatch(addLinkThunk({ ...addLinkInput }));
    setAddLinkInput({
      name: "",
      tags: [""],
      url: "",
    });
    toggle();
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {props.buttonLabel}
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <Form onSubmit={addLink}>
          <ModalHeader toggle={toggle}>Add Link</ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label for="name">Link Name</Label>
              <Input
                type="name"
                name="name"
                id="name"
                placeholder="Link Name"
                onChange={inputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="url">Url</Label>
              <Input
                type="url"
                name="url"
                id="url"
                placeholder="Url"
                onChange={inputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="tags">Tags</Label>
              {addLinkInput.tags.map((tag, index) => {
                return (
                  <Input
                    key={index}
                    type="tags"
                    name="tags"
                    id={index}
                    placeholder={`Tag ${index + 1}`}
                    value={tag}
                    style={{ marginTop: 3 }}
                    onChange={inputChange}
                  />
                );
              })}
            </FormGroup>
            <Button
              color="primary"
              style={{ marginRight: 5 }}
              onClick={addTagBox}
              disabled={addLinkInput.tags.length >= 3}
            >
              Add Tag
            </Button>
            <Button
              color="danger"
              onClick={deleteTagBox}
              disabled={addLinkInput.tags.length <= 1}
            >
              Delete Tag
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" type="submit" value="submit">
              Submit
            </Button>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default AddLink;
