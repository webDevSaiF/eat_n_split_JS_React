import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ setFriends, handleSetFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imgURL, setImgURL] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (!friendName.length || !imgURL.length) return;

    const newFriend = {
      id,
      name: friendName,
      balance: 0,
      image: `${imgURL}?=${id}`
    };
    handleSetFriend(newFriend);
    setFriendName("");
    setImgURL("https://i.pravatar.cc/48");
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>
        <span>👫</span>Frnd Name
      </label>
      <input
        value={friendName}
        type="text"
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>
        <span>📸</span>Image URL
      </label>
      <input
        type="text"
        value={imgURL}
        onChange={(e) => setImgURL(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
