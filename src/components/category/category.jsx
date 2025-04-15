import { Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { categories } from '../../constants'
import { colors } from '../../constants/colors'

const Category = ({ selectedCategory, selectedCategoryHandler }) => {
    return (
        <Stack direction={'row'} sx={{ overflowX: 'scroll', padding: 2, gap: 1 }}>
            {categories.map((category) => (
                <button
                    key={category.name}
                    className='category-btn'
                    style={{ borderRadius: 0, background: category.name === selectedCategory ? colors.secondary : colors.primary, color: category.name === selectedCategory ? '#fff' : 'black', opacity: 1, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}
                    onClick={() => selectedCategoryHandler(category.name)}>
                    <span style={{ color: category.name === selectedCategory ? '#fff' : colors.secondary  }}>{category.icon}</span>
                    <span style={{ opacity: 1 }}>{category.name}</span>
                </button>
    ))
}
        </Stack >
    )
}
export default Category