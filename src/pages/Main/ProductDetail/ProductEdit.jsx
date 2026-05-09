import Line from "../../../../src/assets/images/Line 1.png";
import { useState } from "react";
import { useProduct } from "./ProductContext.jsx";
import {
    Container, ImageInsert, PreviewImage, LineImage, TotalFrame, NewFrame, Select, NewInfo,
    Title, FieldGroup, Label, Input, ToggleGroup, ColorGroup, ToggleButton, SubmitButton
} from "./ProductFormStyles.jsx";

export default function ProductEdit() {
    const { selectedProduct } = useProduct();

    const [productName, setProductName] = useState(selectedProduct?.name || "");
    const [rating, setRating] = useState("4.7");
    const [reviews, setReviews] = useState(selectedProduct?.reviews || "");
    const [price, setPrice] = useState(selectedProduct?.price || "");
    const [size, setSize] = useState("");
    const [selectedType, setSelectedType] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    if (!selectedProduct) return <div>상품 정보를 찾을 수 없어요.</div>;

    return (
        <Container>
            <ImageInsert>
                <PreviewImage src={selectedProduct.image} alt={selectedProduct.name} />
            </ImageInsert>

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
                                <Input placeholder="사이즈" value={size} onChange={(e) => setSize(e.target.value)} />
                            </FieldGroup>

                            <FieldGroup>
                                <Label>종류</Label>
                                <ToggleGroup>
                                    {["의류", "신발"].map((type) => (
                                        <ToggleButton
                                            key={type}
                                            $selected={selectedType === type}
                                            onClick={() => setSelectedType(type)}
                                        >
                                            {type}
                                        </ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>

                            <FieldGroup>
                                <Label>성별</Label>
                                <ToggleGroup>
                                    {["남성", "여성", "남녀공용"].map((gender) => (
                                        <ToggleButton
                                            key={gender}
                                            $selected={selectedGender === gender}
                                            onClick={() => setSelectedGender(gender)}
                                        >
                                            {gender}
                                        </ToggleButton>
                                    ))}
                                </ToggleGroup>
                            </FieldGroup>

                            <FieldGroup>
                                <Label>색상</Label>
                                <ColorGroup>
                                    {["red", "pink", "blue", "gray", "black", "denim", "multi", "rainbow", "holographic"].map((color) => (
                                        <ToggleButton
                                            key={color}
                                            $selected={selectedColor === color}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            {color}
                                        </ToggleButton>
                                    ))}
                                </ColorGroup>
                            </FieldGroup>

                            <SubmitButton>상품 수정 완료</SubmitButton>
                        </Select>
                    </NewInfo>
                </NewFrame>
            </TotalFrame>
        </Container>
    );
}