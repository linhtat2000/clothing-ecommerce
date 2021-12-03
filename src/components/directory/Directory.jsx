import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 1,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 4,
          size: "large",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 5,
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
