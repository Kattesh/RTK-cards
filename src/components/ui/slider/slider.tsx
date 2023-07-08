import * as Slider from '@radix-ui/react-slider'

import { Typography } from '../typography'

import s from './slider.module.scss'

type SliderPropsType = {
  max: number
  min: number
  step: number
  rangeValue: number[]
  disabled?: boolean
}

export const SliderRange = ({ min, max, step, rangeValue }: SliderPropsType) => {
  const handleChange = () => {}

  return (
    <div className={s.container}>
      <div>
        <Typography variant={'body1'} className={s.value}>
          {rangeValue[0]}
        </Typography>
      </div>

      <Slider.Root
        className={s.root}
        defaultValue={rangeValue}
        max={max}
        min={min}
        step={step}
        onChange={handleChange}
      >
        <Slider.Track className={s.track}>
          <Slider.Range className={s.range} />
        </Slider.Track>
        <Slider.Thumb className={s.thumb} aria-label="range1" />
        <Slider.Thumb className={s.thumb} aria-label="range2" />
      </Slider.Root>
      <div>
        <Typography variant={'body1'} className={s.value}>
          {rangeValue[1]}
        </Typography>
      </div>
    </div>
  )
}
