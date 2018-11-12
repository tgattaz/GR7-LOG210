import React from "react";
import DelNoteForm from "../../forms/deleteForms/DelNoteForm";
import MenuAllForm from "../../forms/menuForms/MenuAllForm";

class DelNotePage extends React.Component {
  // submit = (data) => this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <h1>Retirer une note</h1>
        <MenuAllForm />
        <DelNoteForm />
      </div>
    );
  }
}

export default DelNotePage;
//
