import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import style from "./index.module.css";
import SneakersCard from "../SneakersCard";
import { Sneakers } from "../../types";
import "nouislider/distribute/nouislider.css";
import { changeLimit } from "../../Redux/dataSlice";
import CatalogFilter from "./CatalogFilter";
import { useIsMobile } from "../../hooks/useMobile";
import filterIcon from '../../assets/icon/filter-filled.png'

const Catalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<RootState, Sneakers[]>(
    (state) => state.sneakers.data
  );

  const limit = useSelector<RootState, number>((state) => state.data.limit);

  const showModal = () => {
    const overlayFilter = document.getElementById(
      "overlayFilter"
    ) as HTMLDialogElement;
    if (overlayFilter) {
      overlayFilter.showModal();
    }
  };

  const isMobile = useIsMobile();

  return (
    <div id="catalog" className={`${style.catalog} ${style.container}`}>
      <h2>Каталог</h2>
      <div className={style.catalog__content}>
        {isMobile ? (
          <div>
            <button type="button" className={style.filter} onClick={showModal}>
              фильтр
              <img src={filterIcon} alt="" />
            </button>
            <dialog id="overlayFilter">
              <CatalogFilter />
            </dialog>
          </div>
        ) : (
          <CatalogFilter />
        )}
        <div className={style.sneakers}>
          {data.length ? (
            <div className={style.items_sneaker}>
            {data.filter((_, index) => index < limit)
              .map((item: Sneakers) => (
                <SneakersCard key={item.id} item={item} />
              ))}
          </div>
          ) : (<p>По вашему запросу товары не найдены</p>)}
          

          <button
            onClick={() => dispatch(changeLimit())}
            disabled={limit >= data.length}            
          >
            Показать еще
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;


