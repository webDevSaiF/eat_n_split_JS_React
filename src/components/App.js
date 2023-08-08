import { useState } from "react";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";
import { FriendList } from "./FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0
  }
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  };

  const [friends, setFriends] = useState(initialFriends);
  const handleSetFriend = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  };

  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleSelection = (friend) => {
    setSelectedFriend((currFriend) =>
      currFriend?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <FriendList
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
          friends={friends}
        />
        {showAddFriend && (
          <FormAddFriend
            handleSetFriend={handleSetFriend}
            setFriends={setFriends}
          />
        )}
        <Button
          onClick={handleShowAddFriend}
          setShowAddFriend={setShowAddFriend}
        >
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          onSplitBill={handleSplitBill}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}
