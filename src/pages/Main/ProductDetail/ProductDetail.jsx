import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Line from "../../../../src/assets/images/Line 1.png";
import Star from "../../../../src/assets/icons/star_Icon.png";
import { useProduct } from "./ProductContext.jsx";


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-left: 204px;
    padding-right: 160px;
`;

const LeftSection = styled.div`
    padding-top: 70px;
    flex: 1;
`;

const ImageBox = styled.div`
    width: 400px;
    height: 530px;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;

const LineImage = styled.img`
    margin: 0 63px 0 146px;
    width: 1.5px;
    align-self: stretch;
`;

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 124px;
    gap: 12px;
`;

const Price = styled.p`
    font-size: 32px;
    font-weight: 700;
    font-family: Pretendard;
    color: #000;
    margin: 0;
`;

const Name = styled.p`
    font-size: 14px;
    font-family: Pretendard;
    color: #333;
    margin: 0;
`;

const ReviewRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Rating = styled.p`
    font-size: 13px;
    font-family: Pretendard;
    color: #000;
    margin: 0 14px 0 6px;
`;

const ReviewCount = styled.p`
    font-size: 13px;
    font-family: Pretendard;
    color: #A7A7A7;
    margin: 0;
`;

const StarIcon = styled.img`
    vertical-align: middle;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

const Modal = styled.div`
    width: 296px;
    height: 136px;
    background: white;
    border-radius: 25px;
    padding: 26px 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalText = styled.p`
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 400px;
    color: #000;
    margin: 0 0 26px 0;
    text-align: center;
`;

const ModalButtons = styled.div`
    display: flex;
    gap: 7px;
    width: 100%;
`;

const ModalButton = styled.div`
    flex: 1;
    padding: 8px 0;
    border-radius: 8px;
    background: #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: Pretendard;
    color: #333;
    cursor: pointer;
`;

export default function ProductDetail() {
    const { selectedProduct, showDeleteModal, setShowDeleteModal } = useProduct();
    const navigate = useNavigate();

    if (!selectedProduct) return <div>상품 정보를 찾을 수 없어요.</div>;
    const { image, name, price, reviews } = selectedProduct;

    return (
        <>
            <Container>
                <LeftSection>
                    <ImageBox>
                        <ProductImage src={image} alt={name} />
                    </ImageBox>
                </LeftSection>

                <LineImage src={Line} />

                <RightSection>
                    <Price>{price}</Price>
                    <Name>{name}</Name>
                    <ReviewRow>
                        <StarIcon src={Star} />
                        <Rating>4.6</Rating>
                        <ReviewCount>리뷰 {reviews}</ReviewCount>
                    </ReviewRow>
                </RightSection>
            </Container>

            {showDeleteModal && (
                <Overlay>
                    <Modal>
                        <ModalText>상품을 삭제하시겠습니까?</ModalText>
                        <ModalButtons>
                            <ModalButton onClick={() => {
                                setShowDeleteModal(false);
                                navigate("/");
                            }}>확인</ModalButton>
                            <ModalButton onClick={() => setShowDeleteModal(false)}>취소</ModalButton>
                        </ModalButtons>
                    </Modal>
                </Overlay>
            )}
        </>
    );
}