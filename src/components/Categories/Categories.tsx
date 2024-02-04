import React from 'react';
import { Link } from 'react-router-dom';
import Phones from 'assets/phones.png';
import Tablets from 'assets/tablets.png';
import Accessories from 'assets/accessories.png';

type Category = {
  name: string;
  itemsQuantity: number;
  img: string;
  url: string;
};

const categories: Category[] = [
  {
    name: 'Mobile phones',
    itemsQuantity: 95,
    img: Phones,
    url: '/phones',
  },
  {
    name: 'Tablets',
    itemsQuantity: 24,
    img: Tablets,
    url: '/tablets',
  },
  {
    name: 'Accessories',
    itemsQuantity: 100,
    img: Accessories,
    url: '/accessories',
  },
];

export const Categories: React.FC = () => {
  return (
    <div className="grid justify-items-center gap-[24px]">
      <h1 className="justify-self-start text-[30px] sm:text-[32px] text-Primary">
        Shop by category
      </h1>
      <div className="sm:flex sm:gap-[16px]">
        {categories.map((category: Category) => (
          <div className="pb-[24px]">
            <div className="sm:pb-[24px]">
              <img src={category.img} alt="category" />
            </div>
            <h3 className="sm:pb-[4px] text-Primary hover:text-Secondary">
              <Link to={category.url}>{category.name}</Link>
            </h3>
            <p className="text-Secondary">
              <Link to={category.url}>{category.itemsQuantity} models</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
