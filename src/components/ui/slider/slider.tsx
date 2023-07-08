import * as Slider from '@radix-ui/react-slider'

import { Typography } from '../typography'

import s from './slider.module.scss'

type SliderPropsType = {
  max: number
  min: number
  step: number
  onValueCommit: (values: [number, number]) => void
  rangeValue: number[]
  disabled?: boolean
  value: [number, number]
}

export const SliderRange = ({
  min,
  max,
  step,
  rangeValue,
  onValueCommit,
  value,
}: SliderPropsType) => {
  const onChange = () => {}

  return (
    <div className={s.container}>
      <div>
        <Typography variant={'body1'} className={s.value}>
          {min}
        </Typography>
      </div>

      <Slider.Root
        className={s.root}
        defaultValue={rangeValue}
        max={max}
        min={min}
        step={step}
        onValueCommit={onValueCommit}
        onValueChange={onChange}
        value={value}
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
