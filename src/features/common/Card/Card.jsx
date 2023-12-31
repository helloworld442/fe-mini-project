import { styled } from "styled-components";

const StCardBox = styled.div`
  padding-bottom: 30px;
  border-left: 0.5px solid #333;
  border-right: 0.5px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  flex-direction: column;
  &:hover {
    background: #fff;
    img {
      filter: grayscale(0);
    }
  }
`;

const StCardImg = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 16px;
  border-bottom: 1px solid #333;
  background: rgb(211, 211, 211);
  object-fit: cover;
  filter: grayscale(1);
`;

const StCardText = styled.span`
  width: 200px;
  margin: 8px 24px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    font-size: 0.9rem;
    margin-left: 12px;
  }
`;

/**
 * @param {string} title card 제목
 * @param {string} src card 이미지 주소
 * @param {string} date 게시글 날짜
 */

const Card = ({ title, src, date, category }) => {
  return (
    <StCardBox>
      <StCardImg src={src} />
      <StCardText size="1rem" weight="650">
        {title}
      </StCardText>
      <StCardText size="0.9rem" weight="500">
        {date} <span>{category}</span>
      </StCardText>
    </StCardBox>
  );
};

export default Card;
