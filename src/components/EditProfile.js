import React, { useEffect, useState } from "react";
import {AiOutlineCheckCircle} from "react-icons/ai";

const EditProfile = ({userIntroduce, setUserIntroduce, setEditProfile}) => {
    const [profileComment, setProfileComment] = useState("");
    const [showProfileComment, setShowProfileComment] = useState(false);


    useEffect(() => {
        setProfileComment(userIntroduce);
    }, [userIntroduce]);

    const onProfileEditChange = (e) => {
        setProfileComment(e.target.value);
    }

    const handleSaveProfile = () => {
        setUserIntroduce(profileComment); // 수정된 소개 저장
        setShowProfileComment(true);
        setEditProfile(false)
      };

    return(
        <div>
        {showProfileComment && (
            <div style={{ paddingLeft: 20, paddingBottom: 10 }}>{profileComment}</div>
        )}
        {/* <div className="flex w-full justify-center pb-2 items-center">
            <input className="border border-2 border-solid w-5/6" type="text" value={profileComment} 
            onChange={onProfileEditChange}/>
            <AiOutlineCheckCircle className="ml-2" onClick={handleSaveProfile} />
        </div> */}
        {!showProfileComment && (
            <div className="flex w-full justify-center pb-2 items-center">
                <input
                className="border border-2 border-solid w-5/6"
                type="text"
                value={profileComment}
                onChange={onProfileEditChange}
                />
                <AiOutlineCheckCircle className="ml-2" onClick={handleSaveProfile} />
            </div>
        )}
        </div>
    );
}

export default EditProfile;