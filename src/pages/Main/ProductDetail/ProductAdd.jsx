import styled from "styled-components";
import Line from "../../../../src/assets/images/Line 1.png";
import Upload from "../../../../src/assets/icons/upload_Icon.png";
import { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";          // 👈 추가
import { createItem } from "../../../api/shop";          // 👈 추가 (경로 본인 구조에 맞게)

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
    cursor: pointer; /* ✅ 추가 */
    overflow: hidden; /* ✅ 추가 */
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

const PreviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`;

const HiddenInput = styled.input`
    display: none;
`;

// 👇 한국어 → 영어 매핑 테이블 (컴포넌트 밖에 두면 깔끔)
const TYPE_MAP = { "의류": "clothes", "신발": "shoes" };
const GENDER_MAP = { "남성": "male", "여성": "female", "남녀공용": "unisex" };

// export default function ProductAdd(){
//     const [productName, setProductName] = useState("");
//     const [rating, setRating] = useState("");
//     const [reviews, setReviews] = useState("");
//     const [price, setPrice] = useState("");
//     const [size, setSize] = useState("");
//     const [selectedType, setSelectedType] = useState(null);
//     const [selectedGender, setSelectedGender] = useState(null);
//     const [selectedColor, setSelectedColor] = useState(null);
//     const navigate = useNavigate();

//     const [previewImage, setPreviewImage] = useState(null);
//     const fileInputRef = useRef(null);

//     const handleImageClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPreviewImage(reader.result); // base64 데이터 URL
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//      // 👇 등록 버튼 클릭 시
//     const handleSubmit = async () => {
//     // 디버깅
//     console.log({
//         previewImage: previewImage ? "있음" : "없음",
//         productName,
//         price,
//         selectedType,
//         selectedGender,
//         selectedColor,
//     });

//     // 항목별 유효성 검사
//     if (!previewImage) { alert("이미지를 업로드하세요!"); return; }
//     if (!productName) { alert("상품명을 입력하세요!"); return; }
//     if (!price) { alert("가격을 입력하세요!"); return; }
//     if (!selectedType) { alert("종류를 선택하세요! (의류/신발)"); return; }
//     if (!selectedGender) { alert("성별을 선택하세요!"); return; }
//     if (!selectedColor) { alert("색상을 선택하세요!"); return; }

//     // 서버에 보낼 데이터
//     const body = {
//         image: previewImage,            // 👈 base64 문자열
//         name: productName,
//         rating: Number(rating) || 0,
//         reviews: Number(reviews) || 0,
//         price: Number(price),
//         soldout: false,
//         color: selectedColor,
//         size: size,
//         gender: GENDER_MAP[selectedGender],
//         type: TYPE_MAP[selectedType],
//     };

//     try {
//         await createItem(TYPE_MAP[selectedType], body);
//         alert("상품이 등록되었습니다!");
//         navigate("/");
//     } catch (err) {
//         console.error(err);
//         alert("등록 실패: " + (err.response?.data?.message || err.message));
//     }
// };


// return (
//         <Container>
//             <ImageInsert onClick={handleImageClick}>
//                 {previewImage ? (
//                     <PreviewImage src={previewImage} alt="미리보기" />
//                 ) : (<UploadIcon src={Upload} />)}
//             </ImageInsert>

//             <HiddenInput
//                 type="file"
//                 accept="image/*"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//             />

//             <LineImage src={Line} />
//             <TotalFrame>
//                 <NewFrame>
//                     <NewInfo>
//                         <Title>상품 정보 등록</Title>
//                         <Select>

//                             <FieldGroup>
//                                 <Label>상품명</Label>
//                                 <Input
//                                     placeholder="상품명"
//                                     value={productName}
//                                     onChange={(e) => setProductName(e.target.value)}
//                                 />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>평점</Label>
//                                 <Input
//                                     placeholder="평점"
//                                     value={rating}
//                                     onChange={(e) => setRating(e.target.value)}
//                                 />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>리뷰수</Label>
//                                 <Input
//                                     placeholder="리뷰수"
//                                     value={reviews}
//                                     onChange={(e) => setReviews(e.target.value)}
//                                 />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>가격</Label>
//                                 <Input
//                                     placeholder="가격"
//                                     value={price}
//                                     onChange={(e) => setPrice(e.target.value)}
//                                 />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>사이즈</Label>
//                                 <Input
//                                     placeholder="사이즈"
//                                     value={size}
//                                     onChange={(e) => setSize(e.target.value)}
//                                 />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>종류</Label>
//                                 <ToggleGroup>
//                                     {["의류", "신발"].map((type) =>
//                                         <ToggleButton
//                                             key={type}
//                                             selected={selectedType === type}
//                                             onClick={() => setSelectedType(type)}
//                                         >
//                                             {type}
//                                         </ToggleButton>
//                                     )}
//                                 </ToggleGroup>
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>성별</Label>
//                                 <ToggleGroup>
//                                     {["남성", "여성", "남녀공용"].map((gender) => (
//                                         <ToggleButton
//                                             key={gender}
//                                             selected={selectedGender === gender}
//                                             onClick={() => setSelectedGender(gender)}
//                                         >
//                                             {gender}
//                                         </ToggleButton>
//                                     ))}
//                                 </ToggleGroup>
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>색상</Label>
//                                 <ToggleGroup>
//                                     {["red", "pink", "blue", "gray", "black", "denim", "multi", "rainbow", "holographic"].map((color) => (
//                                         <ToggleButton
//                                             key={color}
//                                             selected={selectedColor === color}
//                                             onClick={() => setSelectedColor(color)}
//                                         >
//                                             {color}
//                                         </ToggleButton>
//                                     ))}
//                                 </ToggleGroup>
//                             </FieldGroup>

//                             {/* 👇 onClick 연결 */}
//                             <SubmitButton onClick={handleSubmit}>
//                                 상품 등록 완료
//                             </SubmitButton>
//                         </Select>
//                     </NewInfo>
//                 </NewFrame>
//             </TotalFrame>
//         </Container>
//     );
// }
// const TYPE_MAP = { "의류": "clothes", "신발": "shoes" };
// const GENDER_MAP = { "남성": "male", "여성": "female", "남녀공용": "unisex" };

export default function ProductAdd() {
    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [selectedType, setSelectedType] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageClick = () => fileInputRef.current?.click();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        if (!previewImage) { alert("이미지를 업로드하세요!"); return; }
        if (!productName) { alert("상품명을 입력하세요!"); return; }
        if (!price) { alert("가격을 입력하세요!"); return; }
        if (!selectedType) { alert("종류를 선택하세요!"); return; }
        if (!selectedGender) { alert("성별을 선택하세요!"); return; }
        if (!selectedColor) { alert("색상을 선택하세요!"); return; }

        const body = {
            image: previewImage,
            name: productName,
            rating: Number(rating) || 0,
            reviews: Number(reviews) || 0,
            price: Number(price),
            soldout: false,
            color: selectedColor,
            size: size,
            gender: GENDER_MAP[selectedGender],
            type: TYPE_MAP[selectedType],
        };

        try {
            await createItem(TYPE_MAP[selectedType], body);
            alert("상품이 등록되었습니다!");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("등록 실패: " + (err.response?.data?.message || err.message));
        }
    };

    return (
        <Container>
            <ImageInsert onClick={handleImageClick}>
                {previewImage ? <PreviewImage src={previewImage} alt="미리보기" /> : <UploadIcon src={Upload} />}
            </ImageInsert>
            <HiddenInput type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
            <LineImage src={Line} />
            <TotalFrame>
                <NewFrame>
                    <NewInfo>
                        <Title>상품 정보 등록</Title>
                        <Select>
                            <FieldGroup>
                                <Label>상품명</Label>
                                <Input value={productName} onChange={(e) => setProductName(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>평점</Label>
                                <Input value={rating} onChange={(e) => setRating(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>리뷰수</Label>
                                <Input value={reviews} onChange={(e) => setReviews(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>가격</Label>
                                <Input value={price} onChange={(e) => setPrice(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>사이즈</Label>
                                <Input value={size} onChange={(e) => setSize(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>종류</Label>
                                <ToggleGroup>
                                    {["의류", "신발"].map((t) => (
                                        <ToggleButton key={t} selected={selectedType === t} onClick={() => setSelectedType(t)}>{t}</ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>
                            <FieldGroup>
                                <Label>성별</Label>
                                <ToggleGroup>
                                    {["남성", "여성", "남녀공용"].map((g) => (
                                        <ToggleButton key={g} selected={selectedGender === g} onClick={() => setSelectedGender(g)}>{g}</ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>
                            <FieldGroup>
                                <Label>색상</Label>
                                <ToggleGroup>
                                    {["red", "pink", "blue", "gray", "black", "denim", "multi", "rainbow", "holographic"].map((c) => (
                                        <ToggleButton key={c} selected={selectedColor === c} onClick={() => setSelectedColor(c)}>{c}</ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>
                            <SubmitButton onClick={handleSubmit}>상품 등록 완료</SubmitButton>
                        </Select>
                    </NewInfo>
                </NewFrame>
            </TotalFrame>
        </Container>
    );
}


