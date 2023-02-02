import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useToken from "../../hooks/useToken";
import { getProfile } from "../../services/ProfileApi";
import Home from "../HomeStyle";
import LoaderScreen from "../LoaderScreen";
import History from "./history";
import Movies from "./Movies";
import UpdateArea from "./UpdateArea";
import UserArea from "./UserArea";

export default function ProfilePage() {
  const [profile, setProfile] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const params = useParams();
  const token = useToken();

  useEffect(() => {
    if (params?.username) {
      const promisse = getProfile(params.username);
      promisse
        .then((e) => {
          setProfile(e);
        })
        .catch(() => {
          setProfile([]);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, isEditing]);

  return (
    <>
      {profile?.id ? (
        <>
          <UserArea
            info={profile}
            setIsEditing={setIsEditing}
            username={params.username}
          />
          <Home>
            <ContentArea>
              <Area>
                <UpdateArea
                  info={profile}
                  token={token}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                />
                <Movies token={token} profile={profile} />
              </Area>
              <Area>
                <History token={token} profile={profile} />
              </Area>
            </ContentArea>
          </Home>
        </>
      ) : (
        <LoaderScreen />
      )}
    </>
  );
}

const ContentArea = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;

  @media screen and (max-width: 1366px) {
    max-width: 1100px;
  }
`;

const Area = styled.div`
  width: 48%;
  max-height: 800px;
`;
