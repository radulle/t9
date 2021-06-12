import style from './suggestions.module.scss'

export interface SuggestionsProps {
  suggestions: string[]
  select: (val: string) => () => void
  max?: number
}

export const Suggestions = ({
  suggestions,
  select,
  max = 4,
}: SuggestionsProps) =>
  suggestions.length ? (
    <div className={style.suggestions}>
      {suggestions.slice(0, max).map((w) => (
        <div onClick={select(w)} key={w}>
          {w}
        </div>
      ))}
    </div>
  ) : null
