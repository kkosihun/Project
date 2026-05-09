import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useProduct } from "../../../pages/Main/ProductDetail/ProductContext.jsx";

const ProductCard = styled.div`
    display: flex;
    width: 181px;
    height: 237px;
    flex-direction: column;
    cursor: pointer;
    
`;

const ProductImage = styled.img`
    width: 100%;
    aspect-ratio: 42 / 55;
    object-fit: cover;
    border-radius: 8px;
    align-self: stretch;
`;

const ProductName = styled.p`
    color: #333;
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    line-height: normal;
    margin-top: 5px;
    align-self: stretch;
`;

const ProductPrice = styled.p`
    color: #000;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: #000;
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    line-height: normal;
    margin-top: 5px;
    align-self: stretch;
`;

const ProductReviews = styled.p`
    color: #A7A7A7;
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    line-height: normal;
    margin-top: 5px;
    align-self: stretch;
`;


export default function ItemCard({ itemId, image, name, price, reviewConut }) {
    const navigate = useNavigate();
    const { setSelectedProduct } = useProduct(); // ✅

    return (
        <ProductCard onClick={() => {
            console.log("카드 클릭됨", { image, name, price, reviewConut });
            setSelectedProduct({ image, name, price, reviews: reviewConut }); // ✅ Context에 저장
            navigate(`/item/${itemId}`);
        }}>
            <ProductImage src={image} alt={name} />
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
            <ProductReviews>리뷰 {reviewConut}</ProductReviews>
        </ProductCard>
    );
}