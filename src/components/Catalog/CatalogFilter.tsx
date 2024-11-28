import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filter } from "../../types";
import { fetchSneakers } from "../../Redux/sneakers/sneakersSlice";
import Slider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { getBaseLimit } from "../../Redux/dataSlice";

const sizesData = [35, 36, 37, 38, 39, 40, 41, 42, 43];
const genders = [
  {
    value: "Мужской",
    label: "male",
  },
  {
    value: "Женский",
    label: "female",
  },
];

const CatalogFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [filterGender, setFilterGender] = useState<string>("");
  const [filterPrice, setFilterPrice] = useState<number[]>([]);
  const limit = useSelector<RootState, number>((state) => state.data.limit);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const { register, handleSubmit, setValue } = useForm<Filter>({
    // Устанавливаем начальные значения для полей формы.
    defaultValues: {
      minPrice: 5599,
      maxPrice: 25999,
      gender: "",
      sizes: [],
    },
  });
  useEffect(() => {
    dispatch(
      fetchSneakers({
        priceFrom: 5599,
        priceTo: 25999,
        gender: filterGender,
        sizes: [],
      })
    );
    setFilterPrice([5599, 25999]);
  }, [dispatch, limit]);

  const handleSizeChange = (size: number) => {
    console.log(selectedSizes);
    setSelectedSizes((prevSelectedSizes) => {
      const newSizes = prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size];
      setValue("sizes", newSizes);
      return newSizes;
    });
  };

  const onSubmit: SubmitHandler<Filter> = (data) => {
    setFilterGender(data.gender);
    dispatch(
      fetchSneakers({
        priceFrom: data.minPrice,
        priceTo: data.maxPrice,
        gender: data.gender,
        sizes: data.sizes,
      })
    );
    setFilterPrice([data.minPrice, data.maxPrice]);
    closeModal();
  };

  const closeModal = () => {
    const overlayFilter = document.getElementById(
      "overlayFilter"
    ) as HTMLDialogElement;
    if (overlayFilter) {
      overlayFilter.close();
    }
  };
  return (
    <form
      className={style.selection}
      method="dialog"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>Подбор по параметрам</h3>
      <div className={style.price}>
        <span>Цена, руб</span>
        <div className={style.input_price}>
          <input
            type="number"
            className="catalog-price__input"
            value={filterPrice[0]}
            {...register("minPrice")}
          />
          <input
            type="number"
            value={filterPrice[1]}
            className="catalog-price__input"
            {...register("maxPrice")}
          />
        </div>
        <Slider
          className={"slider"}
          range={{ min: 5599, max: 25999 }}
          start={[filterPrice[0], filterPrice[1]]}
          orientation="horizontal"
          connect
          step={1}
          onChange={([start, end]) => {
            setValue("minPrice", Math.round(start));
            setValue("maxPrice", Math.round(end));
          }}
        />
      </div>
      <div className={style.gender}>
        <h4>Пол</h4>
        <div className={style.filter_gender}>
          {genders.map((gender) => (
            <div className={style.input_gender} key={gender.label}>
              <label htmlFor={gender.label}>
                <input
                  className={style.input}
                  type="radio"
                  id={gender.label}
                  name="gender"
                  onChange={() => setValue("gender", gender.value)}
                />
                {gender.value}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className={style.size}>
        <span>Размер</span>
        <ul className={style.filter_size}>
          {sizesData.map((size) => (
            <li key={size}>
              <input
                type="checkbox"
                id={size.toString()}
                name="sizes"
                onChange={() => handleSizeChange(size)}
              />
              <label htmlFor={size.toString()}>{size.toString()}</label>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={style.apply_btn}
        type="submit"
        onClick={() => dispatch(getBaseLimit())}
      >
        Применить
      </button>
      <button
        type="reset"
        className={style.reset_btn}
        onClick={() =>
          onSubmit({
            minPrice: 5599,
            maxPrice: 25999,
            gender: "",
            sizes: sizesData,
          })
        }
      >
        сбросить
      </button>
      <button className={style.BtnCloseModal} onClick={closeModal}>
        &#10006;
      </button>
    </form>
  );
};

export default CatalogFilter;
