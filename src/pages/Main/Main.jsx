import Filter from "../../components/common/filter/Filter";
import Images from "../../components/common/images/Images";
import Sorting from "../../components/common/sorting/Sort";

export default function Main() {
    return (
        <div>
            <Filter />
            <Sorting />
            <Images />
        </div>
    );
}