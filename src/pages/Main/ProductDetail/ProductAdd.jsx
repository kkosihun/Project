import styled from "styled-components";
import Line from "../../../../src/assets/images/Line 1.png";
import Upload from "../../../../src/assets/icons/upload_Icon.png";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-top: 115px;
    padding-right: 194px;
`;

const ImageInsert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 459px;
    height: 602px;
    background: #F0F0F0;
    border-radius: 15px;
    flex-shrink: 0;
`;

const UploadIcon = styled.img`
    width: 49px;
    height: 55px;
    
`;

const LineImage = styled.img`
    margin: -50px 159px 68px 159px;
    width: 100%;
    height: 100%;
    width: 1.5px;
    align-self: stretch;
`;

const TotalFrame = styled.div`
    width: 285px;
    border: 1px solid #E0E0E0;
    padding: 27px 33px;
    border-radius: 25px;

`;

const NewFrame = styled.div`
    width: 247px;
    height: 675px;

    
`;

const Select = styled.div`
    width: 100%;
    // height: 622px;
`;

const NewInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Title = styled.span`
    color: #1A1A1A;
    font-size: 24px;
    font-family: Pretendard;
    font-weight: 400;
    width: 100%;
    margin-bottom: 9px;
`;

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    left-margin: 36px;
    
`;

const Label = styled.p`
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 400;
    color: #6C6C6C;
    margin: 0;
`;

const Input = styled.input`
    width: 211px;
    height: 30px;
    border: 1px #6C6C6C solid;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 12px;
    font-family: Pretendard;
    box-sizing: border-box;
    outline: none;
    margin-bottom:15px;

`;


const ToggleGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom:15px;
    
`;

const ToggleButton = styled.div`
    flex: 1; 
    padding: 6px 20px;
    border-radius: 5px;
    font-size: 12px;
    font-family: Pretendard;
    cursor: pointer;
    background: ${props => props.selected ? "#DFDFDF" : "#F2F2F2"};
    color: #333333;
    text-align: center;
    white-space: nowrap;
`;

const SubmitButton = styled.div`
    width: 100%;
    height: 40px;
    background: #F0F0F0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-family: Pretendard;
    cursor: pointer;
`;

export default function ProductAdd(){
    const [productName, setProductName] = useState("");
    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [selectedType, setSelectedType] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);



    return(
        <Container>
            <ImageInsert>
                <UploadIcon src = {Upload}/>
            </ImageInsert>

            <LineImage src = {Line}/>
            <TotalFrame>
                <NewFrame>
                    {/* <Title>상품 정보 등록</Title> */}

                    <NewInfo>
                        <Title>상품 정보 등록</Title>
                        <Select>
                            <FieldGroup>
                                <Label>상품명</Label>
                                <Input placeholder="상품명" />
                            </FieldGroup>

                            <FieldGroup>
                                <Label>평점</Label>
                                <Input placeholder="평점" />
                            </FieldGroup>

                            <FieldGroup>
                                <Label>리뷰수</Label>
                                <Input placeholder="리뷰수" />
                            </FieldGroup>

                            <FieldGroup>
                                <Label>가격</Label>
                                <Input placeholder="가격" />
                            </FieldGroup>

                            <FieldGroup>
                                <Label>사이즈</Label>
                                <Input placeholder="사이즈" />
                            </FieldGroup>

                            <FieldGroup>
                                <Label>종류</Label>
                                <ToggleGroup>
                                    {["의류", "신발"].map((type) =>
                                        <ToggleButton
                                            key={type}
                                            selected={selectedType === type}
                                            onClick={() => setSelectedType(type)}
                                        >
                                            {type}
                                        </ToggleButton>
                                    )}
                                </ToggleGroup>
                            </FieldGroup>

                            <FieldGroup>
                                <Label>성별</Label>
                                <ToggleGroup>
                                    {["남성", "여성", "남녀공용"].map((gender) => (
                                        <ToggleButton
                                            key={gender}
                                            selected={selectedGender === gender}
                                            onClick={() => setSelectedGender(gender)}
                                        >
                                            {gender}
                                        </ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>

                            <FieldGroup>
                                <Label>색상</Label>
                                <ToggleGroup>
                                    {["red", "pink", "blue", "gray", "black", "denim", "multi", "rainbow", "holographic"].map((color) => (
                                        <ToggleButton
                                            key={color}
                                            selected={selectedColor === color}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            {color}
                                        </ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>

                            <SubmitButton>상품 등록 완료</SubmitButton>
                        </Select>
                    </NewInfo>
                </NewFrame>
            </TotalFrame>

        </Container>
    );
}



