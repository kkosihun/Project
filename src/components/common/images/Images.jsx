import styled from "styled-components";
import IAB1Url from "../../../assets/images/IAB1_image.png"
import IAB2Url from "../../../assets/images/IAB2_image.png"
import AdidasUrl from "../../../assets/images/adidas_image.png"
import SupremeUrl from "../../../assets/images/supreme_image.png"
import ShoesUrl from "../../../assets/images/shoes_image.png"
import ItemCard from "./itemcard";

const products = [
    { id: 1, image: IAB1Url, name: "아이앱 스튜디오 25 후드 라이트 그레이", price: "145,000원", reviews: "1,561" },
    { id: 2, image: IAB2Url, name: "아이앱 스튜디오 25 후드 라이트 블루", price: "145,000원", reviews: "1,732" },
    { id: 3, image: AdidasUrl, name: "아디다스 블랙 저지 2016", price: "255,000원", reviews: "781" },
    { id: 4, image: SupremeUrl, name: "슈프림 후드집업 30 딥블루", price: "458,000원", reviews: "2,567" },
    { id: 5, image: ShoesUrl, name: "나이키 에어 그레이 하운드 25", price: "235,000원", reviews: "231" },
    { id: 6, image: IAB1Url, name: "아이앱 스튜디오 25 후드 라이트 그레이", price: "145,000원", reviews: "1,561" },
    { id: 7, image: IAB2Url, name: "아이앱 스튜디오 25 후드 라이트 블루", price: "145,000원", reviews: "1,732" },
    { id: 8, image: AdidasUrl, name: "아디다스 블랙 저지 2016", price: "255,000원", reviews: "781" },
    { id: 9, image: SupremeUrl, name: "슈프림 후드집업 30 딥블루", price: "458,000원", reviews: "2,567" },
    { id: 10, image: ShoesUrl, name: "나이키 에어 그레이 하운드 25", price: "235,000원", reviews: "231" },
];

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
    row-gap: 35px;
    padding: 0 153px;
    margin-top: 20px;
`;

export default function Images() {
    return (
        <ProductGrid>
            {products.map((data) => (
                <ItemCard
                    key={data.id}
                    itemId={data.id}
                    image={data.image}
                    name={data.name}
                    price={data.price}
                    reviewConut={data.reviews}
                />
            ))}
        </ProductGrid>
    );
}