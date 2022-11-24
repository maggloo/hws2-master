import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: 'rgba(0, 204, 34, 1)',
                width: 200,
                '& .MuiSlider-thumb': {
                    backgroundColor: 'currentColor',
                    border: '5px solid white',
                    outline: 'solid 2px currentColor',
                    '&:before': {
                        display: 'none',
                    },
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
