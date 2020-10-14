import * as React from "react";
import firebase from "firebase/app";
import "firebase/storage";
import Sound from "react-sound";

export default class Recordings extends React.Component<{}, { url: "" }> {
  constructor(props: any) {
    super(props);
    this.state = { url: "" };
  }

  componentDidMount = () => {
    const storage = firebase.storage();
    const reference = storage.ref("Yssenia, Grand Arcanist.mp3");
    reference.getDownloadURL().then((url) => {
      console.log(url);
      this.setState({ url: url });
    });
  };

  public render() {
    return (
      <div className="centerText">
        {/* React components must have a wrapper node/element */}
        <h1>(▀̿Ĺ̯▀̿ ̿)</h1>
        <Sound url={this.state.url} playStatus="PLAYING" />
      </div>
    );
  }
}
