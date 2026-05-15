// import Line from "../../../../src/assets/images/Line 1.png";
// import Upload from "../../../../src/assets/icons/upload_Icon.png";   // 👈 추가 (ProductAdd에서 가져옴)
// import { useEffect, useRef, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";           // 👈 추가
// import { getItem, updateItem } from "../../../api/shop";             // 👈 추가 (경로 확인!)
// import {
//     Container, ImageInsert, PreviewImage, LineImage, TotalFrame, NewFrame, Select, NewInfo,
//     Title, FieldGroup, Label, Input, ToggleGroup, ColorGroup, ToggleButton, SubmitButton
// } from "./ProductFormStyles.jsx";

// // 한국어 ↔ 영어 매핑
// const TYPE_MAP = { "의류": "clothes", "신발": "shoes" };
// const GENDER_MAP = { "남성": "male", "여성": "female", "남녀공용": "unisex" };
// const REVERSE_TYPE_MAP = { "clothes": "의류", "shoes": "신발" };
// const REVERSE_GENDER_MAP = { "male": "남성", "female": "여성", "unisex": "남녀공용" };

// export default function ProductEdit() {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [productName, setProductName] = useState("");
//     const [rating, setRating] = useState("");
//     const [reviews, setReviews] = useState("");
//     const [price, setPrice] = useState("");
//     const [size, setSize] = useState("");
//     const [previewImage, setPreviewImage] = useState(null);
//     const [selectedType, setSelectedType] = useState(null);
//     const [selectedGender, setSelectedGender] = useState(null);
//     const [selectedColor, setSelectedColor] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const fileInputRef = useRef(null);

//     // 🆕 페이지 들어오면 기존 상품 데이터 받아오기
//     useEffect(() => {
//         let cancelled = false;
//         (async () => {
//             try {
//                 const data = await getItem("clothes", id);
//                 if (cancelled) return;

//                 setProductName(data.name || "");
//                 setRating(data.rating ?? "");
//                 setReviews(data.reviews ?? "");
//                 setPrice(data.price ?? "");
//                 setSize(data.size || "");
//                 setPreviewImage(data.image || null);
//                 // 영어 → 한국어 변환
//                 setSelectedType(REVERSE_TYPE_MAP[data.type] || "의류");
//                 setSelectedGender(REVERSE_GENDER_MAP[data.gender] || null);
//                 setSelectedColor(data.color || null);
//             } catch (err) {
//                 console.error(err);
//                 alert("상품 정보를 불러올 수 없어요");
//             } finally {
//                 if (!cancelled) setLoading(false);
//             }
//         })();
//         return () => { cancelled = true; };
//     }, [id]);

//     // 🆕 이미지 클릭하면 파일 선택 창 열기
//     const handleImageClick = () => {
//         fileInputRef.current?.click();
//     };

//     // 🆕 새 이미지 선택 시 base64로 변환
//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPreviewImage(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     // 🆕 수정 완료 버튼 → PUT API
//     const handleSubmit = async () => {
//         if (!previewImage) { alert("이미지가 필요해요!"); return; }
//         if (!productName) { alert("상품명을 입력하세요!"); return; }
//         if (!price) { alert("가격을 입력하세요!"); return; }
//         if (!selectedType) { alert("종류를 선택하세요!"); return; }
//         if (!selectedGender) { alert("성별을 선택하세요!"); return; }
//         if (!selectedColor) { alert("색상을 선택하세요!"); return; }

//         const body = {
//             image: previewImage,
//             name: productName,
//             rating: Number(rating) || 0,
//             reviews: Number(reviews) || 0,
//             price: Number(price),
//             soldout: false,
//             color: selectedColor,
//             size: size,
//             gender: GENDER_MAP[selectedGender],
//             type: TYPE_MAP[selectedType],
//         };

//         try {
//             await updateItem("clothes", id, body);   // PUT /clothes/{id}
//             alert("수정되었습니다!");
//             navigate(`/item/${id}`);                  // 상세 페이지로 돌아가기
//         } catch (err) {
//             console.error(err);
//             alert("수정 실패: " + (err.response?.data?.message || err.message));
//         }
//     };

//     if (loading) return <div>로딩 중...</div>;

//     return (
//         <Container>
//             <ImageInsert onClick={handleImageClick} style={{ cursor: "pointer" }}>
//                 {previewImage ? (
//                     <PreviewImage src={previewImage} alt={productName} />
//                 ) : (
//                     <img src={Upload} alt="업로드" style={{ width: 49, height: 55 }} />
//                 )}
//             </ImageInsert>

//             {/* 숨겨진 파일 input */}
//             <input
//                 type="file"
//                 accept="image/*"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//                 style={{ display: "none" }}
//             />

//             <LineImage src={Line} />

//             <TotalFrame>
//                 <NewFrame>
//                     <NewInfo>
//                         <Title>상품 정보 수정</Title>
//                         <Select>
//                             <FieldGroup>
//                                 <Label>상품명</Label>
//                                 <Input value={productName} onChange={(e) => setProductName(e.target.value)} />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>평점</Label>
//                                 <Input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>리뷰수</Label>
//                                 <Input type="number" value={reviews} onChange={(e) => setReviews(e.target.value)} />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>가격</Label>
//                                 <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>사이즈</Label>
//                                 <Input placeholder="사이즈" value={size} onChange={(e) => setSize(e.target.value)} />
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>종류</Label>
//                                 <ToggleGroup>
//                                     {["의류", "신발"].map((type) => (
//                                         <ToggleButton
//                                             key={type}
//                                             $selected={selectedType === type}
//                                             onClick={() => setSelectedType(type)}
//                                         >
//                                             {type}
//                                         </ToggleButton>
//                                     ))}
//                                 </ToggleGroup>
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>성별</Label>
//                                 <ToggleGroup>
//                                     {["남성", "여성", "남녀공용"].map((gender) => (
//                                         <ToggleButton
//                                             key={gender}
//                                             $selected={selectedGender === gender}
//                                             onClick={() => setSelectedGender(gender)}
//                                         >
//                                             {gender}
//                                         </ToggleButton>
//                                     ))}
//                                 </ToggleGroup>
//                             </FieldGroup>

