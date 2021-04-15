import axios from "axios";

export const ADD_LINK_ACTION = "ADD_LINK_ACTION";
export const DELETE_LINK_ACTION = "DELETE_LINK_ACTION";
export const LOAD_LINKS = "LOAD_LINKS";

export function addLinkAction({ name, url, tags, id }) {
  return {
    type: ADD_LINK_ACTION,
    link: {
      name,
      url,
      tags,
      id,
    },
  };
}

export function deleteLinkAction(id) {
  return {
    type: DELETE_LINK_ACTION,
    id,
  };
}

export function loadLinkAction(list) {
  return { type: LOAD_LINKS, list };
}

export const addLinkThunk = (link) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/", link);
    console.log("hihi");
    dispatch(addLinkAction(link));
  } catch (err) {
    console.log(err);
  }
};

export const loadLinkThunk = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/");
    dispatch(loadLinkAction(res.data));
  } catch (err) {
    console.log(err);
  }
};
