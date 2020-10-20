import * as React from "react";
import firebase from "firebase/app";
import "firebase/storage";
import Sound from "react-sound";
import { Button } from "react-bootstrap";

export default class Recordings extends React.Component<
  {},
  { url: string; status: "PLAYING" | "STOPPED" | "PAUSED"; recordings: any[] }
> {
  constructor(props: any) {
    super(props);
    this.state = { url: "", status: "STOPPED", recordings: [] };
  }

  play = (recording: any) => {
    console.log("Yo");
    console.log(recording);
    recording.ref.getDownloadURL().then((url: string) => {
      this.setState({ url: url, status: "PLAYING" });
    });
  };

  componentDidMount = () => {
    const storage = firebase.storage();
    storage
      .ref("recordings")
      .listAll()
      .then((result) =>
        Promise.all(result.items.map((item) => item.getMetadata()))
      )
      .then((metaDatas) => {
        this.setState({
          ...this.state,
          recordings: metaDatas.sort(
            (a: any, b: any) => a.customMetadata.track - b.customMetadata.track
          ),
        });
      })
      .catch((e) => console.log(e));
  };

  public render() {
    return (
      <div className="recordings">
        <h1>(▀̿Ĺ̯▀̿ ̿)</h1>
        <Sound url={this.state.url} playStatus={this.state.status} />
        {this.state.recordings.map((e, i) => (
          <div key={i} className="recording">
            <Button onClick={() => this.play(e)}>{e.name}</Button>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
