import React from "react";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";
import UpdateNoteForm from "../../forms/updateForms/UpdateNoteForm";

class UpdateNotePage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h1> sélectionner une note a modifier </h1>
        <MenuAllForm />
        <UpdateNoteForm />
      </div>
    );
  }
}
export default UpdateNotePage;
