import Filter from "../../components/common/filter/Filter";
import Images from "../../components/common/images/Imaes";
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