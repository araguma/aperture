import { VariantProps } from 'class-variance-authority'

import { ranks, suits, versions } from '@/data/aperture'

export type Optional<T, K extends keyof T> = Omit<T, K> & Pick<Partial<T>, K>

export type RequiredVariantsProps<
    T extends VariantPropsComponent<VariantProps<T>>,
    R extends keyof VariantProps<T>,
> = Omit<VariantProps<T>, R> & Required<Pick<VariantProps<T>, R>>
export type VariantPropsComponent<T> =
    T extends VariantProps<infer U> ? U : never

export type Version = (typeof versions)[number]
export type Rank = (typeof ranks)[number]
export type Suit = (typeof suits)[number]
