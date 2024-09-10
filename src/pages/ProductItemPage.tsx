import React from 'react';
import { PageNavigation } from 'components/PageNavigation/PageNavigation.tsx';
import { useAppSelector } from 'hooks/hooks.ts';
import { Suggestions } from 'components/Suggestions/Suggestions.tsx';
import ArrowLeft from 'assets/arrow-left-darkgrey.svg';
import { useNavigate } from 'react-router-dom';
import { ProductPhotos } from 'components/ProductInfo/ProductPhotos.tsx';
import { ProductColors } from 'components/ProductInfo/ProductColors.tsx';
import { ProductCapacity } from 'components/ProductInfo/ProductCapacity.tsx';
import { ProductPrice } from 'components/ProductInfo/ProductPrice.tsx';
import { AboutProduct } from '../components/ProductInfo/AboutProduct.tsx';
import ProductImage2 from 'assets/sliderPhoto/image2.png';
import ProductImage3 from 'assets/sliderPhoto/image3.png';
import ProductImage4 from 'assets/sliderPhoto/image4.png';

export const ProductItemPage: React.FC = () => {
  const product = useAppSelector((state) => state.phones[0]);
  const youMayAlsoLike = useAppSelector((state) => state.phones);
  const urls = [product.image, ProductImage2, ProductImage3, ProductImage4, ProductImage3];
  const navigation = useNavigate();

  return (
    <div className="px-[8px] py-[20px] md:px-[16px] lg:px-[40px] lg:py-[24px] xl:px-[152px] xl:pt-[24px] xl:pb-[80px] grid gap-[80px]">
      <div className="grid gap-[40px]">
        <PageNavigation />
        <div className="">
          <div className="pb-[16px] flex gap-[4px]">
            <img src={ArrowLeft} alt="arrow left" />
            <p
              className="small-text cursor-pointer text-Secondary hover:text-Primary "
              onClick={() => navigation(-1)}
            >
              Back
            </p>
          </div>
          <h1>{product.title}</h1>
        </div>
        <div className="grid lg:flex gap-[60px]">
          <ProductPhotos urls={urls} />
          <div className="grid w-full xl:w-[400px]">
            <p className="justify-self-end text-Icons small-text">ID: {product.id}</p>
            <ProductColors />
            <ProductCapacity />
            <ProductPrice product={product} />
          </div>
        </div>
      </div>
      <AboutProduct />
      <Suggestions phones={youMayAlsoLike} title="You may also like" />
    </div>
  );
};
