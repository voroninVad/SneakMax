import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import style from "./index.module.css";
import SneakersCard from "../SneakersCard";
import { Sneakers } from "../../types";
import "nouislider/distribute/nouislider.css";
import { changeLimit } from "../../Redux/dataSlice";
import CatalogFilter from "./CatalogFilter";
import { useIsMobile } from "../../hooks/useMobile";

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
    <div className={`${style.catalog} ${style.container}`}>
      <h2>Каталог</h2>
      <div className={style.catalog__content}>
        {isMobile ? (
          <div>
            <button type="button" onClick={showModal}>
              фильтр
            </button>
            <dialog id="overlayFilter">
              <CatalogFilter />
            </dialog>
          </div>
        ) : (
          <CatalogFilter />
        )}
        <div className={style.sneakers}>
          {/* {isLoading && data.length === 0 ? (
            <p>loading ...</p>
          ) : (
            
              {data.slice(0, countSneaker).map((item: Sneakers) => (
                <SneakersCard key={item.id} item={item} />
              ))}
            </div>
          )} */}

          <div className={style.items_sneaker}>
            {data
              .filter((_, index) => index < limit)
              .map((item: Sneakers) => (
                <SneakersCard key={item.id} item={item} />
              ))}
          </div>

          <button
            onClick={() => dispatch(changeLimit())}
            disabled={limit >= data.length}
          >
            Показать еще
          </button>
        </div>
        {/* {isError && <p>error</p>} */}
      </div>
    </div>
  );
};

export default Catalog;
