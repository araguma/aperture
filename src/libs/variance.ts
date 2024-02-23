import { cx as _cx } from 'class-variance-authority'
import { ClassValue } from 'class-variance-authority/types'
import { twMerge } from 'tailwind-merge'

export default function cx(...inputs: ClassValue[]) {
    return twMerge(_cx(inputs))
}
