'use client';

import React from 'react';
import classes from './index.module.scss';
import Categories from '../../../_components/Categories';
import { useFilter } from '../../../_providers/Filter';
import { Category } from '../../../../payload/payload-types';
import { Checkbox } from '../../../_components/Checkbox';
import { RadioButton } from '../../../_components/RadioButton';

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter();

  const handleCategories = (categoryId: string) => {

    // Update category filters
    const updatedFilters = categoryFilters.includes(categoryId)
      ? categoryFilters.filter((id) => id !== categoryId)
      : [...categoryFilters, categoryId];
    setCategoryFilters(updatedFilters);
  };

  const handleSort = (sortValue: string) => {
    // Update sort value
    setSort(sortValue);
  };

   


  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map((category) => {
            const isSelected = categoryFilters.includes(category.id);

            return (
              <Checkbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            );
          })}
        </div>
        <hr className={classes.hr} />
        <h6 className={classes.title}>Sort By</h6>
        <div className={classes.categories}>
          <RadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
          <RadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            onRadioChange={handleSort}
            groupName="sort"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
