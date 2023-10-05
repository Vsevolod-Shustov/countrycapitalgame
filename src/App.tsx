import { useState } from 'react'
import './App.css'

type ButtonState = "DEFAULT" | "SELECTED" | "WRONG";
type Option = {
  value: string,
  state: ButtonState
}

function CountryCapitalGame({ data }: { data: Record<string, string> }) {
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const [options, setOptions] = useState<Option[]>(
      [...countries, ...capitals]
      .sort(() => Math.random() - 0.5)
      .map(value => ({ value, state: "DEFAULT" }))
    )

  return (
    <>
      {options.map(option => (
        <button
          className={option.state === "SELECTED" ? 'selected' : ""}
          onClick={() => (
            setOptions(
              options.map(opt => {
                return opt === option
                  ? {
                    ...opt,
                    state: "SELECTED"
                  }
                  : opt
              })
            )
          )}
        >
          {option.value}
        </button>
      ))}
    </>
  )
}

function App() {
  return (
    <>
      <CountryCapitalGame data={{ "Germany": "Berlin", "Azerbaijan": "Baku" }}></CountryCapitalGame>
    </>
  )
}

export default App