//                             <FieldGroup>
//                                 <Label>색상</Label>
//                                 <ColorGroup>
//                                     {["red", "pink", "blue", "gray", "black", "denim", "multi", "rainbow", "holographic"].map((color) => (
//                                         <ToggleButton
//                                             key={color}
//                                             $selected={selectedColor === color}
//                                             onClick={() => setSelectedColor(color)}
//                                         >
//                                             {color}
//                                         </ToggleButton>
//                                     ))}
//                                 </ColorGroup>
//                             </FieldGroup>

//                             {/* 👇 onClick 연결 */}
//                             <SubmitButton onClick={handleSubmit}>상품 수정 완료</SubmitButton>
//                         </Select>
//                     </NewInfo>
//                 </NewFrame>
//             </TotalFrame>
//         </Container>
//     );
// }

import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItem, updateItem } from "../../../api/shop";
import Line from "../../../../src/assets/images/Line 1.png";
import Upload from "../../../../src/assets/icons/upload_Icon.png";
import {
    Container, ImageInsert, PreviewImage, LineImage, TotalFrame, NewFrame, Select, NewInfo,
    Title, FieldGroup, Label, Input, ToggleGroup, ColorGroup, ToggleButton, SubmitButton
} from "./ProductFormStyles.jsx";

const TYPE_MAP = { "의류": "clothes", "신발": "shoes" };
const GENDER_MAP = { "남성": "male", "여성": "female", "남녀공용": "unisex" };
const REVERSE_TYPE_MAP = { "clothes": "의류", "shoes": "신발" };
const REVERSE_GENDER_MAP = { "male": "남성", "female": "여성", "unisex": "남녀공용" };

export default function ProductEdit() {
    const { type, id } = useParams();
    console.log("ProductEdit params:", { type, id });
    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [previewImage, setPreviewImage] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [loading, setLoading] = useState(true);

    const fileInputRef = useRef(null);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const data = await getItem(type, id);
                if (cancelled) return;

                setProductName(data.name || "");
                setRating(data.rating ?? "");
                setReviews(data.reviews ?? "");
                setPrice(data.price ?? "");
                setSize(data.size || "");
                setPreviewImage(data.image || null);
                setSelectedType(REVERSE_TYPE_MAP[type] || "의류");
                setSelectedGender(REVERSE_GENDER_MAP[data.gender] || null);
                setSelectedColor(data.color || null);
            } catch (err) {
                console.error(err);
                alert("상품 정보를 불러올 수 없어요");
            } finally {
                if (!cancelled) setLoading(false);
            }
        })();
        return () => { cancelled = true; };
    }, [type, id]);

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
        if (!previewImage) { alert("이미지가 필요해요!"); return; }
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
            await updateItem(type, id, body);
            alert("수정되었습니다!");
            navigate(`/item/${type}/${id}`);
        } catch (err) {
            console.error(err);
            alert("수정 실패: " + (err.response?.data?.message || err.message));
        }
    };

    if (loading) return <div>로딩 중...</div>;

    return (
        <Container>
            <ImageInsert onClick={handleImageClick} style={{ cursor: "pointer" }}>
                {previewImage ? <PreviewImage src={previewImage} alt={productName} /> : <img src={Upload} alt="업로드" style={{ width: 49, height: 55 }} />}
            </ImageInsert>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
            <LineImage src={Line} />
            <TotalFrame>
                <NewFrame>
                    <NewInfo>
                        <Title>상품 정보 수정</Title>
                        <Select>
                            <FieldGroup>
                                <Label>상품명</Label>
                                <Input value={productName} onChange={(e) => setProductName(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>평점</Label>
                                <Input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>리뷰수</Label>
                                <Input type="number" value={reviews} onChange={(e) => setReviews(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>가격</Label>
                                <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>사이즈</Label>
                                <Input value={size} onChange={(e) => setSize(e.target.value)} />
                            </FieldGroup>
                            <FieldGroup>
                                <Label>종류</Label>
                                <ToggleGroup>
                                    {["의류", "신발"].map((t) => (
                                        <ToggleButton key={t} $selected={selectedType === t} onClick={() => setSelectedType(t)}>{t}</ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>
                            <FieldGroup>
                                <Label>성별</Label>
                                <ToggleGroup>
                                    {["남성", "여성", "남녀공용"].map((g) => (
                                        <ToggleButton key={g} $selected={selectedGender === g} onClick={() => setSelectedGender(g)}>{g}</ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>
                            <FieldGroup>
                                <Label>색상</Label>
                                <ColorGroup>
                                    {["red", "pink", "blue", "gray", "black", "denim", "multi", "rainbow", "holographic"].map((c) => (
                                        <ToggleButton key={c} $selected={selectedColor === c} onClick={() => setSelectedColor(c)}>{c}</ToggleButton>
                                    ))}
                                </ColorGroup>
                            </FieldGroup>
                            <SubmitButton onClick={handleSubmit}>상품 수정 완료</SubmitButton>
                        </Select>
                    </NewInfo>
                </NewFrame>
            </TotalFrame>
        </Container>
    );
}