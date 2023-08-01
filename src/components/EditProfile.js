import React, { useEffect, useState } from "react";
import {AiOutlineCheckCircle} from "react-icons/ai";

const EditProfile = ({userIntroduce, setUserIntroduce}) => {
    const [profileComment, setProfileComment] = useState("");

    useEffect(() => {
        setProfileComment(userIntroduce);
    }, [userIntroduce]);

    const onProfileEditChange = (e) => {
        setProfileComment(e.target.value);
    }

    const handleSaveProfile = () => {
        setUserIntroduce(profileComment); // 수정된 소개 정보 저장
      };

    return(
        <div className="flex w-full justify-center pb-2 items-center">
            <input className="border border-2 border-solid w-5/6" type="text" value={profileComment} 
            onChange={onProfileEditChange}/>
            <AiOutlineCheckCircle className="ml-2" onClick={handleSaveProfile} />
        </div>
    );
}

export default EditProfile;