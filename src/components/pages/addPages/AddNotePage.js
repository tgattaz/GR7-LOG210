import React from "react";
import AddNoteForm from "../../forms/addOrUpdateForms/AddNoteForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class AddNotePage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h2> Ajouter ou modifier une note </h2>
        <MenuAllForm />
        <br />
        <AddNoteForm />
      </div>
    );
  }
}

export default AddNotePage;
