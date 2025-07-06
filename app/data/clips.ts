export interface AudioClip {
  id: string
  label: string
  file: string
  key?: string
}

export const clips: AudioClip[] = [
  { id: "ost-mie", label: "Ost Mie!", file: "/sounds/ost-mie-ha-wost-jir-bink.ogg", key: "1" },
  { id: "foar-skut-zette", label: "Foar Skut Zette", file: "/sounds/foar-skut-zette.ogg", key: "A" },
  { id: "resjearch", label: "Resjearch", file: "/sounds/resjearch.ogg", key: "S" },
  { id: "skijnheil", label: "Skijnheil", file: "/sounds/skijnheil.ogg", key: "D" },
  { id: "eeeeen", label: "Eeeeen", file: "/sounds/eeeeen.ogg", key: "F" },
]
