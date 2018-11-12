import React from "react";
import NoteForm from "../../forms/basicForms/NoteForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class NotePage extends React.Component {
  //submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h1>Liste des notes</h1>
        <MenuAllForm />
        <NoteForm />
      </div>
    );
  }
}

export default NotePage;
