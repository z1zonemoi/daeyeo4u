import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { FaRegBookmark, FaLink, FaBookmark } from 'react-icons/fa';
import { PlaceIDState, bookmarkState } from '../../atoms';
import header from '../../utils/header';

function ReservationBottomButtons() {
  const placeId = useRecoilValue(PlaceIDState);
  const [isBookmark, setIsBookmark] = useRecoilState(bookmarkState);

  const placeUrl = window.location.href;

  const handleCopy = () => {
    alert('링크가 복사되었습니다!');
  };

  const handleBookmark = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/bookmark/${placeId}`,
        header,
      );
      setIsBookmark(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <button type="button" className="button" onClick={handleBookmark}>
        {!isBookmark && <EmptyBookmarkIcon />}
        {isBookmark && <FullBookmarkIcon />}
        관심장소
      </button>
      <CopyToClipboard text={placeUrl}>
        <button type="button" onClick={handleCopy}>
          <LinkCopyIcon />
          링크복사
        </button>
      </CopyToClipboard>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #2b2b2b;
    font: inherit;
    font-size: 0.82rem;
    font-weight: 500;
    border: none;
    background-color: #f3f3f3;
    position: relative;

    :active {
      box-shadow: none;
      position: relative;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

const EmptyBookmarkIcon = styled(FaRegBookmark)`
  font-size: 1rem;
  margin-right: 8px;
  color: #eb7470;

  :hover {
    cursor: pointer;
  }
`;

const FullBookmarkIcon = styled(FaBookmark)`
  font-size: 1rem;
  margin-right: 8px;
  color: #eb7470;

  :hover {
    cursor: pointer;
  }
`;

const LinkCopyIcon = styled(FaLink)`
  font-size: 1rem;
  margin-right: 8px;
  color: #eb7470;

  :hover {
    cursor: pointer;
  }
`;

export default ReservationBottomButtons;
